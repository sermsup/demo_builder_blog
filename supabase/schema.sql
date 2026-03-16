-- ============================================================
-- Builder Foundation: Database Schema for Supabase
-- Generated: 2026-03-16
-- ============================================================
-- HOW TO IMPORT:
--   1. Go to your Supabase project dashboard
--   2. Navigate to "SQL Editor" in the left sidebar
--   3. Click "New query"
--   4. Paste the entire content of this file
--   5. Click "Run" (or press Ctrl+Enter)
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- SECTION 1: BASE/REFERENCE TABLES
-- ============================================================

-- 1. Categories
CREATE TABLE IF NOT EXISTS categories (
  id    SERIAL PRIMARY KEY,
  name  TEXT UNIQUE NOT NULL   -- e.g. 'Design', 'AI', 'Marketing'
);

INSERT INTO categories (name) VALUES
  ('AI'),
  ('Design'),
  ('Marketing'),
  ('Development'),
  ('Data Science')
ON CONFLICT (name) DO NOTHING;

-- 2. Instructors
CREATE TABLE IF NOT EXISTS instructors (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  avatar_url  TEXT,
  bio         TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- SECTION 2: USER PROFILES
-- (Extends Supabase auth.users, auto-created on Google Login)
-- ============================================================

CREATE TABLE IF NOT EXISTS profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name   TEXT,
  avatar_url  TEXT,
  email       TEXT UNIQUE NOT NULL,
  role        TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on user signup (Google Login)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.email
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Attach the trigger to auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ============================================================
-- SECTION 3: COURSES & CONTENT
-- ============================================================

-- 3. Courses
CREATE TABLE IF NOT EXISTS courses (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  instructor_id   UUID REFERENCES instructors(id) ON DELETE SET NULL,
  category_id     INT REFERENCES categories(id) ON DELETE SET NULL,
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,       -- used in URL: /courses/[slug]
  description     TEXT,
  thumbnail_url   TEXT,
  price           NUMERIC(10,2) DEFAULT 0 CHECK (price >= 0),
  is_published    BOOLEAN DEFAULT FALSE,
  badge           TEXT,                       -- 'NEW' | 'POPULAR' | 'Coming Soon'
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Modules (Chapters inside a Course)
CREATE TABLE IF NOT EXISTS modules (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id   UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  sort_order  INT NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Lessons (YouTube Video Lessons)
CREATE TABLE IF NOT EXISTS lessons (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id         UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  title             TEXT NOT NULL,
  youtube_video_id  TEXT,           -- YouTube Video ID e.g. 'dQw4w9WgXcQ'
  duration_seconds  INT DEFAULT 0,
  sort_order        INT NOT NULL DEFAULT 0,
  is_preview        BOOLEAN DEFAULT FALSE,  -- Free preview lesson
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- SECTION 4: ENROLLMENTS & PROGRESS
-- ============================================================

-- 6. Enrollments
CREATE TABLE IF NOT EXISTS enrollments (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  course_id    UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- 7. Lesson Progress
CREATE TABLE IF NOT EXISTS lesson_progress (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id       UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  is_completed    BOOLEAN DEFAULT FALSE,
  watched_seconds INT DEFAULT 0,
  updated_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- ============================================================
-- SECTION 5: QUIZZES
-- ============================================================

-- 8. Quizzes
CREATE TABLE IF NOT EXISTS quizzes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id   UUID NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  pass_score  INT DEFAULT 70 CHECK (pass_score BETWEEN 0 AND 100)
);

-- 9. Quiz Questions
CREATE TABLE IF NOT EXISTS quiz_questions (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id              UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  question             TEXT NOT NULL,
  sort_order           INT DEFAULT 0,
  correct_option_index INT NOT NULL
);

-- 10. Quiz Options (Choices)
CREATE TABLE IF NOT EXISTS quiz_options (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id  UUID NOT NULL REFERENCES quiz_questions(id) ON DELETE CASCADE,
  option_text  TEXT NOT NULL,
  sort_order   INT DEFAULT 0
);

-- 11. Quiz Attempts (Results)
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_id      UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  score        INT NOT NULL CHECK (score BETWEEN 0 AND 100),
  is_passed    BOOLEAN NOT NULL,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- SECTION 6: CERTIFICATES
-- ============================================================

-- 12. Certificates
CREATE TABLE IF NOT EXISTS certificates (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  course_id   UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  issued_at   TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- ============================================================
-- SECTION 7: USEFUL VIEWS
-- ============================================================

-- View: Course progress percentage per user
CREATE OR REPLACE VIEW user_course_progress AS
SELECT
  e.user_id,
  e.course_id,
  c.title AS course_title,
  COUNT(l.id)                                                   AS total_lessons,
  COUNT(lp.id) FILTER (WHERE lp.is_completed = TRUE)           AS completed_lessons,
  COALESCE(
    ROUND(
      100.0
      * COUNT(lp.id) FILTER (WHERE lp.is_completed = TRUE)
      / NULLIF(COUNT(l.id), 0)
    ), 0
  )                                                             AS progress_percent
FROM enrollments e
JOIN courses c       ON c.id = e.course_id
JOIN modules m       ON m.course_id = e.course_id
JOIN lessons l       ON l.module_id = m.id
LEFT JOIN lesson_progress lp
  ON lp.lesson_id = l.id AND lp.user_id = e.user_id
GROUP BY e.user_id, e.course_id, c.title;

-- ============================================================
-- SECTION 8: ROW LEVEL SECURITY (RLS)
-- ============================================================

-- Enable RLS on all user-owned tables
ALTER TABLE profiles        ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments     ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts   ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates    ENABLE ROW LEVEL SECURITY;

-- profiles: Users can only read/write their own profile
CREATE POLICY "Users can view their own profile"   ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- courses: Published courses are public; only admin can write
CREATE POLICY "Anyone can view published courses" ON courses FOR SELECT USING (is_published = TRUE);

-- enrollments: Users see only their own enrollments
CREATE POLICY "Users view own enrollments"   ON enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users create own enrollment"  ON enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- lesson_progress: Users manage their own progress
CREATE POLICY "Users view own progress"    ON lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users upsert own progress"  ON lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own progress"  ON lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- quiz_attempts: Users manage their own attempts
CREATE POLICY "Users view own quiz attempts"   ON quiz_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own quiz attempts" ON quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- certificates: Users can view their own certificates
CREATE POLICY "Users view own certificates" ON certificates FOR SELECT USING (auth.uid() = user_id);

-- ============================================================
-- END OF SCHEMA
-- ============================================================

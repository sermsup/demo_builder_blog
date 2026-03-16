-- ============================================================
-- Builder Foundation: Mockup Data Seed (FIXED UUIDs)
-- Target Users: sermsup@gmail.com, klasnakub@gmail.com
-- ============================================================

-- 1. Insert Categories (if not exists)
INSERT INTO categories (name) VALUES
  ('Design'), ('AI'), ('Marketing'), ('Data Science')
ON CONFLICT (name) DO NOTHING;

-- 2. Insert Instructors
INSERT INTO instructors (id, name, avatar_url, bio) VALUES
  ('77777777-7777-7777-7777-777777777777', 'Sarah Jenkins', 'S', 'Senior UI/UX Designer with 10+ years of experience.'),
  ('88888888-8888-8888-8888-888888888888', 'Jane Doe', 'J', 'AI Product Lead specializing in full-stack AI integrations.')
ON CONFLICT (id) DO NOTHING;

-- 3. Insert Courses
INSERT INTO courses (id, instructor_id, category_id, title, slug, price, is_published, badge, thumbnail_url) VALUES
  ('01111111-1111-1111-1111-111111111111', '88888888-8888-8888-8888-888888888888', (SELECT id FROM categories WHERE name='Design'), 'Advanced UI/UX Design Mastery', 'advanced-ui-ux', 0, true, 'NEW', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBZpRU4QdwS843qiC85GxZ0VPwLxbsM4sNKLpuVyinEpTCPYutWlaT1hp-rJW3_QRbacmk-Ig5Vm25E9nFy2jFUBt0rypcc0T2vhYDwn14Q_o8ZfMT2kIaRXSGDHKjmQMdDMAMrAe-fx58LLgmaw-vEh9iot_LCLgua_82zh-gW4vx4kOvh4Bzs-4uVfJClqwgJFeR0MjqKtnVGo4_JUpeAuN0r-5l3M4_e0OwcRZ4bG54w2VIwEAqRqhI3PUBq_vGubTuvtD-w'),
  ('02222222-2222-2222-2222-222222222222', '77777777-7777-7777-7777-777777777777', (SELECT id FROM categories WHERE name='Marketing'), 'Digital Marketing Strategy', 'digital-marketing', 49, true, 'POPULAR', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026'),
  ('03333333-3333-3333-3333-333333333333', '88888888-8888-8888-8888-888888888888', (SELECT id FROM categories WHERE name='Data Science'), 'Data Science Foundations', 'data-science-basics', 0, true, 'CERTIFIED', 'https://images.unsplash.com/photo-1551288049-bb0c83c6e74a?auto=format&fit=crop&q=80&w=2070')
ON CONFLICT (id) DO NOTHING;

-- 4. Insert Modules & Lessons for Advanced UI/UX
INSERT INTO modules (id, course_id, title, sort_order) VALUES
  ('a1111111-1111-1111-1111-111111111111', '01111111-1111-1111-1111-111111111111', 'Module 1: Introduction to AI Building', 1),
  ('a2222222-2222-2222-2222-222222222222', '01111111-1111-1111-1111-111111111111', 'Module 2: Core Fundamentals', 2),
  ('a3333333-3333-3333-3333-333333333333', '01111111-1111-1111-1111-111111111111', 'Module 3: Shipping your First AI App', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, module_id, title, youtube_video_id, duration_seconds, sort_order) VALUES
  ('f1111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', 'Course Overview & Setup', 'dQw4w9WgXcQ', 504, 1),
  ('f1111112-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', 'What is an AI Product?', 'asdf123', 735, 2),
  ('f2222221-2222-2222-2222-222222222222', 'a2222222-2222-2222-2222-222222222222', 'Mastering Prompt Engineering', 'ghjk456', 1335, 1),
  ('f2222222-2222-2222-2222-222222222222', 'a2222222-2222-2222-2222-222222222222', 'Understanding LLMs Architecture', 'zxcv789', 2110, 2),
  ('f3333331-3333-3333-3333-333333333333', 'a3333333-3333-3333-3333-333333333333', 'Building the Frontend', 'play111', 1540, 1),
  ('f3333332-3333-3333-3333-333333333333', 'a3333333-3333-3333-3333-333333333333', 'Integrating the Backend API', 'api222', 1820, 2)
ON CONFLICT (id) DO NOTHING;

-- 5. Mock Users Enrollment Logic
DO $$
DECLARE
    user1_id UUID;
    user2_id UUID;
BEGIN
    -- Try to find users by email in auth.users
    SELECT id INTO user1_id FROM auth.users WHERE email = 'sermsup@gmail.com';
    SELECT id INTO user2_id FROM auth.users WHERE email = 'klasnakub@gmail.com';

    -- If found, populate their profiles and enrollment data
    IF user1_id IS NOT NULL THEN
        -- Profile
        UPDATE profiles SET full_name = 'Sermsup Builder', avatar_url = 'https://lh3.googleusercontent.com/a/ACT...profile' WHERE id = user1_id;
        
        -- Enrollments
        INSERT INTO enrollments (user_id, course_id) VALUES 
          (user1_id, '01111111-1111-1111-1111-111111111111'),
          (user1_id, '02222222-2222-2222-2222-222222222222'),
          (user1_id, '03333333-3333-3333-3333-333333333333')
        ON CONFLICT DO NOTHING;

        -- Progress (Advanced UI/UX 65%)
        INSERT INTO lesson_progress (user_id, lesson_id, is_completed) VALUES
          (user1_id, 'f1111111-1111-1111-1111-111111111111', true),
          (user1_id, 'f1111112-1111-1111-1111-111111111111', true),
          (user1_id, 'f2222221-2222-2222-2222-222222222222', true),
          (user1_id, 'f2222222-2222-2222-2222-222222222222', true)
        ON CONFLICT DO NOTHING;

        -- Certificates
        INSERT INTO certificates (user_id, course_id, issued_at) VALUES
          (user1_id, '03333333-3333-3333-3333-333333333333', '2024-10-24 10:00:00+00')
        ON CONFLICT DO NOTHING;
    END IF;

    IF user2_id IS NOT NULL THEN
        -- Profile
        UPDATE profiles SET full_name = 'Klasnakub Dev', avatar_url = '' WHERE id = user2_id;

        -- Enrollments
        INSERT INTO enrollments (user_id, course_id) VALUES 
          (user2_id, '01111111-1111-1111-1111-111111111111')
        ON CONFLICT DO NOTHING;
    END IF;

END $$;

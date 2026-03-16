# Version 1.2.0 - Supabase Database Integration

This version introduces the complete database schema and mockup data seed for Supabase.

## Features & Improvements

### 1. Database Infrastructure (Supabase)
- **Schema Design**: Comprehensive SQL schema with 12+ tables covering Users, Courses, Lessons, Quizzes, and Certificates.
- **YouTube Integration**: Lessons now track `youtube_video_id` for cost-effective video hosting.
- **Mockup Data Seed**: Ready-to-import `seed.sql` file with pre-populated courses, instructors, and initial progress for key users.
- **Row Level Security (RLS)**: Implemented security policies at the database level.
- **Automated Triggers**: Added PL/pgSQL function to sync Auth users with User Profiles automatically.

### 2. Previous Features (v1.1.0)
- Google Authentication integration.
- Dynamic & Protected Dashboard.
- Configurable Session Timeout (NEXTAUTH_SESSION_MAX_AGE).

## Deployment Status
- Schema and Seed files verified in Supabase SQL Editor.
- Ready for Backend API integration.
- Code pushed and tagged as `v1.2.0-supabase-db-design`.

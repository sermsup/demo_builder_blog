# Version 1.1.0 - Authentication & Dynamic Dashboard

This version completes the integration of Google Authentication and makes the user dashboard dynamic and protected.

## Features & Improvements

### 1. Google Authentication
- Fully integrated Google OAuth via `next-auth`.
- Context-aware Navbar: Shows "Login with Google" when out, and "User Name + Icon" when in.
- Minimal icon-based logout functionality.

### 2. Protected & Dynamic Dashboard
- Added `middleware.ts` to protect `/dashboard` route from unauthenticated access.
- Dashboard now displays the authenticated user's name and profile image dynamically from session data.

### 3. Configurable Session Security
- Added `NEXTAUTH_SESSION_MAX_AGE` in `.env.local` to control session timeout (Default: 30 minutes).

### 4. Technical Infrastructure
- Implemented `AuthProvider` for global session management.
- Standardized project structure for full-stack Next.js development.
- Added `backend_design_cfg.md` with the strategy for future Backend/DB scalability.

## Deployment Status
- Verified on local dev server.
- Successfully pushed to GitHub.
- Ready for Vercel production deployment.

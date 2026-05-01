# Nexora — Task Manager

> Manage tasks. Move at the speed of light.

A minimalist, full-stack team task management app built for modern product teams. Nexora brings clarity to your team's workflow with a distraction-free interface and powerful project collaboration features.

🔗 **Live Demo:** [https://nexora-task-manager-production.up.railway.app/](https://nexora-task-manager-production.up.railway.app/)

---

## Screenshots

### 🏠 Landing Page
![Landing Page](screenshot-landing.png)

### ✨ Feature Highlights
![Features](screenshot-features.png)

### 🔐 Authentication
| Login | Sign Up |
|-------|---------|
| ![Login](screenshot-login.png) | ![Sign Up](screenshot-signup.png) |

### 📊 Dashboard
![Dashboard](screenshot-dashboard.png)

### 🖥️ App Preview (Landing)
![App Preview](screenshot-landing-dashboard-preview.png)

### 🚀 Call to Action
![CTA](screenshot-cta.png)

---

## Features

- **Authentication** — JWT-based signup/login with 7-day token expiry and bcrypt password hashing
- **Projects** — Create, edit, and delete projects with custom colors; auto-added as project admin on creation
- **Tasks** — Full CRUD with title, description, status, priority (low / medium / high / critical), assignee, and due date
- **Auto-overdue detection** — Tasks past their due date are automatically marked `overdue` on fetch
- **Dashboard** — At-a-glance summary of todo / in-progress / done / overdue counts, recent activity, and per-project stats
- **Team collaboration** — Invite members to projects by email; project-level admin vs member roles
- **Role-based access control** — Global `admin` and `member` roles; project-level role enforcement on every route
- **User management** — Admins can list all users, promote/demote roles, and delete accounts
- **Animated UI** — Framer Motion page transitions and interactive particle background
- **Single-binary deploy** — Express serves the Vite-built React frontend from `dist/`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6, Framer Motion, Vite |
| Backend | Node.js, Express 4 |
| Database | SQLite via `better-sqlite3` (WAL mode, foreign keys on) |
| Auth | JSON Web Tokens (`jsonwebtoken`), `bcryptjs` |
| Styling | Custom CSS with CSS variables, Tailwind CSS (build-time) |
| Deployment | Railway, Docker (multi-stage build) |

---

## Project Structure

```
nexora-task-manager/
├── backend/
│   ├── db.js                  # SQLite schema & connection
│   ├── server.js              # Express app + static serving
│   ├── middleware/
│   │   └── auth.js            # JWT auth, requireAdmin, requireProjectRole
│   └── routes/
│       ├── auth.js            # /api/auth — signup, login, me
│       ├── projects.js        # /api/projects — CRUD + member management
│       ├── tasks.js           # /api/tasks — CRUD + dashboard summary
│       └── users.js           # /api/users — admin user management
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Router, protected routes
│   │   ├── api.js             # Axios/fetch wrapper
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── components/
│   │   │   ├── InteractiveBackground.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskModal.jsx
│   │   └── pages/
│   │       ├── Landing.jsx
│   │       ├── Login.jsx
│   │       ├── Signup.jsx
│   │       ├── Dashboard.jsx
│   │       ├── Projects.jsx
│   │       ├── ProjectDetail.jsx
│   │       ├── Tasks.jsx
│   │       ├── Users.jsx
│   │       └── Settings.jsx
│   └── vite.config.js
├── Dockerfile                 # Multi-stage: build frontend → serve via Express
├── railway.json               # Railway deployment config
└── package.json
```

---

## Database Schema

```sql
users            — id, name, email, password, role (admin|member), avatar, created_at
projects         — id, name, description, color, owner_id → users, created_at
project_members  — project_id, user_id, role (admin|member), joined_at
tasks            — id, title, description, project_id, assignee_id, creator_id,
                   status (todo|in_progress|done|overdue), priority (low|medium|high|critical),
                   due_date, created_at, updated_at
```

---

## API Reference

### Auth — `/api/auth`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/signup` | — | Register a new user |
| POST | `/login` | — | Login, receive JWT |
| GET | `/me` | ✅ | Get current user |
| PUT | `/me` | ✅ | Update display name |

### Projects — `/api/projects`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | ✅ | List user's projects |
| POST | `/` | ✅ | Create project |
| GET | `/:projectId` | ✅ Member | Get project + members + stats |
| PUT | `/:projectId` | ✅ Admin | Update project |
| DELETE | `/:projectId` | ✅ Admin | Delete project |
| POST | `/:projectId/members` | ✅ Admin | Add member by email |
| DELETE | `/:projectId/members/:userId` | ✅ Admin | Remove member |

### Tasks — `/api/tasks`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | ✅ | List tasks (filter by `projectId`, `status`, `assignee`, `priority`) |
| POST | `/` | ✅ | Create task |
| GET | `/dashboard/summary` | ✅ | Dashboard stats + recent tasks |
| GET | `/:id` | ✅ | Get task by ID |
| PUT | `/:id` | ✅ | Update task |
| DELETE | `/:id` | ✅ | Delete task |

### Users — `/api/users`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | ✅ | Admin: list all users; Members: search by name/email |
| PUT | `/:id/role` | ✅ Admin | Change user role |
| DELETE | `/:id` | ✅ Admin | Delete user |

---

## Running Locally

### Prerequisites

- Node.js 20+
- npm

### 1. Clone the repo

```bash
git clone https://github.com/your-username/nexora-task-manager.git
cd nexora-task-manager
```

### 2. Start the backend

```bash
cd backend
npm install
node server.js
# Runs on http://localhost:5001
```

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### Environment Variables (Backend)

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5001` | Server port |
| `JWT_SECRET` | `super_secret_dev_key_change_in_prod` | ⚠️ Change in production |
| `DB_PATH` | `./taskmanager.db` | SQLite database file path |
| `FRONTEND_URL` | `*` | CORS allowed origin |

> ⚠️ **Important:** Always set a strong `JWT_SECRET` in production.

---

## Deploying to Railway

This project includes a `railway.json` and a multi-stage `Dockerfile` for one-click Railway deployment.

1. Push your code to GitHub
2. Create a new Railway project and link your repo
3. Railway will auto-detect the `Dockerfile` and build
4. Set the `JWT_SECRET` environment variable in Railway's dashboard

The Dockerfile builds the React frontend first, copies the `dist/` output into the Express backend image, and serves everything from a single container on port `8080`.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE)

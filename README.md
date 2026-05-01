<h1 align="center">
  🚀 <b>Nexora — Task Manager</b>
</h1><p align="center">
  <b>Manage tasks. Move at the speed of light.</b>
</p>
<p align="center">
  A modern, full-stack <b>team task management platform</b> built for productivity-focused teams.<br/>
  Nexora delivers a <b>minimal, distraction-free UI</b> with powerful collaboration features.
</p>
<p align="center">
  <a href="https://nexora-task-manager-production.up.railway.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-ff3b3b?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

📸 Screenshots
🏠 Landing Page
<p align="center">
  <img src="assets/screenshot-landing.png" width="100%" />
</p>
✨ Feature Highlights
<p align="center">
  <img src="assets/screenshot-features.png" width="100%" />
</p>
🔐 Authentication
<p align="center">
  <img src="assets/screenshot-login.png" width="45%" />
  <img src="assets/screenshot-signup.png" width="45%" />
</p>
📊 Dashboard
<p align="center">
  <img src="assets/screenshot-dashboard.png" width="100%" />
</p>
🖥️ App Preview (Landing + Dashboard)
<p align="center">
  <img src="assets/screenshot-landing-dashboard-preview.png" width="100%" />
</p>
🚀 Call to Action
<p align="center">
  <img src="assets/screenshot-cta.png" width="100%" />
</p>

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication (7-day expiry)
- Password hashing using bcrypt
- Protected routes (frontend + backend)

---

### 📁 Project Management
- Create, edit, and delete projects
- Assign custom colors
- Automatically added as project admin on creation

---

### ✅ Task Management
- Full CRUD operations
- Status: `todo`, `in_progress`, `done`, `overdue`
- Priority: `low`, `medium`, `high`, `critical`
- Assign tasks to team members
- Due date tracking

---

### ⏰ Smart System
- Auto-detect overdue tasks
- Real-time dashboard summary

---

### 👥 Team Collaboration
- Invite users via email
- Project-level roles: **Admin / Member**
- Shared workspace for teams

---

### 🛡️ Role-Based Access Control
- Global roles: `admin`, `member`
- Secure API route protection

---

### 📊 Dashboard Insights
- Total tasks overview
- Completed tasks tracking
- In-progress tasks monitoring
- Overdue task alerts
- Recent activity tracking

---

### 🎨 UI/UX
- Dark modern SaaS UI
- Smooth animations using **Framer Motion**
- Interactive particle background
- Clean & minimal design

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|------------|------------------------------------|
| Frontend   | React 18, React Router v6, Vite    |
| Backend    | Node.js, Express                   |
| Database   | SQLite (`better-sqlite3`)          |
| Auth       | JWT (`jsonwebtoken`), bcrypt       |
| Styling    | Tailwind CSS + Custom CSS          |
| Animations | Framer Motion                      |
| Deployment | Railway + Docker                   |

---


## 📂 Project Structure

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

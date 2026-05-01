🚀 Nexora — Task Manager

Manage tasks. Move at the speed of light.








A modern, full-stack team task management platform built for productivity-focused teams. Nexora delivers a minimal, distraction-free UI combined with powerful collaboration and workflow features.

🔗 Live Demo:
👉 https://nexora-task-manager-production.up.railway.app/

📸 Screenshots
🏠 Landing Page
<p align="center"> <img src="./assets/landing.png" width="100%" /> </p>
✨ Features Section
<p align="center"> <img src="./assets/features.png" width="100%" /> </p>
🔐 Authentication
<p align="center"> <img src="./assets/login.png" width="45%" /> <img src="./assets/signup.png" width="45%" /> </p>
📊 Dashboard
<p align="center"> <img src="./assets/dashboard.png" width="100%" /> </p>
🚀 Call to Action
<p align="center"> <img src="./assets/cta.png" width="100%" /> </p>
✨ Features
🔐 Authentication & Security
JWT-based authentication (7-day expiry)
Password hashing using bcrypt
Protected routes (frontend + backend)
📁 Project Management
Create, edit, delete projects
Assign custom colors
Auto project admin on creation
✅ Task Management
Full CRUD operations
Status: todo, in_progress, done, overdue
Priority: low, medium, high, critical
Assign tasks to team members
Due date tracking
⏰ Smart System
Auto-detect overdue tasks
Real-time dashboard summary
👥 Team Collaboration
Invite users via email
Project-level roles (Admin / Member)
Shared workspace
🛡️ Role-Based Access Control
Global roles: admin, member
Secure route-level permissions
📊 Dashboard Insights
Total tasks
Completed tasks
In-progress tasks
Overdue tasks
Recent activity tracking
🎨 UI/UX
Dark modern SaaS UI
Smooth animations (Framer Motion)
Interactive particle background
Minimal & distraction-free design
🛠️ Tech Stack
Layer	Technology
Frontend	React 18, React Router v6, Vite
Backend	Node.js, Express
Database	SQLite (better-sqlite3)
Auth	JWT (jsonwebtoken), bcrypt
Styling	Tailwind CSS + Custom CSS
Animations	Framer Motion
Deployment	Railway + Docker
📂 Project Structure
nexora-task-manager/
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── middleware/
│   │   └── auth.js
│   └── routes/
│       ├── auth.js
│       ├── projects.js
│       ├── tasks.js
│       └── users.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── context/
│   │   ├── components/
│   │   └── pages/
│   └── vite.config.js
│
├── assets/              # 📸 Screenshots (YOU ADD THESE)
├── Dockerfile
├── railway.json
└── package.json
⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/nexora-task-manager.git
cd nexora-task-manager
2️⃣ Backend Setup
cd backend
npm install
node server.js

Runs on:

http://localhost:5001
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Runs on:

http://localhost:5173
🔑 Environment Variables

Create .env inside backend/:

PORT=5001
JWT_SECRET=your_super_secure_secret
DB_PATH=./taskmanager.db
FRONTEND_URL=*

⚠️ Always use a strong JWT_SECRET in production.

🚀 Deployment (Railway)
Push project to GitHub
Go to Railway
Create new project → Link repo
Railway auto-detects Dockerfile

Add environment variable:

JWT_SECRET=your_secret
Deploy 🚀

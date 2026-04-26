💎 JewelTech Organizational System

A full-stack role-based task management system built for organizational workflow simulation (Admin → Employee task assignment system).

🚀 Live Project Overview

JewelTech is a simple but functional internal management system where:

Admins manage employees and assign tasks
Employees receive and track assigned tasks
Data is stored in MongoDB
Backend handles authentication and task logic
📸 Application Screenshots
🔐 Login Page

🧑‍💼 Admin Dashboard

👷 Employee Dashboard

⚙️ Features
🔐 Authentication
Single login system
Role-based access (Admin / Employee)
Session stored in browser (localStorage)
🧑‍💼 Admin Features
View employees
Assign tasks to employees
Manage organizational workflow
👷 Employee Features
View assigned tasks
Track task status (pending/completed)
🧠 System Architecture
Frontend (HTML/CSS/JS)
        ↓
Express.js Backend API
        ↓
MongoDB Database
🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Tools: Thunder Client / Git / GitHub
▶️ How to Run Project
1️⃣ Backend
cd backend
node server.js
2️⃣ Frontend
cd frontend
npx serve .

Then open the link shown in terminal.

🔑 Test Login (Example)
Admin
username: admin
password: 123
📂 Project Structure
jeweltech-app/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── admin.html
│   ├── employee.html
│   └── style.css
│
├── screenshots/
│   ├── login.png
│   ├── admin.png
│   └── employee.png
│
└── README.md
📌 Project Status

✔ Functional full-stack system
✔ Role-based authentication working
✔ Task assignment system working
✔ UI responsive and simple
✔ Ready for academic presentation

👨‍💻 Developer Notes

This project was built as a learning exercise in full-stack development, focusing on:

Backend API design
Role-based authentication
Database integration
Frontend-backend communication
🔥 Future Improvements (Optional)
Real-time updates (Socket.io)
Password encryption (bcrypt)
Better UI dashboard analytics
Task deadlines & priority system

🏁 Final Statement

JewelTech demonstrates a complete full-stack workflow system with role-based access control and task management between admin and employees.

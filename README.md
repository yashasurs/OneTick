# 🎓 Student Leave Management & Attendance System

A MERN stack application designed for colleges to manage student leave requests and daily attendance efficiently, with role-based access and analytics.

---

## 📌 Features

### 🔐 Authentication & Access Control
- JWT-based login system
- Role-based access (Student / Faculty / Admin)

### 📄 Leave Management
- Students can apply for leave (from/to dates, reason)
- Faculty/Admin can approve/reject requests
- Leave status tracking: Pending / Approved / Rejected

### 📅 Attendance Management
- Faculty can mark student attendance per subject
- Attendance records stored by date and subject
- Students can view attendance records

### 📊 Attendance Analytics
- Subject-wise attendance percentage
- Monthly attendance breakdown (optional)
- Helps identify low attendance for warnings

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Axios, TailwindCSS / Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JSON Web Tokens (JWT)
- **Other**: RESTful API design, Role-Based Access Control (RBAC)

---

# Clone the repository
git clone https://github.com/your-username/SE-project.git

cd SE-project

# Install server dependencies
cd server
npm install

# Start backend server
npm start

# Install client dependencies
cd client
npm install

# Start frontend server
npm run dev


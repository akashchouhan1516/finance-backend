# 💰 Finance Tracker Backend

## 🚀 Overview
A backend system for managing personal finance records with secure authentication and role-based access control.  
Users can register, log in, manage financial records, and view summarized analytics.

---

## ✨ Features
- 🔐 JWT Authentication (Register & Login)
- 🛡️ Protected Routes with Middleware
- 👥 Role-Based Access Control (Admin, Analyst, Viewer)
- 💰 Full CRUD Operations for Records
- 📊 Dashboard Summary (Income, Expense, Balance)
- 🔍 Filter Records (by type & category)
- 🔒 Password Hashing using bcrypt

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- JWT (Authentication)
- bcrypt.js

---

## 📦 API Endpoints

### 🔑 Auth Routes
| Method | Endpoint | Description |
|-------|---------|------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |

---

### 💰 Record Routes
| Method | Endpoint | Description |
|-------|---------|------------|
| POST | /api/records | Add new record (Admin only) |
| GET | /api/records | Get records (Admin & Analyst) |
| PUT | /api/records/:id | Update record (Admin only) |
| DELETE | /api/records/:id | Delete record (Admin only) |

---

### 📊 Dashboard
| Method | Endpoint | Description |
|-------|---------|------------|
| GET | /api/dashboard/summary | Get income/expense summary |

---

## 🔐 Role Permissions

| Role | Permissions |
|------|------------|
| Viewer | View only |
| Analyst | View & analyze |
| Admin | Full access (CRUD) |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/akashchouhan1516/finance-backend.git
cd finance-backend
## deployment at https://finance-backend-qgq4.onrender.com/

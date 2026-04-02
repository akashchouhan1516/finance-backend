# 💰 Finance Tracker Backend

## 🚀 Overview
A backend system for managing personal finance records with secure authentication and real-time analytics.  
Users can register, log in, add financial records, and view summarized insights.

---

## ✨ Features
- 🔐 JWT Authentication (Register & Login)
- 🛡️ Secure Protected Routes
- 💰 Add & Retrieve Financial Records
- 📊 Dashboard Summary (Income, Expense, Balance)
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
| POST | /api/records | Add new record |
| GET | /api/records | Get all records |

---

### 📊 Dashboard
| Method | Endpoint | Description |
|-------|---------|------------|
| GET | /api/dashboard/summary | Get income/expense summary |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/akashchouhan1516/finance-backend.git
cd finance-backend

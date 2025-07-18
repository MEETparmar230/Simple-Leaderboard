# 🏆 User Points Claiming App

A simple full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to be created, listed in a leaderboard, and rewarded with random points. Each claim is saved to a claim history for tracking purposes.

---

## 🔗 Deployment

Frontend: Vercel (https://simple-leaderboard-ochre.vercel.app/)

Backend: Render (https://simple-leaderboard.onrender.com)

Database: MongoDB Atlas

---

## ✨ Features

- ✅ Add new users
- 📜 View users in a leaderboard (sorted by points)
- 🎯 Claim random points (1–10) per user
- 📊 Points updated instantly and reflected on UI
- 🕓 Each claim is recorded in `ClaimHistory` (MongoDB)
- 🌐 REST API with Express.js
- ⚛️ React frontend with toast notifications

---

## 🛠️ Tech Stack

| Frontend         | Backend         | Database        |
|------------------|------------------|------------------|
| React.js + Vite  | Node.js + Express | MongoDB (Mongoose) |

---

## 📁 Project Structure

project-root/
│
├── backend/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   ├── claimHistory.js
│   │   └── user.js
│   ├── routes/
│   │   └── userRouter.js
│   ├── .env
│   ├── .gitignore
│   ├── db.js
│   ├── index.js         
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── UserForm.jsx
│   │   │   └── UserList.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx     
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   └── index.html

---

## 🚀 Getting Started

### ⚙️ Backend Setup

```bash
cd backend
npm install
# Create a .env file with the following:
# MONGODB_URL=<your MongoDB connection string>
# PORT=5000
npm run dev
```

---

## 🖥️ Frontend Setup

```bash
cd frontend
npm install
# Create a .env file with:
# VITE_API_URL=http://localhost:5000/api
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/api/user`       | Get all users       |
| POST   | `/api/user`       | Create a new user   |
| POST   | `/api/user/claim` | Claim random points |

---

## 👨‍💻 Developed by

Meet Parmar
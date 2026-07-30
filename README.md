# Login-and-Sigup-System-Flutter-Nodejs-Mangodb-
# 🔐 Login & Signup System

Flutter + Node.js + Express + MongoDB Atlas

A full-stack authentication system with a Flutter mobile frontend and a Node.js/Express REST API backend, using MongoDB Atlas as the database.

---

## 📱 Overview

This project demonstrates a complete authentication flow — registration, secure login, password encryption, and database integration — connecting a Flutter frontend to a Node.js/Express REST API.

- Create a new account
- Login securely
- Store user data in MongoDB Atlas
- Encrypt passwords using bcrypt
- Connect Flutter with a REST API
- Version controlled with Git & GitHub

---

## ✨ Features

- User Registration
- User Login
- Password Hashing (bcrypt)
- REST API
- MongoDB Atlas Integration
- Flutter Mobile UI
- Express.js Backend
- Clean Folder Structure
- Secure Authentication
- Cloud Database

---

## 🏗️ Project Structure

```
Login-and-Signup-System-Flutter-Nodejs-Mongodb/
│
├── Frontend/
│   ├── android/
│   ├── ios/
│   ├── lib/
│   ├── web/
│   ├── test/
│   ├── assets/
│   └── pubspec.yaml
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── node_modules/
│   ├── server.js
│   ├── package.json
│   └── .env          # private, not committed
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🛠️ Tech Stack

**Frontend:** Flutter, Dart, Material Design

**Backend:** Node.js, Express.js, bcrypt, dotenv, cors, mongoose

**Database:** MongoDB Atlas

**Version Control:** Git, GitHub

---

## 🔄 Authentication Flow

```
Flutter App
    ↓
Signup / Login
    ↓
Express REST API
    ↓
MongoDB Atlas
    ↓
Response
    ↓
Flutter UI
```

---

## 🚀 Getting Started

### Backend

```bash
git clone https://github.com/SaudMasood/Login-and-Sigup-System-Flutter-Nodejs-Mangodb-.git
cd Login-and-Sigup-System-Flutter-Nodejs-Mangodb-
cd backend
npm install
node server.js
```

### Frontend

```bash
cd Frontend
flutter pub get
flutter run
```

---

## ⚙️ Environment Variables (Private)

Create a `.env` file inside the `backend/` folder. This file is **private** and must **never** be committed to Git.

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

Make sure `.env` is listed in your `.gitignore`:

```gitignore
.env
node_modules/
```

⚠️ If your MongoDB URI or any secret is ever pushed to GitHub, rotate/change it immediately.

---

## 📌 API Endpoints

### Signup

```
POST /signup
```

```json
{
  "name": "Saud",
  "email": "saud@gmail.com",
  "password": "123456"
}
```

### Login

```
POST /login
```

```json
{
  "email": "saud@gmail.com",
  "password": "123456"
}
```

---

## 🔒 Security

- Passwords hashed using bcrypt
- MongoDB Atlas cloud database
- Secrets kept in a private `.env` file (excluded from Git)
- REST API architecture

---

## 📚 Future Improvements

- JWT Authentication
- Email Verification
- Forgot Password
- Profile Screen
- Logout
- Refresh Token
- Form Validation
- Clean Architecture
- Provider State Management
- Deployment

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 👨‍💻 Developer

**Saud Masood**
BS Computer Science Graduate & Now Developer • Flutter Developer • Backend Developer • AI & ML Enthusiast

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

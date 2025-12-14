# School Management System

## 1. Introduction

The **School Management System** is a web-based application designed to digitize and automate academic and administrative processes in schools. It provides a centralized platform for students, teachers, and administrators to manage academic data, communication, and daily operations efficiently.

This project is developed as a **hackathon-ready solution**, focusing on scalability, role-based access, and clean architecture.

---

## 2. Objectives

* Reduce manual paperwork in school operations
* Provide role-based access for different stakeholders
* Centralize student, teacher, and academic data
* Ensure secure authentication and authorization

---

## 3. User Roles

| Role    | Description                                                   |
| ------- | ------------------------------------------------------------- |
| Admin   | Manages users, classes, subjects, and overall system settings |
| Teacher | Manages attendance, student performance, and class activities |
| Student | Views attendance, academic records, and announcements         |

---

## 4. Key Features

* Secure authentication using JWT
* Role-based access control (Admin, Teacher, Student)
* Student and teacher management
* Class and subject management
* Attendance tracking
* Responsive UI with Tailwind CSS

---

## 5. Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Zustand (state management)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* bcryptjs
* dotenv

---

## 6. System Architecture

The system follows a client-server architecture:

```
Client (React + Zustand)
        ↓
REST API (Express.js)
        ↓
Database (MongoDB)
```

* Frontend communicates with backend via REST APIs
* Backend handles authentication, business logic, and database operations
* JWT is used for secure API access

---

## 7. Frontend Folder Structure

```bash
src/
 ├── components/     # Reusable UI components
 ├── pages/          # Page-level components
 ├── routes/         # Route definitions
 ├── store/          # Zustand state stores
 ├── services/       # API service functions
 ├── utils/          # Helper functions
 ├── App.jsx
 └── main.jsx
```

---

## 8. Backend Folder Structure

```bash
server/
 ├── controllers/    # Request handling logic
 ├── models/         # Mongoose schemas
 ├── routes/         # API route definitions
 ├── middleware/     # Auth and error middleware
 ├── config/         # Database configuration
 ├── index.js        # Server entry point
 └── .env
```

---

## 9. Authentication Flow

1. User logs in with credentials
2. Password is verified using bcryptjs
3. JWT token is generated and sent to client
4. Token is stored on the client
5. Protected routes validate JWT on each request

---

## 10. API Documentation

### Authentication

**POST /api/auth/login**

Request:

```json
{
  "email": "user@school.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt-token",
  "role": "admin"
}
```

---

### Student Management

**GET /api/students**
Returns list of all students

**POST /api/students**
Adds a new student

---

## 11. Database Schema (Overview)

### User Collection

* name
* email
* password
* role

### Student Collection

* name
* rollNumber
* class
* attendance

### Teacher Collection

* name
* subject
* assignedClasses

---

## 12. Environment Variables

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 13. Installation & Setup

### Backend Setup

```bash
git clone <repository-url>
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 14. Security Measures

* Password hashing using bcryptjs
* JWT-based authentication
* Protected API routes
* Environment variables for sensitive data

---

## 15. Future Enhancements

* Online fee payment integration
* Exam and result management
* Parent portal
* Notifications and announcements
* Mobile application support

---

## 16. Conclusion

The School Management System provides a scalable and secure platform to manage academic operations digitally. Designed for hackathons, the project demonstrates strong full-stack fundamentals, clean architecture, and real-world applicability.

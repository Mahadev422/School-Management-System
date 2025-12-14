# School Management System

### Brief overview of the system

- **Problem statement:** Difficulty in managing student records, communication gaps between students and schools
- **Objective:** A unified platform for student profiles, school admin dashboards, marks, attendance, and feedback

## Frontend
- Reactjs
- Tailwindcss (for styling)
- Zustand (for State Management)
- React-router-dom (for navigation)

**Frontend [live on](http://localhost:5173)**

### Features
* ```/``` for landing page
  - Introduction of our website
  - How our website works
  - Functions in our website.
* ```/login``` for login page
  - Students or schools admin can login with google login
  - Create their profile accordingly.
* ```/student``` for student profile page
  - Student basic details like name, email, dob, list of schools where he/she had studied and current school.
- ```/student/school-id``` for viewing school profile
- ```/ ```

### How to start frontend
```
npm install
npm run dev or npm start
```
## Backend
- Express
- mongoose
- jsonwebtoken
- bcryptjs

**Bacekend [live on](http://localhost:4000)**

```
npm install
npm run dev
```
## Routes
- ```/sign-in``` for login
- ```/sign-up``` for register


## Features
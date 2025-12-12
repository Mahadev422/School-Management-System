import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import StudentProfile from "./pages/StudentProfile";
import LandingPage from "./pages/LandingPage";

export const Router = createBrowserRouter(
  [
    {path:'/', element: <App />, children: [
      {index: true, element: <LandingPage />},
      {path: '/student', element: <StudentProfile />},
    ]},
    {path: '/login', element: <Login />}
  ]
);
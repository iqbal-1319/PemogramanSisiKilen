// App.js
import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ErrorPage from "./pages/error";

function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-4">
      <Link
        to="/login"
        className="p-2 m-5 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="p-2 m-5 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Register
      </Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

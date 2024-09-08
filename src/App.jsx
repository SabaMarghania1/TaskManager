import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import MyDay from "./screens/MyDay";
import Important from "./screens/Important";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./screens/Register";
import AuthLayout from "./components/AuthLayout";

import i18n from "./i18n";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <MyDay />,
      },
      {
        path: "/important",
        element: <Important />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

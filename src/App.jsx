import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import MyDay from "./screens/MyDay";
import Important from "./screens/Important";
import Login from "./screens/Login";

const router = createBrowserRouter([
  {
    element: <AppLayout isAuthenticated={false} />,
    children: [
      {
        path: "/",
        element: <MyDay />,
      },
      {
        path: "/important",
        element: <Important />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

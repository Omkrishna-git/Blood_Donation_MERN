import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donor from "./pages/Donor";
import Prospect from "./pages/Prospect";
import Menu from "./components/Menu";

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },

        {
          path: "/admin/donors",
          element: <Donor />,
        },

        {
          path: "/admin/prospect",
          element: <Prospect />,
        },
        
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

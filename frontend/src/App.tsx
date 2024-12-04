import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import MapPage from "./pages/map/MapPage";
import AnalysisPage from "./pages/analysis/AnalysisPage";
import "./styles/global.scss";

import User from "./pages/user/User";
import ReactDOM from "react-dom";
import ExcelChartComponent from "./pages/ExcelChartComponent/ExcelChartComponent.tsx";


import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
        
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/map", // Route for the map page
      element: <MapPage />,
      
    },
    {
      path: "/analysis", // Route for the map page
      element: <AnalysisPage />,
    },
    {
      path: "/ExcelChartComponent", // Route for the map page
      element: <ExcelChartComponent />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

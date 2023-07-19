import Home from "./pages/home/Home";
import Users from './pages/users/Users.jsx';
import Products from './pages/products/Products.jsx';
import Navbar from './components/navbars/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Menu from "./components/menu/Menu.jsx"

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const Layout = () =>{
  return (
    <div className="main">
      <Navbar />
        <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">

        </div>
        </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "users",
    element: <Users />,
  },
]);


function App() {

  return <RouterProvider router={router} />
}

export default App

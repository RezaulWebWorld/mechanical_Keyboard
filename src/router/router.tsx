import {
  createBrowserRouter,
} from "react-router-dom"
import Home from "../pages/Home";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import App from "../App";
import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../component/ProductDetails";
import Dashboard from "../pages/Dashboard";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createBrowserRouter([
  {path:"/",
    element:<App/>,
  children:[
    {
      index:true,
      element: <Home/>,
    },
    {
      path: "/products",
      element: <Products/>,
    },
    {
      path: "/about",
      element: <AboutUs/>,
    },
    {
      path: "/contact",
      element: <ContactUs/>,
    },
    {
      path: "/cart",
      element: <ShoppingCart/>,
    },
    {
      path: "/checkout",
      element: <Checkout/>,
    },
    {
      path: "/details/:id",
      element: <ProductDetails/>,
    },
    {
      path: "/db",
      element: <Dashboard/>,
    },
  ]}
]);

export default router
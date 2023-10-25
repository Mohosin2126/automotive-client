import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import MyCart from './Pages/MyCart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Firebase/AuthProvider';
import Error from './Pages/Error';
import BrandProduct from './Pages/BrandProduct';
import ProductDetail from './Components/ProductDetail';
import UpdateForm from './Pages/UpdateForm';
import PrivateRoute from './Components/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("https://automotive-server-rust.vercel.app/brands")
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch("https://automotive-server-rust.vercel.app/mycart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/brandsProduct/:brandName",
        element:<BrandProduct></BrandProduct>,
        loader:()=>fetch("https://automotive-server-rust.vercel.app/allBrands"),
      },
      {
        path:"/brands/:id",
        element:<PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
        loader:()=>fetch("https://automotive-server-rust.vercel.app/allBrands"),
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>,
        loader:({params})=>fetch(`https://automotive-server-rust.vercel.app/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>



  </React.StrictMode>,
)

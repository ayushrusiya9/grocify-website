import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fruits from './components/Fruits/Fruits';
import Dairy from './components/Dairy/Dairy';
import Seafood from './components/Seafood/Seafood';
import AllProducts from './components/AllProducts/AllProducts';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Order from './components/CRUD/Order';
import Cart from './components/CRUD/Cart';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/seafood',
          element: <Seafood />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        },
        {
          path: '/products',
          element: <AllProducts />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/order',
          element: <Order />
        },
        {
          path: '/cart',
          element: <Cart />
        },
      ]
    },

  ])

  return <RouterProvider router={router} />

}

export default App;

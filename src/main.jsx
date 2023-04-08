import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Product from './component/Product/Product';
import Shop from './component/Shop/Shop';
import App from './App';
import OrderReview from './component/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
        loader: ()=> fetch('data.json')
      },
      {
        path:'/review',
        element:<OrderReview></OrderReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Root from './components/Layout/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import BookMark from './components/Bookmark/BookMark.jsx';
const router = createBrowserRouter([
{
  path:'/',
  element:<Root></Root>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
    {
      path:'/bookmark',
      element:<BookMark></BookMark>
    }
  ]

}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

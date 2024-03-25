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
import Blog from './components/Blogs/Blogs.jsx';
import BookMark from './components/Bookmark/BookMark.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import BlogDetails from './components/Blogs/blogdetails/BlogDetails.jsx';
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
      path:'/blogs',
      element:<Blogs></Blogs>,
      loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
      
    },
    {
      path:'/blogDetails/:id',
      element:<BlogDetails></BlogDetails>,
      loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),

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

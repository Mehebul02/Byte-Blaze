import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/root/Root";
import Home from "../home/Home";
import Blogs from "../Blogs/Blogs";
import BlogDetails from "../Blogs/blogdetails/BlogDetails";
import BookMark from "../Bookmark/BookMark";
import Contents from "../Blogs/blogdetails/contents/Contents";
import Author from "../Blogs/blogdetails/author/Author";

export const router = createBrowserRouter([
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
    children:[
        {
          index:true,
            element:<Contents></Contents>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
           
        },
        {
            path:'author',
            element:<Author></Author>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        },
    ],
        },
        {
          path:'/bookmark',
          element:<BookMark></BookMark>
        }
      ]
    
    }
    ]);
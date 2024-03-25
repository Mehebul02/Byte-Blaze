import { Outlet } from "react-router-dom"
import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";

const Root =()=>{
    return (
        <div>
         <div className="h-16">
         <NavBar></NavBar>
         </div>
          <div className="min-h-[calc(100vh-120px)]">
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
        </div>
    )
}
export default Root;
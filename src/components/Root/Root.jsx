import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="">
               <div className="max-w-7xl mx-auto mt-5 px-4">
                <Navbar></Navbar>
               </div>
             <div className="max-w-7xl mx-auto mt-5 px-4">
             <Outlet></Outlet>
             </div>
              <Footer></Footer>
              {/* <ToastContainer /> */}
        </div>
    );
};

export default Root;
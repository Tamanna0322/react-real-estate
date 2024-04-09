import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto mt-5">
               <div>
                <Navbar></Navbar>
               </div>
              <Outlet></Outlet>
        </div>
    );
};

export default Root;
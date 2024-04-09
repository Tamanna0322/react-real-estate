import { NavLink } from "react-router-dom";
import 'animate.css';

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center space-y-5 p-28 border bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-base-content">
                <h1 className="text-7xl font-bold text-blue-950 animate__animated animate__bounce">404</h1>
                <p className="text-3xl font-bold text-blue-900 mt-5 animate__animated animate__tada">Ooops!!</p>
                <p className="text-xl text-blue-800">THIS PAGE DOES NOT EXIST OR UNAVAILABLE</p>
               <div>
               <NavLink to='/'><button className="btn btn-primary animate__animated animate__animated " >Go Back to Home</button></NavLink>
               </div>
            </div>
        </div>
    );
};

export default ErrorPage;
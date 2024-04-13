import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.webp';


const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[15] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600  font-bold rounded-lg' : 'font-semibold text-blue-800'}>Home</NavLink>
                        <NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'text-green-600  font-bold rounded-lg ' : 'font-semibold text-blue-800'}>Update Profile</NavLink>
                        <NavLink to='/userProfile' className={({ isActive }) => isActive ? 'text-green-600  font-bold rounded-lg ' : 'font-semibold text-blue-800'}>User Profile</NavLink>
                    </ul>
                </div>
               <div className="flex items-center">
               <img className="md:w-16 md:h-16 w-9 h-9" src={logo} alt="" />
               <ul>
                <li>
                <a className=" md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-500 via-purple-500 to-yellow-400 bg-clip-text">LuxeDwellings</a>
                </li>
                <li>
                <a className="md:tracking-[12px] text-blue-950">REAL ESTATES</a>
                </li>
               </ul>
               </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex space-x-6 items-center">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600 px-4 py-2 font-bold rounded-lg border border-green-600 ' : 'font-semibold text-blue-800'}>Home</NavLink>
                        <NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'text-green-600 px-4 py-2 font-bold rounded-lg border border-green-600  ' : 'font-semibold text-blue-800'}>Update Profile</NavLink>
                        <NavLink to='/userProfile' className={({ isActive }) => isActive ? 'text-green-600 px-4 py-2 font-bold rounded-lg border border-green-600 ' : 'font-semibold text-blue-800'}>User Profile</NavLink>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end md:mr-3 ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
                <NavLink to='/login' className={({ isActive }) => isActive ? 'text-green-600 px-4 py-2 font-bold rounded-lg border border-green-600  ' : 'font-semibold text-blue-800'}>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
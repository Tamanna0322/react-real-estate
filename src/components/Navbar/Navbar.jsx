import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.webp';


const Navbar = () => {

   const links = <>
   
    <div className="space-x-6">
    <NavLink to='/' className={({isActive}) => isActive ? 'text-green-600 px-4 py-2 font-bold rounded-lg border border-green-600 ' : 'font-semibold text-black' }>Home</NavLink>
     <NavLink to='/updateProfile' className={({isActive}) => isActive ? 'text-green-600 px-4 py-2 font-bold rounded-lg border border-green-600  ' : 'font-semibold text-black' }>Update Profile</NavLink>
     <NavLink to='/userProfile' className={({isActive}) => isActive ? 'text-green-600 px-4 py-2 font-bold rounded-lg border border-green-600 ' : 'font-semibold text-black' }>User Profile</NavLink>
    </div>
   </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <img className="w-16 h-16" src={logo} alt="" />
    <a className="btn btn-ghost text-4xl font-bold text-transparent bg-gradient-to-r from-green-500 via-purple-500 to-yellow-400 bg-clip-text">LuxeDwellings</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end mr-3 ">
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
    <a className="btn">Logout</a>
  </div>
</div>
    );
};

export default Navbar;
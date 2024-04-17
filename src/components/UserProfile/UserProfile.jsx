import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UserProfile = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user)

    const navigate = useNavigate();

    const handleSignOUt = () =>{
        logout()
        .then(() => {
            navigate('/')
        })
    }

    return (
      <div>
        <Helmet>
            <title>LuxeDwellings | UserProfile</title>
        </Helmet>
          <div className="border border-blue-900 lg:px-24 md:px-20 pb-20 pt-28 rounded-2xl border-dashed mt-36 mb-20 lg:w-1/2 md:w-[80%] mx-auto bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 text-base-content relative">
            <div className="flex flex-col items-center">
                <img className="absolute w-[140px] h-[140px] bottom-[80%] lg:w-[170px] lg:h-[170px] lg:bottom-[75%] rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" />
                <h2 className="text-4xl font-semibold text-blue-900 mt-6">{user?.displayName || "Update Your Name"}</h2>
                <p className="mt-5 text-xl font-semibold text-blue-800">{user?.email || "Email not found"}</p>
                <div className="flex mt-8 w-4/5 justify-between">
                    <div>
                        <NavLink to="/updateProfile"><button className="btn px-6 bg-blue-700 text-white">Update Profile</button></NavLink>
                    </div>
                    <div>
                        <button onClick={() => handleSignOUt()} className="btn px-9 bg-blue-600 text-white">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default UserProfile;
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const { user, updateUsersProfile } = useContext(AuthContext);
     console.log(user)

     const navigate = useNavigate();
     const location = useLocation();

    const {
        register,
        handleSubmit,
      } = useForm()


      const onSubmit = (data) => {
        console.log(data);
        const {image, fullName} = data
        
          updateUsersProfile(fullName, image)
          .then(() =>{
            navigate(location?.state || '/')
          })
       
      }
      


    return (
        <div className="my-10 border rounded-2xl bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 text-base-content md:w-[80%] mx-auto">
           <div className="flex flex-col items-center p-4 mb-7">
            <h2 className="md:text-4xl text-2xl text-blue-900 font-bold">Update Your Profile</h2>
            <div className=" border-2 rounded-full mt-5">
                <img className="w-[100px] h-[100px] rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" />
            </div>
            <p className="text-blue-700 font-bold mt-3">{user?.email}</p>
            <div className="border mt-7 border-blue-800 border-dotted bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 text-base-content px-6 py-4 md:w-[70%] rounded-xl mb-6">
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-900 font-semibold">Update Name</span>
                </label>
                <input type="text" placeholder="update your name" className="input input-bordered"
                    {...register("fullName")}
                 />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-900 font-semibold">Update PhotoURL</span>
                </label>
                <input type="text" placeholder="update your PhotoURL" className="input input-bordered"
                   {...register("image")} 
                />
              </div>
              <div className="form-control mt-6 w-3/6 mx-auto">
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </form>
            </div>
           </div>
        </div>
    );
};

export default UpdateProfile;
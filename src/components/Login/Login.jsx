
import { NavLink } from 'react-router-dom';
import login from '../../assets/login.jpg';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';


const Login = () => {

  const {signInUser} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
      const {email, password} = data;

      signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const [showPass, setShowPass] = useState(false);

    return (
 <div className="my-4">
 <div className="hero min-h-screen ">
  <div className="hero-content flex flex-col md:flex-row-reverse">
    <div className="text-center lg:text-left md:w-[50%] w-[80%] lg:w-full">
     <div className=''>
     <img className='w-full' src={login} alt="" />
     </div>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-base-content">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div>
            <h3 className='text-3xl font-bold text-blue-900'>Welcome back!!</h3>
            <p className='text-blue-900'>Login to continue...</p>
        </div>
        <div className='border-t border-blue-700 border-dotted'>

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-900 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="Enter Email" className="input input-bordered"
           {...register("email", { required: true })} 
           />
            {errors.email && <span className='text-red-500'>This field is required</span>}
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-blue-900 font-semibold">Password</span>
          </label>
         
         <input type={showPass ? 'text' : "password"} placeholder="Enter Password" className="input input-bordered" 
          {...register("password", { required: true })}
          />
          <span className='absolute left-[90%] top-[62%]' onClick={() => setShowPass(!showPass)}>
            {
              showPass ? <FaEyeSlash className='text-blue-900'></FaEyeSlash> : <FaEye className='text-blue-900'></FaEye>
            }
          </span>
        </div>
        {errors.password && <span className='text-red-500'>This field is required</span>}
        
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        <div className="form-control mt-3">
          <button className="btn btn-primary">Login</button>
        </div>
       
        <div className='mt-4'>
            <p>Do Not Have any Account? <NavLink className='link link-hover text-blue-600' to= '/register'>Sign UP</NavLink> </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
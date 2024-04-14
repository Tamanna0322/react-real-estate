
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.jpg';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';


const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const socialLogin = provider =>{
    provider()
    .then(result =>{
      // console.log(result.user)
      if(result.user){
        navigate(location?.state || '/')
      }
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
                <p>Do Not Have any Account? <NavLink className='link link-hover text-blue-600' to='/register'>Sign UP</NavLink> </p>
              </div>
              <div className='flex mt-3 justify-between'>
                <div className='w-[30%] '>
                  <h3 className='border-t border-blue-800 mt-3'></h3>
                </div>
                <div className='text-center'>
                  <p className='font-bold text-blue-900'>continue with</p>
                </div>
                <div className='w-[30%]'>
                  <h3 className='border-t border-blue-800 mt-3'></h3>
                </div>
              </div>
            </form>
            <div className='flex mb-5 justify-around w-full'>
                <div className='w-[50%] flex justify-center'>
                     <button onClick={() =>socialLogin(googleLogin)} className='btn w-2/3 border border-blue-900 text-blue-900 font-bold hover:bg-blue-500 hover:text-white'>Google</button>
                </div>
                <div className='w-[50%] flex justify-center'>
                     <button onClick={() =>socialLogin(githubLogin)} className='btn w-2/3 border border-blue-900 text-blue-900 font-bold hover:bg-blue-500 hover:text-white'>Github</button>
                </div>
                <div>

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
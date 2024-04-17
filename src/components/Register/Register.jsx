import { NavLink, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/register.webp';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const Register = () => {

  const { user, createUser, updateUsersProfile, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('')
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email, password, fullName, image} = data

    if(password.length < 6){
      setError("password must be atleast six characters")
      return
    }

    if(!/[A-Z]/.test(password)){
      setError("password must have an uppercase letter")
      return
    }

    if(!/[a-z]/.test(password)){
      setError("password must have a lowercase letter")
      return
    }


    setError('')

    createUser(email, password)
    .then((result) =>{
      setUser(result.user)
      updateUsersProfile(fullName, image)
      .then(() => {
        
          navigate('/')
          setUser({...user,displayName:fullName,photoURL:image})
      
      })
     
    })
  }

  return (
    <div className='my-4'>
      <div className="hero min-h-screen p-3">
        <div className="flex items-center flex-col md:flex-row justify-around w-full h-full ">
          <div className=" lg:text-left md:w-[30%] w-[70%]">
            <div className='lg:w-[400px]'>
              <img className='w-full object-cover' src={registerImg} alt="" />
            </div>
          </div>
          <div className="card shrink-0 mb-6 lg:w-[70%] max-w-sm shadow-2xl  bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-base-content">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
              <div className='text-center'>
                <h2 className='text-3xl font-bold text-blue-900'>Create Account</h2>
                <p className='text-blue-900 mb-2'>Register Now</p>
              </div>
              <div className='border-t border-blue-700 border-dotted'>

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-900 font-semibold">Full Name</span>
                </label>
                <input type="text" placeholder="Enter Your Full Name" className="input input-bordered"
                    {...register("fullName")}
                 />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-900 font-semibold">Email</span>
                </label>
                <input type="email" placeholder="Enter Your Email" className="input input-bordered"
                {...register("email", { required: true })}
                 />
                 {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-900 font-semibold">Photo URL</span>
                </label>
                <input type="text" placeholder="Your Photo URL" className="input input-bordered"
                   {...register("image")} 
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-blue-900 font-semibold">Password</span>
                </label>
                <input type={showPass ? 'text' : "password"} placeholder="Enter Your Password" className="input input-bordered" 
                 {...register("password", { required: true })}
                 />
                <span className='absolute left-[90%] top-[62%]' onClick={() => setShowPass(!showPass)}>
                  {
                    showPass ? <FaEyeSlash className='text-blue-900'></FaEyeSlash> : <FaEye className='text-blue-900'></FaEye>
                  }
                </span>
              </div>
              {errors.password && <span className='text-red-500'>This field is required</span>}
              {error && <small className='text-red-500'>{error}</small>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p>Already Have an Account? please <NavLink className='text-blue-700 link link-hover' to='/login'>Login</NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
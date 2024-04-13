import { NavLink } from 'react-router-dom';
import register from '../../assets/register.webp';

const Register = () => {
    return (
        <div className='my-4'>
            <div className="hero min-h-screen p-3">
  <div className="flex items-center flex-col md:flex-row justify-around w-full h-full ">
    <div className=" lg:text-left md:w-[30%] w-[70%]">
        <div className='lg:w-[400px]'>
        <img className='w-full object-cover' src={register} alt="" />
        </div>
    </div>
    <div className="card shrink-0 mb-6 lg:w-[70%] max-w-sm shadow-2xl  bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-base-content">
      <form className="card-body w-full">
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
          <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-900 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-900 font-semibold">Photo URL</span>
          </label>
          <input type="text" placeholder="Your Photo URL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-900 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
        </div>
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
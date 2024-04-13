
import { NavLink } from 'react-router-dom';
import login from '../../assets/login.jpg';

const Login = () => {
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
      <form className="card-body">
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
          <input type="email" placeholder="Enter Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-900 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
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
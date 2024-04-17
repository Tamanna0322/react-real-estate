
import { useContext } from 'react';
import lux from '../../assets/lux.jpg'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';


const Booking = () => {

    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data);
        document.getElementById('my_modal_5').showModal();

    }


    return (
        <div className='mt-10 mb-20'>
            <div className='bg-center flex justify-center items-center bg-no-repeat lg:w-full lg:h-[580px] h-[450px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${lux})` }}>
                <div className='md:w-[50%] w-[87%] mx-auto text-white text-center bg-[#00000061] lg:p-8 md:p-4 p-2 rounded-2xl'>
                    <h3 className='lg:text-4xl md:text-2xl text-xl font-bold mt-5'>Booking Now & Get <span className='text-red-600'>50% OFF</span></h3>
                    <p className='md:mt-7 mt-4 font-bold'>Book now and receive a fantastic 50% discount on your luxury real estate experience! Dont miss out on this exclusive offer. Reserve your dream property today and enjoy unparalleled comfort and elegance at half the price. Take advantage of this incredible deal while it lasts!</p>
                    <div className='flex justify-center mt-6 mb-5'>
                        <button className='btn btn-primary'>Book Now</button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-4xl text-blue-900 font-semibold text-center'>Online Booking</h2>
                <p className='text-blue-800 text-center mt-2'>Please fill out the information below to complete your online reservation</p>
                <div className='mt-10 border border-blue-700 border-dotted rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                            <input type="email" placeholder="Enter Email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-900 font-semibold">Phone Number</span>
                            </label>
                            <input type="tel" placeholder="Enter Your phone number" className="input input-bordered"
                                {...register("number")}
                            />
                        </div>
                        <div className="form-control mt-3 lg:w-[20%] w-[40%] mx-auto">
                            <button className="btn btn-primary">Book</button>
                        </div>
                    </form>

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-base-content p-10">
                            <h3 className="font-bold text-2xl">Hello {user?.displayName}</h3>
                            <p className="py-4 font-semibold">Thank you for booking with us! Your reservation has been successfully submitted. Enjoy your stay!</p>
                            <div className="modal-action">
                                <form method="dialog">
                                 
                                   <NavLink to='/'> <button className="btn bg-blue-700 text-white px-10">Close</button></NavLink>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Booking;
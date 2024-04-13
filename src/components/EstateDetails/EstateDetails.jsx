import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";

const EstateDetails = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const parseId = parseInt(id);
    const detail = details.find(detail => detail.id === parseId);
    // console.log(detail)

    return (
        <div className="flex flex-col lg:flex-row justify-between mt-14 mb-6 md:p-4 p-2">
            <div className="lg:w-[54%] relative mb-6">
                 <div className="bg-primary md:w-[90px] md:h-[90px] w-[70px] h-[70px] text-white font-bold flex justify-center items-center rounded-full absolute md:-left-[2%] -left-[4%] -top-5">
                    <h3>{detail.status}</h3>
                 </div>
                 <div className="lg:h-[550px] md:h-[400px] h-[350px]">
                    <img src={detail.image} className="rounded-lg w-full h-full object-cover" alt="" />
                 </div>
            </div>
            <div className="lg:w-[44%]">
            <p className='flex items-center mb-2 text-blue-800 font-bold'><SlLocationPin className='text-blue-950 text-xl mr-1'></SlLocationPin>{detail.location}</p>
              <h2 className="md:text-4xl text-2xl font-bold mb-4 text-blue-950">{detail.estate_title}</h2>
              <p className='text-primary mt-2 mb-3 font-semibold'>#{detail.segment_name}</p>
             <div className="border-t border-blue-800"></div>
              <p className="my-3 text-blue-950 font-bold">Description: <span className="text-[#0056b3] font-semibold ">{detail.description}</span></p>
              <div className="border-t border-blue-800"></div>
              <div className="flex md:flex-row items-center justify-between">
              <p className="text-[#0056b3] md:text-xl font-bold mt-5">{detail.price}</p>
              <p className="text-blue-900 md:text-xl font-bold mt-5">Area: <span className="text-[#0056b3] mr-5">{detail.area}</span></p>
              </div>
              <div className="mt-6 mb-7">
                <h3 className="text-blue-900 text-xl font-bold underline">Available Facilities:</h3>
                {
                    detail.facilities.map((facility, idx) => <li className="text-primary mt-2 font-semibold" key={idx}>{facility}</li> )
                }
              </div>
             <NavLink to='/'> <button className="btn btn-primary w-1/2">Back to Property</button></NavLink>
            </div>
        </div>
    );
};

export default EstateDetails;
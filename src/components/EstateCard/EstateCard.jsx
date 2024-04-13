import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";

const EstateCard = ({estateCard}) => {
    return (
        <div className='border border-[#0056b3] border-dotted p-3 rounded-lg'>
            <div className=' flex overflow-hidden h-[200px] justify-center rounded-lg'>
                <img className="w-full h-full rounded-lg object-cover transition hover:scale-110 duration-[4000ms]"  src={estateCard.image} alt="" />
            </div>
            <h3 className='mt-5 text-2xl text-blue-950 font-bold'>{estateCard.estate_title}</h3>
           <div className='flex items-center justify-between mb-3'>
           <p className='text-[#0056b3] mt-2 font-semibold'>#{estateCard.segment_name}</p>
           <p className='text-blue-950 font-semibold mr-6'>Status: <span className='text-[#0056b3]'>{estateCard.status}</span></p>
           </div>
           <hr />
           <div className='flex mb-5 justify-between font-bold text-blue-950 mt-2'>
           <p className='flex items-center text-[#0056b3]'><SlLocationPin className='text-blue-950 text-xl mr-1'></SlLocationPin>{estateCard.location}</p>
           </div>
           <button className='btn w-full bg-blue-800 text-white'>View Property</button>
        </div>
    );
};


EstateCard.propTypes ={
    estateCard: PropTypes.object
}

export default EstateCard;
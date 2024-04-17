
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Estates from '../Estates/Estates';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>LuxeDwellings | Home</title>
            </Helmet>
    
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className=' text-center mb-6'> 
                   <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img1})`}}>
                   <div className='flex flex-col justify-center h-full'>
                   <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'>Welcome to Exquisite Residences</h3>
                    <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Indulge in exquisite living with our curated collection of luxury estates. Experience opulence, elegance, and sophistication in every residence, meticulously crafted to redefine luxury living at its finest</p>
                   </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'> 
                   <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img2})`}}>
                   <div className='flex flex-col justify-center h-full'>
                   <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl '>Elevate Lifestyle with Luxury Living</h3>
                    <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Discover luxury living with our exquisite estates. Experience elegance and sophistication in every home, crafted to redefine opulent living</p>
                   </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'> 
                   <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img3})`}}>
                   <div className='flex flex-col justify-center h-full'>
                   <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl '>Luxury Living Begins</h3>
                    <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Explore luxury living with our curated estates. Encounter elegance and sophistication in every home, crafted to redefine opulent living</p>
                   </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'> 
                   <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img4})`}}>
                   <div className='flex flex-col justify-center h-full'>
                   <h3 className='lg:text-5xl  text-white font-bold md:text-3xl text-2xl'>Welcome to Opulence</h3>
                    <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Embark on luxury living with our exclusive estates. Encounter elegance and sophistication in every home, meticulously crafted to redefine opulent living.</p>
                   </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'> 
                   <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img5})`}}>
                   <div className='flex flex-col justify-center h-full'>
                   <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'>Welcome to Opulence</h3>
                    <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Embark on luxury living with our exclusive estates. Encounter elegance and sophistication in every home, meticulously crafted to redefine opulent living.</p>
                   </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'> 
                   <div className='bg-green-900 bg-center bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img6})`}}>
                   <div className='flex flex-col justify-center h-full'>
                   <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'>Exclusive Residences</h3>
                    <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Welcome to luxurious living with our handpicked estates. Discover elegance and sophistication in every residence, meticulously designed to redefine opulent living.</p>
                   </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Estates></Estates>
        </div>
        
    );
};

export default Home;
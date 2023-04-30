import {useState,useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

export default function LogoSlider(){

	const [view, setView ] = useState(4)

	 useEffect(() => {
	    const handleResize = () => {
	      if (window.innerWidth < 1024) {
	        setView(3);
	      } else {
	        setView(4);
	      }
	    };
	    handleResize();
	    window.addEventListener('resize', handleResize);
	    return () => window.removeEventListener('resize', handleResize);
	  }, []);

	return(
		<section className="slider  py-4 px-4">
			<div className="md:mx-40">
				<div className="wrapper">

					<Swiper
						modules={[Autoplay]}
						autoplay={{
		                    delay: 1000,
		                    disableOnInteraction: false
		                }}
						spaceBetween={50}
				      	slidesPerView={view}
				      	
					>
					 <SwiperSlide><img src={require('../assets/image/icon/html.png')}  className="w-[8rem] mx-auto"  alt="" /></SwiperSlide>
					 <SwiperSlide><img src={require('../assets/image/icon/css.png')} className="w-[8rem] mx-auto"  alt="" /></SwiperSlide>
					 <SwiperSlide><img src={require('../assets/image/icon/js.png')}  className="w-[8rem] mx-auto" alt="" /></SwiperSlide>
					 <SwiperSlide><img src={require('../assets/image/icon/react.png')}  className="w-[8rem] mx-auto" alt="" /></SwiperSlide>
					 <SwiperSlide><img src={require('../assets/image/icon/laravel.png')} className="w-[8rem] mx-auto"  alt="" /></SwiperSlide>

					</Swiper>
				
				</div>
			</div>
			
		</section>
	)
}
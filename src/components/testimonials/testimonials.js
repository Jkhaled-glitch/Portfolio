import React from 'react'
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import {data} from '../../data'

function Testimonials(){
    const testimonials = data.testimonials;
    return(
        <section id="testimonials">
            <div>
                <h5>Review From clients </h5>
                <h2>Testimonials</h2>
            </div>
            <Swiper className='container testimonials-container mySwiper' 
                    pagination={{clickable:true}} 
                    modules={[Pagination]} 
                    spaceBetween={40} 
                    slidesPerView={1}
                    >
                {
                    testimonials.map(({avtr,name,review},index)=>{
                        return(
                        <SwiperSlide key={index} className='testimonial'>
                            <div className='client-avatar'>
                                <img src={avtr} alt={name}/>
                            </div>
                        <h5 className='client-name'>{name}</h5>
                        <small className='client-review'>{review} </small>
                        </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </section>
    )
}
export default Testimonials
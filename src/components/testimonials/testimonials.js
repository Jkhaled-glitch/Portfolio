import React from 'react'
import './testimonials.css'
import User1 from '../../assets/user1.jfif'
import User2 from '../../assets/user2.jfif'
import User3 from '../../assets/user3.jfif'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

function Testimonials(){
    const Data=[
        {
            avtr:User1,
            name:'user 1',
            review:'Excelent'
        },
        {
            avtr:User2,
            name:'user 2',
            review:'Passable'
        },
        {
            avtr:User3,
            name:'user 3',
            review:'Great'
        }
    ]
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
                    Data.map(({avtr,name,review},index)=>{
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
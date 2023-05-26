import React from 'react'
import './services.css'
import Check from '@mui/icons-material/CheckOutlined';
import {data} from '../../data'
function Services(){
    const services = data.services;
    return(
        <section id='services'>
            <div>
                <h5>What I Offer</h5>
                <h2>Services</h2>
            </div>
            <div className='container services-container'>
             {
                services.map(service=>{
                    return(
                        <article className='services'>
                            <div className='services-head'>
                                <h3>{service.title}</h3>
                            </div>
                            <ul className='services-list'>
                                {
                                service.elements.map(element=>{
                                    return(
                                        <li>
                                            <Check className='services-list-icon'/>
                                            <p>{element} </p>
                                        </li>
                                    )
                                })
                                }   
                            </ul>
                        </article>
                    )
                })
             }
            </div>
        </section>
    )
}
export default Services
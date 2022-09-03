import React from 'react'
import './portfolio.css'
import Img from '../../assets/portfolio1.jpg'
function Portfolio(){
    
    const Data=[
            {
                id:'1',
                image:Img,
                title:'This example 1',
                github:'http://github.com',
                demo:'http://github.com/Alien_pixels'
            },
            {   
                id:'2',
                image:Img,
                title:'This example 2',
                github:'http://github.com',
                demo:'http://github.com/Alien_pixels'
            }
    ]
    
    
    return(
        <section id='portfolio'>
            <div>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>
            <div className='container portfolio-container'>
                {
                Data.map(({id,image,title,github,demo})=>{
                    return(
                        <article key={id} className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio-item-cta'>
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>live Demo</a>
                            </div>
                        </article>
                    )
                })
                }
            </div>
        </section>
    )
}
export default Portfolio
import React from 'react'
import './portfolio.css'

import {data} from '../../data'
function Portfolio(){
    
   
    const projects = data.projects;

    
    
    return(
        <section id='portfolio'>
            <div>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>
            <div className='container portfolio-container'>
              {
                projects.map((project)=>{
                    return(
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>    
                                <img src={project.image} alt={project.title}/>
                            </div>
                            <h3>{project.title}</h3> 
                            
                            <div className='portfolio-item-description'>
                                {project.description}

                            </div>
                                
                            <div className='portfolio-item-cta'>
                                <a href={project.code} className='btn' target='_blank'>Code</a>
                                <a href={project.demo} className='btn btn-primary' target='_blank'>Demo</a>
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
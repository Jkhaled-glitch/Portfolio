import React from 'react'
import './about.css'

import {data} from '../../data'
function About(){
    const cards = data.cards;
    return(
        <section id="about">
            <div>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            </div>
            <div className='container about-container'>
                <div className='about-me' >
                    <img  src={data.userFace} alt={data.userName} />
                </div>
                <div className='about-content'>
                    <div className='about-cards'>
                        {
                            cards.map((card)=>{
                                let Icon = card.icon
                                return(
                                    <article className='about-card'>
                                        <Icon className='about-icon'/>
                                        <h5>{card.title}</h5>
                                        <small>{card.content}</small>
                                    </article>
                                )
                            })
                        }
                        
                       
                    </div>
                    <p>
                        {data.biography}
                    </p>
                    <p>
                      {data.profilDescription}
                    </p>

                    <a href="#contact" className='btn btn-primary m'>Let's Talk</a>
                </div> 
            </div>
        </section>
    )
}
export default About
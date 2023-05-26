import React from 'react'
import './experience.css'
import Check from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import { data } from '../../data'
function Experience(){
    const experiences = data.experiences; 
    return(
        <section id="experiences">
            <div>
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
            </div>
            <div className='container experience-container'>
                {
                    experiences.map((experience)=>{
                        return(
                        <div className='experience-frontend'>
                            <h3>{experience.title}</h3>
                            
                            <div className='experience-content'>
                            { 
                                experience.elements.map((element)=>
                                    {
                                        return(
                                            <article className='experience-details'>
                                                <Check className='experience-detail-icon'/>
                                                <div>
                                                    <h4>{element.title}</h4>
                                                    <small className='text-light'>{element.level}</small>
                                                </div>
                                            </article>
                                        ) 
                                    }
                                )
                            }
                            </div>

                        </div>
                        );
                    })
                }
            </div>
        </section>
    )
}
export default Experience
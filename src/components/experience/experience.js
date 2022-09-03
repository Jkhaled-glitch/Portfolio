import React from 'react'
import './experience.css'
import Check from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
function Experience(){
    return(
        <section id="experiences">
            <div>
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
            </div>
            <div className='container experience-container'>
                <div className='experience-frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience-content'>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>HTML 5</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>CSS 3</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>REACT JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience-backend'>
                    <h3>Backend Development</h3>
                    <div className='experience-content'>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon'/>
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>BASIC</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <Check className='experience-detail-icon' />
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>BASIC</small>
                            </div>
                        </article>
                   </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
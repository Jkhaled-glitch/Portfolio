import React from 'react'
import './services.css'
import Check from '@mui/icons-material/CheckOutlined';
function Services(){
    return(
        <section id='services'>
            <div>
                <h5>What I Offer</h5>
                <h2>Services</h2>
            </div>
            <div className='container services-container'>
                <article className='services'>
                    <div className='services-head'>
                        <h3>UI/UX DESIGN</h3>
                    </div>
                    <ul className='services-list'>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Analyze the user experience </p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Implementation of the interface design</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Improving the disign of a project</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Creation of responsive interfaces with smartphones</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Creation of more harmonieus, fluid and understandable interfaces</p>
                        </li>
                        
                        
                    </ul>
                </article>
                <article className='services'>
                    <div className='services-head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='services-list'>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Build prototypes and user interfaces </p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Program, develop and update websites</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Ensure the proper functioning of the developed platforms</p>
                        </li>
                        
                        <li>
                            <Check className='services-list-icon'/>
                            <p>patience and rigor</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Sense of organization and listening</p>
                        </li>
                        
                    </ul>
                </article>
                <article className='services'>
                    <div className='services-head'>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='services-list'>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>A clear hierarchy of pages</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Simple navigation between pages</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p> have attractive visual pages</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Up-to-date contact information</p>
                        </li>
                        <li>
                            <Check className='services-list-icon'/>
                            <p>Links to your social network accounts</p>
                        </li>
                        
                    </ul>
                </article>
            </div>
        </section>
    )
}
export default Services
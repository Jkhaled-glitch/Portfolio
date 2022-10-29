import React from 'react'
import './about.css'

import Experience from '@mui/icons-material/WorkspacePremiumOutlined';

import User from '@mui/icons-material/GroupOutlined';
import Project from '@mui/icons-material/WorkOutlined';
import Me from '../../assets/me.jpg'

function About(){
    return(
        <section id="about">
            <div>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            </div>
            <div className='container about-container'>
                <div className='about-me' >
                    <img  src={Me} alt="Me" />
                </div>
                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <Experience className='about-icon'/>
                            <h5>Experience</h5>
                            <small>Since 2016</small>
                        </article>
                        <article className='about-card'>
                            <User className='about-icon'/>
                            <h5>Clients</h5>
                            <small>+10 Clients</small>
                        </article>
                        <article className='about-card'>
                            <Project className='about-icon'/>
                            <h5>Projects</h5>
                            <small>+5 Projects+PFE</small>
                        </article>
                    </div>
                    <p>
                        My name is <i><b>Khaled Jouablia</b></i>, I'm  22 years old (born in 1999)
                        I am currently finishing my bachelor’s degree in Business 
                        intelligence at the University of Jendouba. And now I enjoy
                        my summer vacation to learn the JavaScript library "React JS".
                        After obtaining my IT baccalaureate in 2018, I spent
                        3 years at the Faculty of Legal, Economics and Management of 
                        Jendouba until I graduate.
                    </p>
                    <a href="#contact" className='btn btn-primary m'>Let's Talk</a>
                </div> 
            </div>
        </section>
    )
}
export default About
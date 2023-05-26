import React,{useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import EmailIcon from '@mui/icons-material/Email';
import Messenger from '../../assets/messenger.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {data} from '../../data'
function Contact(){

    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wf98quh', 'template_5o4sps6', form.current, 'UcaiqF1j_-e4dqD0O')
        .then((result) => {
          
            alert('Message send successeffully')
            }, 
            (error) => {
                console.log(error.text);
                alert("Error when sending the message!")
            })
        e.target.reset()
    }

    return(
        <section id="contact">
            <div>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>
            <div className='container container-contact'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <EmailIcon className='contact-option-icon'/>
                        <h4>Email</h4>
                        <h5>{data.email}</h5>
                        <a href={"mailto:" + data.email} >Send a message</a>
                    </article>

                    <article className='contact-option'>
                        <div>
                        <img  src={Messenger} className='contact-option-icon messenger' alt="messenger"/>
                        </div>
                        <h4>Messenger</h4>
                        <h5>{data.messenger.label}</h5>
                        <a href={data.messenger.link} target='_blank'>Send a message</a>
                    </article>
                    <article className='contact-option'>
                        <WhatsAppIcon className='contact-option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>{data.whatsApp.tel}</h5>
                        <a href={data.whatsApp.link}>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your E-Mail' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
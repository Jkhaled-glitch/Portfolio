import React from 'react'
import './footer.css'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import Instagram from '@mui/icons-material/Instagram'
import {data} from '../../data'
function Footer(){
    return(
        <footer>
            <a href='npm run build
            ' className='footer-logo'>{data.userName}-{data.lastName}</a>
            <ul className='permalinks'>
                <a href='#'>Home</a>
                <a href='#about'>About</a>
                <a href='#experiences'> Experiences</a>
                <a href='#services'>Services</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#testimonials'>Testimonials</a>
                <a href='#contact'>Contact</a>
            </ul>
            <div className='footer-socials'>
                <a href="http://facebook.com"> <Facebook /> </a>
                <a href="http://instagram.com"> <Instagram /> </a>
                <a href="http://twitter.com"> <Twitter /></a>
            </div>
            <div className='footer-copyright'>
                <small>&copy; {data.userName} tutorials, All rights reserved</small>
            </div>
        </footer>
    )
}
export default Footer
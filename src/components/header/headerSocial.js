import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Github from '@mui/icons-material/GitHub';
import WhatsApp from '@mui/icons-material/WhatsApp';

import './header.css'

function HeaderSocial(){
    return(
        <div className='header-social'>
            <a  href="http://linkedin.com" target="_blank"><LinkedInIcon/></a>
            <a href="http://github.com" target="_blank"><Github/></a>
            <a href="http://facebook.com" target="_blank"><Facebook/></a>
            <a href="http://whatsapp.com" target="_blank"><WhatsApp/></a>
        </div>
    ) 
}
export default HeaderSocial
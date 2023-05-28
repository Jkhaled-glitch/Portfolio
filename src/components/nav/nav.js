import React,{useState} from 'react'
import Home from '@mui/icons-material/Home';
import About from '@mui/icons-material/PersonOutline';
import Experiences from '@mui/icons-material/Book';
import Services from '@mui/icons-material/DesignServices';
import Contact from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import './nav.css'

function Nav(){
    const [activeNav,setActiveNav]=useState("#")

    return(
       <nav>
        <a href="#" className={activeNav==="#"? 'active':''} 
               onClick={()=>setActiveNav("#")} >
               <Home/>
        </a>
        <a href="#about" className={activeNav==="#about"? 'active':''} 
                onClick={()=>setActiveNav("#about")} >
            <About/>
        </a>
        <a href="#experiences" className={activeNav==="#experiences"? 'active':''}
                onClick={()=>setActiveNav("#experiences")}>
            <Experiences/>
        </a>
        <a href="#portfolio" className={activeNav==="#portfolio"? 'active':''}
                onClick={()=>setActiveNav("#portfolio")}>
           <WorkIcon/>
           
        </a>        
        <a href="#services" className={activeNav==="#services"? 'active':''}
                onClick={()=>setActiveNav("#services")}>
            <Services/>
        </a>
        <a href="#contact" className={activeNav==="#contact"? 'active':''}
                onClick={()=>setActiveNav("#contact")}>
            <Contact/>
        </a>
       </nav>
    )
}
export default Nav
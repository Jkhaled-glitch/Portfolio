import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './headerSocial'
import { data } from '../../data'

function Header(){
    return(
        <header>
            <div className="container header-container">
                <h5>Hello I'm </h5>
                <h1>{data.userName} {data.lastName} </h1>
                <h5 className='text-light'>

                {data.profil}
                </h5>
                <CTA/>
                <HeaderSocial/>
                <div className='me'>
                    <img src={data.userFace} alt={data.userName}/>
                </div>
                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header>
    )
}
export default Header
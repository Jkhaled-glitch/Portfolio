import React from 'react'
import './index.css'
import Header from "./components/header/header.js"
import Nav from "./components/nav/nav.js"
import About from "./components/about/about.js"
import Portfolio from "./components/portfolio/portfolio.js"
import Experience from "./components/experience/experience.js"
import Services from "./components/services/services"
import Testimonials from "./components/testimonials/testimonials.js"
import Contact from "./components/contact/contact.js"
import Footer from "./components/footer/footer.js"
function App(){
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Services/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default App
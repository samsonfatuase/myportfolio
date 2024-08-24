import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';
import PIC from '../../assets/PIC.png'

const Hero = () => {
  return (
    <div id='home'  className='hero'>
        <img src= {PIC} alt={Image} />
        <h1> <span>I am FATUASE SAMSON GBENGA,</span> <br/>
          A graphics and frontend developer based in Ado Ekiti
        </h1>
        <p>I engage in online design and also printing of designed work
            with over 5 years experience and also customer friendly
        </p>
        <div className="hero-action">
          <div className="hero-connect">
          <Link
            className='anchor-link'
            to='contact-right'
            smooth={true}
            duration={500}
            offset={-50}
            
          >
            Connect with Me
          </Link>
      
          </div>
          <div className="hero-resume">
          <Link
            className='anchor-link'
            to='about-right'
            smooth={true}
            duration={500}
            offset={-50}
            
          >
            My Resume
            
          </Link></div>

            
        </div>
    </div>
  )
}

export default Hero
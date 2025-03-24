import React from 'react'
import './About.css'
import Profile from '../../assets/Profile.jpg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile} alt={Image} />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>Hello, I'm SAMSON FATUASE, a 30 years old passionate and creative Graphic Designer and Frontend Developer. 
                  I hail from Ogotun EKiti located in EKiti South West Local Government. 
                  With over 3 years of experience in graphic designing and 1 year in frontend development. I have 
                  honed my skills to deliver visually stunning and user-friendly digital experiences.As a Graphic Designer, I've 
                  worked on a diverse range of projects, from branding and print media to digital marketing and UI design. My keen 
                  eye for detail and dedication to crafting compelling visuals have enabled me to create designs that not only look 
                  great but also effectively communicate the intended message.
                  In my journey as a Frontend Developer, I have embraced the challenge of bringing designs to life on the web. 
                  I specialize in HTML, CSS, and JavaScript, and I'm proficient in using frameworks like React to build responsive, 
                  dynamic, and accessible web applications. My design background gives me a unique perspective on frontend development, 
                  ensuring that the user experience is at the forefront of every project I undertake. I am always eager to learn and stay
                  updated with the latest industry trends and technologies. I thrive in collaborative environments and enjoy working 
                  with cross-functional teams to create innovative solutions that exceed client expectations. Let's create something amazing together!</p>
              </div>
              <div className="about-skills">
                <div className="about-skill"><p>corelDRAW</p> <hr style={{width:'95%'}} /></div>
                <div className="about-skill"><p>Photoshop</p> <hr style={{width:'80%'}} /></div>
                <div className="about-skill"><p>Figma</p> <hr style={{width:'70%'}} /></div>
                <div className="about-skill"><p>HTML&CSS</p> <hr style={{width:'50%'}} /></div>
                <div className="about-skill"><p>React Js</p> <hr style={{width:'50%'}} /></div>
              </div>
            </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE AS A GRAPHIC DESINGER</p>
        </div>
        
        <div className="about-achievement">
          <h1>60+</h1>
          <p>PROJECT COMPLETED IN GRAPHICS WORK</p>
         
        </div>
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE AS A FRONTEND DEVELOPER</p>
          
        </div>
        <div className="about-achievement">
          <h1>1</h1>
          <p>PROJECT COMPLETED </p>
        </div>
        
        <div className="about-achievement">
          <h1>45+</h1>
          <p>HAPPY CLEINTS</p>
        </div>

        </div>
        
    </div>
  )
}

export default About
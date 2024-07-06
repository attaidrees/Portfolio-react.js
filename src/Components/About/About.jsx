import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Jack from '../../assets/Jack.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={Jack} alt="" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am an experienced front end web developer with decades of professional experience in 
                        the field. Throughout my career, I had the priveledge of collaborating with prestigieous
                        organizations, contributing to their success and growth. </p>
                    <p>My passion for front end development is not only reflected in my extensive experience
                        but also in dedication and enthusiasm I bring to every project.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                        <div className='about-skill'><p>React Js</p><hr style={{width: "70%"}} /></div>
                        <div className='about-skill'><p>JavaScript</p><hr style={{width: "60%"}} /></div>
                        <div className='about-skill'><p>Next Js</p><hr style={{width: "50%"}} /></div>
                    </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>Years Of Experience</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>20+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About

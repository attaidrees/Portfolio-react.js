import React from 'react'
import './Hero.css'
import Jack from '../../assets/Jack.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={Jack} alt="" />
      <h1><span>I'm Jack Miller,</span> a front end web developer based in USA.</h1>
      <p>I'm a front end web developer from Texas, with more than 10 years of experience with Microsoft,
        Tesla and Apple.</p>
        <div className='hero-action'>
        <div className='hero-connect'>Connect With Me</div>
        <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero

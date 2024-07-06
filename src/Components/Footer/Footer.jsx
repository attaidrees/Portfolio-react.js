import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.jpeg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={logo} alt="" />
                <p>I am a front end web developer in TA, USA  with 10 years of experience in companies like Microsoft, Tesla, Apple.</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter your Email' />
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>Made by Attaullah Web Developer</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

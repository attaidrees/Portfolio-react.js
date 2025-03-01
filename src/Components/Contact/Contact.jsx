import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
            <h1>Let's Talk</h1>
            <p>I'm currently available to talk on new projects, so feel free to send me a message about 
                anything that you want to work on. You can contact me anytime.</p>
                <div className='contacts-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt="" /> <p>contactinfo@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt="" /> <p>TA, United States</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt="" /> <p>+558-368-257</p>
                    </div>
                </div>
        </div>
        <form className='contact-right'>
            <label>Your Name</label>
            <input type='text' placeholder='Enter Your Name' name='name' required></input>
            <label>Your Email</label>
            <input type='email' placeholder='Enter Your Email' name='email' required></input>
            <label>Write Your Message Here</label>
            <textarea name='message' rows="8" placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

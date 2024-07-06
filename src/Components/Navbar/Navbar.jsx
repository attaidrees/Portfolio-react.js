import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.jpeg'
import {Link} from 'react-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {

  const[sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true): setSticky(false);
    })
  },[]);
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
<div className={`navbar ${sticky? 'container' : ''}`}>
      <img src={logo} alt="" />
      <img src={menu_open}  onClick={openMenu} alt=""  className='nav-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-close' />
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About Me</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='mywork' smooth={true} offset={-260} duration={500}>Portfolio</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
      </ul>
      <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar

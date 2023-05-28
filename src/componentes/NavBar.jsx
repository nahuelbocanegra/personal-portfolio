import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {
 
  return (

     <section className='Content-nav'>
      <ul className="NavBar">
        <Link className='item'  to='Main'  spy={true} smooth={true} duration={700} activeClass='active'><i className='bx bx-home' ></i> </Link>
        <Link className='item' to='AbautMe' spy={true} smooth={true} duration={700} activeClass='active'><i className='bx bx-user'></i> </Link>
        <Link className='item' to='Project' spy={true} smooth={true} duration={700} activeClass='active'><i className='bx bx-folder'></i></Link>
        <Link className='item' to='Contact'spy={true} smooth={true} duration={700} activeClass='active'><i className='bx bx-message'></i></Link>
      </ul>
    </section>
  )
}

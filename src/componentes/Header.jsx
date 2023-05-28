import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import Aos from 'aos'
import pdf from "../assets/CV.pdf"

export default function Header() {
  useEffect(()=>{
   Aos.init()
  },[])
  return (
    <div className='cont-header' >
      <div className='header'>
        <Link className='item-header'  to='Contact'  spy={true} smooth={true} duration={700} activeClass='active'><span>Pablo Nahuel</span></Link>
         <a className='btn-header' href={pdf} download="Cv - Pablo Nahuel Bocanegra">CV</a>
      </div>
    </ div>
  )
}

import React, { useState } from 'react'
import Contact from './Contact'
import Project from './Project'
import AbautMe from './AbautMe'
import Tecnology from './Tecnology'

export default function Container() {
  
   const [abautMe,setAbauMe]=useState(false)
   const [project,setProject]=useState(false)
   const [tecnology,setTecnology]=useState(false)
   const [contact,setContact]=useState(false)

  return (
    <div className='container'>
      <ul className='list-nav'>
        <li onClick={()=>{setAbauMe(!abautMe)}}> About Me</li>
        <li onClick={()=>{setProject(!project)}}> Project</li>
        <li onClick={()=>{setTecnology(!tecnology)}}> Tecnology</li>
        <li onClick={()=>{setContact(!contact)}}> Contact</li>
      </ul>

        
      <div className={`${ abautMe? "one":"one a"}`}>
        <span onClick={()=>{setAbauMe(!abautMe)}} className='back'><i class='bx bx-up-arrow-alt'></i></span>
        <AbautMe></AbautMe>
      </div>
      <div className={`${ project? "two":"two b"}`}>
        <span onClick={()=>{setProject(!project)}} className='back'><i class='bx bx-down-arrow-alt'></i></span>
        <Project></Project>
      </div>
      <div className={`${tecnology ? "threa":"threa c"}`}>
        <span onClick={()=>{setTecnology(!tecnology)}} className='back'><i class='bx bx-arrow-back'></i></span>
        <Tecnology></Tecnology>
        </div>
      <div className={`${contact ? "four": "four d"}`}>
        <span onClick={()=>{setContact(!contact)}} className='back'><i class='bx bx-right-arrow-alt'></i></span>
        <Contact></Contact>
      </div>
    </div>
  )
}


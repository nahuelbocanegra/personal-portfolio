import React from 'react'
import { useState } from 'react'

export default function Int() {
    const [int, setInt]=useState(true)
    
  setTimeout(()=>{
    setInt(false)
   },2000)
  return (
    <div className={int? "Intro":"Intro no"}>
        <div className='div-content'>
        <h2 className='text-int porfo'>Portafolio</h2>
        <h3 className='text-int name'>Pablo Nahuel Bocanegra</h3>
        </div>

        
    </div>
  )
}

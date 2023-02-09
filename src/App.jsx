
import './App.css'
import { useState } from 'react'
import Container from './componente/Container'
import Int from './componente/Int'



function App() {
  
  const [ tema,setTema]=useState(false)
 
  return (
  <div className={`App ${ tema ? "Ligth" :""}`}>
    <Int></Int>
    <span className='tema' onClick={()=>{setTema(!tema)}}><i class={`bx bx-${tema? "moon":"sun"}`}></i></span> 
    
    <div className="div-icon">
            <span className='social link'><a href="https://www.linkedin.com/in/nahuel-bocanegra-628260186/" target={"_blank"}><i className='bx bxl-linkedin'></i></a></span>
            <span className='social git '><a href="https://github.com/nahuelbocanegra" target={"_blank"}><i className='bx bxl-github'></i></a></span>
            <span className='social what'><a href="https://wa.me/qr/V57S56YRXWPUB1"><i className='bx bxl-whatsapp'target={"_blank"}></i></a></span>
    </div>
    
    <Container></Container> 
    
    
    
  </div>
  )
}

export default App

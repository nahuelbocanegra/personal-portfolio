import React from 'react'
import html from './svg-tec/html-5.svg'
import boostrap from './svg-tec/bootstrap.svg'
import  js from './svg-tec/javascript-js.svg'
import css  from './svg-tec/css-3.svg'
import git from './svg-tec/git.svg'
import react from './svg-tec/react.svg'
import redux from './svg-tec/redux.svg'
import router from './svg-tec/react-router.svg'



export default function Tecnology() {
  return (
    <>
     <h2 className='title tg'>TECHNOLOGY</h2>
    <div  className='Tecnology' id='Tecnology'>
       <ul className='ul-tecnology' >
         <li>
          <img  className="tec-img" src={html} alt="" /> 
          <span className="tex-title">HTML</span>
          <span  className="text-tec"><p>Código que se utiliza para estructurar y desplegar una página web y sus contenidos</p></span>
         </li>
         <li>
          <img className="tec-img"  src={boostrap} alt="" />
          <span className="tex-title">Bootstrap</span>
          <span className="text-tec"><p>Es un marco de desarrollo front-end gratuito y de código abierto para la creación de sitios web y aplicaciones web</p></span>
         </li>
         <li>
          <img className="tec-img"  src={js} alt="" />
          <span className="tex-title">JavaScript</span>
          <span className="text-tec"><p>Lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas</p></span>
         </li>
         <li>
          <img className="tec-img"  src={css} alt="" />
          <span className="tex-title">CSS</span>
          <span className="text-tec"><p>Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento</p></span>
         </li>
         <li>
          <img  className="tec-img" src={git} alt="" />
          <span className="tex-title">Git</span>
          <span className="text-tec"><p>Es un sistema de control de versiones que realiza un seguimiento de los cambios en cualquier archivos</p></span>
         </li>
         <li>
          <img className="tec-img react"  src={react} alt="" />
          <span className="tex-title">React</span>
          <span className="text-tec"><p>Biblioteca Javascript de código abierto diseñada para crear interfaz facilitando el desarrollo de aplicaciones</p></span>
         </li>
         <li>
          <img className="tec-img"  src={redux} alt="" />
          <span className="tex-title">React Redux</span>
          <span className="text-tec"><p>Permite que los componentes de React lean datos de una tienda Redux y envíen acciones a la tienda para actualizar los datos </p></span>
         </li>
         <li>
          <img className="tec-img"  src={router} alt="" />
          <span className="tex-title">React Router</span>
          <span className="text-tec"><p>Librería de React que nos facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación</p></span>
         </li>
       
        </ul>
    </div>
    
    </>
   
  )
}

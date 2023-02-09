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
          <span>HTML</span>
          <span  className="text-tec"><p>HTML: Código que se utiliza para estructurar y desplegar una página web y sus contenidos</p></span>
         </li>
         <li>
          <img className="tec-img"  src={boostrap} alt="" />
          <span>Bootstrap</span>
          <span className="text-tec"><p>Bootstrap: Es un marco de desarrollo front-end gratuito y de código abierto para la creación de sitios web y aplicaciones web</p></span>
         </li>
         <li>
          <img className="tec-img"  src={js} alt="" />
          <span>JavaScript</span>
          <span className="text-tec"><p>JavaScript: Lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas</p></span>
         </li>
         <li>
          <img className="tec-img"  src={css} alt="" />
          <span>CSS</span>
          <span className="text-tec"><p>CSS: Es un lenguaje de diseño gráfico para definir y crear la presentación de un documento</p></span>
         </li>
         <li>
          <img  className="tec-img" src={git} alt="" />
          <span>Git</span>
          <span className="text-tec"><p>Git: Es un sistema de control de versiones que realiza un seguimiento de los cambios en cualquier archivos</p></span>
         </li>
         <li>
          <img className="tec-img react"  src={react} alt="" />
          <span>React</span>
          <span className="text-tec"><p>React: Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario para facilitar el desarrollo de aplicaciones</p></span>
         </li>
         <li>
          <img className="tec-img"  src={redux} alt="" />
          <span>React Redux</span>
          <span className="text-tec"><p>React Redux: Permite que los componentes de React lean datos de una tienda Redux y envíen acciones a la tienda para actualizar los datos </p></span>
         </li>
         <li>
          <img className="tec-img"  src={router} alt="" />
          <span>React Router</span>
          <span className="text-tec"><p>React Router: Librería de React y que nos facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación</p></span>
         </li>
       
        </ul>
    </div>
    
    </>
   
  )
}

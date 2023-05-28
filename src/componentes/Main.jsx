import React from 'react'
import Header from "./Header"
import astronauta from '../assets/img/astronauta'
import {TypeAnimation} from "react-type-animation"


export default function Main() {
 
  return (
    <section className='section'id='Main'>
       <Header></Header>
       <section className='section-main'>
        <article className='article-inf'>
          <div data-aos="fade-right" className="content-AbautMe-main"data-aos-duration="1500">
            <div className='cont-text-main'>
            <p className="Abaut-me">Hola soy :</p>
            <p className="title-abaut"><TypeAnimation sequence={[
              'Front-End Developer',
              2000,
              'Back-End Developer',
              2000,
              'Full-Stack Developer',
              2000,
              
            ]}
            speed={70} 
            repeat={Infinity}
            /></p>


            </div>
            
            <p className='Abaut-me-text'>Poseo excelentes habilidades en el campo de la programación,
            soy una persona que siempre está dispuesto a aprender y busca superarse a sí mismo.</p>
          </div>
          <div className='img-cont' data-aos="fade-left" data-aos-duration="1500">
            <img src={astronauta.astroHola} alt="" />
          </div>
        </article>

        <article className='article-social' 
       >
          <a className='btn-main' href="https://github.com/nahuelbocanegra" target={"_blank"}>
            <i className="bx bxl-github"></i>
          </a>
          <a className='btn-main'
            href="https://www.linkedin.com/in/nahuel-bocanegra-628260186/"
            target={"_blank"}>
            <i className="bx bxl-linkedin"></i>
          </a>
        </article>
       
        </section>

      
    </section>
  )
}
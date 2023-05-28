import React, { useState } from 'react'
import { useEffect } from 'react';
import img from '../assets/img/img'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import  AOS from "aos";
import 'aos/dist/aos.css';
import Tecnology from "./Tecnology"


export default function Project() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  
  return (
    <section className='section' id='Project'>
    <Swiper 
     effect={"cube"}
     grabCursor={true}
     cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }}
    pagination={true}
    modules={[EffectCube, Pagination]}
    className="mySwiper cube"
    data-aos="zoom-in" 
    data-aos-duration="2000"
    >
      <SwiperSlide  className='BG'>
        
        
        <a  href='https://resonant-pasca-582aa6.netlify.app/' target={"_blank"}> <img className='img'  src={img.Ecomerc} alt="" /> </a>
        <div className='container-project' >
          <p>Ecommerce : Desarrollado con Bootstrap React Js, Axios, React Router, Redux, Css</p>
       </div>
      </SwiperSlide>
      <SwiperSlide className='BG'>
        
        
         <a href='https://resplendent-malasada-a515e0.netlify.app/' target={"_blank"}><img className='img' src={img.morde} alt="" /></a>
          <div className='container-project' >
          <p>Rick and Morty : Desarrollado con React Js, Axios, React Router, Redux, Css</p> 
       </div>
      
      </SwiperSlide>
      <SwiperSlide className='BG'>
        
        
        <a href="https://cerulean-axolotl-2b1e45.netlify.app/" target={"_blank"}>
          <img className='img' src={img.EcomerVanilla} alt="" />
        </a>
        <div className='container-project' >
          <p>Ecommerce : Desarrollado con HTML,Javascript,Css</p>
          
          </div>
        
      </SwiperSlide>
      <SwiperSlide className='BG'>
        <a href="https://main--astonishing-palmier-a435ed.netlify.app/" target={"_blank"}>
          <img className='img' src={img.calculadora} alt="" />
        </a>
         <div className='container-project' >
          <p>Calculadora:Desarrollado con React,Javascript,Css,HTML</p>
       </div>
      
      </SwiperSlide>

      <SwiperSlide className='BG'>
        
        
        <a href="https://shimmering-madeleine-e67ce6.netlify.app/" target={"_blank"}>
          <img className='img' src={img.wheater} alt="" />
        </a>
         <div className='container-project' >
          <p>Weather App:  Desarrollado con React Js, Axios, Css</p>
          
       </div>
      
      </SwiperSlide>
      <SwiperSlide className='BG'>
        
        
        <a  href='https://classy-wisp-22fc57.netlify.app/' target={"_blank"}><img className='img' src={img.pokeappi} alt="" /></a>
         <div className='container-project' >
          <p>  Pokedex : Desarrollado con React Js, Axios, React Router, Redux, Css</p>
       
       </div>
      
      </SwiperSlide>
        
        
      <SwiperSlide className='BG'>
        <a href="https://clinquant-chaja-f0921e.netlify.app/" target={"_blank"}>

          <img className='img' src={img.random} alt="" />
        </a>
         <div  className='container-project' >
          <p> Random Phrase: Desarrollado con React Js, Axios,Css,HTML</p>
          
       </div>
      
    
      </SwiperSlide>
        
        
  
       
    </Swiper>

    <Tecnology></Tecnology>

    
    </section>
  )
}

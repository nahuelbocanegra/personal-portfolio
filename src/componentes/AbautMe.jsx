import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import astronauta from "../assets/img/astronauta"

export default function AbautMe() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section" id="AbautMe" >    
    
    <div className='img-cont'>
      <img data-aos="fade-right" data-aos-duration="1000" src={astronauta.Okey} alt="" />
      
    </div>
      <div className='Certificate'>
              <a  className='title ' data-aos="zoom-in-up"  data-aos-delay="100" data-aos-duration="1500" target={"_blank"}  href="https://certificates.academlo.com/en/verify/93423492625042">Full Stack Web</a>
              <a className='title ' data-aos="zoom-in-up"  data-aos-delay="300" data-aos-duration="1500" target={"_blank"}  href="https://certificates.academlo.com/en/verify/78976750552018">Back-End</a>
              <a  className='title 'data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1500" target={"_blank"} href="https://certificates.academlo.com/en/verify/60853227272575">Front-End</a>
              <a  className='title 'data-aos="zoom-in-up"  data-aos-delay="400" data-aos-duration="1500" target={"_blank"} href="https://certificates.academlo.com/en/verify/15817122734916">Programming Fundamentals </a>
      </div>

    </section>
  );
}

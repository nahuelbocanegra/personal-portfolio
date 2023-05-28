import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import  AOS from "aos";
import 'aos/dist/aos.css';


export default function Contact() {
  const { register, handleSubmit,reset } = useForm();
  const submit = data => {
		console.log(data)
    reset(defaultValues); //
}
const defaultValues = {email: "", text: ""}
useEffect(()=>{
  AOS.init();
},[])

  return (
    
    <section className="section" id="Contact">
      <div className="contact-gmail" >
        <div className="Text-contact-cont " data-aos="fade-right">
        <h4 className="text-contact-uno dy">Get in touch</h4>
          <h2 className="text-contact-dos dy">
             Let´s in work     <br />  together
          </h2>
          
        </div>
        <div className="contact" >
           <form  className="formulario" data-aos="fade-left" onSubmit={handleSubmit(submit)}>
            <input className="inp" type="text" id="name-input"  placeholder="Your name" {...register("name")} />
            <input  className="inp" type="mail" id="asunto-input"  placeholder="Your email" {...register("asunto")} />
            <textarea
              className="text-area inp"
              type="text"
              placeholder="Your message"
              {...register("text")}
            />
            <button className="button-submit">Send message</button>
        </form> 
        </div>
      </div>
  
    </section>
  );
}

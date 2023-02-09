import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit,reset} = useForm();
  const defaultValues = {
    name:"",
    email: "",
    textarea:"",
  } 
  const submit = data => {
		console.log(data)
    reset(defaultValues);
  }  

  return (
    
    <div className='contact'>
      <h2 className='title cn'>CONTACT</h2>
      
    <div className='div-form'>
        <form className='contact-form' onSubmit={handleSubmit(submit)}>
          <div>
            <h2>Contact Form</h2>
          </div>
          <div  className='fr'>
          <label  className='label' htmlFor='name-input'>Name</label>
						<input type='name' id='name-input' {...register("name")} />
          </div>
				<div className='fr'>
						<label className='label'  htmlFor='email-input'>Email</label>
						<input type='email' id='email-input' {...register("email")} />
				</div>
				<div className='textarea fr'>
           <label htmlFor='text-input'>Message</label>
						<textarea type='text' id='text-input' {...register("textarea")} />
				</div>
          <button className='form-button' type='submit'>Send Message</button>
		</form>
        </div>
        
    </div>
    
  )
}

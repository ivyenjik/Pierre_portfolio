import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log('Email sent successfully !', response);
        reset();
      })
      .catch((error) => {
        console.error('Error when sending email :', error);
      });
     

  };

  return (
    <div className="contact-form-container" id="contactme">
        <h3 className="about-me-title pt-5 text-center">Contact Me</h3>
		<p className="why text-center   ">Lets keep in touch </p>
		<div className="title-underline"></div>
        <h1 className='pt-5 '>Get In Touch</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form ">
        <input type="text" placeholder="Your name..." {...register('name', { required: true })} />
        <input type="email" placeholder="Your email..." {...register('email', { required: true })} />
        <textarea placeholder="Your message..." {...register('message', { required: true })}></textarea>
        <button type="submit">Send  <span className="fa fa-paper-plane text-light"></span></button>
      </form>
    </div>
  );
};

export default ContactMe;

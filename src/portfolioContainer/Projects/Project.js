import React from 'react'
import './Project.css'

export default function Project() {
	return (
		<div className="about-me-container bg-light" id="projects">
			<h3 className="about-me-title pt-5">Projects</h3>
			<p className="why">A look at my projects </p>
			<div className="title-underline"></div>
            <div className='row offset-lg-3 pt-5 pb-5'>
                <div className="col-lg-4 col-sm-5">
			        <img className='img-fluid project-img' src={require ('../../assets/home/todo.jpg')} 
                         alt="No Internet connection"/>
                    <p className='project-description pt-3'>The to-do list application is a digital tool designed 
                        to help users organise, manage and track their daily, 
                        weekly or monthly tasks effectively.</p>
                        <a href='https://github.com/pierre265/To-Do'><button className='btn button mb-3'> View project</button></a>
		        </div>
                <div className="col-lg-4 col-sm-5">
			        <img className='img-fluid project-img' src={require ('../../assets/home/school.jpeg')} 
                         alt="No Internet connection"/><p className='project-description pt-3'>A school management project, teachers to
                         add student grades, modify student grades, manage students by class, ...</p>
                    <a href='https://github.com/pierre265/school_manager'><button className='btn button mb-3'> View project</button></a>
		        </div>
            </div>
			 
		</div>
	)
}
import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <>
      <div className='container'>
        <h1 className='project-head'>Projects</h1>
        <div className='row'>
          <div className='col-md-6 carousel-main'>
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h5 className='text-center project-name'>Collection Of Watches</h5>
                  <p className='text-center description'>The "Collection of Watches" project is e-commerce website 
                  that allow users to browse and purchase a variety of watches online. The website features a variety
                  of watches brands, styles, and prices.</p>
                  <span className='project-lang'>React.Js, BootStrap, JavaScript, HTML & CSS</span>
                </div>

                <div className="carousel-item">
                  <h5 className='text-center project-name'>Portfolio</h5>
                  <p className='text-center description'>My portfolio showcases a variety of projects that demonstrate my 
                  ability to design and implement modern web interfaces, solve complex problems, and continually learn
                  new technologies.</p>
                  <span className='project-lang'>React.Js, BootStrap, JavaScript, HTML & CSS</span>
                </div>
          
                <div className="carousel-item">
                  <h5 className='text-center project-name'>To-Do App</h5>
                  <p className='text-center description'>A simple and intuitive To-Do app designed to help users manage 
                  tasks efficiently. It features task creation, editing, and deletion, with a clean, user-friendly 
                  interface that ensures a seamless experience for organizing daily activities.</p>
                  <span className='project-lang'>React.Js, BootStrap, JavaScript, HTML & CSS</span>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='project-img'>
              <img src='https://cdn3d.iconscout.com/3d/premium/thumb/chica-haciendo-compras-en-linea-4657921-3890253.png?f=webp' alt='Not found'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;

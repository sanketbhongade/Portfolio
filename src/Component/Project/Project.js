import React from 'react';
import './Project.css';
import ProjetAnimation from '../../assests/image/projectanimated.webp';

const Project = () => {
  return (
    <>
      <div className='container'>
          <div className='row d-flex project-info'>
              <div className='col-md-4'>
                  <div className='project'>
                    <div className='project-head'>
                      <h1 className='project-head1'>Project</h1>
                      <h3 className='project-head2'>Collection of Watches</h3>
                    </div>
                    <div className='project-description'>
                      <p>E-commerce website, allow user to browse and purches a variety of watches online, 
                        variety of branded watches, styles and user-friendly shopping experience.</p>
                    </div>
                    <div className='project-lang'>
                      <p>React.Js, Bootstrap5, JavaScript, HTML5 & CSS3</p>
                    </div>
                  </div>
              </div>

              <div className='col-md-4'>
                <div className='project-animated'>    
                  <img className='img-animated' src={ProjetAnimation} alt='Not Found'/>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Project
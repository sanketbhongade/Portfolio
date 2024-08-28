import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <>
        <div className='container'>
            <div className='row service-row'>
                <div className='row1 col-md-4'>
                    <div className='num'>01</div>
                    <h2 className='head-text mt-2'>Web Development</h2>
                    <p className='text'>I'm a skilled Frontend Developer with expertise in React.Js, JavaScript, HTML & CSS, BootStrap and Tailwind CSS.</p>
                </div>

                <div className='row2 col-md-4'>
                    <div className='num'>02</div>
                    <h2 className='head-text mt-2'>UI/UX Design</h2>
                    <p className='text'>Making an application with frontend development with an interactive and user experiance.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services

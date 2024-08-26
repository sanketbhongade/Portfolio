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
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipis occ</p>
                </div>

                <div className='row2 col-md-4'>
                    <div className='num'>02</div>
                    <h2 className='head-text mt-2'>UI/UX Design</h2>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipis occ</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services

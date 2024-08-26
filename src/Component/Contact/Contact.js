import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='container'>
        <div className='contact'>
          <div className='row'>
            
            <div className='col-md-6 contact-info'>
              <form >
                <h4 className='contact-head1 text-center'>Let's work together</h4>
                <h5 className='contact-head2 text-center'>Create an interactive web application</h5>
              
                <div className='name-text'>
                  <input type='text' placeholder='First name' className='name-text1 rounded'/>
                  <input type='text' placeholder='Last name' className='name-text1 rounded'/>
                </div>

                <div className='contact-text'>
                  <input type='email' placeholder='Email address' className='contact-text1 rounded'/>
                  <input type='text' placeholder='Phone number' className='contact-text1 rounded'/>
                </div>

                <select className='sel-option rounded'>
                  <option>Select</option>
                  <option>Web Development</option>
                  <option>UI & UX Design</option>
                </select>

                <div className='textarea'>
                  <input type='text' placeholder='Type your messege here...' className='text-area rounded' maxLength={1000}/>
                </div>

                <button className='btn btn-success submitBtn'>Send me</button>
              </form>
            </div>
            

            <div className='col-md-6 contact-msg'>
              <div className='contact-details'>
                
                <div className='email-add'>
                  <i className='bi bi-envelope fs-3'></i>
                  <span className='email-text'>sanketbhongade01@gmail.com</span>
                </div>

                <div className='phone-no'>
                  <i className='bi bi-phone fs-3'></i>
                  <span className='phone-text'>+91 7066545284</span>
                </div>
              
                <div className='address'>
                  <i className='bi bi-geo-alt fs-3'></i>
                  <span className='add-text'>Pune, Maharashtra, India</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
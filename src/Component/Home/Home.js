import React from 'react';
import './Home.css'
import homeImage from "../../assests/image/myImage.jpg"


const Home=()=>{
    return (
        <>
           <div className="container">
                <div className="home-main row">
                    <div className="col-md-5 text mt-2">
                        <div className="text d-grid">
                            <h1 className="text1 text-center fontfamily2">Hello, I'm Sanket Bhongade</h1>
                            <h3 className="text2 text-center fontfamily3 mt-3">FRONTEND DEVELOPER</h3>
                        </div>
                        <div className='text-summary text-start mt-4'>
                            <p className='text-summary2 '>As a frontend developer, my experties lies in creating an interactive and user experience web application.
                                Specialize in using cutting-edge technologies to produce high-quality web application. Specifically, I have 
                                strong hands-on experience of React.Js, Redux, JavaScript, Tailwind, Bootstrap5, &
                                HTML5 and Css3
                            </p>
                            <div className='icons text-center mt-3'>
                                <button className='btn'>DOWNLOAD CV</button>
                                <a href='https://linkedin.com/in/sanket-bhongade-a736b12b6' className='icons text-decoration-none me-3'>
                                    <i className='bi bi-linkedin fs-2'></i>
                                </a>
                                <a href='https://github.com/sanketbhongade' className='icons text-decoration-none me-3'>
                                    <i className='bi bi-github fs-2'></i>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-5'>
                        <div className='img'>
                            <img  className='img1' src={homeImage} alt='Not found'/>
                        </div>

                    </div>
                </div>   
           </div>
        </>
    )
}

export default Home;
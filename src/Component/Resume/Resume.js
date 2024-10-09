import React, { useState, useEffect } from 'react';
import './Resume.css';
import HTML5Img from '../../assests/image/html5.png';
import CSS3Img from '../../assests/image/css3.png';
import JSImg from '../../assests/image/javascript.webp';
import BootstrapImg from '../../assests/image/bootstrap5.png';
import ReactJSImg from '../../assests/image/react.js.png';
import TailwindImg from '../../assests/image/tailwind.png';

const Resume = () => {
    const [visibleSection, setVisibleSection] = useState('experience');

    const handleSectionClick = (section) => {
        setVisibleSection(section);
    };

    useEffect(() => {
    }, []);

    return (
        <>
        
            <div className='container'>
                <div className='row resume-display'>
                    <div className='col-md-5 button-class'>
                        <div>
                            <button 
                                onClick={() => handleSectionClick('experience')} 
                                className={`button rounded ${visibleSection === 'experience' ? 'active' : ''}`}>
                                Experience
                            </button>
                        </div>
                        <div className='mt-4'>
                            <button 
                                onClick={() => handleSectionClick('education')} 
                                className='button rounded'>
                                Education
                            </button>
                        </div>
                        <div className='mt-4'>
                            <button
                                onClick={()=> handleSectionClick('skills')}
                                className='button rounded'>
                                Skills
                            </button>
                        </div>
                        <div className='mt-4'>
                            <button
                                onClick={()=>handleSectionClick('about')}
                                className='button rounded'>
                                About Me
                            </button>
                        </div>
                    </div>
                    <div className='col-md-5 display-content'>
                        {visibleSection === 'experience' && (
                            <div className='experience-btn'>
                                <div className='exp'>
                                    <h3 className='exp-head'>Internship</h3>
                                    <p className='exp-text'>
                                       <h4 className=" mt-2"> GloriaVita CraftTech Solution</h4>
                                    </p>
                                    <p className='exp-head'>
                                        <h5 className='text mt-2 fontfamily3'>Frontend Developer Intern (07/2024 - 10/2024)</h5>
                                    </p>
                                    <p className='text mt-1 w-100' style={{color:"gray"}}>
                                        Assisted in developing and optimizing responsive web applications using HTML, CSS, and JavaScript. Contributed
                                        to UI/UX design implementation and code reviews, and gained experience with frameworks like React.Js .
                                        Collaborated with the development team to enhance website performance and ensure cross-browser
                                        compatibility.
                                    </p>
                                </div>
                            </div>
                        )}
                        {visibleSection === 'education' && (
                            <div className='Education-btn'>
                                <div className='edu'>
                                    <h3 className='edu-head'>Education</h3>
                                    <div className='edu-info'>
                                        <h2 className='edu-head2 fontfamily2'>Bachelor of Computer Application</h2>
                                        <p className='edu-year'>2022</p>
                                        <ul className='edu-name'>
                                            <li>Sant Gadge Baba Amravati University</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {visibleSection === 'skills' &&(
                            <div className='skills-btn'>
                                <div className='skills'>
                                    <h3 className='skills-head'>Skills</h3>
                                    <div className='skills-img row'>
                                        <div className='card-img d-flex'>
                                            <div className='html-logo m-2'>
                                                <img src={HTML5Img} alt='Not Found' className='img card'/>
                                                <div className='overlay'>
                                                    <div className='img-text'>HTML5</div>
                                                </div>
                                            </div>
                                            <div className='css-logo m-2'>
                                                <img src={CSS3Img} alt='Not Found' className='img card' />
                                                <div className='overlay'>
                                                    <div className='img-text'>CSS3</div>
                                                </div>
                                            </div>
                                            <div className='js-logo m-2'>
                                                <img src={JSImg} alt='Not Found' className='img card'/>
                                                <div className='overlay'>
                                                    <div className='img-text'>JavaScript</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-img2 mt-2'>
                                            <div className='bs-logo m-2'>
                                                <img src={BootstrapImg} alt='Not Found' className='img card'/>
                                                <div className='overlay'>
                                                    <div className='img-text'>Bootstrap5</div>
                                                </div>
                                            </div>
                                            <div className='react-logo m-2'>
                                                <img src={ReactJSImg} alt='Not Found' className='img card'/>
                                                <div className='overlay'>
                                                    <div className='img-text'>React.Js</div>
                                                </div>
                                            </div>
                                            <div className='tailwind-logo m-2'>
                                                <img src={TailwindImg} alt='Not Found' className='img card'/>
                                                <div className='overlay'>
                                                    <div className='img-text'>Tailwind</div>
                                                </div> 
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {visibleSection === 'about' && (
                            <div className='about-btn'>
                                <div className='about'>
                                    <h3 className='about-head'>About Me</h3>
                                    <div className='mt-5'>
                                        <p className='about-info'>
                                            My name is Sanket Bhongade and I am an inventive Frontend Developer
                                            with a Bachelor of Computer Application. Specializing in HTML5, CSS3, 
                                            JavaScript, React.Js, Redux, and CSS framework like Bootstrap5 and Tailwind.
                                            I am detail-oriented and a team player, and I create beautiful, responsive
                                            user interfaces.
                                        </p>
                                        <div className='about-info2'>
                                            <span className='cont-no'>
                                                <i className='bi bi-phone'>  +91-7066545284</i>
                                            </span>
                                            <span className='email'>
                                                <i className='bi bi-envelope'>  sanketbhongade01@gmail.com</i>
                                            </span>
                                        </div>
                                        <div className='about-info3 mt-3'>
                                            <span className='location'>
                                                <i className='bi bi-geo-alt'>  Pune, Maharashtra, India</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;
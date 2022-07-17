import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const About = () => {
    return (<>
        <div id="header" className="d-flex flex-row align-items-center">

            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-10 mx-auto my-5'>
                        <div className='row'>
                            <div className='col-lg-5 order-2 order-lg-1 mx-auto'>
                                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className='mx-5 my-5 img-about ' />
                            </div>
                            <div className='col-md-5 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column text-contact'>
                                <p>Who Iam <HorizontalRuleIcon /></p>
                                <h3>About me</h3>
                                <br />
                                <p>I’m Oluwakemi Adeleke, a professional and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.</p>
                                <p>I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie</p>
                                <p>Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.
                                </p>
                                {/* <NavLink className="btn btn-outline-primary" exact to="/contact" element={<About />}>About Me</NavLink> */}
                                <div className='d-flex justify-content-center'> <button><NavLink exact to="/contact" element={<About />}>Contact Me</NavLink></button>

                                </div> </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default About;
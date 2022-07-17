import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import Contact from './Contact';
const Home = () => {
    return (
        <><div id="header" className="d-flex flex-row align-items-center">

            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column text'>
                                <p>HI THERE 👋 I'M</p>

                                <h1>Ekansh</h1>
                                <h1>Singh</h1>
                                <h2>REACT-JS BASED WEB DEVELOPER</h2>
                                <br />
                                {/* <NavLink className="btn btn-outline-primary" exact to="/contact" element={<Contact />}>Contact Me</NavLink> */}
                                <div className='d-flex justify-content-center'> <button><NavLink exact to="/contact" element={<Contact />}>Contact Me</NavLink></button>

                                </div> </div>
                            <div className='col-lg-6 order-2 order-lg-2'>
                                <img id="animated" src="https://www.kisworks.com/assets/img/reactjs.png" alt="..." className='mx-5 my-5 img-home' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Home;

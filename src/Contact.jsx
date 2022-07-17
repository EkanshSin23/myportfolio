import React, { PureComponent } from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Contact = () => {
    return (<>
        <div id='header' className="d-flex flex-row align-items-center">
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-10 mx-auto d-flex justify-content-center flex-column mt-2 text-service text-contact text-center'>
                        <p className='text-center'>Contact Me<HorizontalRuleIcon /></p>
                        <h2 className='text-center'>Get in touch</h2>
                        <br />
                        <p>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
                        <div className='row'>
                            <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1  my-5 text'>
                                <h5><span className='text-start'><LocationOnIcon /> </span>Moradabad, UttarPradesh, India</h5>
                                <h5><span > <EmailIcon /> </span>ekanshsin232@gmail.com</h5>
                                <h5><span > <LocalPhoneIcon /></span> +91 7618221542</h5>
                            </div>
                            <div className='col-md-4 pt-5 pt-lg-0 order-1 order-lg-2  mx-auto my-5 text'>
                                <div className="mb-3">

                                    <div><input type="text" className="form-control my-1" id="exampleFormControlInput1" placeholder="Enter Your Fullname" /></div>
                                    <div className='d-flex flex-row ' > <input type="email" className="form-control mx-1 mt-2" id="exampleFormControlInput1" placeholder="Email" />
                                        <input type="number" className="form-control mx-1 mt-2" id="exampleFormControlInput1" placeholder="Phone Number" /></div>
                                </div>
                                <div className="mb-3">

                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Your Message'></textarea>
                                </div>
                                <div className='d-flex justify-content-center'><button>Submit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Contact;
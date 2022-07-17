import React, { PureComponent } from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const Service = () => {
    return (<>
        <div id='header' className="d-flex flex-row align-items-center">
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-10 mx-auto d-flex justify-content-center flex-column mt-5 text-service'>
                        <p className='text-center'>What I do <HorizontalRuleIcon /></p>
                        <h2 className='text-center'>My Service</h2>
                        <div className='row'>
                            <div className='col-3 mx-auto my-5 p-5 order-1 order-lg-1 card-service'>
                                <div><img className="img-service" src="https://www.kemiadeleke.com/media/react-logo.svg" alt="..." />
                                </div>
                                <br />
                                <h5>REACT</h5>
                                <br />
                                <p>I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.</p>
                            </div>
                            <div className='col-3 my-5 mx-auto p-5 order-1 order-lg-2 card-service'>
                                <div> <img className="img-service" src="https://www.kemiadeleke.com/media/brackets.svg" alt="" />
                                </div>
                                <br />
                                <h5>WEBSITE DEVELOPEMENT</h5>
                                <br />
                                <p>I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
                            </div>
                            <div className='col-3 mx-auto my-5 p-5 order-1 order-lg-3 card-service'>
                                <div>  <img className="img-service" src="https://www.kemiadeleke.com/media/digital-marketing.svg" alt="" /></div>

                                <br />
                                <h5>DIGITAL MARKETTING</h5>
                                <br />
                                <p>I identify and evaluates new digital technologies and use web analytics tools to measure site traffic to better optimize marketing campaigns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Service;
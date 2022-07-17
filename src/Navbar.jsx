import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const f = '<'
    const l = '/>'
    return (<>
        <div className='container-fluid ' id="naa">
            <div className='row'>
                <div className='col-10 mx-auto'>


                    <nav className="navbar navbar-expand-lg  navbar-fixed-top" >
                        <div className="container-fluid">
                            <NavLink className="navbar-brand " to="/">{f}<AcUnitIcon />{l}</NavLink>
                            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <MenuIcon />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>


    </>);

}
export default Navbar;
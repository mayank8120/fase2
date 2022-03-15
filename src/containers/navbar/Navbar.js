import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import menuIcon from '../../assets/img/open-menu.svg'
import './navbar.css';

const Navbar = () => {
    const [navlinkclick, setNavlinkclick] = useState(false);

    const openNav = () => {
        setNavlinkclick(!navlinkclick);
    }
    // console.log(navlinkclick);
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} />WHA
                    <img src={menuIcon} onClick={openNav} />
                </div>
                <div className="Toggle">
                    <button className="c-header-toggler ml-md-3 d-lg-none" type="button"><span className="c-header-toggler-icon"></span></button>
                </div>
                <div className="header-nav">

                </div>
            </div>
            <div className="c-wrapper">
                <div className="c-body">
                        <div className="c-main">
                            <div className="container-fluid">
                            <div className="row">
                {
                    navlinkclick == false ?
                        null
                        :
                        <div className="col" >
                            <h2>col 1</h2>
                            <p>Some text..</p>
                        </div>
                }

                <div className="col" >
                    <h2>col 2</h2>
                    <p>Some text..</p>
                </div>
            </div>
                            </div>
                        </div>
                </div>
            </div>
        
        </>
    )
}

export default Navbar;
import React from 'react';
import {Navbar,Nav, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Assets Include
import '../topbar/topbar.scss';
import logo from '../../../assets/front/images/colored_logo.svg';
// Assets Include End

// Component Include
import FrontSideBarMenu from '../sidebar';
import AuthComponent from '../components/AuthComponent';
// Component Include End


function RegisterTopbarHeaderComponent(){

    
    return(
        <>
            <Navbar sticky="top" style={{borderBottom:'2px solid #ffffff'}}>
                <div className="nav_container lg_screen_menu">
                    <Row className="align-items-center justify-content-between">
                        <div className="col-3 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt=""  />
                            </NavLink>
                        </div>
                        <div className="col-4 my-2">
                            <Nav className="justify-content-md-end justify-content-center align-items-center">
                                <NavLink className="nav-link list_your_space" to="/list-your-space">List your space</NavLink>
                                <AuthComponent/>
                                <FrontSideBarMenu/>
                            </Nav>
                        </div>
                    </Row>
                </div>


                <div className="nav_container sm_screen_menu">
                    <Row className="align-items-center justify-content-between">
                        <Col className="col-12 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt=""  />
                            </NavLink>
                            <span  className="mob_toggler">
                                <FrontSideBarMenu />
                            </span>
                        </Col>
                    </Row>
                </div>
            </Navbar>
        </>
    )
}


export default RegisterTopbarHeaderComponent;
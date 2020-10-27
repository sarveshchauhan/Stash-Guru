import React from 'react';
import {Navbar,Nav, Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/front/images/colored_logo.svg';


function UserTopbarHeaderComponent(){   
    return(
        <>
            <Navbar sticky="top" style={{borderBottom:'2px solid #00000008'}}>
                <div className="nav_container lg_screen_menu">
                    <Row className="align-items-center justify-content-between">
                        <div className="col-3 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt=""  />
                            </NavLink>
                        </div>
                        <div className="col-4 my-2">
                            <Nav className="justify-content-md-end justify-content-center align-items-center">
                                <NavLink className="nav-link login_signup_btn" to="/login">Lorem ipsum</NavLink>
                            </Nav>
                        </div>
                    </Row>
                </div>
            </Navbar>
        </>
    )
}


export default UserTopbarHeaderComponent;
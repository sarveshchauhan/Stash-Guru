import React,{useState,useEffect} from 'react';
import {Navbar,Nav, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Assets Include
import '../topbar/topbar.scss';
import logo from '../../../assets/front/images/colored_logo.svg';
// Assets Include End

// Component Include
import SearchComponent from '../components/SearchCompo';
import FrontSideBarMenu from '../sidebar';
// Component Include End


function PageTopbarHeaderComponent(){

    
    return(
        <>
            <Navbar sticky="top">
                <div className="nav_container">
                    <Row className="align-items-center">
                        <Col md={3} lg={4} className="text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} />
                            </NavLink>
                            <span  className="mob_toggler">
                                <FrontSideBarMenu />
                            </span>
                        </Col>
                        <Col md={5} lg={4}>
                            <Nav className="top_search mx-auto justify-content-center my-sm-2">
                                <SearchComponent/>
                            </Nav>
                        </Col>
                        <Col md={4} lg={4} className="menu_hidden_sm_screen my-2">
                            <Nav className="justify-content-md-end justify-content-center align-items-center">
                                <NavLink className="nav-link list_your_space" to="/">List your space</NavLink>
                                <NavLink className="nav-link login_signup_btn" to="/">Login/SignUp</NavLink>
                                <FrontSideBarMenu/>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </Navbar>
        </>
    )
}


export default PageTopbarHeaderComponent;
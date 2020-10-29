import React from 'react';
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Assets Include
import '../topbar/topbar.scss';
import logo from '../../../assets/front/images/colored_logo.svg';
// Assets Include End

// Component Include
import SearchComponent from '../components/SearchCompo';
import FrontSideBarMenu from '../sidebar';
import AuthComponent from '../components/AuthComponent';
// Component Include End


function PageTopbarHeaderComponent(){

    
    return(
        <>
            <Navbar className="SearchListNavbar">
                <div className="lg_screen_menu w-100">
                    <Container fluid className="align-items-center justify-content-between px-0">
                        <div className="col-3 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo}  alt="" />
                            </NavLink>
                        </div>
                        <div className="col-4 my-2">
                            <Nav className="justify-content-md-end justify-content-center align-items-center">
                                <NavLink className="nav-link list_your_space" to="/list-your-space">List your space</NavLink>
                                <AuthComponent/>
                                <FrontSideBarMenu/>
                            </Nav>
                        </div>
  
                    </Container>
                </div>

                <div className="sm_screen_menu w-100">
                    <Container fluid className="align-items-center justify-content-between px-0">
                        <Col className="col-12 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt=""  />
                            </NavLink>
                            <span  className="mob_toggler">
                                <FrontSideBarMenu />
                            </span>
                        </Col>
                    </Container>
                </div>
            </Navbar>
        </>
    )
}


export default PageTopbarHeaderComponent;
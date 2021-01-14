import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


// Assets Include
import '../topbar/topbar.scss';
import logo from '../../../assets/front/images/colored_logo.svg';
// Assets Include End

// Component Include
import SearchComponent from '../components/SearchCompo';
import FrontSideBarMenu from '../sidebar';
import AuthComponent from '../components/AuthComponent';
import TranslateMenu from './TranslateMenu';
import { useTranslation } from 'react-i18next';

// Component Include End



function HomeTopbarHeaderComponent() {

    const { t } = useTranslation();

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 250);
        });
    }, []);


    return (
        <>
            <Navbar sticky="top" className={scroll ? "add_search" : "remove_search"}>
                <div className="nav_container lg_screen_menu">
                    <Row className="align-items-center justify-content-between">
                        <div className="col-3 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="col-5 top_search mx-auto justify-content-center">
                            <Nav>
                                <SearchComponent />
                            </Nav>
                        </div>
                        <div className="col-4 my-2">
                            <Nav className="justify-content-md-end justify-content-center align-items-center">


                                <TranslateMenu />


                                <NavLink className="nav-link list_your_space" to="/list-your-space">{t('homeHelpListSpaceBtn')}</NavLink>
                                <AuthComponent />
                                {/* <FrontSideBarMenu /> */}
                            </Nav>
                        </div>
                    </Row>
                </div>


                <div className="nav_container sm_screen_menu">
                    <Row className="align-items-center justify-content-between">
                        <Col className="col-12 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt="" />
                            </NavLink>
                            <span className="mob_toggler">
                                <FrontSideBarMenu />
                            </span>
                        </Col>
                        <div className="col-12 top_search mx-auto justify-content-center">
                            <Nav>
                                <SearchComponent />
                            </Nav>
                        </div>
                    </Row>
                </div>


            </Navbar>
        </>
    )
}


export default HomeTopbarHeaderComponent;
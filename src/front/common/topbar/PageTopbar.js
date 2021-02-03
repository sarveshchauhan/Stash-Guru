import React from 'react';
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
// Component Include End
import { useTranslation } from 'react-i18next';



function PageTopbarHeaderComponent() {

    const { t } = useTranslation();

    return (
        <>
            <Navbar sticky="top" style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.03)' }}>
                <div className="nav_container my_container lg_screen_menu">
                    <Row className="align-items-center justify-content-between">
                        <div className="col-4 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="col-4 top_search mx-auto justify-content-center">
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


export default PageTopbarHeaderComponent;
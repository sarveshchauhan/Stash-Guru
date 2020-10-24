import React from 'react';
import { Col, Container, Row,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './footer.scss';
import Logo from '../../../assets/front/images/white_logo.png';

function FooterComponent(){
    return(
        <>
        <footer>
            <Container className="footer_content">
                <Row>
                    <Col lg={4}>
                        <div className="footer_links">
                            <NavLink to="/" className="mt-3">
                                <img className="brand_logo" src={Logo} alt=""  />
                            </NavLink>
                                <h4 className="mt-3">Contact</h4>
                                <Nav className="flex-column">
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-phone"></i> 0800 112 3898</NavLink>
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-envelope"></i> support@stash.guru.com
                                    </NavLink>
                                </Nav>
                        </div>
                        <div className="social_links">
                            <Nav className="justify-content-start">
                                <Nav.Item as="li">
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-facebook"></i>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-twitter"></i>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-linkedin"></i>
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-pinterest-p"></i>
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row className="justify-content-between">
                            <Col sm={4} className="footer_links">
                                <h4 className="mt-3">Rent A Space</h4>
                                <Nav className="flex-column">
                                    <NavLink to="" className="nav-link">Start Storing</NavLink>
                                    <NavLink to="" className="nav-link">Domestic Storage</NavLink>
                                    <NavLink to="" className="nav-link">Business Storage</NavLink>
                                    <NavLink to="" className="nav-link">Rent A Parking Space</NavLink>
                                    <NavLink to="" className="nav-link">Storage Space In London</NavLink>
                                    <NavLink to="" className="nav-link">Rent A Garage</NavLink>
                                    <NavLink to="" className="nav-link">Rent A Warehouse</NavLink>
                                    <NavLink to="" className="nav-link">Rent A Spare Room</NavLink>
                                </Nav>
                            </Col>
                            <Col sm={4} className="footer_links">
                                <h4 className="mt-3">Hosting</h4>
                                <Nav className="flex-column">
                                    <NavLink to="" className="nav-link">Become A Host</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Garage</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Parking Space</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Warehouse</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Spare Room</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Outhouse</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Lock-Up</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Loft</NavLink>
                                    <NavLink to="" className="nav-link">Rent Your Basement</NavLink>
                                </Nav>
                            </Col>
                            <Col sm={4} className="footer_links">
                                <h4 className="mt-3">Platform</h4>
                                <Nav className="flex-column">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                    <NavLink to="/about" className="nav-link">About</NavLink>
                                    <NavLink to="/FAQS" className="nav-link">FAQs</NavLink>
                                    <NavLink to="/help-center" className="nav-link">Help Centre</NavLink>
                                    <NavLink to="/refund-policy" className="nav-link">Cancellations & Refunds Policy</NavLink>
                                    <NavLink to="/sitemap" className="nav-link">Sitemap</NavLink>
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="copyright_section">
                <hr/>
                <Row className="align-items-center">
                    <Col lg={6} className="text-center text-lg-left">
                    Copyright © stash.guru 2018. All Rights Reserved.
                    </Col>
                    <Col lg={6}>
                        <Nav className="justify-content-center justify-content-lg-end">
                            <Nav.Item as="li">
                                <NavLink className="nav-link" to="/">Terms of use</NavLink>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <NavLink className="nav-link" to="/">Privacy & Polic</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}
export default FooterComponent;
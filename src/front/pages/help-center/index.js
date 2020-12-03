import React, { useState } from 'react';
import { Col, Container, Row, Button, Form, Nav, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';

import banner_img from '../../../assets/front/images/img/about_banner_img.png';
import helpCenter from '../../../assets/front/images/img/helpCenter.png'
import star from '../../../assets/front/images/icons/star.png';
import avlSpace from '../../../assets/front/images/icons/avlSpace.png';
import calender from '../../../assets/front/images/icons/calender.png';

function FrontHelpCenterCtrl(){
    return(
        <>
            <section className="page_banner about_page_banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="page_banner_content">
                                <h2>Help Center</h2>
                                <p>We’d love to hear from you!</p>
                                <div className="mt-5">
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="page_banner_img">
                                <img src={helpCenter} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            
            <section>
                <Container>
                    <Row>
                        <Col md="4">
                            <h5 className="text5">Manage Your Booking</h5>
                            <ul>
                                <li>Making an Enquiry</li>
                                <li>Making a Booking</li>
                                <li>Verifying Your Account</li>
                                <li>Guest Cancellations & Refunds</li>
                            </ul>
                        </Col>
                        <Col md="4"></Col>
                        <Col md="4"></Col>
                    </Row>
                </Container>
            </section>

  

            <section className="bottom_search_strip">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={4}>
                            <div className="bx_shd_crd">
                                <div className="">
                                    <SearchComponent />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bx_shd_crd">
                                <div className="">
                                    <NavLink to="/list-your-space">
                                        <Button variant="milky" className="btn-block">List Your Space</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bx_shd_crd">
                                <div className="">
                                    <NavLink to="/contact">
                                        <Button variant="milky" className="btn-block">
                                            <i className="fa fa-phone mr-1" aria-hidden="true"></i> Contact Us
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FrontHelpCenterCtrl;
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, ButtonGroup } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';

import helpCenter from '../../../assets/front/images/img/helpCenter.png';
import calendar_img from '../../../assets/front/images/img/calendar_img.png';
import endingBooking from '../../../assets/front/images/img/endingBooking.png';
import gettingStarted from '../../../assets/front/images/img/gettingStarted.png';

function FrontCommonQuestionsCtrl() {


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    return (
        <>
            <section className="page_banner about_page_banner">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="help_center_banner_btns">
                                <h2>Help Center</h2>
                                <ButtonGroup>
                                    <Link to="/manage-your-booking" className="btn" >Booking a Space</Link>
                                    <Link to="/hosting-a-space" className="btn">Hosting a Space</Link>
                                    <Link to="/common-questions" className="btn active">Common Questions</Link>
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="page_banner_img">
                                <img src={helpCenter} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-white py-5">
                <Container>
                    <Row>
                        <Col md="4" className="py-3">
                            <div className="help_center_box_card">
                                <div className="help_center_box_card_img">
                                    <img src={helpCenter} alt="" />
                                </div>
                                <div className="help_center_box_card_body">
                                    <h5 className="text5">Common Questions</h5>
                                    <ul>
                                        <li>How does StasGuru work?</li>
                                        <li>Help with Renting a Garage</li>
                                        <li>Help for Garage Owners</li>
                                        <li>Help for Drivers</li>
                                        <li>Help for Parking Space Owners</li>
                                        <li>Self Storage Help</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
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

export default FrontCommonQuestionsCtrl;
import React, { useState } from 'react';
import { Col, Container, Row, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';

import banner_img from '../../../assets/front/images/img/about_banner_img.png';
import helpCenter from '../../../assets/front/images/img/helpCenter.png'
import star from '../../../assets/front/images/icons/star.png';
import avlSpace from '../../../assets/front/images/icons/avlSpace.png';
import calendar_img from '../../../assets/front/images/img/calendar_img.png';

function FrontHelpCenterCtrl(){
    return(
        <>
            <section className="page_banner about_page_banner">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="help_center_banner_btns">
                                <h2>Help Center</h2>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                    <ToggleButton value={1}>Booking a Space</ToggleButton>
                                    <ToggleButton value={2}>Hosting a Space</ToggleButton>
                                    <ToggleButton value={3}>Common Questions</ToggleButton>
                                    <ToggleButton value={4}>Covid-19</ToggleButton>
                                </ToggleButtonGroup>
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
                        <Col md="4">
                            <div className="help_center_box_card">
                                <div className="help_center_box_card_img">
                                    <img src={calendar_img} alt="" />
                                </div>
                                <div className="help_center_box_card_body">
                                    <h5 className="text5">Manage Your Booking</h5>
                                    <ul>
                                        <li>Making an Enquiry</li>
                                        <li>Making a Booking</li>
                                        <li>Verifying Your Account</li>
                                        <li>Guest Cancellations & Refunds</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="help_center_box_card">
                                <div className="help_center_box_card_img">
                                    <img src={calendar_img} alt="" />
                                </div>
                                <div className="help_center_box_card_body">
                                    <h5 className="text5">Protecting Your Booking</h5>
                                    <ul>
                                        <li>Booking Protection</li>
                                        <li>Payment Protection</li>
                                        <li>Putting Down a Deposit</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="help_center_box_card">
                                <div className="help_center_box_card_img">
                                    <img src={calendar_img} alt="" />
                                </div>
                                <div className="help_center_box_card_body">
                                    <h5 className="text5">Ending a Booking</h5>
                                    <ul>
                                        <li>Serving Notice</li>
                                        <li>Moving Out</li>
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

export default FrontHelpCenterCtrl;
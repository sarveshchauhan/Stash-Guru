import React, { useState } from 'react';
import { Col, Container, Row, Button, Carousel, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import SearchComponent from '../../common/components/SearchCompo';

import banner_img from '../../../assets/front/images/img/banner_img.svg';

import listUrSpace from '../../../assets/front/images/icons/listUrSpace.png';
import manageBooking from '../../../assets/front/images/icons/manageBooking.png';
import getPaid from '../../../assets/front/images/icons/getPaid.png';


import gr_camera from '../../../assets/front/images/icons/gr_camera.svg';
import gr_dimension from '../../../assets/front/images/icons/gr_dimension.svg';
import gr_location from '../../../assets/front/images/icons/gr_location.svg';
import camera from '../../../assets/front/images/icons/camera.svg';
import dimension from '../../../assets/front/images/icons/dimension.svg';
import location from '../../../assets/front/images/icons/location.png';



import verify from '../../../assets/front/images/icons/verify.png';
import payment from '../../../assets/front/images/icons/payment.png';
import dashboard from '../../../assets/front/images/icons/dashboard.png';
import legalFrameWork from '../../../assets/front/images/icons/legalFrameWork.png';
import helping from '../../../assets/front/images/icons/helping.png';
import Support from '../../../assets/front/images/icons/support.png';
import ListYourSpace from '../../../assets/front/images/icons/list_your_space.png'



function FrontBecomeHostCtrl() {

    return (
        <>
            <section className="home_banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="page_banner_content">
                                <h2>Earn Money From Your Spare Space</h2>
                                <p>Got some empty space? Get it listed and connect with people looking to rent it for storage or parking.</p>
                                <div className="mt-5">
                                    <Button variant="success" className="px-5 ml-0 m-2">Get Started</Button>
                                    <Button variant="milky" className="px-5 ml-0 m-2">More Info</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={banner_img} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="after_banner_strip">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={listUrSpace} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>List Your Space</h4>
                                    <p>Add a few key details and photos.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={manageBooking} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Manage Bookings</h4>
                                    <p>Get verified booking requests.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={getPaid} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Get Paid!</h4>
                                    <p>Earn an extra monthly income.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="section_padding">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h3 className="pg_bg_hdng mb-3">What do I need?</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col lg={4}>
                                    <div className="what_need_card">
                                        <div className="what_need_card_header">
                                            <img className="lg_img" src={gr_camera} alt="" />
                                            <img className="sm_img" src={camera} alt="" />
                                        </div>
                                        <div className="what_need_card_footer">
                                            <h5>Photo</h5>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="what_need_card">
                                        <div className="what_need_card_header">
                                            <img className="lg_img" src={gr_dimension} alt="" />
                                            <img className="sm_img" src={dimension} alt="" />
                                        </div>
                                        <div className="what_need_card_footer">
                                            <h5>Dimensions</h5>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="what_need_card">
                                        <div className="what_need_card_header">
                                            <img className="lg_img" src={gr_location} alt="" />
                                            <img className="sm_img" src={location} alt="" />
                                        </div>
                                        <div className="what_need_card_footer">
                                            <h5>Address</h5>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="why_stash_guru">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="text-center">
                                <h4 className="pg_bg_hdng  text-white m-0">We’ve got it covered!</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={verify} alt="" />
                                <h5>Verified Guests</h5>
                                <p>Connect with pre-verified Guests</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={payment} alt="" />
                                <h5>Smooth Payments</h5>
                                <p>Enjoy getting paid on time every<br /> month</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={dashboard} alt="" />
                                <h5>Booking Dashboard</h5>
                                <p>Manage your booking requests with <br /> ease</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={legalFrameWork} alt="" />
                                <h5>Legal Framework</h5>
                                <p>Protect your bookings with our <br /> contracts</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={helping} alt="" />
                                <h5>Guest Insurance</h5>
                                <p>Feel safe knowing your Guest is insured</p>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={Support} alt="" />
                                <h5>stastash.guru Support</h5>
                                <p>Chat to the Stashbee team for support</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="">
                                <h3>Featured Storages Cities</h3>
                            </div>
                        </Col>
                        <Col className="text-center my-5"></Col>
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

export default FrontBecomeHostCtrl;
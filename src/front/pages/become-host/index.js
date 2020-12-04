import React, { useState } from 'react';
import { Col, Container, Row, Button, Carousel, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import SearchComponent from '../../common/components/SearchCompo';

import banner_img from '../../../assets/front/images/img/banner_img.svg';
import hosting_video_bg from '../../../assets/front/images/img/hosting_video_bg.jpg'
import chat_with_us from '../../../assets/front/images/img/chat_with_us.png';
import start_earning from '../../../assets/front/images/img/start_earning.png';
import calendar_img from '../../../assets/front/images/img/calendar_img.png';
import getRequests from '../../../assets/front/images/img/getRequests.png';
import protectingBooking from '../../../assets/front/images/img/protectingBooking.png';

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
                                    <Button className="btn btn_milky_grn px-5 ml-0 m-2">More Info</Button>
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
                    <Row>
                        <Col className="text-center mt-5">
                            <Button variant="success" className="px-5">Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section_padding become_host_how_work">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h3 className="pg_bg_hdng mb-3">How Does it work?</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center my-5">
                        <Col lg={5}>
                            <div className="">
                                <img src={calendar_img} />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="">
                                <h5 className="text5">List for Free</h5>
                                <p className="text_p">It’s quick and easy to get your space listed (and completely free, too!). Just upload some photos, enter the measurements and add a few key details. Our Host Onboarding team will then review your listing before putting it live.</p>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="justify-content-center align-items-center my-5">
                        <Col lg={7}>
                            <div className="">
                                <h5 className="text5">Get Requests</h5>
                                <p className="text_p">Live listings appear on the search map so that Guests can easily find and request to book your space. We verify Guests before they can send you a booking request, and you’ll always have the option to either accept or decline.</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="">
                                <img src={getRequests} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center my-5">
                        <Col lg={5}>
                            <div className="">
                                <img src={protectingBooking} />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="">
                                <h5 className="text5">Get Paid!</h5>
                                <p className="text_p">Our secure, cashless system handles monthly payments, so you can relax knowing you’ll always get paid on time. We’ll also take care of sending out the Booking Terms, and we’ll be on hand to answer questions every step of the way.</p>
                            </div>
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


            <section className="section_padding">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h3 className="pg_bg_hdng mb-3">Watch a video about hosting</h3>
                            <p>Find out what it’s like to be a Host from StashGuru Super-Host, Will Wood.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={12}>
                            <div className="hosting_video_bg">
                                <img src={hosting_video_bg} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section_padding">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={6}>
                            <div className="">
                                <h3 className="pg_bg_hdng mb-3">Chat to us!</h3>
                                <p>We’re here to make putting your spare space to good use easy, whilst helping you earn an extra income in the process. Fancy a chat before you get started? Get in touch!</p>
                                <Button variant="success" className="px-5 mt-4">Contact Us</Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="p-5">
                                <img src={chat_with_us} />
                            </div>
                        </Col>
                    </Row>

                    
                    <Row className="justify-content-center align-items-center">
                        <Col lg={6}>
                            <div className="p-5">
                                <img src={start_earning} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="">
                                <h3 className="pg_bg_hdng mb-3">Ready to start earning from your space?</h3>
                                <p>Get started by creating a listing. We’ll take care of the rest!</p>
                                <Button variant="success" className="px-5 mt-4">Get Started</Button>
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

export default FrontBecomeHostCtrl;
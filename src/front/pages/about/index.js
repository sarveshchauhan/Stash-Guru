import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Carousel, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';

import banner_img from '../../../assets/front/images/img/about_banner_img.png';
import basements from '../../../assets/front/images/img/basements.png'
import star from '../../../assets/front/images/icons/star.png';
import avlSpace from '../../../assets/front/images/icons/avlSpace.png';
import calender from '../../../assets/front/images/icons/calender.png';

function FrontAboutCtrl() {


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);



    return (
        <>
            <section className="page_banner about_page_banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="page_banner_content">
                                <h2>Storage Made Simple</h2>
                                <p>Read a bit about <b className="text_color_shamrock">Stas.Guru</b> and what <br /> we’re all about.</p>
                                <div className="mt-5">
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="page_banner_img">
                                <img src={banner_img} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="hello_sections">
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div className="page_content">
                                <h4 className="page_h4_txt">Hello!</h4>
                                <p>e’re Stas.Guru, and we believe that finding storage and long term parking should be easy (and less of a hassle than needing it in the first place). That's why we're on a mission to make it simpler for everyone involved.</p>
                                <p>Since getting started in 2019, we’ve been busy building a platform that connects people who have unused space with people who need it for storage and parking.</p>
                                <p>By running verification checks, securely managing payments and offering 7-days-a-week support, we’re here to make finding space simple. All whilst making it easier for our Hosts to put their empty space to good use (and helping them earn a bit of extra cash too!).</p>
                                <Button variant="milky" className="px-5">Say Hi</Button>
                            </div>
                        </Col>
                        {/* <Col lg={6}>
                            <div className="page_banner_img">
                                <img width="100%" src={basements} alt="" />
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>

            <section className="count_about_sections">
                <Container>
                    <Row className="align-items-center justify-content-between text-center">
                        <Col lg={3}>
                            <div className="counter_card">
                                <div className="counter_card_icon">
                                    <img src={calender} alt={calender} />
                                </div>
                                <h3>20,800</h3>
                                <h5>Days of storage</h5>
                                <p>That would take us all the way to the year 2089...or back to 1549.</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="counter_card">
                                <div className="counter_card_icon">
                                    <img src={avlSpace} alt={avlSpace} />
                                </div>
                                <h3>5,000,800+</h3>
                                <h5>Sq Ft of available space</h5>
                                <p>That’s about the same size as 89 warehouses!</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="counter_card">
                                <div className="counter_card_icon">
                                    <img src={star} alt={star} />
                                </div>
                                <h3>4.9 / 5</h3>
                                <h5>Stars on Trustpilot</h5>
                                <p>We’re flattered! <b>Read what our users have to say.</b></p>
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

export default FrontAboutCtrl;
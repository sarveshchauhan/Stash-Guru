import React from 'react';
import { Col, Container, Row, Button, ButtonGroup } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';


import storage from '../../../assets/front/images/img/storage.png';
import browse from '../../../assets/front/images/icons/browse.svg';
import connect from '../../../assets/front/images/icons/connect.svg';
import store from '../../../assets/front/images/icons/store.svg';

import calendar_img from '../../../assets/front/images/img/calendar_img.png';
import endingBooking from '../../../assets/front/images/img/endingBooking.png';
import protectingBooking from '../../../assets/front/images/img/protectingBooking.png';

function FrontBusinessStorageCtrl(){
    return(
        <>
            <section className="page_banner about_page_banner">
                <Container className="pb-5">
                    <Row className="justify-content-between pb-5">
                        <Col lg={6}>
                            <div className="page_banner_content">
                                <h2>Business Storage <br/> Units, Nearby!</h2>
                                <p className="sm_font">We may all be working from home a lot more in the future, but some things won’t change. For one, businesses of all types will still need commercial storage. Whether you’re looking for somewhere safe to put your office furniture while waiting to reopen, or more long-term storage solutions, Stashbee is the right place to start your search.</p>
                                <div className="mt-4">
                                    <SearchComponent />
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="page_banner_img">
                                <img src={storage} alt="" />
                            </div>
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
                                    <img src={browse} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Browse</h4>
                                    <p>Search for local storage space near you.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={connect} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Connect</h4>
                                    <p>Chat to verified, local Hosts and book when you're ready.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={store} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Store</h4>
                                    <p>Start storing in your new space. Simple!</p>
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

export default FrontBusinessStorageCtrl;
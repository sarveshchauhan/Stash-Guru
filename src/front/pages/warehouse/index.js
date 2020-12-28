import React, { useEffect } from 'react';
import { Col, Container, Row, Button, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';


import storage from '../../../assets/front/images/img/storage.png';
import browse from '../../../assets/front/images/icons/browse.svg';
import connect from '../../../assets/front/images/icons/connect.svg';
import store from '../../../assets/front/images/icons/store.svg';



import local from '../../../assets/front/images/icons/listUrSpace.png';
import affordable from '../../../assets/front/images/icons/payment.png';
import flexible from '../../../assets/front/images/icons/flexible.png';

import vetted from '../../../assets/front/images/icons/verify.png';
import insured from '../../../assets/front/images/icons/insurance.png';
import support from '../../../assets/front/images/icons/support.png';

function FrontWarehouseCtrl() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [window]);


    return (
        <>
            <section className="page_banner about_page_banner">
                <Container className="pb-5">
                    <Row className="justify-content-between pb-5">
                        <Col lg={6}>
                            <div className="page_banner_content">
                                <h2>Warehouse <br /> Units, Nearby!</h2>
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


            <section className="bg-white can_store">
                <h3 class="pg_bg_hdng text-center">What can I store?</h3>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4} className="can_store_card">
                            <div className="can_store_card_body">
                                <h5>Business Stock</h5>
                                <p>Need somewhere to store stock for your business? Store with one of our vetted Storage Hosts</p>
                            </div>
                        </Col>

                        <Col md={4} className="can_store_card">
                            <div className="can_store_card_body">
                                <h5>Tools & Supplie</h5>
                                <p>Store tools supplies with our vetted Storage Hosts. Empty garages and lock-ups are our most popular spaces for tools.</p>
                            </div>
                        </Col>
                        <Col md={4} className="can_store_card">
                            <div className="can_store_card_body">
                                <h5>Just About Anything</h5>
                                <p>We've seen some interesting storage requirements over the years... Don't worry, we'll help you find local storage for just about anything.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="can_store_list">
                    <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            Verified Hosts
                        </Nav.Item>
                        <Nav.Item as="li">
                            $1000 Insurance
                        </Nav.Item>
                        <Nav.Item as="li">
                            Loads of spaces
                        </Nav.Item>
                    </Nav>
                </Container>
            </section>

            <section className="how_ds_work">
                <h3 class="pg_bg_hdng text-center mb-5">How Does It Work ?</h3>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <div className="how_ds_work_card">
                                <div className="how_ds_work_icon">
                                    <img src={browse} alt="" />
                                </div>
                                <div className="how_ds_work_content">
                                    <h4>Browse</h4>
                                    <p>Use the search map to find local spaces, browse different options, and compare prices.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="how_ds_work_card">
                                <div className="how_ds_work_icon">
                                    <img src={connect} alt="" />
                                </div>
                                <div className="how_ds_work_content">
                                    <h4>Connect</h4>
                                    <p>Chat, ask questions, and find out more. You can even arrange a viewing, if you like!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="how_ds_work_card">
                                <div className="how_ds_work_icon">
                                    <img src={store} alt="" />
                                </div>
                                <div className="how_ds_work_content">
                                    <h4>Store</h4>
                                    <p>Confirm your booking and move in to the space on your start date. Easy peasy!</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="12" className="mt-5">
                            <p>Our innovative model matches those searching for business storage to those hosts able to provide it. You can set your search preferences to prioritise price, location, and more, and it’s never been easier or more cost effective to find the right storage unit for you. With everything from climate-controlled high-tech locations to more simple commercial storage units and warehouse storage, we have options suited to anything you could possibly want. </p>
                            <p>If you’re concerned about security, we’ve got that covered, too. When searching, you can seek out locations with extra security options such as intruder alarms, lights, and CCTV cameras. We also provide safe transactions, with all exchanges handled securely online by debit or credit card. And don’t worry about access, either - all of our storage spots have guaranteed parking space, even in tightly packed central locations.</p>
                            <p>At StashGuru, we know how hard it can be to find the right commercial storage units for your business. We’re committed to streamlining every stage of that process, with our modern and interactive approach helping match our clients to the perfect options easily and safely. Why not explore our options now?</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-white why_use_sguru">
                <h3 class="pg_bg_hdng text-center mb-5">Why Use StashGuru?</h3>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <div className="why_use_sguru_card">
                                <div className="why_use_sguru_card_body">
                                    <div>
                                        <div className="why_use_sguru_icon">
                                            <img src={local} alt="" />
                                        </div>
                                        <div className="why_use_sguru_content">
                                            <h4>LOCAL</h4>
                                            <p>There are hundreds of local storage Hosts to choose from</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="why_use_sguru_card">
                                <div className="why_use_sguru_card_body">
                                    <div>
                                        <div className="why_use_sguru_icon">
                                            <img src={affordable} alt="" />
                                        </div>
                                        <div className="why_use_sguru_content">
                                            <h4>AFFORDABLE</h4>
                                            <p>Save on average 50% on your storage bill</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="why_use_sguru_card">
                                <div className="why_use_sguru_card_body">
                                    <div>
                                        <div className="why_use_sguru_icon">
                                            <img src={flexible} alt="" />
                                        </div>
                                        <div className="why_use_sguru_content">
                                            <h4>FLEXIBLE</h4>
                                            <p>Clear contracts, no hidden charges or fees</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="why_use_sguru_card">
                                <div className="why_use_sguru_card_body">
                                    <div>
                                        <div className="why_use_sguru_icon">
                                            <img src={vetted} alt="" />
                                        </div>
                                        <div className="why_use_sguru_content">
                                            <h4>VETTED</h4>
                                            <p>Spaces are quality controlled and approved by StashGuru</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="why_use_sguru_card">
                                <div className="why_use_sguru_card_body">
                                    <div>
                                        <div className="why_use_sguru_icon">
                                            <img src={insured} alt="" />
                                        </div>
                                        <div className="why_use_sguru_content">
                                            <h4>INSURED</h4>
                                            <p>All bookings covered by GuardHog insurance, underwritten by Hiscox</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="why_use_sguru_card">
                                <div className="why_use_sguru_card_body">
                                    <div>
                                        <div className="why_use_sguru_icon">
                                            <img src={support} alt="" />
                                        </div>
                                        <div className="why_use_sguru_content">
                                            <h4>STASHGURU SUPPORT</h4>
                                            <p>Our team is here to help Guests and Hosts if any questions or issues arise with storage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-white why_use_sguru">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={7}>
                            <div className="">
                                <div className="">
                                    <div className="why_use_sguru_content">
                                        <h3 class="pg_bg_hdng">Need Some Help Finding Storage?</h3>
                                        <p>We get that finding somewhere to store your things can be a real pain, that’s why we’re here to help keep things simple. Chat to us 7 days a week for help and support.</p>
                                        <Button className="btn_success px-5">Contact Us</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
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

export default FrontWarehouseCtrl;
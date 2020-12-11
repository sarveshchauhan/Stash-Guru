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
import G_payment from '../../../assets/users/images/icons/menu/G_payment.png';

import vetted from '../../../assets/front/images/icons/verify.png';
import insured from '../../../assets/front/images/icons/insurance.png';
import support from '../../../assets/front/images/icons/support.png';

function FrontDomesticStorageCtrl() {

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
                                <h2>Find Storage Space to <br /> Rent, Nearby!</h2>
                                <p className="sm_font">When your house is heaving at the seams but you’re not quite ready to go full-on Marie Kondo… stow your stuff with StasGuru in a storage space near you.</p>
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
                                <h5>Household Items</h5>
                                <p>Need to clear some space in your house or just store your things elsewhere for a while? Store your items in one of our trusted hosts storage spaces.</p>
                            </div>
                        </Col>

                        <Col md={4} className="can_store_card">
                            <div className="can_store_card_body">
                                <h5>Furniture</h5>
                                <p>Moving house or just need somewhere to store some furniture for a while. Find a Storage Host near you.</p>
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
                    <Nav className="justify-content-center"  defaultActiveKey="/home" as="ul">
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

            <section className="findingStorage">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} className="">
                            <div className="">
                                <h3 class="pg_bg_hdng">Finding Storage just got easier!</h3>
                                <p>We get it - stuff is necessary. The solution to your storage woes is not always to rehome or recycle everything you own. Sometimes you wish you could magic up a few more square feet of space, just for a while. Well, with StashGuru you can.</p> 
                                    
                                <p>Simply enter your postcode below and browse a range of storage space to rent near you, from storage units and unused garages to empty lofts and warehouse space. Looking for something within walking distance of your home, or just around the corner from your office? No problem! You can use the filters to choose the space type, size and price of a storage solution to suit you.</p> 
                                    
                                <p>All of our hosts are verified and vetted and we will insure your stuff against damage, so you can rest assured that your belongings are safe as houses after they leave your home. All fees are clearly laid out at the get go, and payment is taken securely online - no hidden costs, no fuss or hassle. It couldn’t be easier to find self-storage nearby. </p>
                                    
                                <p>If at any point you have a question, simply drop Team StashGuru an email or give us a call. We’re on hand to help you achieve the no-clutter, no-stress home space that you deserve.</p>
                                <Button variant='milky' className="px-4">Start Browsing</Button>
                            </div>
                        </Col>

                        <Col md={6} className="">
                            <div className="">
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-white why_use_sguru">
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
                                            <h4>LOCAL SPACES</h4>
                                            <p>Browse convenient spaces nearby</p>
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
                                            <img src={G_payment} alt="" />
                                        </div>
                                        <div className="why_use_sguru_content">
                                            <h4>SMOOTH TRANSACTIONS</h4>
                                            <p>Manage payments safely and securely</p>
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
                                            <h4>Verified Hosts</h4>
                                            <p>Connect with pre-verified Hosts</p>
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
                                            <h4>SIMPLE PRICES</h4>
                                            <p>Pay a preset price with no hidden fees</p>
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
                                            <h4>INSURANCE INCLUDED</h4>
                                            <p>Feel protected knowing your stuff’s insured</p>
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
                                            <p>Chat to the team for help and support</p>
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

export default FrontDomesticStorageCtrl;
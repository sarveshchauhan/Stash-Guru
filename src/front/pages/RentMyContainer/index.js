import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button, Carousel } from 'react-bootstrap';
import to_do_list from '../../../assets/front/images/icons/to_do_list.png';
import renters from '../../../assets/front/images/icons/renters.png';
import money from '../../../assets/front/images/icons/money.png';


import gr_camera from '../../../assets/front/images/icons/gr_camera.svg';
import gr_dimension from '../../../assets/front/images/icons/gr_dimension.svg';
import gr_location from '../../../assets/front/images/icons/gr_location.svg';
import camera from '../../../assets/front/images/icons/camera.svg';
import dimension from '../../../assets/front/images/icons/dimension.svg';
import location from '../../../assets/front/images/icons/location.png';
import video_bg from '../../../assets/front/images/dummy/video_bg.png';


import verify from '../../../assets/front/images/icons/verify.png';
import Affordable from '../../../assets/front/images/icons/payment.png';
import dashboard from '../../../assets/front/images/icons/dashboard.png';
import stamp from '../../../assets/front/images/icons/stamp.png';
import helping from '../../../assets/front/images/icons/helping.png';
import Support from '../../../assets/front/images/icons/support.png';


import boy from '../../../assets/front/images/img/boy.svg';
import girl from '../../../assets/front/images/img/girl.svg';
import StepOneForm from '../ListYourSpace/StepOneForm';
import { useDispatch } from 'react-redux';
import { clearListSpaceSteps } from '../../../redux';

function RentMyContainerComponentCtrl() {

    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);

    const connectingPeople = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);

    useEffect(() => {

        dispatch(clearListSpaceSteps());

    }, [dispatch]);





    return (
        <>
            <section className="hf_bg_list_your_space">
                <Container fluid>
                    <Row className="align-items-center justify-content-between">
                        <Col md={6}>
                            <Row className="justify-content-center">
                                <Col sm={8}>
                                    <div className="my-5">
                                        <h2 className="clr_bg_stash_hdng">
                                            <span> Earn Money </span> Renting Out Your Container
                                        </h2>
                                        <p className="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className="my-5">
                            <Row className="justify-content-center">
                                <Col sm={8}>
                                    <div className="clr_bg_stash_form_card">
                                        <StepOneForm spaceTypeId={9} disableSpaceControl={true} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg_milky t_card_list_section">
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col lg={4}>
                            <div className="t_card_list">
                                <span>
                                    <img src={to_do_list} alt="" />
                                </span>
                                <div>
                                    <h5>List for free</h5>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="t_card_list">
                                <span>
                                    <img src={renters} alt="" />
                                </span>
                                <div>
                                    <h5>Respond to renters</h5>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="t_card_list">
                                <span>
                                    <img src={money} alt="" />
                                </span>
                                <div>
                                    <h5>Make money</h5>
                                    <p>Lorem ipsum dolor sit amet, consetetur</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="white_smoke_color section_padding">
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

            <section className="bg_milky section_padding">
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={8}>
                            <div className="videos_play">
                                <img src={video_bg} alt="" />
                                <span className="video_icon">
                                    <i className="fa fa-play" aria-hidden="true"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="white_smoke_color section_padding">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h3 className="pg_bg_hdng mb-3">We’ve got it covered!</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={verify} alt="" />
                                <h5>Verified Guests</h5>
                                <p>There are hundreds of local storage <br /> Hosts to choose from</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Affordable} alt="" />
                                <h5>Smooth Payments</h5>
                                <p>Save on average 50% on your<br /> storage bill</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={dashboard} alt="" />
                                <h5>Booking Dashboard</h5>
                                <p>Clear contracts, no hidden charges<br /> or fees</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={stamp} alt="" />
                                <h5>Legal Framework</h5>
                                <p>Spaces are quality controlled and<br /> approved by stash.guru</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={helping} alt="" />
                                <h5>Guest Insurance</h5>
                                <p>All self storage hosts have their identity verified<br />
                                 by an independent third party to ensure things<br />
                                  are nice, safe and secure.</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Support} alt="" />
                                <h5>stash.guru Support</h5>
                                <p>Our team is here to help Guests and Hosts if any<br />
                                 questions or issues arise with storage</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default RentMyContainerComponentCtrl;
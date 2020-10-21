import React from 'react';
import { Col, Container,Row ,Form, Button} from 'react-bootstrap';
import to_do_list from '../../../assets/front/images/icons/to_do_list.png';
import renters from '../../../assets/front/images/icons/renters.png';
import money from '../../../assets/front/images/icons/money.png';

import gr_camera from '../../../assets/front/images/icons/gr_camera.svg';
import gr_dimension from '../../../assets/front/images/icons/gr_dimension.svg';
import gr_location from '../../../assets/front/images/icons/gr_location.svg';
import camera from '../../../assets/front/images/icons/camera.svg';
import dimension from '../../../assets/front/images/icons/dimension.svg';
import location from '../../../assets/front/images/icons/location.png';

function ListYourSpaceComponentCtrl(){
    return(
        <>
            <section className="hf_bg_list_your_space">
                <Container fluid>
                    <Row className="align-items-center justify-content-between">
                        <Col md={6}>
                            <Row className="justify-content-center">
                                <Col sm={8}>
                                    <div className="my-5">
                                        <h2 className="clr_bg_stash_hdng">
                                            Make Money on<br/> <span> Stash.Guru </span>
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
                                        <Form>
                                            <h5 className="pb-4">Lorem ipsum dolor sit amet</h5>
                                            <Form.Group className="custom_select">
                                                <Form.Control as="select">
                                                <option>Warehouse</option>
                                                <option>Warehouse 2</option>
                                                <option>Warehouse 3</option>
                                                <option>Warehouse 4</option>
                                                <option>Warehouse 5</option>
                                                </Form.Control>
                                            </Form.Group>
                                            
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Your Location" />
                                            </Form.Group>

                                            <Button variant="success" className="btn-block mt-4">List your space</Button>
                                        </Form>
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
                                    <img src={to_do_list} />
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
                                    <img src={renters} />
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
                                    <img src={money} />
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


            <section className="section_padding">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h3 className="pg_bg_hdng my-3">What do I need?</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col lg={4}>
                                    <div className="what_need_card">
                                        <div className="what_need_card_header">
                                            <img className="lg_img" src={gr_camera} />
                                            <img className="sm_img" src={camera} />
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
                                            <img className="lg_img" src={gr_dimension} />
                                            <img className="sm_img" src={dimension} />
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
                                            <img className="lg_img" src={gr_location} />
                                            <img className="sm_img" src={location} />
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
        </>
    )
}

export default ListYourSpaceComponentCtrl;
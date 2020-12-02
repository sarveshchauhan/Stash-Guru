import React, { useState } from 'react';
import { Col, Container, Row, Button, Form, Nav, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';

import banner_img from '../../../assets/front/images/img/about_banner_img.png';
import basements from '../../../assets/front/images/img/basements.png'
import star from '../../../assets/front/images/icons/star.png';
import avlSpace from '../../../assets/front/images/icons/avlSpace.png';
import calender from '../../../assets/front/images/icons/calender.png';

function FrontHelpCenterCtrl(){
    return(
        <>
            <section className="page_banner about_page_banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="page_banner_content">
                                <h2>Say Hello</h2>
                                <p>We’d love to hear from you!</p>
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
                                <p>Got a question? Or just fancy a chat about boxes? Send us an email or chat to a real human when our offices are open.</p> 
                                    
                                <div className="my-4">
                                    <h4 className="page_h4_txt"><i className="fa fa-envelope mr-2" aria-hidden="true"></i> support@stasguru.com</h4>
                                    <h4 className="page_h4_txt"><i className="fa fa-phone mr-2" aria-hidden="true"></i> (427)447-6847</h4>
                                </div>

                                <Table className="no_bdr mt-3">
                                    <tbody>
                                        <tr>
                                            <th>Monday</th>
                                            <td>10 am - 6pm</td>
                                        </tr>
                                        <tr>
                                            <th>Tuesday</th>
                                            <td>10 am - 6pm</td>
                                        </tr>
                                        <tr>
                                            <th>Wednesday</th>
                                            <td>10 am - 6pm</td>
                                        </tr>
                                        <tr>
                                            <th>Thursday</th>
                                            <td>10 am - 6pm</td>
                                        </tr>
                                        <tr>
                                            <th>Friday</th>
                                            <td>10 am - 6pm</td>
                                        </tr>
                                        <tr>
                                            <th>Saturday</th>
                                            <td>10 am - 6pm</td>
                                        </tr>
                                    </tbody>
                                </Table>
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
                    <Row className="align-items-center">
                        <Col lg={8}>
                            <div className="">
                                <h4 className="page_h4_txt">Send a Message!</h4>
                                <p>Let us know how we can help by filling out the form below. </p>
                                <p>You are logged in, so we have filled out your details for you, but if you prefer to be contacted via different details please change it in the form below.</p>
                            </div>
                            <Row className="mt-5">
                                <Col md="10">
                                    <Form as={Row}>
                                        <Form.Group as={Col} md={12} controlId="">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email address" />
                                        </Form.Group>
                                        <Form.Group as={Col} md={12}  controlId="">
                                            <Form.Label>Mobile Number (optional)</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Mobile Number" />
                                        </Form.Group>
                                        <Form.Group as={Col} md={12}  controlId="">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Full Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} md={12}  controlId="">
                                            <Form.Label>What's Your Enquiry About</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your Enquiry" />
                                        </Form.Group>
                                        <Form.Group as={Col} md={12}  controlId="">
                                            <Form.Label>Your Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                        <Form.Group as={Col} md={8} className="mx-auto" controlId="">
                                            <Button variant="success" className="btn-block">Send Message</Button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <div className="">
                                <div className="">
                                <img src={banner_img} alt={banner_img} />
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
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FrontHelpCenterCtrl;
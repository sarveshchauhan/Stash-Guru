import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import G_home from '../../../assets/users/images/icons/menu/B_home.png'

function StepsNavListCtrl(){
    return(
        <>
            <section className="step_nav_list_strip">
                <Container>
                    <Row className="align-items-center">
                        <Col xl={8}>
                            <Nav className="step_nav_list" fill defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li" className="completed">
                                    <span>
                                        <img src={G_home} alt="" />
                                    </span>Overview
                                </Nav.Item>
                                <Nav.Item as="li" className="completed">
                                    <span>
                                        <img src={G_home} alt="" />
                                    </span>Location
                                </Nav.Item>
                                <Nav.Item as="li" className="">
                                    <span>
                                        <img src={G_home} alt="" />
                                    </span>Space Type
                                </Nav.Item>
                                <Nav.Item as="li" className="">
                                    <span>
                                        <img src={G_home} alt="" />
                                    </span>Discription
                                </Nav.Item>
                                <Nav.Item as="li" className="">
                                    <span>
                                        <img src={G_home} alt="" />
                                    </span>Size & Pricing
                                </Nav.Item>
                                <Nav.Item as="li" className="">
                                    <span>
                                        <img src={G_home} alt="" />
                                    </span>Photos
                                </Nav.Item>
                                <Nav.Item as="li" className="">
                                    <span>
                                        <img src={G_home} alt="" />
                                    </span>About You
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xl={4}>
                            <Row>
                                <Col className="pr-0"><Button className="btn_milky_grn btn-block mr-2">Preview</Button></Col>
                                <Col className="pl-0"><Button className="btn_milky_grn btn-block ml-2">Host Guide</Button></Col>
                            </Row>
                            <Row>
                                <Col className="mt-2"><Button className="btn_milky_grn btn-block">Host Guide</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default StepsNavListCtrl;
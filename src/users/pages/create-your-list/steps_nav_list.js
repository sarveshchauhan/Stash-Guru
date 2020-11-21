import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';

import G_step1 from '../../../assets/users/images/icons/steps/G_step1.png';
import G_step2 from '../../../assets/users/images/icons/steps/G_step2.png';
import G_step3 from '../../../assets/users/images/icons/steps/G_step3.png';
import G_step4 from '../../../assets/users/images/icons/steps/G_step4.png';
import G_step5 from '../../../assets/users/images/icons/steps/G_step5.png';
import G_step6 from '../../../assets/users/images/icons/steps/G_step6.png';
import G_step7 from '../../../assets/users/images/icons/steps/G_step7.png';

import B_step1 from '../../../assets/users/images/icons/steps/B_step1.png';
import B_step2 from '../../../assets/users/images/icons/steps/B_step2.png';
import B_step3 from '../../../assets/users/images/icons/steps/B_step3.png';
import B_step4 from '../../../assets/users/images/icons/steps/B_step4.png';
import B_step5 from '../../../assets/users/images/icons/steps/B_step5.png';
import B_step6 from '../../../assets/users/images/icons/steps/B_step6.png';
import { useSelector } from 'react-redux';


function StepsNavListCtrl() {

    const { stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix } = useSelector(state => state.listspace);


    return (
        <>
            <section className="step_nav_list_strip">
                <Container>
                    <Row className="align-items-center">
                        <Col xl={8}>
                            <Nav className="step_nav_list" fill defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li" className={stepOne ? "completed" : ""}>
                                    <span>
                                        <img className="complete_step_img" src={G_step1} alt="" />
                                        <img className="incomplete_step_img" src={B_step1} alt="" />
                                    </span>Overview
                                </Nav.Item>
                                <Nav.Item as="li" className={stepTwo ? "completed" : ""}>
                                    <span>
                                        <img className="complete_step_img" src={G_step2} alt="" />
                                        <img className="incomplete_step_img" src={B_step2} alt="" />
                                    </span>Location
                                </Nav.Item>
                                <Nav.Item as="li" className={stepThree ? "completed" : ""}>
                                    <span>
                                        <img className="complete_step_img" src={G_step3} alt="" />
                                        <img className="incomplete_step_img" src={B_step3} alt="" />
                                    </span>Space Type
                                </Nav.Item>
                                <Nav.Item as="li" className={stepFour ? "completed" : ""}>
                                    <span>
                                        <img className="complete_step_img" src={G_step4} alt="" />
                                        <img className="incomplete_step_img" src={B_step4} alt="" />
                                    </span>Discription
                                </Nav.Item>
                                <Nav.Item as="li" className={stepFive ? "completed" : ""}>
                                    <span>
                                        <img className="complete_step_img" src={G_step5} alt="" />
                                        <img className="incomplete_step_img" src={B_step5} alt="" />
                                    </span>Size & Pricing
                                </Nav.Item>
                                <Nav.Item as="li" className={stepSix ? "completed" : ""}>
                                    <span>
                                        <img className="complete_step_img" src={G_step6} alt="" />
                                        <img className="incomplete_step_img" src={B_step6} alt="" />
                                    </span>Photos
                                </Nav.Item>
                                <Nav.Item as="li" className="">
                                    <span>
                                        <img className="complete_step_img" src={G_step7} alt="" />
                                        <img className="incomplete_step_img" src={G_step7} alt="" />
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
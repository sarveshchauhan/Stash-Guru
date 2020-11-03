import React from 'react';
import { Col, Container, Row,Breadcrumb, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import StepsNavListCtrl from './steps-nav-list';

function CreateYourListStepForthCtrl(){

    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumb>
                            <NavLink className="breadcrumb-item" to="/dashboard"><img src={B_home}/> Dashboard</NavLink>
                            <NavLink className="breadcrumb-item" to="/create-your-list"> Listing</NavLink>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <StepsNavListCtrl/>
            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt mb-3">Description</h3>
                        </Col>
                        <Col lg="4" md="5" className="offset-lg-1">
                            <h5 className=""><b>Lorem ipsum dolor sit</b></h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list-step3">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step5">
                                <Button className="btn_outline_success mr-2 mt-2 px-5">
                                Next <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                                </Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepForthCtrl;
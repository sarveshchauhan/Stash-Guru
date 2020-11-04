import React from 'react';
import { Col, Container, Row,Breadcrumb, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import StepsNavListCtrl from './steps_nav_list';

function CreateYourListStepThitdCtrl(){

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
                            <h3 className="md_bld_txt mb-3">What type of Space is It?</h3>
                            <Button variant="success" className=" mr-2 mt-2">Warehouse</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Garage</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Lockups</Button>
                            
                            <Button className="btn_outline_success mr-2  mt-2">Out Housed</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Lofts</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Basement</Button>

                            <Button className="btn_outline_success mr-2 mt-2">Spare Rooms</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Parking Space</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Container</Button>
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
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt mb-3">What can this space be used for?</h3>
                            <Button className="btn_outline_success mr-2 mt-2">Storage</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Desk</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Storage Crate</Button>
                            
                            <Button className="btn_outline_success mr-2  mt-2">Pallet Storage</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Document Storage</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Workspace</Button>
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
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt mb-3">Features</h3>
                            <div className="d-block">
                                <Button className="btn_outline_success mr-2 mt-2">Security Alarm</Button>
                                <Button className="btn_outline_success mr-2  mt-2">CCTV</Button>
                                <Button className="btn_outline_success mr-2  mt-2">Lockable Door</Button>
                                
                                <Button className="btn_outline_success mr-2  mt-2">Security Gate</Button>
                                <Button className="btn_outline_success mr-2  mt-2">Padlock Doors</Button>
                            </div>
                            <div className="d-block mt-4">
                                <Button className="btn_outline_info mr-2 mt-2">Water Supply</Button>
                                <Button className="btn_outline_info mr-2  mt-2">Shelving</Button>
                                <Button className="btn_outline_info mr-2  mt-2">Lighting</Button>                                
                                <Button className="btn_outline_info mr-2  mt-2">Heating</Button>
                                <Button className="btn_outline_info mr-2  mt-2">Fire Alarm</Button>
                                <Button className="btn_outline_info mr-2  mt-2">Power Sckets</Button>                                
                                <Button className="btn_outline_info mr-2  mt-2">Dehumidifire</Button>                                
                                <Button className="btn_outline_info mr-2  mt-2">Lift Access</Button>                            
                                <Button className="btn_outline_info mr-2  mt-2">Undercover</Button>
                            </div>
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
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt mb-3">What floor is it on?</h3>
                            <Button className="btn_outline_success mr-2 mt-2">Ground Floor</Button>
                            <Button className="btn_outline_success mr-2  mt-2">First Floor</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Second Floor</Button>
                            
                            <Button className="btn_outline_success mr-2  mt-2">Third Floor+</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Below Ground</Button>
                            <Button className="btn_outline_success mr-2  mt-2">Multiple Floors</Button>
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
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt mb-3">Can you provide a key for the space?</h3>
                            <Button variant="success" className="mr-2 mt-2 px-5">Yes</Button>
                            <Button className="btn_outline_success mr-2  mt-2 px-5">No</Button>
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
                            <NavLink to="/create-your-list">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step4">
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

export default CreateYourListStepThitdCtrl;
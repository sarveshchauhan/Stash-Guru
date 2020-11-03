import React from 'react';
import { Col, Container, Row,Breadcrumb, Button,InputGroup,Form,FormControl, Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import StepsNavListCtrl from './steps-nav-list';

function CreateYourListStepFifthCtrl(){
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
                            <h3 className="md_bld_txt mb-3">What size is the space?</h3>
                            <Form className="mt-4">
                                <div className="sizeSpaceRow">
                                    <div className="sizeSpaceWidth">
                                        <InputGroup className="">
                                            <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon3">
                                            Width
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                        </InputGroup>
                                    </div>
                                    <div className="sizeSpaceWidthUnit">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Ft</option>
                                                <option>Cm</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="sizeSpaceRow">
                                    <div className="sizeSpaceWidth">
                                        <InputGroup className="">
                                            <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon3">
                                            Width
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                        </InputGroup>
                                    </div>
                                    <div className="sizeSpaceWidthUnit">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Ft</option>
                                                <option>Cm</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="sizeSpaceRow">
                                    <div className="sizeSpaceWidth">
                                        <InputGroup className="">
                                            <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon3">
                                            Width
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                        </InputGroup>
                                    </div>
                                    <div className="sizeSpaceWidthUnit">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Ft</option>
                                                <option>Cm</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                </div>
                            </Form>
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
                            <h3 className="md_bld_txt">How many of these do you have?</h3>
                            <h6>I have these exact spaces</h6>
                            
                            <InputGroup className="text-center" style={{width: '80px'}}>
                                <FormControl className="text-center" value="1" style={{color:'#34d789',fontWeight:'900'}} />
                            </InputGroup>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                    <div className="text_color_gray">What does this mean? </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</div>
                                </Accordion.Collapse>
                            </Accordion>
                            
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
                            <h3 className="md_bld_txt">Pricing</h3>
                            <h6>Set Your Earnings</h6>
                            <div className="PricingRow">
                                <div className="PricingCol">
                                    <InputGroup className="">
                                        <InputGroup.Prepend>
                                        <InputGroup.Text style={{width:'50px',justifyContent:'center'}}>
                                            <i className="fa fa-usd" aria-hidden="true"></i>
                                        </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl  />
                                    </InputGroup>
                                </div>
                                <b>Per Month</b>
                            </div>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                    <div className="text_color_gray">The listing price includes your earnings, our service fee + VAT. </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</div>
                                </Accordion.Collapse>
                            </Accordion>
                            <div className="mt-3">
                                <h6>Get Your Earnings</h6>
                                <div className="GetYourEarningsRow">
                                    <div className="GetYourEarningsCol">
                                        <Button variant="success" className=""><i className="fa fa-usd" aria-hidden="true"></i> 1200</Button>
                                    </div>
                                    <b>Per Month</b>
                                </div>
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
                            <h3 className="md_bld_txt">Provide Flexible Bookings?</h3>
                            <Form.Group controlId="" className="mb-0">
                                <Form.Check type="checkbox" label="Lorem ipsum dolor sit amet" />
                            </Form.Group>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                    <div className="text_color_gray">Click for info </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</div>
                                </Accordion.Collapse>
                            </Accordion>
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
                            <h3 className="md_bld_txt">Enable Instant Book</h3>
                            <h6 className="text_color_shamrock">Allow Guests to book without having to accept every time</h6>
                            <Button variant="success" className="mr-2 mt-2 px-5">Yes</Button>
                            <Button className="btn_outline_success mr-2  mt-2 px-5">No</Button>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                    <div className="text_color_gray">What is an instant booking?</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</div>
                                </Accordion.Collapse>
                            </Accordion>
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
                        <Col lg="12" md="12">
                            <Button variant="success" className="">+ Add Size Option</Button>
                            <Accordion>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0">
                                    <div className="text_color_gray">What is this?</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</div>
                                </Accordion.Collapse>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list-step4">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step6">
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

export default CreateYourListStepFifthCtrl;
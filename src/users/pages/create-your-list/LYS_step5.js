import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, InputGroup, Form, FormControl, Accordion } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getPricePercentage } from '../../../redux/listspace/listspaceActions';

import StepsNavListCtrl from './steps_nav_list';

function CreateYourListStepFifthCtrl() {


    const { stepFour, pricePercentage } = useSelector(state => state.listspace);
    const history = useHistory();
    const dispatch = useDispatch();

    const [exactSpaces, setExactSpaces] = useState("");
    const [exactSpacesError, setExactSpacesError] = useState("");



    const [sizeOne, setSizeOne] = useState("");
    const [sizeTwo, setSizeTwo] = useState("");
    const [sizeThree, setSizeThree] = useState("");

    const [sizeOneError, setSizeOneError] = useState("");
    const [sizeTwoError, setSizeTwoError] = useState("");
    const [sizeThreeError, setSizeThreeError] = useState("");

    const [pricing, setPricing] = useState("");
    const [pricingError, setPricingError] = useState("");

    const [earning, setEarning] = useState("");
    const [earningError, setEarningError] = useState("");

    const [numberOfSpaces, setNumberOfSpaces] = useState("0");
    const [numberOfSpacesError, setNumberOfSpacesError] = useState("");


    useEffect(() => {

        dispatch(getPricePercentage());

    }, [dispatch]);

    useEffect(() => {

        if (!stepFour) {
            history.push('/create-your-list-step4');
        }

    }, [stepFour]);


    const vaildateErrors = (name, value) => {

        switch (name) {
            case "sizeOne":
                setSizeOneError("");
                if (!sizeOne) {
                    setSizeOneError("Required!");
                }
                break;


            case "sizeTwo":
                setSizeTwoError("");
                if (!sizeTwo) {
                    setSizeTwoError("Required!");
                }
                break;


            case "sizeThree":
                setSizeThreeError("");
                if (!sizeThree) {
                    setSizeThreeError("Required!");
                }
                break;

            default:
                break;
        }

    }


    return (
        <>
            <StepsNavListCtrl />
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
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" name="sizeOne" value={sizeOne} onChange={(e) => setSizeOne(e.target.value)} onBlur={() => vaildateErrors("sizeOne")} />
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
                                    {
                                        sizeOneError && <div className="ml-2 mt-2">
                                            <small className="text-danger">{sizeOneError}</small>
                                        </div>
                                    }
                                </div>
                                <div className="sizeSpaceRow">
                                    <div className="sizeSpaceWidth">
                                        <InputGroup className="">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3">
                                                    Width
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" name="sizeTwo" value={sizeTwo} onChange={(e) => setSizeTwo(e.target.value)} onBlur={() => vaildateErrors("sizeTwo")} />
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

                                    {
                                        sizeTwoError && <div className="ml-2 mt-2">
                                            <small className="text-danger">{sizeTwoError}</small>
                                        </div>
                                    }


                                </div>
                                <div className="sizeSpaceRow">
                                    <div className="sizeSpaceWidth">
                                        <InputGroup className="">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3">
                                                    Width
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" name="sizeThree" value={sizeThree} onChange={(e) => setSizeThree(e.target.value)} onBlur={() => vaildateErrors("sizeThree")} />
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

                                    {
                                        sizeThreeError && <div className="ml-2 mt-2">
                                            <small className="text-danger">{sizeThreeError}</small>
                                        </div>
                                    }

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

                            <InputGroup className="text-center" style={{ width: '80px' }}>
                                <FormControl className="text-center" value={numberOfSpaces} onChange={(e) => setNumberOfSpaces(e.target.value)} style={{ color: '#34d789', fontWeight: '900' }} />
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
                                            <InputGroup.Text style={{ width: '50px', justifyContent: 'center' }}>
                                                <i className="fa fa-usd" aria-hidden="true"></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl />
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
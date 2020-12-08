import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, InputGroup, Form, FormControl, Accordion, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { clearlistSpaceMessageFields, getPricePercentage, getUnits, stepFiveSave } from '../../../redux/listspace/listspaceActions';

import StepsNavListCtrl from './steps_nav_list';

function CreateYourListStepFifthCtrl() {


    const { stepFour, pricePercentage, unitList, stepThree, stepFiveLoading, stepFiveSuccess, stepFiveError, stepFive } = useSelector(state => state.listspace);
    const history = useHistory();
    const dispatch = useDispatch();

    const [exactSpaces, setExactSpaces] = useState("0");
    const [exactSpacesError, setExactSpacesError] = useState("");



    const [width, setWidth] = useState("");
    const [widthUnit, setWidthUnit] = useState("");

    const [depth, setDepth] = useState("");
    const [depthUnit, setDepthUnit] = useState("");

    const [height, setHeight] = useState("");
    const [heightUnit, setHeightUnit] = useState("");

    const [widthError, setWidthError] = useState("");
    const [depthError, setDepthError] = useState("");
    const [heightError, setHeightError] = useState("");

    const [pricing, setPricing] = useState("");
    const [pricingError, setPricingError] = useState("");

    const [earning, setEarning] = useState("0");


    const [enableInstantBooking, setEnableInstantBooking] = useState("No");
    const [flexibleBooking, setFlexibleBooking] = useState(false);

    const [security, setSecurity] = useState(false);
    const [securityPrice, setSecurityPrice] = useState(0);

    const [unit, setUnit] = useState("");


    useEffect(() => {

        setUnit(widthUnit);
        setDepthUnit(widthUnit);
        setHeightUnit(widthUnit);

    }, [widthUnit]);

    useEffect(() => {

        setUnit(heightUnit);
        setWidthUnit(heightUnit);
        setDepthUnit(heightUnit);

    }, [heightUnit]);

    useEffect(() => {

        setUnit(depthUnit);
        setHeightUnit(depthUnit);
        setWidthUnit(depthUnit);

    }, [depthUnit]);


    useEffect(() => {

        setWidthUnit(unit);
        setHeightUnit(unit);
        setDepthUnit(unit);

    }, [unit]);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);



    useEffect(() => {

        if (stepFive) {

            setUnit(stepFive.mu_id);
            setWidth(stepFive.width);
            setDepth(stepFive.depth);
            setHeight(stepFive.height);
            setPricing(stepFive.price);
            setEnableInstantBooking(stepFive.instant);
            setExactSpaces(stepFive.total_size);
            setEarning(stepFive.your_earnings);
            setFlexibleBooking(stepFive && stepFive.flexible === "Yes" ? true : false);

            if (stepFive.security) {
                if (stepFive.security === "Yes") {
                    setSecurity(true);
                    setSecurityPrice(stepFive.security_price);
                }
                else {
                    setSecurity(false);
                    setSecurityPrice(0);
                }
            }

        }

    }, [stepFive]);


    useEffect(() => {

        if (stepFiveSuccess) {
            history.push('/create-your-list-step6');
            dispatch(clearlistSpaceMessageFields());
        }

    }, [stepFiveSuccess]);


    useEffect(() => {

        if (width && depth) {
            setExactSpaces(+width * +depth);
        }
        else {
            setExactSpaces(0);
        }

    }, [width, depth]);


    useEffect(() => {

        if (unitList && Array.isArray(unitList) && unitList.length > 0) {
            setUnit(unitList[0].mu_id);
            setWidthUnit(unitList[0].mu_id);
            setDepthUnit(unitList[0].mu_id);
            setHeightUnit(unitList[0].mu_id);
        }

    }, [unitList]);


    useEffect(() => {

        dispatch(getPricePercentage());
        dispatch(getUnits());

    }, [dispatch]);


    useEffect(() => {

        if (!stepFour) {
            history.push('/create-your-list-step4');
        }

    }, [stepFour]);


    useEffect(() => {

        if (pricing) {

            let percentage = (+pricing / 100) * (+pricePercentage);
            setEarning(+pricing + percentage);
        }
        else {
            setEarning("0");
        }

    }, [pricing]);

    const vaildateErrors = (name) => {

        switch (name) {
            case "width":
                setWidthError("");
                if (!width) {
                    setWidthError("Width is required!");
                }

                break;


            case "depth":
                setDepthError("");
                if (!depth) {
                    setDepthError("Depth is required!");
                }
                break;


            case "height":
                setHeightError("");
                if (!height) {
                    setHeightError("Height is Required!");
                }
                break;

            case "exactSpaces":
                setExactSpacesError("");
                if (!exactSpaces || !+exactSpaces) {
                    setExactSpacesError("No. of exact spaces is Required!");
                }
                break;

            case "pricing":
                setPricingError("");
                if (!pricing) {
                    setPricingError("Pricing is required!");
                }
                break;


            default:
                break;
        }

    }


    const onSubmitForm = (e) => {
        e.preventDefault();

        vaildateErrors("width");
        vaildateErrors("depth");
        vaildateErrors("height");
        vaildateErrors("exactSpaces");
        vaildateErrors("pricing");

        if (width && depth && height && exactSpaces && pricing) {


            if (stepThree && stepThree.id) {

                const saveData = {
                    token: JSON.parse(localStorage.getItem("stashGuruToken")),
                    id: stepThree.id,
                    width: width,
                    depth: depth,
                    height: height,
                    total_size: (+width * +depth),
                    price: earning,
                    your_earnings: pricing,
                    flexible: flexibleBooking === true ? "Yes" : "No",
                    instant: enableInstantBooking,
                    security: security ? "Yes" : "No",
                    security_price: 0,
                    measurement_unit: unit
                };

                dispatch(stepFiveSave(saveData));

            }


        }

        return false;

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
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" name="width" value={width} onChange={(e) => setWidth(e.target.value)} onBlur={() => vaildateErrors("width")} />
                                        </InputGroup>
                                    </div>
                                    <div className="sizeSpaceWidthUnit">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select" disabled={true} name="widthUnit" value={widthUnit} onChange={(e) => setWidthUnit(e.target.value)}>
                                                {
                                                    unitList && Array.isArray(unitList) && unitList.map((unit, index) => (
                                                        <option value={unit.mu_id} key={index}>{unit.mu_name}</option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    {
                                        widthError && <div className="ml-2 mt-2">
                                            <small className="text-danger">{widthError}</small>
                                        </div>
                                    }
                                </div>
                                <div className="sizeSpaceRow">
                                    <div className="sizeSpaceWidth">
                                        <InputGroup className="">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3">
                                                    Depth
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" name="depth" value={depth} onChange={(e) => setDepth(e.target.value)} onBlur={() => vaildateErrors("depth")} />
                                        </InputGroup>
                                    </div>
                                    <div className="sizeSpaceWidthUnit">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select" disabled={true} name="depthUnit" value={depthUnit} onChange={(e) => setDepthUnit(e.target.value)}>
                                                {
                                                    unitList && Array.isArray(unitList) && unitList.map((unit, index) => (
                                                        <option value={unit.mu_id} key={index}>{unit.mu_name}</option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Form.Group>
                                    </div>

                                    {
                                        depthError && <div className="ml-2 mt-2">
                                            <small className="text-danger">{depthError}</small>
                                        </div>
                                    }


                                </div>
                                <div className="sizeSpaceRow">
                                    <div className="sizeSpaceWidth">
                                        <InputGroup className="">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3">
                                                    Height
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" name="height" value={height} onChange={(e) => setHeight(e.target.value)} onBlur={() => vaildateErrors("height")} />
                                        </InputGroup>
                                    </div>
                                    <div className="sizeSpaceWidthUnit">
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select" disabled={true} name="heightUnit" value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
                                                {
                                                    unitList && Array.isArray(unitList) && unitList.map((unit, index) => (
                                                        <option value={unit.mu_id} key={index}>{unit.mu_name}</option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Form.Group>
                                    </div>

                                    {
                                        heightError && <div className="ml-2 mt-2">
                                            <small className="text-danger">{heightError}</small>
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
                            <h3 className="md_bld_txt">Total Area</h3>
                            <h6>I have these exact spaces</h6>

                            <InputGroup className="text-center" style={{ width: '80px' }}>
                                <FormControl className="text-center" onBlur={() => vaildateErrors("exactSpaces")} value={exactSpaces} readOnly={true} style={{ color: '#34d789', fontWeight: '900' }} />
                            </InputGroup>

                            {
                                exactSpacesError && <small className="text-danger">{exactSpacesError}</small>
                            }

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

                                        <FormControl name="pricing" onChange={(e) => setPricing(e.target.value)} value={pricing} onBlur={() => vaildateErrors("pricing")} />

                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{ width: '50px', justifyContent: 'center' }}>
                                                {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
                                            Lei
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>

                                    </InputGroup>
                                    {
                                        pricingError && <small className="text-danger">{pricingError}</small>
                                    }
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

                            {/* <div className="mt-3">
                                <h6>Get Your Earnings</h6>
                                <div className="GetYourEarningsRow">
                                    <div className="GetYourEarningsCol">
                                        <Button variant="success" className="">
                                            {earning}  Lei </Button>
                                    </div>
                                    <b>Per Month</b>
                                </div>
                            </div> */}



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
                            <h3 className="md_bld_txt">Security deposit</h3>
                            <Form.Group controlId="" className="mb-0" name="security-check">
                                <Form.Check type="checkbox" checked={security} label={`Include 1 month security deposit of (${earning} Lei)`} onChange={() => setSecurity(!security)} />
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


            {/* <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt">Provide Flexible Bookings?</h3>
                            <Form.Group controlId="" className="mb-0">
                                <Form.Check type="checkbox" checked={flexibleBooking} label="Lorem ipsum dolor sit amet" onChange={() => setFlexibleBooking(!flexibleBooking)} />
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
            </section> */}

            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt">Enable Instant Book</h3>
                            <h6 className="text_color_shamrock">Allow Guests to book without having to accept every time</h6>
                            <Button className={enableInstantBooking === "Yes" ? `mr-2 mt-2 px-5 optionButtonSelected` : 'btn_outline_success mr-2 mt-2 px-5'} onClick={() => setEnableInstantBooking("Yes")}>Yes</Button>
                            <Button className={enableInstantBooking === "No" ? `mr-2 mt-2 px-5 optionButtonSelected` : 'btn_outline_success mr-2 mt-2 px-5'} onClick={() => setEnableInstantBooking("No")}>No</Button>
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



            {/* <section className="my-5">
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
            </section> */}

            <section className="my-5">
                <Container>


                    <Row>
                        <Col lg={12}>
                            {
                                widthError && <Alert variant="danger">{widthError}</Alert>
                            }
                            {
                                depthError && <Alert variant="danger">{depthError}</Alert>
                            }
                            {
                                heightError && <Alert variant="danger">{heightError}</Alert>
                            }
                            {
                                exactSpacesError && <Alert variant="danger">{exactSpacesError}</Alert>
                            }
                            {
                                pricingError && <Alert variant="danger">{pricingError}</Alert>
                            }
                            {
                                stepFiveError && <Alert variant="danger">{stepFiveError}</Alert>
                            }

                        </Col>
                    </Row>


                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list-step4">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step6" onClick={onSubmitForm}>
                                <Button className="btn_outline_success mr-2 mt-2 px-5" disabled={stepFiveLoading}>
                                    Next <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                                </Button>

                                {
                                    stepFiveLoading && <Spinner variant="success" animation="border"></Spinner>
                                }


                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepFifthCtrl;
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Alert, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getFeatures, getFloors, getSpaceType, getSpaceUsedFor, stepThreeSave } from '../../../redux/listspace/listspaceActions';

import StepsNavListCtrl from './steps_nav_list';

function CreateYourListStepThitdCtrl() {

    const dispatch = useDispatch();
    const { spaceTypeList, spaceUsedForList, featuresList, floorsList, stepOne, stepTwo, stepThreeLoading, stepThreeSuccess, stepThreeError } = useSelector(state => state.listspace);
    const history = useHistory();


    const [title, set_title] = useState("");
    const [title_error, set_title_error] = useState("");

    const [st_id, set_st_id] = useState("");
    const [st_id_error, set_st_id_error] = useState("");


    const [sut_id, set_sut_id] = useState("");
    const [sut_id_error, set_sut_id_error] = useState("");


    const [floor_id, set_floor_id] = useState("");
    const [floor_id_error, set_floor_id_error] = useState("");


    const [feature_id, set_feature_id] = useState("");
    const [feature_id_error, set_feature_id_error] = useState("");


    const [key, set_key] = useState("Yes");

    useEffect(() => {

        if (stepThreeSuccess) {
            history.push('/create-your-list-step4');
        }

    }, [stepThreeSuccess])


    useEffect(() => {

        dispatch(getSpaceType());
        dispatch(getSpaceUsedFor());
        dispatch(getFeatures());
        dispatch(getFloors());

    }, [dispatch]);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    const submitForm = (e) => {

        e.preventDefault();

        set_title_error("");
        set_sut_id_error("");
        set_st_id_error("");
        set_feature_id_error("");
        set_floor_id_error("");

        let error = false;

        if (!title) {
            error = true;
            set_title_error("Title is required!");
        }

        if (!st_id) {
            error = true;
            set_st_id_error("Type of space is required!");
        }

        if (!sut_id) {
            error = true;
            set_sut_id_error("Space used for is required!");
        }

        if (!feature_id) {
            error = true;
            set_feature_id_error("Feature is required!");
        }

        if (!floor_id) {
            error = true;
            set_floor_id_error("Floor is required!");
        }


        if (!error) {

            let token = JSON.parse(localStorage.getItem("stashGuruToken"));

            let saveInfo = {

                token: token,
                title: title,
                type: st_id,
                used_type: sut_id,
                features: feature_id,
                floor: floor_id,
                keyStatus: key,
                street: stepTwo.house_no,
                address1: stepTwo.address1,
                address2: stepTwo.address2,
                city: stepTwo.city,
                postcode: stepTwo.postal_code,
                lat: stepTwo.lat,
                long: stepTwo.lng

            };


            dispatch(stepThreeSave(saveInfo));



        }


    }

    return (
        <>
            <StepsNavListCtrl />
            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">

                            <h3 className="md_bld_txt mb-3">Title</h3>
                            <Form.Control className="mb-3" placeholder="Title" value={title} onChange={(e) => set_title(e.target.value)}></Form.Control>


                            <h3 className="md_bld_txt mb-3">What type of Space is It?</h3>

                            {
                                spaceTypeList && Array.isArray(spaceTypeList) && spaceTypeList.map((space, index) => (
                                    <Button className={+space.st_id === +st_id ? "btn_outline_success mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => set_st_id(space.st_id)}>{space.st_name}</Button>
                                ))
                            }


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

                            {
                                spaceUsedForList && Array.isArray(spaceUsedForList) && spaceUsedForList.map((space, index) => (
                                    <Button className={+space.sut_id === +sut_id ? "btn_outline_success mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => set_sut_id(space.sut_id)} >{space.sut_name}</Button>
                                ))
                            }

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


                                {
                                    featuresList && Array.isArray(featuresList) && featuresList.map((feature, index) => (
                                        <Button className={+feature.fs_id === +feature_id ? "btn_outline_success mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => set_feature_id(feature.fs_id)}>{feature.fs_name}</Button>
                                    ))
                                }


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

                            {
                                floorsList && Array.isArray(floorsList) && floorsList.map((floor, index) => (
                                    <Button className={+floor.fl_id === +floor_id ? "btn_outline_success mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => set_floor_id(floor.fl_id)}>{floor.fl_name}</Button>
                                ))
                            }

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
                            <Button onClick={() => set_key("Yes")} className={key === "Yes" ? "mr-2 mt-2 px-5 optionButtonSelected" : "mr-2 mt-2 px-5 btn_outline_success"}>Yes</Button>
                            <Button onClick={() => set_key("No")} className={key === "No" ? "mr-2 mt-2 px-5 optionButtonSelected" : "mr-2 mt-2 px-5 btn_outline_success"}>No</Button>
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

                    <Row>
                        <Col lg={6}>

                            {
                                title_error && <Alert variant="danger">{title_error}</Alert>
                            }

                            {
                                st_id_error && <Alert variant="danger">{st_id_error}</Alert>
                            }

                            {
                                sut_id_error && <Alert variant="danger">{sut_id_error}</Alert>
                            }

                            {
                                feature_id_error && <Alert variant="danger">{feature_id_error}</Alert>
                            }

                            {
                                floor_id_error && <Alert variant="danger">{floor_id_error}</Alert>
                            }

                            {
                                stepThreeError && <Alert variant="danger">{stepThreeError}</Alert>
                            }

                        </Col>
                    </Row>

                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step4" onClick={submitForm}>
                                <Button className="btn_outline_success mr-2 mt-2 px-5">
                                    Next <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                                </Button>

                                {
                                    stepThreeLoading && <Spinner variant="success" className="mt-4" animation="border"></Spinner>
                                }



                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepThitdCtrl;


const styleButtonSuccess = {
    color: "white"
}; 
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Alert, Form, Spinner, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { clearlistSpaceMessageFields, getFeatures, getFloors, getGuestAccess, getGuests, getSpaceType, getSpaceUsedFor, stepThreeSave, stepThreeUpdate } from '../../../redux/listspace/listspaceActions';

import StepsNavListCtrl from './steps_nav_list';

import './liststep.css';








function CreateYourListStepThitdCtrl() {

    const dispatch = useDispatch();
    const { spaceTypeList, spaceUsedForList, featuresList, floorsList, stepOne, stepTwo, stepThree, stepThreeLoading, stepThreeSuccess, stepThreeError, guestList, guestAccessList } = useSelector(state => state.listspace);
    const history = useHistory();


    const [title, set_title] = useState("");
    const [title_error, set_title_error] = useState("");

    const [st_id, set_st_id] = useState("");
    const [st_id_error, set_st_id_error] = useState("");



    const [sut_id_error, set_sut_id_error] = useState("");


    const [sut_list, set_sut_list] = useState([]);

    const [floor_id, set_floor_id] = useState("");
    const [floor_id_error, set_floor_id_error] = useState("");

    const [feature_id_error, set_feature_id_error] = useState("");


    const [features, set_features] = useState([]);


    const [key, set_key] = useState("Yes");


    const [guest, set_guest] = useState("");
    const [guest_access, set_guest_access] = useState("");

    const [hoveredSpaceType, setHoveredSpaceType] = useState("");
    const [hoveredFeature, setHoveredFeature] = useState("");


    const [specificHours, setSpecificHours] = useState([
        { day: "Monday", selected: true, from: 9, fromType: "AM", to: 6, toType: "PM" },
        { day: "Tuesday", selected: true, from: 9, fromType: "AM", to: 6, toType: "PM" },
        { day: "Wednesday", selected: true, from: 9, fromType: "AM", to: 6, toType: "PM" },
        { day: "Thursday", selected: true, from: 9, fromType: "AM", to: 6, toType: "PM" },
        { day: "Friday", selected: true, from: 9, fromType: "AM", to: 6, toType: "PM" },
        { day: "Saturday", selected: true, from: 9, fromType: "AM", to: 6, toType: "PM" },
        { day: "Sunday", selected: true, from: 9, fromType: "AM", to: 6, toType: "PM" }
    ])

    useEffect(() => {

        if (!stepTwo) {

            if (!stepTwo) {
                history.push('/list-your-space');
            }
            else {
                history.push('/create-your-list');
            }



        }

    }, [stepTwo, history])


    useEffect(() => {

        if (stepOne) {
            set_st_id(stepOne.spaceType);
        }

    }, [stepOne]);


    useEffect(() => {

        if (stepThree) {

            set_title(stepThree.title);
            // set_feature_id(stepThree.features);

            if (stepThree.features) {

                let fr = stepThree.features.split(",");
                set_features(fr);

            }

            if (stepThree.used_type) {
                set_sut_list(stepThree.used_type.split(","));
            }

            set_key(stepThree.keyStatus);
            set_floor_id(stepThree.floor);
            // set_sut_id(stepThree.used_type);
            set_st_id(stepThree.type);
            set_guest(stepThree.guest);
            set_guest_access(stepThree.guest_access);

            if (stepThree.specific_time) {
                setSpecificHours(stepThree.specific_time);
            }

        }

    }, [stepThree]);


    useEffect(() => {

        if (stepThreeSuccess) {
            history.push('/create-your-list-step4');
            dispatch(clearlistSpaceMessageFields());
        }

    }, [stepThreeSuccess, dispatch])


    useEffect(() => {

        dispatch(getSpaceType());
        dispatch(getSpaceUsedFor());
        dispatch(getFeatures());
        dispatch(getFloors());
        dispatch(getGuests());
        dispatch(getGuestAccess());

    }, [dispatch]);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);


    const is_feature_exists = (featureid) => {
        const featureExist = features.find(i => +i === +featureid);
        if (featureExist) {
            return true;
        }
        return false;
    }


    const onChangeFeature = (featureid) => {

        const featureExist = features.find(i => +i === +featureid);

        if (featureExist) {
            let newFeatures = features.filter((fr) => {
                if (+fr !== +featureExist) {
                    return fr;
                }
            });

            set_features(newFeatures);
        }
        else {

            set_features([...features, featureid]);

        }


    }




    const is_sut_exists = (sutid) => {
        const sutExist = sut_list.find(i => +i === +sutid);
        if (sutExist) {
            return true;
        }
        return false;
    }


    const onChangeSut = (sutid) => {

        const sutExist = sut_list.find(i => +i === +sutid);

        if (sutExist) {
            let newSutList = sut_list.filter((sut) => {
                if (+sut !== +sutExist) {
                    return sut;
                }
            });

            set_sut_list(newSutList);
        }
        else {

            set_sut_list([...sut_list, sutid]);

        }
        return true;

    }



    const onChangeSpecificHours = (day = "", e) => {



        let newHrs = specificHours.map((hr) => {
            if (hr.day === day) {
                if (e.target.name === "selected") {
                    hr[e.target.name] = e.target.checked;
                }
                else {
                    hr[e.target.name] = e.target.value;
                }


            }
            return hr;
        });

        setSpecificHours(newHrs);

        return true;
    }


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

        if (sut_list.length === 0) {
            error = true;
            set_sut_id_error("Space used for is required!");
        }

        if (features.length === 0) {
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
                used_type: sut_list.join(","),
                features: features.join(","),
                floor: floor_id,
                keyStatus: key,
                street: stepTwo.house_no,
                address1: stepTwo.address1,
                address2: stepTwo.address2,
                city: stepTwo.city,
                postcode: stepTwo.postal_code,
                lat: stepTwo.lat,
                long: stepTwo.lng,
                guest: +guest,
                guest_access: +guest_access,
                is_specific_time: +guest === 3 ? "Yes" : "No",
                specific_time: +guest === 3 ? specificHours : null

            };


            if (stepThree && stepThree.id) {
                saveInfo.id = stepThree.id
                dispatch(stepThreeUpdate(saveInfo));
            }
            else {
                dispatch(stepThreeSave(saveInfo));

            }




        }

        return true;
    }


    const spaceTypeMouseOver = (path) => {

        setHoveredSpaceType(path);
    }

    const featureMouseOver = (path) => {

        setHoveredFeature(path);
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

                                    <Button
                                        variant="no_bg"
                                        className={+space.st_id === +st_id ? "mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"}

                                        key={index}
                                        onClick={() => set_st_id(space.st_id)}
                                        onMouseOver={() => spaceTypeMouseOver(space.st_white)}

                                    >


                                        <img
                                            src={+space.st_id === +st_id || hoveredSpaceType === space.st_white ? space.st_white : space.st_path}
                                            className="btn-icon"
                                        />
                                        &nbsp;
                                        {space.st_name}

                                    </Button>


                                ))
                            }


                            {/* {
                                spaceTypeList && Array.isArray(spaceTypeList) && spaceTypeList.map((space, index) => (

                                    <Form.Check type="radio" key={index} name="spaceType" label={space.st_name} value={space.st_id} />

                                ))
                            } */}


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
                                    <Button variant="no_bg" className={is_sut_exists(space.sut_id) ? "mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => onChangeSut(space.sut_id)}>{space.sut_name}</Button>
                                ))
                            }



                            {/* {
                                spaceUsedForList && Array.isArray(spaceUsedForList) && spaceUsedForList.map((space, index) => (
                                    <Button variant="no_bg" className={+space.sut_id === +sut_id ? "mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => set_sut_id(space.sut_id)} >{space.sut_name}</Button>
                                ))
                            } */}


                            {/* {
                                    featuresList && Array.isArray(spaceUsedForList) && spaceUsedForList.map((space, index) => (
                                        <Button variant="no_bg" className={is_sut_exists(space.sut_id) ? "mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => onChangeSut(space.sut_id)}>{space.sut_name}</Button>
                                    ))
                                } */}



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

                                        <Button
                                            variant="no_bg"
                                            className={is_feature_exists(feature.fs_id) ? "mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"}
                                            key={index} onClick={() => onChangeFeature(feature.fs_id)}
                                            onMouseOver={() => featureMouseOver(feature.fs_white)}
                                        >

                                            <img
                                                src={hoveredFeature === feature.fs_white || is_feature_exists(feature.fs_id) ? feature.fs_white : feature.fs_icon}
                                                alt={feature.fs_name}
                                                className="btn-icon"
                                            />

                                            {feature.fs_name}
                                        </Button>


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
                                    <Button variant="no_bg" className={+floor.fl_id === +floor_id ? "mr-2  mt-2 optionButtonSelected" : "btn_outline_success mr-2  mt-2"} key={index} onClick={() => set_floor_id(floor.fl_id)}>{floor.fl_name}</Button>
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
                            <Button variant="no_bg" onClick={() => set_key("Yes")} className={key === "Yes" ? "mr-2 mt-2 px-5 optionButtonSelected" : "btn_outline_success mr-2 mt-2 px-5"}>Yes</Button>
                            <Button variant="no_bg" onClick={() => set_key("No")} className={key === "No" ? "mr-2 mt-2 px-5 optionButtonSelected" : "btn_outline_success mr-2 mt-2 px-5"}>No</Button>
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
                        <Col lg="7" md="7">
                            <h3 className="md_bld_txt mb-3">When will Guests be able to access the space?</h3>
                        </Col>

                        <Col lg="4" md="5" className="offset-lg-1">
                        </Col>


                        <Col lg="6" md="7">

                            {
                                guestList && guestList.map((gst, index) => (
                                    <>
                                        <div key={index} className={+gst.gt_id === guest ? "guest-list-item-selected" : "guest-list-item"} onClick={() => set_guest(gst.gt_id)}>
                                            <div className="guest_list_icons">
                                                <img className="guest_list_g_img" src={gst.gt_path} />
                                                <img className="guest_list_w_img" src={gst.gt_path2} />
                                            </div>
                                            <div className="guest_list_content">
                                                <h5 className="m-0">{gst.gt_name}</h5>
                                                <small className="d-block">Guest are free to access the space whenever they want.</small>
                                            </div>
                                        </div>


                                        {
                                            +gst.gt_id === 3 && +guest === 3 &&
                                            <div className="my-4">


                                                {
                                                    specificHours.map((specHour) => (
                                                        <Form className="d-flex my-2">
                                                            <Form.Row>
                                                                <Form.Group as={Col} className="mb-0" controlId="" style={{ maxWidth: '120px' }}>
                                                                    <Form.Check type="checkbox" label={specHour.day} name="selected" defaultChecked={specHour.selected} checked={specHour.selected} onChange={(e) => onChangeSpecificHours(specHour.day, e)} />
                                                                </Form.Group>
                                                                <Form.Group as={Col} className="mb-0">
                                                                    <InputGroup>
                                                                        <FormControl className="rectu_form_field" size="sm" defaultValue={specHour.from} value={specHour.from} name="from" onChange={(e) => onChangeSpecificHours(specHour.day, e)} />
                                                                        {/* <Form.Control className="rectu_form_field" size="sm" as="select" defaultValue={specHour.from} value={specHour.from} name="from" onChange={(e) => onChangeSpecificHours(specHour.day, e)}>
                                                                            {
                                                                                hrList.map((hr) => (
                                                                                    <option value={hr}>{hr}</option>
                                                                                ))
                                                                            }
                                                                        </Form.Control> */}
                                                                        <Form.Control className="rectu_form_field" size="sm" as="select" defaultValue={specHour.fromType} value={specHour.fromType} onChange={(e) => onChangeSpecificHours(specHour.day, e)} name="fromType">
                                                                            <option value="AM">AM</option>
                                                                            <option value="PM">PM</option>
                                                                        </Form.Control>
                                                                    </InputGroup>
                                                                </Form.Group>
                                                                <Form.Group as={Col} className="mb-0 align-self-center text-center" style={{ maxWidth: '50px' }}>
                                                                    <i className="fa fa-long-arrow-right"></i>
                                                                </Form.Group>
                                                                <Form.Group as={Col} className="mb-0">
                                                                    <InputGroup>
                                                                        <FormControl className="rectu_form_field" size="sm" defaultValue={specHour.to} value={specHour.to} onChange={(e) => onChangeSpecificHours(specHour.day, e)} name="to" />
                                                                        {/* <Form.Control className="rectu_form_field" size="sm" as="select" defaultValue={specHour.to} value={specHour.to} onChange={(e) => onChangeSpecificHours(specHour.day, e)} name="to">
                                                                            {
                                                                                hrList.map((hr) => (
                                                                                    <option value={hr}>{hr}</option>
                                                                                ))
                                                                            }
                                                                        </Form.Control> */}
                                                                        <Form.Control className="rectu_form_field" size="sm" as="select" defaultValue={specHour.toType} value={specHour.toType} onChange={(e) => onChangeSpecificHours(specHour.day, e)} name="toType">
                                                                            <option value="AM">AM</option>
                                                                            <option value="PM">PM</option>
                                                                        </Form.Control>
                                                                    </InputGroup>
                                                                </Form.Group>
                                                            </Form.Row>
                                                        </Form>
                                                    ))
                                                }


                                            </div>
                                        }

                                    </>
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
                        <Col lg="12" md="12">
                            <h3 className="md_bld_txt mb-3">How will Guests access the space?</h3>
                        </Col>
                        <Col lg="7" md="8">

                            {
                                guestAccessList && guestAccessList.map((gst, index) => (

                                    <div key={index} className={+gst.gta_id === +guest_access ? "guest-list-item-selected" : "guest-list-item"} onClick={() => set_guest_access(gst.gta_id)}>
                                        <div className="guest_list_icons">
                                            <img className="guest_list_g_img" src={gst.gta_path} />
                                            <img className="guest_list_w_img" src={gst.gta_path2} />
                                        </div>
                                        <div className="guest_list_content">
                                            <h5 className="m-0">{gst.gta_name}</h5>
                                            <small className="d-block">Guest are free to access the space whenever they want.</small>
                                        </div>

                                    </div>

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
                                <Button className="btn_previous mr-2  mt-2">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step4" onClick={submitForm}>
                                <Button className="btn_outline_success mr-2 mt-2 px-5" disabled={stepThreeLoading}>
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
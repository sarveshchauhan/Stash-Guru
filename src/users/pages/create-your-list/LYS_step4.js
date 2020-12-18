import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import StepsNavListCtrl from './steps_nav_list';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { clearlistSpaceMessageFields, stepFourSave } from '../../../redux/listspace/listspaceActions';




function CreateYourListStepForthCtrl() {

    const { stepOne, stepTwo, stepThree, stepFour, stepFourLoading, stepFourSuccess, stepFourError } = useSelector(state => state.listspace);
    const history = useHistory();
    const dispatch = useDispatch();

    const [description, setDescription] = useState();
    const [descriptionError, setDescriptionError] = useState("");

    const [extra, setExtra] = useState("No");
    const [security, setSecurity] = useState("");
    const [location, setLocation] = useState("");
    const [access, setAccess] = useState("");
    const [hosting, setHosting] = useState("");


    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {

        if (stepFour) {

            setDescription(stepFour.description);
            const contentBlock = htmlToDraft(stepFour.description);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(newEditorState);

            if (stepFour.extra_data) {
                setExtra(stepFour.extra_data);
            }

            if (stepFour.security) {
                setSecurity(stepFour.security);
            }

            if (stepFour.location) {
                setLocation(stepFour.location);
            }

            if (stepFour.access) {
                setAccess(stepFour.access);
            }

            if (stepFour.hosting) {
                setHosting(stepFour.hosting);
            }


        }

    }, [stepFour]);


    useEffect(() => {

        if (stepFourSuccess) {
            history.push(`/create-your-list-step5`);
            dispatch(clearlistSpaceMessageFields());
        }

    }, [stepFourSuccess]);

    useEffect(() => {


        if (!stepThree) {
            history.push(`/create-your-list-step3`);
        }


    }, [stepOne, stepTwo, stepThree]);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    const onEditorStateChange = (ceditorState) => {

        setEditorState(ceditorState);
        setDescription(draftToHtml(convertToRaw(ceditorState.getCurrentContent())));

    }

    const onSubmitForm = (e) => {

        e.preventDefault();

        setDescriptionError("");

        if (!description) {
            setDescriptionError("Please enter description.");
            return false;
        }

        let saveData = {

            description: description,
            id: stepThree.id,
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            extra_data: extra,
            security: security,
            location: location,
            access: access,
            hosting: hosting

        };

        dispatch(stepFourSave(saveData));

    }


    return (
        <>
            <StepsNavListCtrl />
            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt mb-3">Description</h3>
                            <Editor toolbarHidden={true} toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" editorState={editorState} onEditorStateChange={onEditorStateChange} />
                        </Col>
                        <Col lg="4" md="5" className="offset-lg-1">
                            <h5 className=""><b>Lorem ipsum dolor sit</b></h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mt-4">
                            <button className="btn btn-success" onClick={() => setExtra(extra === "No" ? "Yes" : "No")}>Add extra details</button>
                        </Col>
                    </Row>

                    <div hidden={extra === "No"}>

                        <Row className="justify-content-between">
                            <Col lg="5" md="6">
                                <h5 className="mt-3">Security</h5>
                                <p>Highlight the security features of the space and point out anything that makes it more secure.</p>
                                <textarea className="form-control" value={security} onChange={(e) => setSecurity(e.target.value)}></textarea>
                            </Col>
                            <Col lg="4" md="5" className="offset-lg-1">
                            </Col>
                        </Row>



                        <Row className="justify-content-between">
                            <Col lg="5" md="6">
                                <h5 className="mt-3">Location</h5>
                                <p>
                                    Give some information about where the space is located. Include details about safety and transport links.
                            </p>
                                <textarea className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}></textarea>
                            </Col>
                            <Col lg="4" md="5" className="offset-lg-1">
                            </Col>
                        </Row>


                        <Row className="justify-content-between">
                            <Col lg="5" md="6">
                                <h5 className="mt-3">Access</h5>
                                <p>
                                    Describe how Guest will access the space if they decide to book it. Include details about keys, fobs or arranging appointments.
                            </p>
                                <textarea className="form-control" value={access} onChange={(e) => setAccess(e.target.value)}></textarea>
                            </Col>
                            <Col lg="4" md="5" className="offset-lg-1">
                            </Col>
                        </Row>


                        <Row className="justify-content-between">
                            <Col lg="5" md="6">
                                <h5 className="mt-3">Hosting</h5>
                                <p>
                                    Explain how you'll be willing to help as a Host. This could include help with the move-in or how often you'll be at the space.
                            </p>
                                <textarea className="form-control" value={hosting} onChange={(e) => setHosting(e.target.value)}></textarea>
                            </Col>
                            <Col lg="4" md="5" className="offset-lg-1">
                            </Col>
                        </Row>


                    </div>

                </Container>
            </section>

            <section className="my-5">
                <Container>


                    {
                        stepFourError && <Row><Col lg={12}>
                            <Alert variant="danger">{stepFourError}</Alert>
                        </Col></Row>
                    }

                    {
                        descriptionError && <Row><Col lg={12}>
                            <Alert variant="danger">{descriptionError}</Alert>
                        </Col></Row>
                    }


                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list-step3">
                                <Button className="btn_previous mr-2  mt-2">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step5" onClick={onSubmitForm}>
                                <Button className="btn_outline_success mr-2 mt-2 px-5" disabled={stepFourLoading}>
                                    Next <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                                </Button>


                                {
                                    stepFourLoading && <Spinner variant="success" animation="border"></Spinner>
                                }



                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepForthCtrl;
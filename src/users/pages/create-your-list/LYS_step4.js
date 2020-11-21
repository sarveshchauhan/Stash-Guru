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

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {

        if (stepFour) {

            setDescription(stepFour.description);
            const contentBlock = htmlToDraft(stepFour.description);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(newEditorState);

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
            token: JSON.parse(localStorage.getItem("stashGuruToken"))

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
                            <Editor toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" editorState={editorState} onEditorStateChange={onEditorStateChange} />
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
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
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
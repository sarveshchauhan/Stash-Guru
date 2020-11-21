import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';


import no_img from '../../../assets/users/images/profile/no_img.png';
import B_step6 from '../../../assets/users/images/icons/steps/B_step6.png';

import StepsNavListCtrl from './steps_nav_list';
import { useDispatch, useSelector } from 'react-redux';
import { clearlistSpaceMessageFields, publishSpace } from '../../../redux/listspace/listspaceActions';

function CreateYourListStepSeventhCtrl() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { stepSix, publishSuccess, publishError, publishLoading } = useSelector(state => state.listspace);
    const [aboutDescription, setAboutDescription] = useState("");

    const [vatRegistered, setVatRegistered] = useState("Yes");


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        if (!stepSix) {
            history.push('/create-your-list-step6');
        }

    }, [stepSix]);


    useEffect(() => {

        if (publishSuccess) {
            history.push('/listing');
            dispatch(clearlistSpaceMessageFields());
        }

    }, [publishSuccess]);


    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch(publishSpace({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            about: aboutDescription,
            vat: vatRegistered,
            id: stepSix.id
        }));
    }



    return (
        <>
            <StepsNavListCtrl />
            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="7" md="6">
                            <h3 className="md_bld_txt mb-3">Photos of the space</h3>
                            <div className="photos_of_space_row">
                                <div className="photos_of_space_img_col">
                                    <div className="uploader_user">
                                        <img src={no_img} />
                                    </div>
                                    <span className="uploader_change_own_img">
                                        <img src={B_step6} />
                                    </span>
                                </div>
                                <div className="photos_of_space_text_msg_col">
                                    <textarea placeholder="Write something about you as a Stash.Guru Host....." value={aboutDescription} onChange={(e) => setAboutDescription(e.target.value)}></textarea>
                                    <p>This is publicly visible, so nothing too personal</p>
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
                            <h3 className="md_bld_txt">Are You VAT Registered?</h3>
                            <Button className={vatRegistered === "Yes" ? `mr-2 mt-2 px-5 optionButtonSelected` : 'btn_outline_success mr-2 mt-2 px-5'} onClick={() => setVatRegistered("Yes")} >Yes</Button>
                            <Button className={vatRegistered === "No" ? `mr-2 mt-2 px-5 optionButtonSelected` : 'btn_outline_success mr-2 mt-2 px-5'} onClick={() => setVatRegistered("No")}>No</Button>
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
                        <Col lg={12}>
                            {
                                publishError && <Alert variant="danger">{publishError}</Alert>
                            }
                        </Col>
                    </Row>

                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list-step6">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>
                                    Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <Button variant="success" className="mr-2 mt-2 px-5" onClick={onSubmitForm} disabled={publishLoading}>
                                Publish
                            </Button>

                            {
                                publishLoading
                                &&
                                <Spinner variant="success" animation="border"></Spinner>
                            }


                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepSeventhCtrl;
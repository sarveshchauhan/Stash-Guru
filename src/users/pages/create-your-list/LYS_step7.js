import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Alert, Spinner, Form } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';


import no_img from '../../../assets/users/images/profile/no_img.png';
import B_step6 from '../../../assets/users/images/icons/steps/B_step6.png';

import StepsNavListCtrl from './steps_nav_list';
import { useDispatch, useSelector } from 'react-redux';
import { clearlistSpaceMessageFields, getListDetails, publishSpace, stepSevenUpdateClient } from '../../../redux/listspace/listspaceActions';

function CreateYourListStepSeventhCtrl() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { stepSix, publishSuccess, publishError, publishLoading, stepSeven, listDetailData } = useSelector(state => state.listspace);
    const [aboutDescription, setAboutDescription] = useState("");

    const [bookingTerms, setBookingTerms] = useState(false);
    const [bookingTermsError, setBookingTermsError] = useState("");

    const [guestTerms, setGuestTerms] = useState(false);
    const [guestTermsError, setGuestTermsError] = useState("");

    const [guestAgreement, setGuestAgreement] = useState(false);
    const [guestAgreementError, setGuestAgreementError] = useState("");

    const [vatRegistered, setVatRegistered] = useState("Yes");




    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        if (sessionStorage.getItem("step7")) {
            sessionStorage.removeItem("step7");
        }

    }, [sessionStorage]);


    useEffect(() => {

        if (!stepSix) {
            history.push('/create-your-list-step6');
        }
        else {

            dispatch(getListDetails({
                id: stepSix.id,
                token: JSON.parse(localStorage.getItem('stashGuruToken'))
            }));

        }

    }, [stepSix, dispatch]);


    useEffect(() => {

        if (stepSeven) {


            setAboutDescription(stepSeven.about);


            if (stepSeven.vat) {
                setVatRegistered(stepSeven.vat);
            }

        }

    }, [stepSeven]);



    // useEffect(() => {

    //     if (publishSuccess) {
    //         history.push('/listing');
    //         dispatch(clearlistSpaceMessageFields());
    //     }

    // }, [publishSuccess]);


    const onSubmitForm = (e) => {

        setBookingTermsError("");
        setGuestAgreementError("");
        setGuestTermsError("");

        e.preventDefault();


        let error = false;

        if (!bookingTerms) {
            setBookingTermsError("Please agree booking terms");
            error = true;
        }

        if (!guestTerms) {
            setGuestTermsError("Please agree guest terms");
            error = true;
        }

        if (!guestAgreement) {
            setGuestAgreementError("Please agree guest agreement");
            error = true;
        }


        if (!error) {

            // dispatch(publishSpace({
            //     token: JSON.parse(localStorage.getItem("stashGuruToken")),
            //     about: aboutDescription,
            //     vat: vatRegistered,
            //     id: stepSix.id
            // }));


            let stepSevenNew = {
                id: stepSix.id,
                about: aboutDescription,
                vat: vatRegistered
            };

            sessionStorage.setItem("step7", JSON.stringify(stepSevenNew));

            dispatch(stepSevenUpdateClient(stepSevenNew));
            window.location.href = `/list-preview/${stepSix.id}`;

        }




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

                                        <img src={listDetailData && listDetailData.details ? listDetailData.details.u_pic : no_img} />

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
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt">Booking Terms</h3>

                            <p>The Booking Terms protect your bookings in case anything goes wrong. Your Guests will sign the before they start a booking.</p>
                            <p><input type="checkbox" checked={bookingTerms} onChange={() => setBookingTerms(!bookingTerms)} />  I agree to the <a href="#">Booking Terms</a></p>

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
                            <h3 className="md_bld_txt">ID Verification</h3>

                            <p>We ask all StashGuru Hosts to verify their account before they can respond to Guest enquires and take bookings. You'll only have to do this once, and it only takes a minute or two.</p>
                            <Button className="btn_l_orange px-4" onClick={() => window.open('/verification')}>Verify My Account</Button>
                            <p>Required to fully enable instant Book. <a href="#">Learn more.</a></p>

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
                            <h3 className="md_bld_txt">Add your own terms and conditions</h3>

                            <p>If you are a business, you can ask your Guests to agree to your Terms when booking through StashGuru.</p>
                            <p><input type="checkbox" checked={guestTerms} onChange={() => setGuestTerms(!guestTerms)} />   Guests must sign my Terms & Conditions when booking StashGrur</p>
                            <p><input type="checkbox" checked={guestAgreement} onChange={() => setGuestAgreement(!guestAgreement)} />   I don't need Guests to agree to my Terms & Conditions.</p>

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
                            {
                                bookingTermsError && <Alert variant="danger">{bookingTermsError}</Alert>
                            }
                            {
                                guestTermsError && <Alert variant="danger">{guestTermsError}</Alert>
                            }

                            {
                                guestAgreementError && <Alert variant="danger">{guestAgreementError}</Alert>
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
                                Preview
                            </Button>




                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepSeventhCtrl;
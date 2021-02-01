import React, { useEffect, useRef, useState } from 'react'
import { Modal, Button, Form, Alert, Spinner, Row, Col } from 'react-bootstrap';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileVerifyModal, verifyMobile } from '../../../redux';
import { config } from '../../../config/config';

const firebaseConfig = {
    apiKey: "AIzaSyA_hBc__NA3mqaHVb97hIM_cdAhXbGNihw",
    authDomain: "stashguru-c2b43.firebaseapp.com",
    databaseURL: "https://stashguru-c2b43.firebaseio.com",
    projectId: "stashguru-c2b43",
    storageBucket: "stashguru-c2b43.appspot.com",
    messagingSenderId: "331850643659",
    appId: "1:331850643659:web:337d9a0443777d2510034e"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();




function MobileVerification() {

    const { authResponse } = useSelector(state => state.auth);
    const { mobileVerifyShow } = useSelector(state => state.document);
    const dispatch = useDispatch();
    const captchaRef = useRef();
    const [mobile, setMobile] = useState("");
    const [showConfirmBox, setShowConfirmBox] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [countryCode, setCountryCode] = useState("+40");
    const [countryCodeList, setCountryCodeList] = useState([]);


    useEffect(() => {


        async function getCountryCode() {

            const countryCodes = await fetch(`${config.appUrl}/countryCode.json`);
            const result = await countryCodes.json();
            setCountryCodeList(result);

        }

        getCountryCode();


    }, [fetch]);

    useEffect(() => {

        if (authResponse && authResponse.users) {
            setMobile(authResponse.users.mobile);
            if (authResponse.users.country_code) {
                setCountryCode(authResponse.users.country_code);
            }

        }

    }, [authResponse]);

    const onModalShow = () => {

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        window.recaptchaVerifier.render();

    }

    const confirmCode = (e) => {

        e.preventDefault();
        setError("");
        setLoading(true);

        window.confirmationResult.confirm(verificationCode).then(function (result) {

            setLoading(false);

            dispatch(toggleMobileVerifyModal(false));
            dispatch(verifyMobile({
                mobile: mobile,
                country_code: countryCode,
                type: "Phone"
            }));



        }).catch(error => {
            setError(error);
        });

    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        const appVerifier = window.recaptchaVerifier;

        setError("");
        setLoading(true);

        firebase.auth().signInWithPhoneNumber(`${countryCode}${mobile}`, appVerifier).then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            setShowConfirmBox(true);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            setError(error.message);
            // console.log(error);
        });
    }

    return (
        <>

            <Modal
                show={mobileVerifyShow}
                onHide={() => dispatch(toggleMobileVerifyModal(false))}
                backdrop="static"
                keyboard={false}
                onShow={onModalShow}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Verify Mobile</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={confirmCode} hidden={!showConfirmBox}>
                        <Form.Group>
                            <Form.Label>Enter OTP</Form.Label>
                            <Form.Control placeholder="Enter 6 digit code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={loading}>Submit</Button>
                        </Form.Group>
                    </Form>

                    <Form hidden={showConfirmBox}>

                        <Form.Group>
                            <Form.Label>Mobile No</Form.Label>
                            <Row>
                                <Col md={4} sm={4}>
                                    <Form.Control as="select" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} >
                                        {
                                            countryCodeList.map((country, index) => (
                                                <option key={index} value={country.dial_code}>{`${country.code} (${country.dial_code}) `}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Col>

                                <Col md={8} sm={8} style={{ paddingLeft: "0px" }}>
                                    <Form.Control style={{ borderRadius: "5px" }} maxLength="10" placeholder="XXXXXXXXXX" readOnly={false} value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                </Col>

                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <div id="recaptcha-container"></div>
                        </Form.Group>


                    </Form>

                    {
                        loading && <Spinner variant="primary" animation="border"></Spinner>
                    }

                    {
                        error && <Alert variant="danger">{JSON.stringify(error)}</Alert>
                    }


                </Modal.Body>
                <Modal.Footer className="justify-content-end">

                    <Button className="px-5 mdlBtnFooterClose" variant="light" onClick={() => dispatch(toggleMobileVerifyModal(false))}> Close </Button>
                    <Button className="px-5" variant="success" type="button" disabled={loading} onClick={onSubmitForm}>Submit</Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default MobileVerification

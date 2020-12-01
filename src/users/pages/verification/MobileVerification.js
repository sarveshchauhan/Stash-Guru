import React, { useEffect, useRef, useState } from 'react'
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileVerifyModal, verifyMobile } from '../../../redux';

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


    useEffect(() => {

        if (authResponse && authResponse.users) {
            setMobile(authResponse.users.mobile);
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

        firebase.auth().signInWithPhoneNumber(mobile, appVerifier).then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            setShowConfirmBox(true);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            setError(error);
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
                    <Modal.Title>Verfiy Mobile</Modal.Title>
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

                    <Form onSubmit={onSubmitForm} hidden={showConfirmBox}>

                        <Form.Group>
                            <Form.Label>Mobile (with Country Code)</Form.Label>
                            <Form.Control placeholder="+XXXXXXXXXXXX" readOnly={false} value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <div id="recaptcha-container"></div>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={loading}>Submit</Button>
                        </Form.Group>



                    </Form>

                    {
                        loading && <Spinner variant="primary" animation="border"></Spinner>
                    }

                    {
                        error && <Alert variant="danger">{JSON.stringify(error)}</Alert>
                    }


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(toggleMobileVerifyModal(false))}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default MobileVerification

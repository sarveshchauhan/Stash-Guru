import React, { useState } from 'react'
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSignInTerms, termsSignIn, termsSignInHost, toggleBookingTermsModal, toggleBookingTermsModalHost } from '../../../redux';
import './bookingComp.css';

function BookingTermsModalHost() {

    const { signInHostLoading, signInHostError, termsDetail, termsLoading, termsError } = useSelector(state => state.booking);

    const { show, bookingId } = useSelector(state => state.booking.hostBookingTermsModal);

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [signIn, setSignIn] = useState(false);

    const [nameError, setNameError] = useState("");
    const [signInErrorr, setSignInErrorr] = useState("");


    const onSubmitForm = (e) => {

        e.preventDefault();

        let error = false;

        setNameError("");
        setSignInErrorr("");

        if (!name) {
            setNameError("Name is required!");
            error = true;
        }

        if (!signIn) {
            setSignInErrorr("Please agree the terms");
            error = true;
        }

        if (!error) {
            dispatch(termsSignInHost({
                booking_id: bookingId,
                host_sign_in: "Yes",
                host_sign_in_name: name
            }))
        }

    }


    return (
        <>
            <Modal
                show={show}
                onHide={() => dispatch(toggleBookingTermsModalHost({
                    bookingId: "",
                    show: false
                }))}
                onShow={() => dispatch(getSignInTerms())}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>StashGuru Booking Terms</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        termsLoading ? <div className="text-center"><Spinner variant='success' animation="border" /></div> : <div className="terms-div">


                            <p>Signing these terms will help to protect your booking in case anything goes wrong. It's a mandatory step before the booking can start.</p>
                            <p>Please review them carefully and sign by typing your name when you're ready.</p>

                            <p>
                                <strong>Name of Guest:</strong>
                                <br />
                        Devopsit
                    </p>

                            <p>
                                <strong>Name of Host:</strong>
                                <br />
                        Devopsit
                    </p>

                            <hr />

                            {termsDetail}

                            <Form.Control placeholder="Type Your Full Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>

                            <Form.Check label="I agree to these Booking Terms" className="mt-2" checked={signIn} onChange={(e) => setSignIn(e.target.checked)} />



                            {
                                nameError && <Alert variant="danger">{nameError}</Alert>
                            }

                            {
                                signInHostError && <Alert variant="danger">{signInHostError}</Alert>
                            }

                            {
                                signInErrorr && <Alert variant="danger">{signInErrorr}</Alert>
                            }

                            {
                                termsError && <Alert variant="danger">{termsError}</Alert>
                            }


                            {
                                signInHostLoading && <Spinner animation="border" variant="success" />

                            }




                        </div>
                    }



                </Modal.Body>
                <Modal.Footer>



                    <Button className="px-5 mdlBtnFooterClose" variant="light" onClick={() => dispatch(toggleBookingTermsModalHost({
                        bookingId: "",
                        show: false
                    }))}> Close </Button>
                    <Button className="px-5" variant="success" type="button" disabled={signInHostLoading} onClick={onSubmitForm}>Sign Booking Terms</Button>



                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookingTermsModalHost

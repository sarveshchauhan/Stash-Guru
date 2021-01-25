import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelBookingGuest, toggleCancelGuestBookingModal } from '../../../redux';
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';

function CancelGuestBookingModal() {

    const { show, booking_id } = useSelector(state => state.booking.showCancelGuestBookingModal);
    const { cancelGuestBookingLoading, cancelGuestBookingError } = useSelector(state => state.booking);
    const dispatch = useDispatch();
    const [reason, setReason] = useState("");
    const [reasonError, setReasonError] = useState("");


    const onSubmitForm = (e) => {
        e.preventDefault();

        setReasonError("");

        if (!reason) {
            setReasonError("Reason is required!");
            return false;
        }

        dispatch(cancelBookingGuest({
            booking_id: booking_id,
            resion: reason
        }));

    }

    return (
        <>
            <Modal
                show={show}
                onHide={() => dispatch(toggleCancelGuestBookingModal({
                    show: false,
                    booking_id: ""
                }))}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmitForm}>
                        <Form.Group>
                            <Form.Label>Enter Reason</Form.Label>
                            <Form.Control as="textarea" placeholder={'Enter your reason here.....'} value={reason} onChange={(e) => setReason(e.target.value)}></Form.Control>

                            {
                                reasonError && <small className="text-danger">{reasonError}</small>
                            }
                        </Form.Group>

                        {
                            cancelGuestBookingLoading && <Spinner animation="border" variant="danger" /> 
                        }

                        {
                            cancelGuestBookingError && <Alert variant="danger">{JSON.stringify(cancelGuestBookingError)}</Alert>
                        }

                    </Form>
                </Modal.Body>

                <Modal.Footer>


                    <Button className="px-5 mdlBtnFooterClose" variant="light" onClick={() => dispatch(toggleCancelGuestBookingModal({
                        show: false,
                        booking_id: ""
                    }))}> Close </Button>

                    <Button className="px-5" variant="success" type="button" disabled={cancelGuestBookingLoading} onClick={onSubmitForm}>Cancel Booking</Button>

                </Modal.Footer>

            </Modal>
        </>
    )
}

export default CancelGuestBookingModal

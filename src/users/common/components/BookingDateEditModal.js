import React, { useState } from 'react'
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeBookingStartDate, toggleBookingDateEditModal } from '../../../redux';
import dateFormat from 'dateformat';
import DatePicker from 'react-date-picker';
import { useParams } from 'react-router';

function BookingDateEditModal() {

    const { showBookingDateEditModal, bookingInfo, changeBookingDateLoading, changeBookingDateError } = useSelector(state => state.booking);
    const dispatch = useDispatch();



    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const [startDate, setStartDate] = useState(currentDate);


    const onFormSubmit = (e) => {

        e.preventDefault();
        dispatch(changeBookingStartDate({
            planned_start_date: startDate
        }));

    }


    return (
        <>

            <Modal
                show={showBookingDateEditModal}
                onHide={() => dispatch(toggleBookingDateEditModal(false))}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Start date</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={onFormSubmit}>
                        <Form.Group>
                            <Form.Label>Current Start date</Form.Label>
                            <Form.Control defaultValue={bookingInfo && bookingInfo.planned_start_date && dateFormat(bookingInfo.planned_start_date, "dd/mm/yyyy")} readOnly={true} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>New Start date</Form.Label>
                            <DatePicker className="w-100" onChange={(e) => setStartDate(e)} value={startDate} minDate={currentDate} />
                        </Form.Group>


                        <Form.Group>
                            {
                                changeBookingDateLoading ? <Spinner animation="border" variant="success" /> : <Button type="submit">Submit</Button>
                            }

                        </Form.Group>

                        {
                            changeBookingDateError && <Alert variant="danger">{JSON.stringify(changeBookingDateError)}</Alert>
                        }


                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(toggleBookingDateEditModal(false))}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default BookingDateEditModal

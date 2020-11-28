import React, { useState } from 'react'
import { Modal, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { newBooking, toggleBookingModal } from '../../../redux';
import DatePicker from 'react-date-picker';
import user_r1 from '../../../assets/front/images/dummy/user_r1.png';

function BookingModal() {

    const { showBookingModal, bookingLoading, bookingError } = useSelector(state => state.booking);
    const dispatch = useDispatch();

    const { searchId } = useParams();


    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    const [startDate, setStartDate] = useState(currentDate);
    const [month, setMonth] = useState("");
    const [monthError, setMonthError] = useState("");




    const months = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const validateMonth = () => {
        if (!month) {
            setMonthError("Please select no. of months");
        }
        else {
            setMonthError("");
        }
    }

    const onBookingFormSubmit = (e) => {
        e.preventDefault();
        validateMonth();

        if (!monthError && month) {


            dispatch(newBooking({
                store_id: +searchId,
                planned_start_date: startDate,
                estimated_duration: +month
            }))

        }


    }

    return (
        <>

            <Modal className="user_modal" show={showBookingModal} onHide={() => dispatch(toggleBookingModal(false))} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={() => dispatch(toggleBookingModal(false))}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <Modal.Header>
                    <div>
                        <Modal.Title>Book Space</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex-wrap w-100">

                        <div>
                            <img className="user_img_avtar" src={user_r1} />
                        </div>
                        <div className="pl-3">
                            <h4 className="m-0" style={{ fontWeight: '700', color: '#34D789' }}>Mary Ann</h4>
                            <small><b className="m-0">Warehouse in E1</b></small>
                        </div>
                    </div>
                    <div className="text-left mt-4">
                        <Form onSubmit={onBookingFormSubmit}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Planned Start Date</Form.Label>
                                <div className="w-100">
                                    <DatePicker className="w-100" onChange={(e) => setStartDate(e)} value={startDate} minDate={currentDate} />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Estimated Duration</Form.Label>
                                <Form.Control className="rectu_form_field" as="select" value={month} onChange={(e) => setMonth(e.target.value)} onBlur={() => validateMonth()}>
                                    <option value="">Select Durations</option>

                                    {
                                        months.map((month, index) => (
                                            <option value={month} key={index}>{month}</option>
                                        ))
                                    }
                                </Form.Control>

                                {
                                    monthError && <small className="text-danger">{monthError}</small>
                                }

                            </Form.Group>


                            <div className="text-center w-100">
                                <Button className="px-5" variant="success" type="submit" disabled={bookingLoading}>

                                    {
                                        bookingLoading ? <>  <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        /> Please wait.... </>

                                            :

                                            <>
                                                Let's Go
                                    </>
                                    }

                                </Button>
                            </div>


                            {
                                bookingError && <Alert variant="danger" className="mt-2">{bookingError}</Alert>
                            }

                        </Form>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    )
}

export default BookingModal

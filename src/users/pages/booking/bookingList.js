import React, { useEffect } from 'react';
import { Button, Form, InputGroup, FormControl, Row, Col, Table } from 'react-bootstrap';
import './booking.scss';
import dummy1 from '../../../assets/users/images/dummy/dummy1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getBookingList } from '../../../redux';
import dateFormat from 'dateformat';
import { get_store_size } from '../../../helpers/storeHelper';
import { useHistory } from 'react-router';
import { config } from '../../../config/config';


function UserBookingListCtrl() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { bookingLoading, bookingError, bookingList } = useSelector(state => state.booking);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);

    useEffect(() => {
        dispatch(getBookingList({}));
    }, [dispatch]);


    return (
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">Bookings</h2>
                    <div className="user_page_hdng_left">
                        <Form className="d-inline-block float-left" style={{ maxWidth: '350px' }}>
                            <InputGroup>
                                <FormControl placeholder="Search Booking" aria-label="Search Booking" aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                    <Button variant="success" className="px-3">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        <Button variant="outline-success" className="ml-2" style={{ minWidth: '150px' }}><i className="fa fa-filter" aria-hidden="true"></i> Filters</Button>
                    </div>
                </div>
            </div>

            {
                bookingList && Array.isArray(bookingList) && bookingList.map((booking, index) => (


                    <div className={`space_booking_list active`} key={index}>
                        <Row className="m-0">
                            <Col sm="8" className="px-0">
                                <div className="space_booking_list_header">
                                    <h5 className="m-0">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i> {`${booking.store_address1}, ${booking.store_address2 ? booking.store_address2 + ", " + booking.store_city + ", " + booking.store_postcode : booking.store_city + ", " + booking.store_postcode}`}
                                    </h5>
                                    <div className="text-center" style={{ lineHeight: '1' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <small className="d-block">0</small>
                                    </div>
                                </div>
                                <div className="space_booking_list_body">
                                    <div className="space_booking_image">
                                        {
                                            booking.imageInfo ? <img src={`${config.apiUrl}/store/${booking.imageInfo.si_path}`} /> : <img src={dummy1} />
                                        }

                                    </div>
                                    <div className="pl-3">
                                        <h5>{booking.store_title}</h5>
                                        <Table size="sm" className="no_bdr m-0">
                                            <tbody>
                                                <tr>
                                                    <td width="120">
                                                        <Table size="sm" className="no_bdr">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <strong>{booking.store_cost} Lei</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Monthly Rental</th>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </td>


                                                    <td width="120">
                                                        <Table size="sm" className="no_bdr">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <strong>{+get_store_size(booking.store_total_size).width * +get_store_size(booking.store_total_size).depth}  </strong> Sq.ft.
                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Space used</th>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </td>


                                                    <td width="120">
                                                        <Table size="sm" className="no_bdr">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <strong>{dateFormat(booking.planned_start_date, "dd mmm yyyy")}</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Start Date</th>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        {
                                            booking.booking_status === "PENDING" && <Button size="sm" variant="light_cyan" className="px-4" onClick={() => history.push(`/chat/list/${booking.store_id}`)}>Send a Message to get started</Button>
                                        }

                                    </div>
                                </div>
                            </Col>
                            <Col sm="4" className="px-0 book_space_ctrl text-white text-center ">
                                <div className="m-4 mx-5 pt-3">

                                    {
                                        booking.booking_status === "PENDING" && <>
                                            <Button className="btn-block btn_milky_grn" onClick={() => history.push(`/booking/${booking.guid}`)}>Book Space</Button>
                                            <Button className="btn-block btn_success_milky_outline" onClick={() => history.push(`/book/${booking.store_id}/${booking.guid}`)}>Send Message</Button>
                                            <small className="d-block mt-4">Enquiry will expire in 2 days</small>
                                        </>
                                    }

                                    {
                                        booking.booking_status === "REFUNDED" && <small className="d-block mt-4">Payment received in 24 hours</small>
                                    }


                                    {
                                        booking.booking_status === "PAID" && <Button className="btn-block btn_milky_grn">Booked</Button>
                                    }

                                    {
                                        booking.booking_status === "Proccessing" && <Button className="btn-block btn_milky_grn" type="button">Waiting for Host Response</Button>
                                    }

                                    {
                                        booking.booking_status === "REFUNDED" && <Button className="btn-block btn_milky_grn">Cancelled by Host</Button>
                                    }

                                </div>
                            </Col>
                        </Row>
                    </div>


                ))
            }

            {/* 
            <div className="space_booking_list disable">
                <Row className="m-0">
                    <Col sm="8" className="px-0">
                        <div className="space_booking_list_header">
                            <h5 className="m-0">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> LONDON, E1 7AA
                            </h5>
                            <div className="text-center" style={{ lineHeight: '1' }}>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <small className="d-block">0</small>
                            </div>
                        </div>
                        <div className="space_booking_list_body">
                            <div className="space_booking_image">
                                <img src={dummy1} />
                            </div>
                            <div className="pl-3">
                                <h5>Workspace In Warehouse</h5>
                                <Table size="sm" className="no_bdr m-0">
                                    <tbody>
                                        <tr>
                                            <td width="120">
                                                <Table size="sm" className="no_bdr">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>$2500</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Monthly Rental</th>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>


                                            <td width="120">
                                                <Table size="sm" className="no_bdr">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>100 </strong> Sq.ft.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Space used</th>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>


                                            <td width="120">
                                                <Table size="sm" className="no_bdr">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>08 Nov</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Start Date</th>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Button size="sm" variant="light_cyan" className="px-4">Archived</Button>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4" className="px-0 book_space_ctrl text-white text-center ">
                        <div className="m-4 mx-5 pt-3">
                            <Button className="btn-block btn_milky_grn">Book Space</Button>
                            <Button className="btn-block btn_success_milky_outline">Send Message</Button>
                            <small className="d-block mt-4">Enquiry will expire in 2 days</small>
                        </div>
                    </Col>
                </Row>
            </div> */}



        </>
    )
}

export default UserBookingListCtrl;
import React from 'react';
import { Button,Form,InputGroup,FormControl, Row, Col, Table } from 'react-bootstrap';
import './booking.scss';
import dummy1 from '../../../assets/users/images/dummy/dummy1.jpg'


function UserBookingListCtrl(){
    return(
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">Bookings</h2>
                    <div className="user_page_hdng_left">
                        <Form className="d-inline-block float-left" style={{maxWidth:'350px'}}>
                            <InputGroup>
                                <FormControl placeholder="Search Booking" aria-label="Search Booking" aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                    <Button variant="success" className="px-3">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        <Button variant="outline-success" className="ml-2" style={{minWidth:'150px'}}><i className="fa fa-filter" aria-hidden="true"></i> Filters</Button>
                    </div>
                </div>
            </div>

            <div className="space_booking_list">
                <Row className="m-0">
                    <Col sm="8" className="px-0">
                        <div className="space_booking_list_header">
                            <h5 className="m-0">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> LONDON, E1 7AA
                            </h5>
                            <div className="text-center" style={{lineHeight: '1'}}>
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

                                <Button size="sm" variant="light_cyan" className="px-4">Send a Message to get started</Button>
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
            </div>
            <div className="space_booking_list disable">
                <Row className="m-0">
                    <Col sm="8" className="px-0">
                        <div className="space_booking_list_header">
                            <h5 className="m-0">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> LONDON, E1 7AA
                            </h5>
                            <div className="text-center" style={{lineHeight: '1'}}>
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

                                <Button size="sm" variant="light_cyan" className="px-4">Send a Message to get started</Button>
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
            </div>
            
        </>
    )
}

export default UserBookingListCtrl;
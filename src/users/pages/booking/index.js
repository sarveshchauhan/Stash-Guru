import React from 'react';
import {Row,Col, Button,Form, Table } from 'react-bootstrap';
import './booking.scss';
import video_bg from '../../../assets/users/images/dummy/video_bg.png';
import hours_delivery from '../../../assets/users/images/icons/hours_delivery.png';


function UserBookingCtrl(){
    return(
        <>
            <Row>
                <Col lg={8}>
                    <div className="box_Card">
                        <Row className="justify-content-center">
                            <Col sm="10">
                                <div className="text-center">
                                    <img src={hours_delivery} />
                                </div>
                                <div className="text-center">
                                By making a payment, you're requesting to book Mary Ann's Warehouse. Herschel will have 24 hours to respond and confirm your booking
                                </div>
                            </Col>
                        </Row>
                        <Form className="mt-5">
                            <Row>
                                <Col sm="12">
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Send Mary Ann a message</Form.Label>
                                        <Form.Control className="rectu_form_field" as="textarea" placeholder="Say hello and what you're using the space for" />
                                    </Form.Group>
                                </Col>
                                <Col sm="12">
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Payment Method</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col sm="12">
                                    <Form.Row sm="6">
                                        <Form.Group as={Col} sm="6" controlId="">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control className="rectu_form_field"  placeholder="XXXX-XXXX-XXXX-XXXX" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm="3" controlId="">
                                            <Form.Label>Expiry</Form.Label>
                                            <Form.Control className="rectu_form_field"  placeholder="00/00" />
                                        </Form.Group>

                                        <Form.Group as={Col} sm="3" controlId="">
                                            <Form.Label>CVV</Form.Label>
                                            <Form.Control className="rectu_form_field"  placeholder="123" />
                                        </Form.Group>
                                    </Form.Row>
                                </Col>
                            </Row>
                            <Row className="whatUBePaying">
                                <Col sm="12">
                                    <Form.Group>
                                        <Form.Label>What you'll be paying</Form.Label>
                                    </Form.Group>
                                </Col>
                                
                                <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>Security Deposit</b>
                                        <strong>$12000</strong>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>First Month Rental</b>
                                        <strong>$1000</strong>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>Security Deposit for Key</b>
                                        <strong>$500</strong>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>Other Deposit</b>
                                        <strong>$5000</strong>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>Security Deposit</b>
                                        <strong>$12000</strong>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b className="text_color_shamrock">TOTAL</b>
                                        <strong>$12000</strong>
                                    </div>
                                </Col>
                                <Col sm="12">
                                    <div className="whatUBePayingUlListCard mb-3">
                                        <ul>
                                            <li>Funds will be held in your account now, but not charged until the Host confirms</li>
                                            <li>You'll be charged when your Host confirms this booking</li>
                                            <li>Then £4280 on the 11th of every month until the booking ends</li>
                                        </ul> 
                                    </div>
                                </Col>
                                <Col sm="5" className="mx-auto">
                                    <Button variant="success" className="btn-block">Pay Now</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </Col>



                <Col lg={4}>
                    <div className="box_Img_Card">
                        <img src={video_bg} alt="" />
                        <div className="box_Img_Card_body">
                            <h5>Workspace In Warehouse</h5>
                            <Table size="sm">
                                <tbody>
                                    <tr>
                                        <th>Start Date</th>
                                        <td>
                                            <strong>18<sup>th</sup> Nov</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Minimum Rental</th>
                                        <td>
                                            <strong>2 </strong><sma>months</sma>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Monthly Rental</th>
                                        <td>
                                            <strong>$1000</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Security Deposit</th>
                                        <td>
                                            <strong>$12000</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Space</th>
                                        <td>
                                            <strong>20x25</strong><small>(500sq ft.)</small>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    
                    <div className="box_Card">
                        <div className="Cancellations_Policy_Card">
                            <label class="form-label">Cancellations & Refunds Policy</label>
                            <ul>
                                <li><b>Security Deposit:</b> fully refundable for 24 hours. After that, partially refundable depending on when you cancel</li>
                                <li><b>First Monthly Rental:</b> fully refundable until 11th Nov. </li>
                                <a href="" >Read More</a>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default UserBookingCtrl;
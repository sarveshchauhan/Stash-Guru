import React, { useEffect } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';
import { Form, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { chargePayment } from '../../../redux/booking/bookingActions';
import { useHistory, useParams } from 'react-router';

function PaymentForm({ stripe }) {

    const dispatch = useDispatch();
    const { guid } = useParams();
    const history = useHistory();


    const { bookingInfo, chargeLoading, chargeError } = useSelector(state => state.booking);


    const handleSubmit = async (e) => {
        e.preventDefault();

        let amount = bookingInfo && bookingInfo.listingInfo.store_cost;

        if (bookingInfo && bookingInfo.listingInfo.store_security_deposit === "Yes") {
            amount = 2 * (+amount);
        }

        amount = +amount * 100;

        const { token } = await stripe.createToken();

        if (token) {

            dispatch(chargePayment({
                amount: amount,
                source: token.id,
                receipt_email: localStorage.getItem("userEmail"),
                guid: guid
            }));

        }
        else {
            alert("Please enter card details!");
        }


    }


    useEffect(() => {

        if (bookingInfo) {
            if (bookingInfo.status === "PAID") {
                history.push('/booking');
            }
        }

    }, [bookingInfo]);



    return (
        <>



            <Form className="mt-5 paymentForm" onSubmit={handleSubmit}>
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
                                <CardNumberElement className="form-control" />
                            </Form.Group>

                            <Form.Group as={Col} sm="3" controlId="">
                                <Form.Label>Expiry</Form.Label>
                                <CardExpiryElement className="form-control" />
                            </Form.Group>

                            <Form.Group as={Col} sm="3" controlId="">
                                <Form.Label>CVV</Form.Label>
                                <CardCVCElement className="form-control" />
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
                    {
                        bookingInfo && bookingInfo.listingInfo.store_security_deposit === "Yes" && <Col sm="12">
                            <div className="whatUBePayingCard">
                                <b>1 month Security Deposit</b>
                                <strong>{bookingInfo.listingInfo.store_cost} Lei</strong>
                            </div>
                        </Col>
                    }


                    <Col sm="12">
                        <div className="whatUBePayingCard">
                            <b>First Month Rental</b>
                            <strong>{bookingInfo && bookingInfo.listingInfo.store_cost} Lei</strong>
                        </div>
                    </Col>
                    {/* <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>Security Deposit for Key</b>
                                        <strong>$500</strong>
                                    </div>
                                </Col> */}
                    {/* <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>Other Deposit</b>
                                        <strong>$5000</strong>
                                    </div>
                                </Col> */}

                    {/* <Col sm="12">
                                    <div className="whatUBePayingCard">
                                        <b>Security Deposit</b>
                                        <strong>$12000</strong>
                                    </div>
                                </Col> */}


                    <Col sm="12">
                        <div className="whatUBePayingCard">
                            <b className="text_color_shamrock">TOTAL</b>
                            <strong>{bookingInfo && (+bookingInfo.listingInfo.store_cost + +(bookingInfo.listingInfo.store_security_deposit === "Yes" ? bookingInfo.listingInfo.store_cost : 0))} Lei</strong>
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


                        {
                            chargeError && <Alert variant="danger">{chargeError}</Alert>
                        }

                    </Col>
                    <Col sm="5" className="mx-auto">



                        <Button type="submit" variant="success" className="btn-block" disabled={chargeLoading}>

                            {
                                chargeLoading ? <>  <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                /> Please wait.... </>

                                    :

                                    <>
                                        Pay Now
                                    </>
                            }

                        </Button>
                    </Col>
                </Row>
            </Form>




        </>
    )
}

export default injectStripe(PaymentForm)

import React from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard, toggleNewCardModal } from '../../../redux';
import { NavLink } from 'react-router-dom';
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';


function AddCardModal({ stripe }) {

    const { showAddCardModal } = useSelector(state => state.payment);
    const dispatch = useDispatch();


    const onSubmitCard = async (e) => {
        e.preventDefault();

        const { token } = await stripe.createToken();


        if (token) {

            dispatch(addNewCard({
                cardToken: token.id
            }))


        }
        else {
            alert("Please enter card details!");
        }

    }

    return (
        <>


            <Modal className="user_modal" show={showAddCardModal} onHide={() => dispatch(toggleNewCardModal(false))} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={() => dispatch(toggleNewCardModal(false))}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <Modal.Header className="justify-content-start">
                    <div className="text-left">
                        <Modal.Title>Add New Card</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-left">
                        <Form>
                            <Row>
                                <Col md={12}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Your Card number</Form.Label>
                                        {/* <Form.Control className="rectu_form_field" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" /> */}
                                        <CardNumberElement className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Expiry</Form.Label>
                                        {/* <Form.Control className="rectu_form_field" type="text" placeholder="10/22" /> */}
                                        <CardExpiryElement className="form-control" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>CVV</Form.Label>
                                        {/* <Form.Control className="rectu_form_field" type="text" placeholder="123" /> */}
                                        <CardCVCElement className="form-control" />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>House No. & Street</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="22 Main Street" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="London" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="AS245FV" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control className="rectu_form_field" as="select">
                                            <option>United Kingdom</option>
                                            <option>United State</option>
                                            <option>India</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Adding your payment method allows your card to be charged if your booking goes ahead, as outlined in our <NavLink to="" className='text_color_shamrock'>Terms and Conditions.</NavLink></label>
                                        </div>
                                    </Form.Group>
                                </Col>

                            </Row>

                        </Form>
                    </div>
                </Modal.Body>


                <Modal.Footer>
                    <Button className="px-5 mdlBtnFooterClose" variant="light" onClick={() => dispatch(toggleNewCardModal(false))}> Close </Button>

                    <Button className="px-5" variant="success" type="button" onClick={onSubmitCard}>Add Card</Button>
                </Modal.Footer>

            </Modal>



        </>
    )
}

export default injectStripe(AddCardModal)

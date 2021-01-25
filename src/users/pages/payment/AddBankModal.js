import React, { useState } from 'react'
import { injectStripe } from 'react-stripe-elements';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';


import { Button, Modal, Col, Row, Form, Spinner, Alert } from 'react-bootstrap';
import { config } from '../../../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { addBank, addBankFailure, addBankRequest, toggleBankModal } from '../../../redux/payment/paymentActions';



const stripePromise = loadStripe(config.stripePublishableKey);





const BankForm = () => {


    const { showBankModal, addBankLoading, addBankError } = useSelector(state => state.payment);

    const [accountType, setAccountType] = useState('individual');
    const [accountHolderName, setAccountHolderName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [routingNumber, setRoutingNumber] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [country, setCountry] = useState("US");

    const dispatch = useDispatch();

    const stripe = useStripe();
    const elements = useElements();


    const onSubmitBank = (e) => {

        e.preventDefault();

        if (!accountNumber || !routingNumber || !accountHolderName) {
            dispatch(addBankFailure("All fields are required!"));
            return false;
        }

        dispatch(addBankRequest());


        stripe.createToken('bank_account', {
            account_holder_type: accountType,
            account_holder_name: accountHolderName,
            account_number: accountNumber,
            routing_number: routingNumber,
            currency: currency,
            country: country
        }).then(token => {

            if (token.error) {
                // alert(token.error.message);
                dispatch(addBankFailure(token.error.message));
            }
            else {

                dispatch(addBank({
                    bankToken: token.token.id
                }));


            }



        }).catch(error => {
            dispatch(addBankFailure(error.message));
        });




    }


    return (
        <Modal className="user_modal" show={showBankModal} onHide={() => dispatch(toggleBankModal(false))} backdrop="static" keyboard={false}>
            <button className="user_modal_close_btn" onClick={() => dispatch(toggleBankModal(false))}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <Modal.Header className="justify-content-start">
                <div className="text-left">
                    <Modal.Title>Add Bank Account</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="text-left">
                    <Form>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="">
                                    <Form.Label>Account Type</Form.Label>
                                    <Form.Control className="rectu_form_field" as="select" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                                        <option value="individual">Individual</option>
                                        <option value="company">Company</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>


                            <Col md={12}>
                                <Form.Group controlId="">
                                    <Form.Label>Account Holder Name</Form.Label>
                                    <Form.Control className="rectu_form_field" type="text" placeholder="John Doe" value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="">
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control className="rectu_form_field" type="text" placeholder="XXXXXXXXXXXX" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                                </Form.Group>
                            </Col>


                            <Col md={12}>
                                <Form.Group controlId="">
                                    <Form.Label>Routing Number</Form.Label>
                                    <Form.Control className="rectu_form_field" type="text" placeholder="XXXXXXXXXXX" value={routingNumber} onChange={(e) => setRoutingNumber(e.target.value)} />
                                </Form.Group>
                            </Col>


                            <Col md={12}>
                                <Form.Group controlId="">
                                    <Form.Label>Currency</Form.Label>
                                    <Form.Control as="select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                        <option value="USD">USD</option>
                                        <option value="RON">RON</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>


                            <Col md={12}>
                                <Form.Group controlId="">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" value={country} onChange={(e) => setCountry(e.target.value)}>
                                        <option value="US">USA</option>
                                        <option value="RO">Romania</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>



                            <Col md={12} className="text-center">

                                {
                                    addBankLoading && <Spinner animation="border" variant="success" />
                                }


                            </Col>

                            {
                                addBankError && <Col md={12} className="mt-2">
                                    <Alert variant="danger">{
                                        JSON.stringify(addBankError)
                                    }</Alert>
                                </Col>
                            }

                        </Row>

                    </Form>
                </div>
            </Modal.Body>


            <Modal.Footer>
                <Button className="px-5 mdlBtnFooterClose" variant="light" onClick={() => dispatch(toggleBankModal(false))}> Close </Button>

                <Button className="px-5" variant="success" disabled={addBankLoading} type="button" onClick={onSubmitBank}>Add Bank Account</Button>
            </Modal.Footer>



        </Modal>
    )
}

const AddBankModal = () => (
    <Elements stripe={stripePromise}>
        <BankForm />
    </Elements>
)

export default AddBankModal;


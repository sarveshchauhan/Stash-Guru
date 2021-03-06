import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button,Col,Form,Modal, Row,Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import invoice from '../../../assets/users/images/icons/invoice.png';
import card_payment from '../../../assets/users/images/icons/card_payment.png';
import bank from '../../../assets/users/images/icons/bank.png';

function UserPaymentPayoutCtrl(){
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
      if (ref.current) {
        setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', () => handleScroll);
      };
    }, []);



    const [AddCardmodal, setAddCardDmodal] = useState(false);
    const handlesetAddCardDmodalClose = () => setAddCardDmodal(false);
    const handlesetAddCardDmodalShow = () => setAddCardDmodal(true);

    
    const [AddBankmodal, setAddBankDmodal] = useState(false);
    const handlesetAddBankmodalClose = () => setAddBankDmodal(false);
    const handlesetAddBankmodalShow = () => setAddBankDmodal(true);

    return(
        <>
            <div className="Payment_Payout">
                <div className="user_page_hdng justify-content-between align-items-center">
                    <h2 className="user_page_hdng_txt">Payment & Payout</h2>
                </div>


                <Row>
                    <Col md={8}>
                        <div className="box_Card no_any_invoice_card">
                            <div className="paymentPayout_CardHeader">
                                <h6 className="m-0">Invoice</h6>
                                <div className="">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="no_bg" id="dropdown-basic">
                                            Host
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Host</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Guest</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="box_CardBody  text-center">
                                <div className="w-100">
                                    <img src={invoice} alt="" />
                                    <h5 className="text_color_gray mt-3">No any invoice</h5>
                                </div>
                               
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={`${isSticky ? ' stickyRemove' : ' stickyAdd'}`} ref={ref}>
                            <div className="box_Card AddCardPaymentBox">
                                <h6>Card Payment</h6>
                                <div className="text-center box_CardBody align-items-center justify-content-between">
                                    <div className="w-100">
                                        <img src={card_payment} alt="" />
                                        <p>Add a payment card to make payments. We accept Visa, Mastercard, American Express, and Discover.</p>
                                        <Button className="btn_success px-4" onClick={handlesetAddCardDmodalShow}>+ Add Card</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="box_Card AddBankDetailsBox">
                                <h6>Bank Details</h6>
                                <div className="text-center box_CardBody align-items-center justify-content-between">
                                    <div className="w-100">
                                        <img src={bank} alt="" />
                                        <p>This is the account your Host payouts will get paid into.</p>
                                        <Button className="btn_success px-4" onClick={handlesetAddBankmodalShow}>+ Add Bank</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Modal className="user_modal" show={AddCardmodal} onHide={handlesetAddCardDmodalClose} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={handlesetAddCardDmodalClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button> 
                <Modal.Header className="justify-content-start">
                    <div  className="text-left">
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
                                        <Form.Control className="rectu_form_field" type="text" placeholder="XXXX-XXXX-XXXX-XXXX"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Expiry</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="10/22"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="123"  />
                                    </Form.Group>
                                </Col>
                                
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>House No. & Street</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="22 Main Street"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="London"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="AS245FV"  />
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
                                    
                                    <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                        <label class="custom-control-label" for="customCheck1">Adding your payment method allows your card to be charged if your booking goes ahead, as outlined in our <NavLink to="" className='text_color_shamrock'>Terms and Conditions.</NavLink></label>
                                    </div>
                                    </Form.Group>
                                </Col>
                                <Col md={12} className="text-center">
                                    <Button className="btn_success px-5"> Add Card </Button>
                                </Col>
                            </Row>
                            
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="user_modal" show={AddBankmodal} onHide={handlesetAddBankmodalClose} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={handlesetAddBankmodalClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button> 
                <Modal.Header className="justify-content-start">
                    <div  className="text-left">
                        <Modal.Title>Add Bank Account</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-left">
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Account Type</Form.Label>
                                        <Form.Control className="rectu_form_field" as="select">
                                            <option>Individual</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control className="rectu_form_field" as="select">
                                            <option>United Kingdom</option>
                                            <option>United State</option>
                                            <option>India</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group controlId="">
                                        <Form.Label>Date Of Birth</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="01-01-1980"  />
                                    </Form.Group>
                                </Col>
                                
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Account Number</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="1451245754512455"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Sort Code</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="41451451"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Address Line 1</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="22 Main Street"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="Lorem ipsum"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="London"  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="AS245FV"  />
                                    </Form.Group>
                                </Col>

                                
                                <Col md={12} className="text-center">
                                    <Button className="btn_success px-5"> Add Bank Account </Button>
                                </Col>
                            </Row>
                            
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UserPaymentPayoutCtrl;
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row, Dropdown, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import invoice from '../../../assets/users/images/icons/invoice.png';
import visa_cards_citibank from '../../../assets/users/images/dummy/visa_cards_citibank.jpg';
import bank from '../../../assets/users/images/icons/bank.png';

function UserPaymentPayoutListCtrl() {


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


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

    return (
        <>
            <div className="Payment_Payout">
                <div className="user_page_hdng justify-content-between align-items-center">
                    <h2 className="user_page_hdng_txt">Payment & Payout</h2>
                </div>

                <Row>
                    <Col md={8}>
                        <div className="box_Card paymentPayoutList_card">
                            <div className="paymentPayoutList_CardHeader">
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
                            <div className="box_CardBody text-center">
                                <div className="w-100">
                                    <Table size="sm" className="no_bdr">
                                        <thead>
                                            <tr>
                                                <th className="text-left">Storage type</th>
                                                <th className="text-left">Location</th>
                                                <th className="text-center">Area(sq ft.)</th>
                                                <th className="text-center">Qty.</th>
                                                <th className="text-left">Month</th>
                                                <th className="text-center">Amount</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left">Warehouse</td>
                                                <td className="text-left">LONDON, E1 7AA</td>
                                                <td className="text-center">100</td>
                                                <td className="text-center">1</td>
                                                <td className="text-left">Nov 2020</td>
                                                <td className="text-center"><strong>$2500</strong></td>
                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={`${isSticky ? ' stickyRemove' : ' stickyAdd'}`} ref={ref}>
                            <div className="box_Card AddBankDetailsBox">
                                <h6>Card Payment</h6>
                                <div className="box_CardBody align-items-end">
                                    <Table size="sm" className="no_bdr">
                                        <tbody>
                                            <tr>
                                                <th className="pt-2">Name</th>
                                            </tr>
                                            <tr>
                                                <td>Joe Gomez</td>
                                            </tr>

                                            <tr>
                                                <th className="pt-2">Card No.</th>
                                            </tr>
                                            <tr>
                                                <td>XXXXXXXXXXXXXXX4545</td>
                                            </tr>

                                            <tr>
                                                <th className="pt-2">Valid</th>
                                            </tr>
                                            <tr>
                                                <td>XXXXXXX</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div>
                                        <div className="d-block text-right" style={{ width: '80px' }}>
                                            <Button variant="no_bg" className="px-1 text_color_gray">
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </Button>
                                            <Button variant="no_bg" className="px-1 text_color_gray">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block w-100">
                                    <div className="text-center">
                                        <Button className="btn_success px-4" onClick={handlesetAddCardDmodalShow}>+ Add New Card</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="box_Card AddBankDetailsBox">
                                <h6>Bank Details</h6>
                                <div className="box_CardBody align-items-end">
                                    <Table size="sm" className="no_bdr">
                                        <tbody>
                                            <tr>
                                                <th className="pt-2">Name</th>
                                            </tr>
                                            <tr>
                                                <td>Joe Gomez</td>
                                            </tr>

                                            <tr>
                                                <th className="pt-2">A/C No.</th>
                                            </tr>
                                            <tr>
                                                <td>XXXXXXXXXXXXXXX4545</td>
                                            </tr>

                                            <tr>
                                                <th className="pt-2">IFSC Code</th>
                                            </tr>
                                            <tr>
                                                <td>HSBC012454</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div>
                                        <div className="d-block text-right" style={{ width: '80px' }}>
                                            <Button variant="no_bg" className="px-1 text_color_gray">
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </Button>
                                            <Button variant="no_bg" className="px-1 text_color_gray">
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block w-100">
                                    <div className="text-center">
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
                                        <Form.Control className="rectu_form_field" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Expiry</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="10/22" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="123" />
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

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
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
                    <div className="text-left">
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
                                        <Form.Control className="rectu_form_field" type="text" placeholder="01-01-1980" />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Account Number</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="1451245754512455" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Sort Code</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="41451451" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Address Line 1</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="22 Main Street" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Address Line 2</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="Lorem ipsum" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="London" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="">
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control className="rectu_form_field" type="text" placeholder="AS245FV" />
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

export default UserPaymentPayoutListCtrl;
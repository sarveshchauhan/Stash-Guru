import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row, Dropdown, Alert, Table, Spinner, Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import invoice from '../../../assets/users/images/icons/invoice.png';
import visa_cards_citibank from '../../../assets/users/images/dummy/visa_cards_citibank.jpg';
import bank from '../../../assets/users/images/icons/bank.png';

import { loadStripe } from '@stripe/stripe-js';

import {
    Elements,
} from '@stripe/react-stripe-js';

import dateFormat from 'dateformat';

import AddBankModal from './AddBankModal';
import { config } from '../../../config/config';
import { deleteBank, getBankList, setDefaultBank, toggleBankModal } from '../../../redux/payment/paymentActions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getHostPaymentList } from '../../../redux/booking/bookingActions';
import PaymentHostFilter from './PaymentHostFilter';


function UserPaymentHostPayoutListCtrl() {

    const dispatch = useDispatch();
    const { bankList, bankListError, bankListLoading, defaultBankLoading } = useSelector(state => state.payment);
    const { hostPaymentList, hostPaymentLoading } = useSelector(state => state.booking);


    useEffect(() => {

        dispatch(getBankList());
        dispatch(getHostPaymentList());

    }, [dispatch]);


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

    const deleteTheBank = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteBank({
                    bank_id: id
                }))
            }
        })

    }

    return (
        <>
            <div className="Payment_Payout">
                <div className="user_page_hdng justify-content-between align-items-center">
                    <h2 className="user_page_hdng_txt">Payout</h2>
                </div>

                <Row>
                    <Col md={8}>
                        <div className="box_Card paymentPayoutList_card">
                            <div className="paymentPayoutList_CardHeader">
                                <Row>
                                    <Col md="3">
                                        <h4 className="m-0">Invoice</h4>
                                    </Col>
                                    <Col md="9">
                                        <PaymentHostFilter />
                                    </Col>
                                </Row>
                            </div>
                            <div className="box_CardBody text-center">
                                <div className="w-100">

                                    {
                                        hostPaymentLoading ? <div className="text-center">
                                            <Spinner animation="border" variant="success"></Spinner>
                                        </div>
                                            :
                                            <Table size="sm" className="no_bdr">
                                                <thead>
                                                    <tr>
                                                        <th className="text-left">Storage</th>
                                                        <th className="text-left">Date</th>
                                                        <th className="text-center">Amount</th>
                                                        <th className="text-center">Status</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        hostPaymentList && Array.isArray(hostPaymentList) && hostPaymentList.length > 0 ? hostPaymentList.map((host, index) => (
                                                            <tr key={index}>
                                                                <td className="text-left">
                                                                    <Link target="_blank" to={`/search-details/${host.store_id}`}>{host.store_title}</Link>
                                                                </td>
                                                                <td className="text-left">{dateFormat(host.payout_date, "dd/mm/yyyy")}</td>
                                                                <td className="text-center"><strong>{host.payout_amount} Lei</strong></td>
                                                                <td className="text-center"><strong>{host.payout_status}</strong></td>
                                                                <td className="text-center"><i className="fa fa-print"></i></td>
                                                            </tr>
                                                        ))
                                                            :
                                                            <tr>
                                                                <td colSpan="5">
                                                                    <Alert variant="warning mt-2">No Payments</Alert>
                                                                </td>
                                                            </tr>
                                                    }



                                                </tbody>
                                            </Table>


                                    }






                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={`${isSticky ? ' stickyRemove' : ' stickyAdd'}`} ref={ref}>



                            {
                                (bankListLoading || defaultBankLoading) ? <div className="text-center mt-2"><Spinner animation="border" variant="success" /></div> : (bankList && Array.isArray(bankList) && bankList.map((bank, index) => (
                                    <div className="box_Card AddBankDetailsBox" key={index}>
                                        <h6>Bank Details</h6>

                                        {
                                            bank.localInfo && bank.localInfo.is_default === "Yes" ? <Badge variant="primary">Default</Badge> : <Button className="btn-sm" onClick={() => dispatch(setDefaultBank({
                                                bank_id: bank.id
                                            }))}>Set as Default</Button>
                                        }



                                        <div className="box_CardBody align-items-end">




                                            <Table size="sm" className="no_bdr">
                                                <tbody>
                                                    <tr>
                                                        <th className="pt-2">Name</th>
                                                    </tr>
                                                    <tr>
                                                        <td>{bank.account_holder_name}</td>
                                                    </tr>

                                                    <tr>
                                                        <th className="pt-2">A/C Type</th>
                                                    </tr>
                                                    <tr>
                                                        <td>{bank.account_holder_type.toUpperCase()}</td>
                                                    </tr>

                                                    <tr>
                                                        <th className="pt-2">A/C No.</th>
                                                    </tr>
                                                    <tr>
                                                        <td>XXXXXXXXXXXXXXX{bank.last4}</td>
                                                    </tr>

                                                    <tr>
                                                        <th className="pt-2">Bank Name</th>
                                                    </tr>
                                                    <tr>
                                                        <td>{bank.bank_name}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <div>
                                                <div className="d-block text-right" style={{ width: '80px' }}>
                                                    <Button variant="no_bg" className="px-1 text_color_gray">
                                                        <i className="fa fa-trash-o" onClick={() => deleteTheBank(bank.id)} aria-hidden="true"></i>
                                                    </Button>
                                                    {/* <Button variant="no_bg" className="px-1 text_color_gray">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </Button> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )))
                            }

                            <div className="d-block w-100">
                                <div className="text-center">
                                    <Button className="btn_success px-4" onClick={() => dispatch(toggleBankModal(true))}>+ Add Bank</Button>
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


            <AddBankModal />



            {/* <Modal className="user_modal" show={AddBankmodal} onHide={handlesetAddBankmodalClose} backdrop="static" keyboard={false}>
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
            </Modal> */}



        </>
    )
}

export default UserPaymentHostPayoutListCtrl;
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row, Dropdown, Table, Spinner } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import AddCardModal from './AddCardModal';
import { getCardInfo, getGuestPaymentListing, toggleNewCardModal } from '../../../redux';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { config } from '../../../config/config';
import PaymentFilter from './PaymentFilter';


function UserPaymentPayoutListCtrl() {

    const dispatch = useDispatch();
    const { guestPaymentList, guestPaymentLoading, guestPaymentError } = useSelector(state => state.booking);
    const { cardInfo, cardInfoLoading, cardInfoError } = useSelector(state => state.payment);



    useEffect(() => {

        dispatch(getGuestPaymentListing());

    }, [dispatch]);


    useEffect(() => {

        if (guestPaymentList && Array.isArray(guestPaymentList) && guestPaymentList.length > 0) {
            dispatch(getCardInfo({
                charge_id: guestPaymentList[0].charge_id
            }));
        }

    }, [guestPaymentList]);

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
                    <h2 className="user_page_hdng_txt">Payments</h2>
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
                                        <PaymentFilter />
                                    </Col>
                                </Row>


                            </div>
                            <div className="box_CardBody text-center">
                                <div className="w-100">

                                    {
                                        guestPaymentLoading ? <Spinner animation="border" variant="success" /> : <Table size="sm" className="no_bdr">
                                            <thead>
                                                <tr>
                                                    <th className="text-left">Listing</th>
                                                    <th className="text-left">Month</th>
                                                    <th className="text-center">Amount (Lei)</th>
                                                    <th className="text-center">Wallet Amt. (Lei)</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    guestPaymentList && Array.isArray(guestPaymentList) && guestPaymentList.map((guest, index) => (

                                                        <tr key={index}>
                                                            <td className="text-left">

                                                                <Link target="_blank" to={`/search-details/${guest.store_id}`}>{guest.store_title}</Link>

                                                            </td>
                                                            <td className="text-left">{dateFormat(guest.created_on, 'dd/mm/yyyy')}</td>
                                                            <td className="text-center"><strong>{guest.amount}</strong></td>
                                                            <td className="text-center"><strong>{guest.wamount}</strong></td>
                                                            <td className="text-center"><strong>{guest.booking_status}</strong></td>

                                                            <td className="text-center">


                                                                <Link to="#" onClick={(e) => dispatch(getCardInfo({
                                                                    charge_id: guest.charge_id
                                                                }))}>  <i className="fa fa-eye"></i></Link>


                                                            </td>
                                                        </tr>

                                                    ))
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
                                cardInfoLoading ? <Spinner animation="border" variant="success"></Spinner> : cardInfo && <div className="box_Card AddBankDetailsBox">
                                    <h6>Card Payment</h6>
                                    <div className="box_CardBody align-items-end">
                                        <Table size="sm" className="no_bdr">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2">Card Type</th>
                                                </tr>
                                                <tr>
                                                    <td>{cardInfo.brand.toUpperCase()}</td>
                                                </tr>

                                                <tr>
                                                    <th className="pt-2">Card No.</th>
                                                </tr>
                                                <tr>
                                                    <td>XXXXXXXXXXXXXXX{cardInfo.last4}</td>
                                                </tr>

                                                <tr>
                                                    <th className="pt-2">Valid</th>
                                                </tr>
                                                <tr>
                                                    <td>{cardInfo.exp_month}/{cardInfo.exp_year}</td>
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
                                            <Button className="btn_success px-4" onClick={() => dispatch(toggleNewCardModal(true))}>+ Add New Card</Button>
                                        </div>
                                    </div>
                                </div>
                            }




                        </div>
                    </Col>
                </Row>
            </div>

            <StripeProvider apiKey={config.stripePublishableKey}>
                <Elements>
                    <AddCardModal />
                </Elements>
            </StripeProvider>

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
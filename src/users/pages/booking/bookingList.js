import React, { useEffect } from 'react';
import { Button, Form, InputGroup, FormControl, Row, Col, Table, Spinner } from 'react-bootstrap';
import './booking.scss';
import dummy1 from '../../../assets/users/images/dummy/dummy1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getBookingList, toggleCancelGuestBookingModal } from '../../../redux';
import dateFormat from 'dateformat';
import { get_store_size } from '../../../helpers/storeHelper';
import { useHistory } from 'react-router';
import { config } from '../../../config/config';
import CancelGuestBookingModal from './CancelGuestBookingModal';
import nothing_here from '../../../assets/users/images/img/nothing_here.png'

import { useTranslation, Trans } from 'react-i18next';


function UserBookingListCtrl() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { t } = useTranslation();

    const { bookingLoading, bookingError, bookingList } = useSelector(state => state.booking);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);

    useEffect(() => {
        dispatch(getBookingList({}));
    }, [dispatch]);


    return (
        <>
            <CancelGuestBookingModal />
            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">{t('dbBookingHeading')}</h2>
                    <div className="user_page_hdng_left">
                    </div>
                </div>
            </div>


            {
                bookingLoading && <div className="text-center"><Spinner animation="border" variant="success" /></div>
            }

            {
                (!bookingList || bookingList.length === 0) && <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h4><b>{t('dbBookingNoBookingHeading')}</b></h4>
                                <p>{t('dbBookingNoBookingDesc')}</p>
                                <button className="btn btn-success px-4" onClick={() => history.push('/')}>
                                    {t('dbBookingSearchBtnLabel')} <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                                <div className="mt-5">
                                    <img src={nothing_here} alt="nothing here" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

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
                                                                    <th>{t('dbBookingMonthlyRentel')}</th>
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
                                                                    <th>{t('dbBookingSpaceUsed')}</th>
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
                                                                    <th>{t('dbBookingStartDate')}</th>
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
                                            <Button className="btn-block btn_milky_grn" onClick={() => history.push(`/booking/${booking.guid}`)}>{t('dbBookingBookSpace')}</Button>
                                            <small className="d-block mt-4">{t('dbBookingEnquiryExp')}</small>
                                        </>
                                    }

                                    <Button className="btn-block btn_success_milky_outline" onClick={() => history.push(`/book/${booking.store_id}/${booking.guid}`)}>{t('dbBookingSendMessage')}</Button>

                                    {
                                        booking.booking_status === "REFUNDED" && <small className="d-block mt-4">{t('dbBookingPaymentRec')}</small>
                                    }


                                    {
                                        booking.booking_status === "PAID" && <Button className="btn-block btn_milky_grn">{t('dbBookingBooked')}</Button>
                                    }

                                    {
                                        booking.booking_status === "PAID" && <Button className="btn-block btn_milky_grn" onClick={() => dispatch(toggleCancelGuestBookingModal({
                                            show: true,
                                            booking_id: booking.booking_id
                                        }))}

                                            style={{ backgroundColor: "#ec737f", color: "#ffffff" }}

                                        >{t('dbBookingCancelBooking')}</Button>
                                    }


                                    {
                                        booking.booking_status === "CANCELLED Proccessing" && <Button className="btn-block btn_milky_grn" type="button">{t('dbBookingCancelProcess')}</Button>
                                    }


                                    {
                                        booking.booking_status === "Proccessing" && <Button className="btn-block btn_milky_grn" type="button">{t('dbBookingWaitHostResponse')}</Button>
                                    }

                                    {
                                        booking.booking_status === "REFUNDED" && <Button className="btn-block btn_milky_grn">{t('dbBookingCancelByHost')}</Button>
                                    }

                                </div>
                            </Col>
                        </Row>
                    </div>


                ))
            }




        </>
    )
}

export default UserBookingListCtrl;
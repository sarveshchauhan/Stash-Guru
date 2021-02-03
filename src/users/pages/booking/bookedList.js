import React, { useEffect } from 'react';
import { Button, Form, InputGroup, FormControl, Row, Col, Table, Spinner, Alert } from 'react-bootstrap';
import './booking.scss';
import dummy1 from '../../../assets/users/images/dummy/dummy1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { cancelBookingHost, getBookingList, getHostBookingList, toggleCancelHostBookingModal, updateBookingStatus } from '../../../redux';
import dateFormat from 'dateformat';
import { get_store_size } from '../../../helpers/storeHelper';
import { useHistory } from 'react-router';
import { config } from '../../../config/config';
import MoveInCheckList from './MoveInCheckList';
import BookingTermsModalHost from '../../common/components/BookingTermsModalHost';
import BookingTermsModal from '../../common/components/BookingTermsModal';
import InventoryViewModal from '../../common/components/InventoryViewModal';
import CancelHostBookingModal from './CancelHostBookingModal';

import { useTranslation, Trans } from 'react-i18next';

function UserBookedListCtrl() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { t } = useTranslation();

    const { hostBookingListLoading, cancelHostBookingLoading, cancelHostBookingError, hostBookingListError, hostBookingList, updateBookingLoading } = useSelector(state => state.booking);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        dispatch(getHostBookingList({}));

    }, [dispatch]);


    return (
        <>
            <BookingTermsModalHost />
            <InventoryViewModal />
            <CancelHostBookingModal />
            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">{t('dbBookedListHeading')}</h2>
                    <div className="user_page_hdng_left">
                        <Form className="d-inline-block float-left" style={{ maxWidth: '350px' }}>
                            <InputGroup>
                                <FormControl placeholder={t('dbBookedListSearch')} aria-label="Search Booking" aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                    <Button variant="success" className="px-3">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        <Button variant="outline-success" className="ml-2" style={{ minWidth: '150px' }}><i className="fa fa-filter" aria-hidden="true"></i> {t("dbBookedListFilter")}</Button>
                        {
                            updateBookingLoading && <Spinner animation="border" variant="success" className="ml-2"></Spinner>
                        }
                    </div>
                </div>
            </div>

            {
                hostBookingListError && <div>
                    <Alert variant="danger">{JSON.stringify(hostBookingListError)}</Alert>
                </div>
            }

            {
                cancelHostBookingError && <div>
                    <Alert variant="danger">{JSON.stringify(cancelHostBookingError)}</Alert>
                </div>
            }


            {
                (hostBookingListLoading || cancelHostBookingLoading) && <div className="text-center mt-4">
                    <Spinner animation="border" variant="success" />
                </div>
            }


            {
                (hostBookingList && Array.isArray(hostBookingList) && hostBookingList.length > 0) ? hostBookingList.map((booking, index) => (


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
                                                                    <th>{t('dbBookedListMonthRental')}</th>
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
                                                                    <th>{t('dbBookedListSpaceUsed')}</th>
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
                                                                    <th>{t('dbBookedListStartDate')}</th>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        {/* {
                                            booking.booking_status === "PENDING" && <Button size="sm" variant="light_cyan" className="px-4" onClick={() => history.push(`/chat/list/${booking.store_id}`)}>Send a Message to get started</Button>
                                        } */}

                                    </div>
                                </div>
                            </Col>
                            <Col sm="4" className="px-0 book_space_ctrl text-white text-center ">
                                <div className="m-4 mx-5 pt-3">
                                    <Button className="btn-block btn_milky_grn" type="button" onClick={() => history.push(`/book/${booking.store_id}/${booking.guid}`)}>Send Message</Button>

                                    {
                                        booking.booking_status === "Proccessing" && <>
                                            <Button className="btn-block btn_milky_grn" type="button" onClick={() => dispatch(updateBookingStatus({
                                                booking_id: booking.booking_id,
                                                status: "accept"
                                            }))}>{t('dbBookedListAccept')}</Button>
                                            <Button className="btn-block btn_milky_grn" type="button" onClick={() => dispatch(updateBookingStatus({
                                                booking_id: booking.booking_id,
                                                status: "reject"
                                            }))}>{t('dbBookedListReject')}</Button>
                                        </>
                                    }

                                    {
                                        booking.booking_status === "PAID" && <>
                                            <Button className="btn-block btn_milky_grn">{t('dbBookedListConfirmed')}</Button>
                                        </>
                                    }
                                    {/* planned_start_date */}

                                    {
                                        booking.booking_status === "PAID" && ((new Date().getTime()) <= (new Date(booking.planned_start_date).getTime())) && <>
                                            <Button className="btn-block btn_milky_grn" style={{ backgroundColor: "#ec737f", color: "#ffffff" }} onClick={() => dispatch(toggleCancelHostBookingModal({
                                                show: true,
                                                booking_id: booking.booking_id
                                            }))}>{t('dbBookedListCancelBooking')}</Button>
                                        </>

                                    }

                                    {
                                        booking.booking_status === "PAID" && ((new Date().getTime()) >= (new Date(booking.planned_start_date).getTime())) && <>
                                            <Button className="btn-block btn_milky_grn" style={{ backgroundColor: "#ec737f", color: "#ffffff" }}>{t('dbBookedListNoticePeriod')}</Button>
                                        </>

                                    }


                                    {
                                        booking.booking_status === "CANCELLED Proccessing" && <>
                                            <Button className="btn-block btn_milky_grn">{t('dbBookedListRefund')}</Button>
                                        </>
                                    }

                                    {
                                        booking.booking_status === "REFUNDED" && <>
                                            <Button className="btn-block btn_milky_grn">{t('dbBookedListRejected')}</Button>
                                        </>
                                    }

                                    {
                                        <MoveInCheckList bookingId={booking.booking_id} inventory={booking.inventory} host_sign_in={booking.host_sign_in} />
                                    }


                                </div>
                            </Col>
                        </Row>
                    </div>


                ))
                    :
                    <div className="alert alert-warning text-center">
                        {t('dbBookedListNoBooking')}
                    </div>
            }




        </>
    )
}

export default UserBookedListCtrl;
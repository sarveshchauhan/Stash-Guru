import React, { useEffect, useState } from 'react'
import { Alert, Col, Dropdown, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getGuestPaymentList, getHostPaymentList, getHostPaymentListing } from '../../../redux';

function PaymentHostFilter() {

    const { hostPaymentListing, hostPaymentListingLoading, hostPaymentListingError } = useSelector(state => state.payment);
    const dispatch = useDispatch();
    const [booking_id, set_booking_id] = useState("");
    const [status, set_status] = useState("");
    const [month, set_month] = useState("");


    const monthList = [
        {
            key: 1, value: 'January'
        },
        {
            key: 2, value: 'February'
        },
        {
            key: 3, value: 'March'
        },
        {
            key: 4, value: 'April'
        },
        {
            key: 5, value: 'May'
        },
        {
            key: 6, value: 'June'
        },
        {
            key: 7, value: 'July'
        },
        {
            key: 8, value: 'August'
        },
        {
            key: 9, value: 'September'
        },
        {
            key: 10, value: 'October'
        },
        {
            key: 11, value: 'November'
        },
        {
            key: 12, value: 'December'
        }
    ];

    const statusList = [
        {
            key: 'PAID', value: 'PAID'
        },
        {
            key: 'PROCESSING', value: 'Proccessing'
        }
    ];


    useEffect(() => {

        dispatch(getHostPaymentListing());

    }, [dispatch]);

    useEffect(() => {

        dispatch(getHostPaymentList({}, `booking_id=${booking_id}&status=${status}&month=${month}`));

    }, [booking_id, status, month, dispatch]);


    return (
        <Row>
            {
                hostPaymentListingError && <Alert variant="danger">{hostPaymentListingError}</Alert>
            }
            <Col md="4">

                {
                    hostPaymentListingLoading ? <div className="text-center"><Spinner animation="border" variant="success" /></div> : <select className="form-control" onChange={(e) => set_booking_id(e.target.value)} value={booking_id}>
                        <option value="">Listing</option>
                        {
                            hostPaymentListing && Array.isArray(hostPaymentListing) && hostPaymentListing.map((listing, index) => (
                                <option value={listing.booking_id} key={index}>{listing.store_title}</option>
                            ))
                        }
                    </select>
                }


            </Col>
            <Col md="4">

                <select className="form-control" onChange={(e) => set_status(e.target.value)} value={status}>
                    <option value="">Status</option>
                    {
                        statusList.map((listing, index) => (
                            <option value={listing.value} key={index}>{listing.key}</option>
                        ))
                    }
                </select>

            </Col>
            <Col md="4">

                <select className="form-control" onChange={(e) => set_month(e.target.value)} value={month}>
                    <option value="">Month</option>
                    {
                        monthList.map((listing, index) => (
                            <option value={listing.key} key={index}>{listing.value}</option>
                        ))
                    }
                </select>

            </Col>


        </Row>
    )
}

export default PaymentHostFilter

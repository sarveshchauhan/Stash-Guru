
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Row, Col, Button, Form, Table } from 'react-bootstrap';

import './booking.scss';
import video_bg from '../../../assets/users/images/dummy/video_bg.png';
import hours_delivery from '../../../assets/users/images/icons/hours_delivery.png';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingInfoByGuid } from '../../../redux';
import { useParams } from 'react-router';
import dateFormat from 'dateformat';
import { StripeProvider, Elements } from 'react-stripe-elements';

import { get_store_size } from '../../../helpers/storeHelper';
import { config } from '../../../config/config';
import PaymentForm from './PaymentForm';



function UserBookingCtrl() {
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



    const dispatch = useDispatch();
    const { guid } = useParams();
    const { bookingInfo } = useSelector(state => state.booking);


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        dispatch(getBookingInfoByGuid({
            guid: guid
        }));

    }, [dispatch]);





    return (
        <>

            <StripeProvider apiKey={config.stripePublishableKey}>
                <Row>
                    <Col lg={8}>
                        <div className="box_Card">
                            <Row className="justify-content-center">
                                <Col sm="10">
                                    <div className="text-center">
                                        <img src={hours_delivery} />
                                    </div>
                                    <div className="text-center">
                                        By making a payment, you're requesting to book Mary Ann's Warehouse. Herschel will have 24 hours to respond and confirm your booking
                                </div>
                                </Col>
                            </Row>

                            <Elements>
                                <PaymentForm />
                            </Elements>

                        </div>

                    </Col>



                    <Col lg={4}>
                        <div className="box_Img_Card">
                            {
                                bookingInfo && bookingInfo.listingInfo.images.length > 0 ? <img src={bookingInfo.listingInfo.images[0].si_path} alt="" /> : <img src={video_bg} alt="" />
                            }


                            <div className="box_Img_Card_body">
                                <h5>{bookingInfo && bookingInfo.listingInfo.store_title}</h5>
                                <Table size="sm">
                                    <tbody>
                                        <tr>
                                            <th>Start Date</th>
                                            <td>

                                                <strong>{bookingInfo && dateFormat(bookingInfo.planned_start_date, "dd-mmm-yyyy")}</strong>

                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Minimum Rental</th>
                                            <td>
                                                <strong>{bookingInfo && bookingInfo.estimated_duration} </strong><sma>months</sma>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Monthly Rental</th>
                                            <td>
                                                <strong>{bookingInfo && bookingInfo.listingInfo.store_cost} Lei</strong>
                                            </td>
                                        </tr>

                                        {
                                            bookingInfo && bookingInfo.store_security_deposit === "Yes" && <tr>
                                                <th>Security Deposit</th>
                                                <td>
                                                    <strong>{bookingInfo.listingInfo.store_cost} Lei</strong>
                                                </td>
                                            </tr>
                                        }

                                        {
                                            bookingInfo && <tr>
                                                <th>Space</th>
                                                <td>
                                                    <strong>{`${get_store_size(bookingInfo.listingInfo.store_total_size).width} x ${get_store_size(bookingInfo.listingInfo.store_total_size).height} x ${get_store_size(bookingInfo.listingInfo.store_total_size).depth}`}</strong><small> ({+get_store_size(bookingInfo.listingInfo.store_total_size).width * +get_store_size(bookingInfo.listingInfo.store_total_size).depth} sq ft.)</small>
                                                </td>
                                            </tr>
                                        }


                                        {
                                            bookingInfo && bookingInfo.hostInfo && <tr>
                                                <th>Host Name</th>
                                                <td>
                                                    <strong>{bookingInfo.hostInfo.u_name}</strong>
                                                </td>
                                            </tr>
                                        }

                                    </tbody>
                                </Table>
                            </div>
                        </div>


                        <div className="box_Card">
                            <div className="Cancellations_Policy_Card">
                                <label className="form-label">Cancellations & Refunds Policy</label>
                                <ul>
                                    <li><b>Security Deposit:</b> fully refundable for 24 hours. After that, partially refundable depending on when you cancel</li>
                                    <li><b>First Monthly Rental:</b> fully refundable until 11th Nov. </li>
                                    <a href="" >Read More</a>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </StripeProvider>
        </>
    )
}

export default UserBookingCtrl;
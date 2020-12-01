import React, { useEffect } from 'react';
import { Button, Col, FormControl, InputGroup, Table, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import './booking.scss';
import video_bg from '../../../assets/users/images/dummy/video_bg.png';
import deposit from '../../../assets/users/images/chat/deposit.png';
import G_calender from '../../../assets/users/images/chat/G_calender.png';
import send_message from '../../../assets/users/images/chat/send_message.png';
import calendar from '../../../assets/users/images/chat/calendar.png';
import g_sm_verify from '../../../assets/users/images/chat/g_sm_verify.png';
import r_sm_verify from '../../../assets/users/images/chat/r_sm_verify.png';

import user1 from '../../../assets/users/images/dummy/user1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getCgInfo, searchDetails, toggleBookingModal } from '../../../redux';
import BookingChatBox from './BookingChatBox';
import BookingModal from '../../../front/pages/SearchList/BookingModal';


function UserBookingChatCtrl() {

    const { listId } = useParams();
    const dispatch = useDispatch();

    const { schDetails, images } = useSelector(state => state.search);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        dispatch(searchDetails(listId));
        dispatch(getCgInfo({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            list_id: listId
        }));

    }, [dispatch]);

    return (
        <>
            <div className="bookingChat">
                <Row>
                    <Col md={8}>
                        <BookingChatBox />
                    </Col>



                    <Col md={4}>
                        <div className="box_Img_Card WorkspaceWarehouse_bookingCard">
                            <img src={video_bg} alt="" />
                            <div className="box_Img_Card_body">
                                <h5>{schDetails && schDetails.store_title}</h5>
                                <Table size="sm" className="no_bdr">
                                    <tbody className="pb-2">
                                        <tr>
                                            <td width="120">
                                                <Table size="sm" className="no_bdr">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>${schDetails && schDetails.store_cost}</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Monthly Rental</th>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>


                                            <td width="120">
                                                <Table size="sm" className="no_bdr">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>{schDetails && schDetails.store_size} </strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Space <small>(Sq.ft.)</small></th>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>


                                            <td width="120">
                                                {/* <Table size="sm" className="no_bdr">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>18<sup>th</sup> Nov</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Start Date</th>
                                                        </tr>
                                                    </tbody>
                                                </Table> */}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <small className="d-block"><img src={deposit} width="30" /> Security Deposit ${schDetails && schDetails.store_cost}</small>
                                {/* <small className="d-block"><img src={G_calender} width="30" /> Minimum Rental Period 2Months</small> */}
                                <Button size="sm" className="btn_milky_grn mt-3">Read More</Button>

                                <Button variant="success" className="btn-block my-3" onClick={() => dispatch(toggleBookingModal(true))}>Book Space</Button>

                                <BookingModal />

                            </div>
                            <div className="box_Img_Card_footer">
                                <div className="box_Img_Card_body">
                                    <small className="d-block"><img className="pr-1" src={send_message} width="15" /> Security Deposit ${schDetails && schDetails.store_cost}</small>
                                    {/* <small className="d-block"><img className="pr-1" src={calendar} width="15" /> Minimum Rental Period 2Months</small> */}
                                </div>
                            </div>
                        </div>


                        <div className="box_Card py-0">
                            <div className="booking_chat_user_list">
                                <div className="booking_chat_user_icn">
                                    <img src={user1} />
                                </div>
                                <div className="booking_chat_user_details">
                                    <h5>Mary Ann Wagner</h5>
                                    <small className="text_color_shamrock">
                                        <img className="pr-1" src={g_sm_verify} width="15" />
                                        Verified Host
                                    </small>
                                </div>
                            </div>
                            <div className="booking_chat_user_list">
                                <div className="booking_chat_user_icn">
                                    <img src={user1} />
                                </div>
                                <div className="booking_chat_user_details">
                                    <h5>Mary Ann Wagner</h5>
                                    <small className="text_color_l_orange">
                                        <img className="pr-1" src={r_sm_verify} width="15" />
                                        Verified Host
                                    </small>
                                </div>
                            </div>
                        </div>
                    </Col>


                </Row>
            </div>
        </>
    )
}

export default UserBookingChatCtrl;
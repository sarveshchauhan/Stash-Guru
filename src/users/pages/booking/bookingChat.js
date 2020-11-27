import React, { useEffect } from 'react';
import { Button, Col, FormControl, InputGroup, Table, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import './booking.scss';
import warning from '../../../assets/users/images/chat/warning.png';
import video_bg from '../../../assets/users/images/dummy/video_bg.png';
import paperClip from '../../../assets/users/images/chat/paperClip.png';
import send from '../../../assets/users/images/chat/send.png';
import deposit from '../../../assets/users/images/chat/deposit.png';
import G_calender from '../../../assets/users/images/chat/G_calender.png';
import send_message from '../../../assets/users/images/chat/send_message.png';
import calendar from '../../../assets/users/images/chat/calendar.png';
import g_sm_verify from '../../../assets/users/images/chat/g_sm_verify.png';
import r_sm_verify from '../../../assets/users/images/chat/r_sm_verify.png';

import user1 from '../../../assets/users/images/dummy/user1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { searchDetails } from '../../../redux';


function UserBookingChatCtrl() {

    const { listId } = useParams();
    const dispatch = useDispatch();

    const { schDetails, images } = useSelector(state => state.search);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        dispatch(searchDetails(listId));

    }, [dispatch]);

    return (
        <>
            <div className="bookingChat">
                <Row>
                    <Col md={8}>
                        <div className="box_Card booking_chat_card">
                            <div className="box_CardBody">

                                <div className="booking_chatMsg">
                                    <div className="booking_chat_user_icn">
                                        {/* <img src={user1} /> */}
                                        <span>KR</span>
                                    </div>
                                    <div className="booking_chat_user_details">
                                        <small className="d-block booking_chat_user_name">Kumar Raghav</small>
                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">Lorem ipsum dolor sit</span>
                                                    <span className="timing">26 Nov, 10:14 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking_chatMsg MsgByMe">
                                    <div className="booking_chat_user_icn">
                                        {/* <img src={user1} /> */}
                                        <span>MA</span>
                                    </div>
                                    <div className="booking_chat_user_details">
                                        <small className="d-block booking_chat_user_name">Mary Ann Wagner</small>
                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">Lorem ipsum dolor sit</span>
                                                    <span className="timing">26 Nov, 10:14 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking_chatMsg">
                                    <div className="booking_chat_user_icn">
                                        {/* <img src={user1} /> */}
                                        <span>KR</span>
                                    </div>
                                    <div className="booking_chat_user_details">
                                        <small className="d-block booking_chat_user_name">Kumar Raghav</small>
                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">Lorem ipsum dolor sit amet</span>
                                                    <span className="timing">26 Nov, 10:14 AM</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">Lorem ipsum</span>
                                                    <span className="timing">26 Nov, 10:14 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="booking_chatMsg MsgByMe">
                                    <div className="booking_chat_user_icn">
                                        {/* <img src={user1} /> */}
                                        <span>MA</span>
                                    </div>
                                    <div className="booking_chat_user_details">
                                        <small className="d-block booking_chat_user_name">Mary Ann Wagner</small>
                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">Lorem ipsum dolor sit</span>
                                                    <span className="timing">26 Nov, 10:14 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
                                                    <span className="timing">26 Nov, 10:14 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">?</span>
                                                    <span className="timing">26 Nov, 10:14 AM</span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <InputGroup className="chat_text_field">
                                <FormControl placeholder="FormControl" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                    <Button className="btn_attachment">
                                        <img src={paperClip} />
                                    </Button>
                                    <Button className="btn_send">
                                        <img src={send} />
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
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
                                                                <strong>20x25 </strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Space <small>(Sq.ft.)</small></th>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>


                                            <td width="120">
                                                <Table size="sm" className="no_bdr">
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
                                                </Table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <small className="d-block"><img src={deposit} width="30" /> Security Deposit $90</small>
                                <small className="d-block"><img src={G_calender} width="30" /> Minimum Rental Period 2Months</small>
                                <Button size="sm" className="btn_milky_grn mt-3">Read More</Button>
                                <Button variant="success" className="btn-block my-3">Book Space</Button>
                            </div>
                            <div className="box_Img_Card_footer">
                                <div className="box_Img_Card_body">
                                    <small className="d-block"><img className="pr-1" src={send_message} width="15" /> Security Deposit $90</small>
                                    <small className="d-block"><img className="pr-1" src={calendar} width="15" /> Minimum Rental Period 2Months</small>
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
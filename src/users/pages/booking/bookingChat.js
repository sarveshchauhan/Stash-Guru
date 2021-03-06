import React, { useEffect } from 'react';
import { Button, Col, FormControl, Dropdown, Table, Row } from 'react-bootstrap';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import './booking.scss';
import video_bg from '../../../assets/users/images/dummy/video_bg.png';
import deposit from '../../../assets/users/images/chat/deposit.png';

import calender from '../../../assets/users/images/icons/moveChecklist/calender.png';
import acceptTC from '../../../assets/users/images/icons/moveChecklist/acceptTC.png';
import add_invest from '../../../assets/users/images/icons/moveChecklist/add_invest.png';
import signBD from '../../../assets/users/images/icons/moveChecklist/signBD.png';
import verify_AC from '../../../assets/users/images/icons/moveChecklist/verify_AC.png';
import viewLP from '../../../assets/users/images/icons/moveChecklist/viewLP.png';

import send_message from '../../../assets/users/images/chat/send_message.png';
import g_sm_verify from '../../../assets/users/images/chat/g_sm_verify.png';
import r_sm_verify from '../../../assets/users/images/chat/r_sm_verify.png';

import user1 from '../../../assets/users/images/dummy/user1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { clearUnseenMessages, getBookingInfoByGuid, getCgInfo, getListDetails, searchDetails, toggleBookingDateEditModal, toggleBookingModal, toggleBookingTermsModal, toggleInventoryModal } from '../../../redux';
import BookingChatBox from './BookingChatBox';
import BookingModal from '../../../front/pages/SearchList/BookingModal';
import BookingDateEditModal from '../../common/components/BookingDateEditModal';
import InventoryModal from '../../common/components/InventoryModal';
import BookingTermsModal from '../../common/components/BookingTermsModal';


function UserBookingChatCtrl() {

    const { listId, bookId } = useParams();
    const dispatch = useDispatch();

    const { schDetails, images } = useSelector(state => state.search);
    const { bookingInfo } = useSelector(state => state.booking);
    const { authResponse } = useSelector(state => state.auth);

    const history = useHistory();


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);



    useEffect(() => {

        dispatch(searchDetails(listId));
        dispatch(getCgInfo({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            list_id: listId
        }));

        dispatch(getBookingInfoByGuid({
            guid: bookId
        }));

        dispatch(clearUnseenMessages({
            guid: bookId
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
                        <div className="box_Img_Card WorkspaceWarehouse_bookingCard" >

                            {images && Array.isArray(images) && images.length > 0 ? <img src={images[0].si_path} alt="" /> : <img src={video_bg} alt="" />}



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
                                <small className="d-block">
                                    <img src={deposit} width="30" /> Security Deposit ${schDetails && schDetails.store_cost}
                                </small>
                                {/* <small className="d-block"><img src={G_calender} width="30" /> Minimum Rental Period 2Months</small> */}

                                <BookingDateEditModal />
                                <InventoryModal />
                                <BookingTermsModal />

                                <div className="d-flex-wrap justify-content-between">
                                    
                                    {
                                                                            authResponse && authResponse.users && schDetails && schDetails.u_id && +schDetails.u_id !== +authResponse.users.id && <>

                                                <Button size="sm" className="btn_milky_grn mt-3">Read More</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle size="sm" className="btn_milky_bl mt-3">
                                            Move-in-Checklist
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="move_in_checklist">
                                            <Dropdown.Item href="#/action-1" onClick={() => dispatch(toggleBookingDateEditModal(true))}>
                                                <img height="15" src={calender} />
                                                Edit Start Date
                                            </Dropdown.Item>
                                            <Dropdown.Divider />

                                            <Dropdown.Item href="#/action-1" onClick={() => dispatch(toggleInventoryModal(true))}>
                                                <img height="15" src={add_invest} />
                                                Add Inventory
                                            </Dropdown.Item>


                                            {
                                                authResponse && authResponse.users && authResponse.users.verify === "Yes" ? <Dropdown.Item href="#/action-1">
                                                    <img height="15" src={verify_AC} />
                                                    <span>Verified  &nbsp;<i className="fa fa-check text-success"></i></span>
                                                </Dropdown.Item> :

                                                    <Dropdown.Item href="#/action-1" onClick={() => history.push('/verification')}>
                                                        <img height="15" src={verify_AC} />
                                                        <span>Verify Account  &nbsp;<i className="fa fa-times"></i></span>
                                                    </Dropdown.Item>

                                            }







                                            {/*                                            
                                            <Dropdown.Item href="#/action-1">
                                                <img height="15" src={acceptTC} />
                                                Accept Terms & Conditions
                                                </Dropdown.Item>
                                                */}

                                            {
                                                bookingInfo && bookingInfo.sign_in && bookingInfo.sign_in === "Yes" ? <Dropdown.Item href="#/action-1">
                                                    <img height="15" src={signBD} />
                                                    <span>Sign Booking Document &nbsp; <i className="fa fa-check text-success"></i></span>
                                                </Dropdown.Item>
                                                    :

                                                    <Dropdown.Item href="#/action-1" onClick={() => dispatch(toggleBookingTermsModal(true))}>
                                                        <img height="15" src={signBD} />
                                                        Sign Booking Document
                                                    </Dropdown.Item>


                                            }


                                            <Dropdown.Item href="#/action-1" onClick={() => history.push(`/search-details/${listId}`)}>
                                                <img height="15" src={viewLP} />
                                                View Listing Page
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-2" className="cancelBooking">
                                                <i className="fa fa-times-circle" aria-hidden="true"></i>
                                                Cancel Booking
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    

                                                                            </>
                                    }
                                    
                                
                                </div>


                                {
                                    authResponse && authResponse.users && schDetails && schDetails.u_id && +schDetails.u_id !== +authResponse.users.id && bookingInfo && bookingInfo.status === "PENDING" && <Button variant="success" className="btn-block my-3" onClick={() => history.push(`/booking/${bookId}`)}>Pay Now</Button>
                                }





                                {/* <Button variant="success" className="btn-block my-3" onClick={() => dispatch(toggleBookingModal(true))}>Pay Now</Button> */}

                                {/* <BookingModal /> */}

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
                                    <img src={schDetails && schDetails.u_pic ? schDetails.u_pic : user1} />
                                </div>



                                <div className="booking_chat_user_details">
                                    <h5>{schDetails && schDetails.u_name}</h5>
                                    <small className={schDetails && schDetails.u_verify === "Yes" ? `text_color_shamrock` : `text_color_l_orange`}>
                                        <img className="pr-1" src={g_sm_verify} width="15" />
                                        {schDetails && schDetails.u_verify === "Yes" ? `Verified Host` : `Not verified`}
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
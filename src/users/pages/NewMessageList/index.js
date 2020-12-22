import React, { useEffect } from 'react';
import { Badge, ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUnseenMessageList } from '../../../redux';


function NewMessageList() {

    const { unseenMessageLoading, unseenMessageError, unseenMessageList } = useSelector(state => state.notification);
    const dispatch = useDispatch();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        dispatch(getUnseenMessageList());
        // dispatch(clearNotificationList());

    }, [dispatch]);


    return (
        <>

            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">New Messages</h2>
                    <div className="user_page_hdng_left">

                    </div>
                </div>
            </div>



            {
                unseenMessageLoading ? <div className="text-center"><Spinner animation="border" variant="success" /></div> : <div>
                    <ListGroup>

                        {
                            (unseenMessageList && Array.isArray(unseenMessageList) && unseenMessageList.length > 0) ? unseenMessageList.map((notification, index) => (
                                <ListGroup.Item key={index}>

                                    <Link to={`/book/${notification.store_id}/${notification.booking_guid}`} style={{ textDecoration: "none" }}>
                                        {
                                            <strong>{notification.store_title} | Booking ID: {notification.booking_id} &nbsp;&nbsp;  <Badge variant="primary"> {notification.unseen_message}</Badge> messages</strong>
                                        }
                                    </Link>
                                </ListGroup.Item>
                            ))
                                :
                                <ListGroup.Item>
                                    No new messages
                            </ListGroup.Item>
                        }

                    </ListGroup>
                </div>

            }





        </>
    )
}

export default NewMessageList;
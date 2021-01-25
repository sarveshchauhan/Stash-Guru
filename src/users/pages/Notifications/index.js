import React, { useEffect } from 'react';
import { Alert, ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearNotificationList, getNotificationList } from '../../../redux/notification/notificationActions';


function Notifications() {

    const { notificationLoading, notificationError, notificationList } = useSelector(state => state.notification);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getNotificationList());
        dispatch(clearNotificationList());

    }, [dispatch]);


    return (
        <>

            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">Notifications</h2>
                    <div className="user_page_hdng_left">

                    </div>
                </div>
            </div>



            {
                notificationLoading ? <div className="text-center"><Spinner animation="border" variant="success" /></div> : <div>
                    <ListGroup>

                        {
                            (notificationList && Array.isArray(notificationList) && notificationList.length > 0) ? notificationList.map((notification, index) => (
                                <ListGroup.Item key={index}>

                                    <Link to={notification.nt_url ? `/${notification.nt_url}` : "#"} style={{ textDecoration: "none" }}>
                                        {
                                            notification.nt_seen ? notification.nt_message : <strong>{notification.nt_message}</strong>
                                        }
                                    </Link>
                                </ListGroup.Item>
                            ))
                                :
                                <Alert variant="warning" className="text-center">
                                    No Notifications
                                </Alert>
                        }



                    </ListGroup>
                </div>

            }





        </>
    )
}

export default Notifications;
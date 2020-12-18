import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';

import Bl_hand from '../../../assets/users/images/icons/menu/Bl_hand.png';
import G_hand from '../../../assets/users/images/icons/menu/G_hand.png';

import Bl_listing from '../../../assets/users/images/icons/menu/Bl_listing.png';
import G_listing from '../../../assets/users/images/icons/menu/G_listing.png';

import Bl_profile from '../../../assets/users/images/icons/menu/Bl_profile.png';
import G_profile from '../../../assets/users/images/icons/menu/G_profile.png';

import Family from '../../../assets/users/images/img/Family.png';
import Listing from '../../../assets/users/images/img/Listing.png';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingCount, getlistingCount } from '../../../redux';


function UserHomeCtrl() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { authResponse } = useSelector(state => state.auth);
    const { listingCount, listingCountLoading, listingCountError } = useSelector(state => state.listspace);
    const { bookingCount, bookingCountLoading, bookingCountError } = useSelector(state => state.booking);


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);



    useEffect(() => {

        dispatch(getBookingCount());
        dispatch(getlistingCount());

    }, [dispatch]);


    return (
        <>
            <Row>
                <Col sm={12} lg={4}>

                    {
                        bookingCountLoading ? <div className="text-center"><Spinner animation="border" variant="success" /> </div> : <Card className="dash_hm_card_a" onClick={() => history.push('/booking')}>
                            <Card.Body>
                                <div className="dash_hm_card_a_cntr">
                                    <p>Booking</p>
                                    <h4>{bookingCount}</h4>
                                </div>
                            </Card.Body>
                            <span className="icn_crd_img">
                                <img className="img_active" src={G_hand} />
                                <img className="img_deactive" src={Bl_hand} />
                            </span>
                        </Card>
                    }



                </Col>
                <Col sm={12} lg={4}>

                    {
                        listingCountLoading ? <div className="text-center"><Spinner animation="border" variant="success" /></div> : <Card className="dash_hm_card_a" onClick={() => history.push('/listing')}>
                            <Card.Body>
                                <div className="dash_hm_card_a_cntr">
                                    <p>Listing</p>
                                    <h4>{listingCount}</h4>
                                </div>
                            </Card.Body>
                            <span className="icn_crd_img">
                                <img className="img_active" src={G_listing} />
                                <img className="img_deactive" src={Bl_listing} />
                            </span>
                        </Card>
                    }



                </Col>
                <Col sm={12} lg={4}>
                    <Card className="dash_hm_card_a" onClick={() => history.push('/profile')}>
                        <Card.Body>
                            <div className="dash_hm_card_a_cntr">
                                <p>Profile</p>
                                <small>Welcome</small>
                                <b>{authResponse && authResponse.users && authResponse.users.name}</b>
                            </div>
                        </Card.Body>
                        <span className="icn_crd_img">
                            <img className="img_active" src={G_profile} />
                            <img className="img_deactive" src={Bl_profile} />
                        </span>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col sm={12} lg={5}>
                    <Card className="dash_hm_card_b">
                        <Card.Body>
                            <div className="">
                                <h4>Find a Space</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur</p>
                                <Button className="btn_milky_bl" onClick={() => history.push('/')}>Start Finding <i className="fa fa-angle-right" aria-hidden="true"></i></Button>
                            </div>
                        </Card.Body>
                        <span className="dash_hm_card_b_bg_img">
                            <img src={Listing} />
                        </span>
                    </Card>
                </Col>
                <Col sm={12} lg={5}>
                    <Card className="dash_hm_card_b">
                        <Card.Body>
                            <div className="">
                                <h4>List A Space</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur</p>
                                <Button className="btn_milky_grn" onClick={() => history.push('/list-your-space')}>List your Space <i className="fa fa-angle-right" aria-hidden="true"></i></Button>
                            </div>
                        </Card.Body>
                        <span className="dash_hm_card_b_bg_img">
                            <img src={Family} />
                        </span>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UserHomeCtrl;
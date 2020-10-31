import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

import Bl_hand from '../../../assets/users/images/icons/menu/Bl_hand.png';
import G_hand from '../../../assets/users/images/icons/menu/G_hand.png';

import Bl_listing from '../../../assets/users/images/icons/menu/Bl_listing.png';
import G_listing from '../../../assets/users/images/icons/menu/G_listing.png';

import Bl_profile from '../../../assets/users/images/icons/menu/Bl_profile.png';
import G_profile from '../../../assets/users/images/icons/menu/G_profile.png';

import Family from '../../../assets/users/images/img/Family.png';
import Listing from '../../../assets/users/images/img/Listing.png';


function UserHomeCtrl(){
    return(
        <>
            <Row>
                <Col sm={12} lg={4}>
                    <Card className="dash_hm_card_a">
                        <Card.Body>
                            <div className="dash_hm_card_a_cntr">
                                <p>Booking</p>
                                <h4>00</h4>
                            </div>
                        </Card.Body>
                        <span className="icn_crd_img">
                            <img className="img_active" src={G_hand} />
                            <img className="img_deactive" src={Bl_hand} />
                        </span>
                    </Card>
                </Col>
                <Col sm={12} lg={4}>
                    <Card className="dash_hm_card_a">
                        <Card.Body>
                            <div className="dash_hm_card_a_cntr">
                                <p>Listing</p>
                                <h4>00</h4>
                            </div>
                        </Card.Body>
                        <span className="icn_crd_img">
                            <img className="img_active" src={G_listing} />
                            <img className="img_deactive" src={Bl_listing} />
                        </span>
                    </Card>
                </Col>
                <Col sm={12} lg={4}>
                    <Card className="dash_hm_card_a">
                        <Card.Body>
                            <div className="dash_hm_card_a_cntr">
                                <p>Profile</p>
                                <small>Welcome</small>
                                <b>Lorem ipsum</b>
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
                                <Button className="btn_milky_bl">Start Finding <i className="fa fa-angle-right" aria-hidden="true"></i></Button>
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
                                <Button className="btn_milky_grn">List your Space <i className="fa fa-angle-right" aria-hidden="true"></i></Button>
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
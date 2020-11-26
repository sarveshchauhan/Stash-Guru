import React,{useState} from 'react';
import { Button,Col,Form, Row ,FormControl,InputGroup,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import referals from '../../../assets/users/images/icons/referals.png';
import earing_graph from '../../../assets/users/images/icons/earing-graph.png';

import fb from '../../../assets/users/images/icons/socila_icon/fb.png';
import email from '../../../assets/users/images/icons/socila_icon/email.png';
import twitter from '../../../assets/users/images/icons/socila_icon/twitter.png';
import whatsapp from '../../../assets/users/images/icons/socila_icon/whatsapp.png';


import share from '../../../assets/users/images/icons/share.png';
import g_dollar from '../../../assets/users/images/icons/g_dollar.png';
import thankU from '../../../assets/users/images/icons/thankU.png';

function UserReferralsCtrl(){


    return(
        <>
            <div className="Referrals">
                <div className="user_page_hdng justify-content-between align-items-center">
                    <h2 className="user_page_hdng_txt">Referrals</h2>
                </div>
                <Row>
                    <Col md={8}>
                        <div className="box_Card ShareLinkAndEarnCard">
                            <div className="box_CardBody text-center">
                                <div className="w-100">
                                    <h6 className="">Spread The Word &</h6>
                                    <h2>Earn $50</h2>
                                    <h5>For Every New Host You Refer!</h5>
                                    <div className="referals_img">
                                        <img src={referals} alt="" />
                                        <strong>Share This Link</strong>
                                        <span>You’ll earn £50.00 from anyone who starts Hosting with Stas.Guru using this unique link (and they’ll get £50.00 too!).<br/> Click to copy and share!</span>
                                    </div>
                                    <div className="copy_your_share_link">
                                        <InputGroup className="mb-3">
                                            <FormControl placeholder="" aria-describedby="" value="https://stasguru.com/refer/5f9134f823cc0" />
                                            <InputGroup.Append>
                                                <Button className="btn_success">Copy Link</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </div>
                                    
                                    <div className="share_to_social_media">
                                        <Nav className="justify-content-center" activeKey="/home">
                                            <Nav.Item>
                                                <Nav.Link href="/">
                                                    <img src={fb} alt="Facebook" />
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="/">
                                                    <img src={whatsapp} alt="Whatsapp" />
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="/">
                                                    <img src={twitter} alt="Twitter" />
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="/">
                                                    <img src={email} alt="Mail" />
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                               
                            </div>
                        
                            <div className="text-right">
                                <span className="p-3 text_color_gray ">Terms Apply</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="box_Card EarningsBox">
                            <div className="EarningsBox_header">
                                <Row>
                                    <Col>
                                        <h6>Earnings</h6>
                                        <h2>$50</h2>
                                        <h6>Paid Out</h6>
                                    </Col>
                                    <Col className="col-sm-5"><img src={earing_graph} alt="Earning" /> </Col>
                                    <Col sm={12}>
                                        <small>(lifetime referral earnings)</small>
                                    </Col>
                                </Row>
                            </div>
                            <div className="PendingEarningsBox">
                                <div className="w-100">
                                    <h6>Pending Earnings</h6>
                                    <h4>$10</h4>
                                    <small>(based on all pending invites)</small>
                                </div>
                            </div>
                        </div>

                        <div className="box_Card YourReferralsBox">
                            <h6>Your Referrals</h6>
                            <div className="text-center box_CardBody align-items-center justify-content-between">
                                <div className="w-100">
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Email Address"  />
                                        </Form.Group>
                                    </Form>
                                    <Button className="btn_success px-5"><b>Send Invite</b> </Button>
                                    <p className="text_color_gray mt-2 mb-0">No invitations sent yet</p>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
                <div className="how_it_work_share_link_card box_Card">
                    <Row>
                        <Col md={12}>
                            <h4>How Does It Work?</h4>
                        </Col>
                        <Col md={4}>
                            <div className="how_it_work_share_link_card_body">
                                <div className="how_it_work_shares_img">
                                    <img src={share} alt="" />
                                </div>
                                <p>Send referrals to a friend with your link or over email.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="how_it_work_share_link_card_body">
                                <div className="how_it_work_shares_img">
                                    <img src={g_dollar} alt="" />
                                </div>
                                <p>After signing up, your friend will receive £50.00 on top of their first booking.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="how_it_work_share_link_card_body">
                                <div className="how_it_work_shares_img">
                                    <img src={thankU} alt="" />
                                </div>
                                <p>We'll pop £50.00 into your bank account to say thanks.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default UserReferralsCtrl;
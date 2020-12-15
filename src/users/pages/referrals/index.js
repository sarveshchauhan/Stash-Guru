import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row, FormControl, InputGroup, Nav, Spinner, Alert } from 'react-bootstrap';
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
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../../config/config';
import { getReferralList, getWallet, inviteReferral } from '../../../redux';

function UserReferralsCtrl() {

    const { authResponse } = useSelector(state => state.auth);
    const { walletResponse, referralListLoading, referralList, referralInviteLoading, walletLoading, referralInviteError, referralInviteResponse } = useSelector(state => state.wallet);
    const [referralLink, setReferralLink] = useState("");
    const [inviteEmail, setInviteEmail] = useState("");


    const referralBoxRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getWallet());
        dispatch(getReferralList());

    }, [dispatch]);


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);

    useEffect(() => {

        if (authResponse.users) {
            setReferralLink(`${config.appUrl}/signup?referral=${authResponse.users.referral}`);
        }

    }, [authResponse.users]);

    useEffect(() => {

        if (referralInviteResponse) {
            setInviteEmail("");
        }

    }, [referralInviteResponse])


    const onCopyLink = (e) => {

        e.preventDefault();
        referralBoxRef.current.select();
        referralBoxRef.current.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }


    return (
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
                                    <h2>Earn 50 Lei</h2>
                                    <h5>For Every New Host You Refer!</h5>
                                    <div className="referals_img">
                                        <img src={referals} alt="" />
                                        <strong>Share This Link</strong>
                                        <span>You’ll earn 50.00 Lei from anyone who starts Hosting with Stas.Guru using this unique link (and they’ll get £50.00 too!).<br /> Click to copy and share!</span>
                                    </div>
                                    <div className="copy_your_share_link">

                                        {
                                            walletLoading ? <Spinner animation="border" variant="success" /> : <InputGroup className="mb-3">
                                                <FormControl placeholder="" aria-describedby="" defaultValue={referralLink} readOnly={true} ref={referralBoxRef} />
                                                <InputGroup.Append>
                                                    <Button className="btn_success" onClick={onCopyLink}>Copy Link</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        }


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

                                    {
                                        walletLoading ? <Col className="text-center"><Spinner animation="border" variant="success" /></Col> : <Col>
                                            <h6>Earnings</h6>
                                            <h2>{walletResponse} Lei</h2>
                                            <h6>Paid Out</h6>
                                        </Col>
                                    }


                                    <Col className="col-sm-5"><img src={earing_graph} alt="Earning" /> </Col>
                                    <Col sm={12}>
                                        <small>(lifetime referral earnings)</small>
                                    </Col>
                                </Row>
                            </div>
                            {/* <div className="PendingEarningsBox">
                                <div className="w-100">
                                    <h6>Pending Earnings</h6>
                                    <h4>$10</h4>
                                    <small>(based on all pending invites)</small>
                                </div>
                            </div> */}
                        </div>

                        <div className="box_Card YourReferralsBox">
                            <h6>Your Referrals</h6>
                            <div className="text-center box_CardBody align-items-center justify-content-between">
                                <div className="w-100">
                                    <Form>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Email Address" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
                                        </Form.Group>
                                    </Form>

                                    {
                                        referralInviteLoading ? <Spinner animation="border" variant="success" /> : <Button className="btn_success px-5" type="button" onClick={() => dispatch(inviteReferral({ email: inviteEmail }))}><b>Send Invite</b> </Button>
                                    }

                                    {
                                        referralInviteError && <Alert variant="danger" className="mt-2">{JSON.stringify(referralInviteError)}</Alert>
                                    }

                                    {
                                        referralInviteResponse && <Alert variant="success" className="mt-2">{`Invitation sent successfully!`}</Alert>
                                    }

                                    <p className="text_color_gray mt-2 mb-0">No invitations sent yet</p>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>


                <div className="how_it_work_share_link_card box_Card">
                    <Row>
                        <Col md={12}>
                            <h4>Referrals</h4>

                            {
                                referralListLoading ? <Spinner animation="border" variant="success" /> : <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            referralList && Array.isArray(referralList) && referralList.map((referral, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{referral.u_name}</td>
                                                    <td>{referral.ref_amount} Lei</td>
                                                    <td>{referral.ref_type === "Accept" ? "Credited" : "Pending"}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }



                        </Col>
                    </Row>
                </div>


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
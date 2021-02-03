
import React, { Fragment, useEffect, useRef, useState } from 'react';
import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import G_home from '../../../assets/users/images/icons/menu/G_home.png';

import B_hand from '../../../assets/users/images/icons/menu/B_hand.png';
import G_hand from '../../../assets/users/images/icons/menu/G_hand.png';

import B_listing from '../../../assets/users/images/icons/menu/B_listing.png';
import G_listing from '../../../assets/users/images/icons/menu/G_listing.png';

import B_verify from '../../../assets/users/images/icons/menu/B_verify.png';
import G_verify from '../../../assets/users/images/icons/menu/G_verify.png';

import B_profile from '../../../assets/users/images/icons/menu/B_profile.png';
import G_profile from '../../../assets/users/images/icons/menu/G_profile.png';

import B_share from '../../../assets/users/images/icons/menu/B_share.png';
import G_share from '../../../assets/users/images/icons/menu/G_share.png';

import B_payment from '../../../assets/users/images/icons/menu/B_payment.png';
import G_payment from '../../../assets/users/images/icons/menu/G_payment.png';

import { Nav, Accordion, Col, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function PageSideMenuCtrl() {
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


    return (
        <>
            <Nav className="ml-2" className={`sticky-wrapper${isSticky ? ' stickyRemove' : ' stickyAdd'}`} ref={ref}>
                <Nav.Item className="dash_menu_list">
                    <NavLink className="nav-link" to="/dashboard">
                        <img className="img_deactive" src={B_home} />
                        <img className="img_active" src={G_home} />
                        Dashboard
                    </NavLink>

                    <NavLink className="nav-link" to="/booking">
                        <img className="img_deactive" src={B_hand} />
                        <img className="img_active" src={G_hand} />
                        Booking
                    </NavLink>

                    <Accordion defaultActiveKey="">
                        <Accordion.Toggle as={Col} eventKey="1" className="nav-link">
                            <img className="img_deactive" src={B_profile} />
                            <img className="img_active" src={G_profile} />
                            Host
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Nav>
                                <Nav.Item>
                                    <NavLink className="nav-link" to="/listing">
                                        <img className="img_deactive" src={B_listing} />
                                        <img className="img_active" src={G_listing} />
                                        Listing
                                    </NavLink>

                                    <NavLink className="nav-link" to="/booked-listing">
                                        <img className="img_deactive" src={B_listing} />
                                        <img className="img_active" src={G_listing} />
                                        Booked Listing
                                    </NavLink>
                                    <NavLink className="nav-link" to="/host_payment">
                                        <img className="img_deactive" src={B_payment} />
                                        <img className="img_active" src={G_payment} />
                                        Payment
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Accordion.Collapse>
                    </Accordion>


                    <NavLink className="nav-link" to="/verification">
                        <img className="img_deactive" src={B_verify} />
                        <img className="img_active" src={G_verify} />
                        Verification
                    </NavLink>

                    <NavLink className="nav-link" to="/profile">
                        <img className="img_deactive" src={B_profile} />
                        <img className="img_active" src={G_profile} />
                        Profile
                    </NavLink>

                    <NavLink className="nav-link" to="/referrals">
                        <img className="img_deactive" src={B_share} />
                        <img className="img_active" src={G_share} />
                        Referrals
                    </NavLink>

                    <NavLink className="nav-link" to="/guest_payment">
                        <img className="img_deactive" src={B_payment} />
                        <img className="img_active" src={G_payment} />
                        Payment
                    </NavLink>



                    {/* <NavLink className="nav-link" to="/chat/host">
                        <img className="img_deactive" src={B_payment} />
                        <img className="img_active" src={G_payment} />
                        Chat
                    </NavLink> */}

                </Nav.Item>
            </Nav>
        </>
    )
}

export default PageSideMenuCtrl;
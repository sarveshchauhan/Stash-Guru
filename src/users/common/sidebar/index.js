import React from 'react';
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

import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function PageSideMenuCtrl(){
    return(
        <>
            <Nav className="ml-2">
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
                    
                    <NavLink className="nav-link" to="/listing">
                        <img className="img_deactive" src={B_listing} />
                        <img className="img_active" src={G_listing} />
                        Listing
                    </NavLink>
                    
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
                    
                    <NavLink className="nav-link" to="/referrals">
                        <img className="img_deactive" src={B_payment} />
                        <img className="img_active" src={G_payment} />
                        Payment
                    </NavLink>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default PageSideMenuCtrl;
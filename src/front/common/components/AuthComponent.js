import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown, Nav } from 'react-bootstrap';
import { getUsers, logoutUser } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';

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

import B_logout from '../../../assets/users/images/icons/menu/B_logout.png';
import G_logout from '../../../assets/users/images/icons/menu/G_logout.png';
const profileImages = require.context('../../../assets/users/images/profile', true);

function AuthComponent() {

    const dispatch = useDispatch();
    const { authResponse, islogin } = useSelector(state => state.auth);
    const [dispName, setDispName] = useState('');
    const [dispImg, setDispImg] = useState('no_img.png');

    useEffect(() => {
        dispatch(getUsers());
        if (authResponse && authResponse.users) {
            setDispName(authResponse.users.name);
            setDispImg(authResponse.users.profile_pic);
            if (window.location.pathname.replace(/[/]/g, "") === 'login' || window.location.pathname.replace(/[/]/g, "") === 'signup') {
                window.location.href = '/dashboard';
            }
        }
    }, [islogin]);

    const logoutHandle = (e) => {
        dispatch(logoutUser());
    }

    return (
        <>
            { islogin === false ?
                <NavLink className="nav-link login_signup_btn" to="/login">Login/SignUp</NavLink>
                :
                // <NavLink className="nav-link login_signup_btn" to="#" onClick={logoutHandle} >Logout</NavLink>     
                // <NavDropdown title={dispName} id="nav-dropdown">
                //     <NavDropdown.Item onClick={logoutHandle}>Logout</NavDropdown.Item>
                // </NavDropdown>

                <Nav className="ml-2 justify-content-end">
                    <Nav.Item className="dash_avtar_user_list">
                        <img className="dash_avtar_user" src={dispImg == 'no_img.png' ? profileImages(`./${dispImg}`) : dispImg} />
                        <NavDropdown title={dispName} id="collasible-nav-dropdown">
                            <NavLink className="dropdown-item" to="/dashboard">
                                <img className="img_deactive" src={B_home} />
                                <img className="img_active" src={G_home} />
                            Dashboard
                        </NavLink>

                            <NavLink className="dropdown-item" to="/booking">
                                <img className="img_deactive" src={B_hand} />
                                <img className="img_active" src={G_hand} />
                            Booking
                        </NavLink>

                            <NavLink className="dropdown-item" to="/listing">
                                <img className="img_deactive" src={B_listing} />
                                <img className="img_active" src={G_listing} />
                            Listing
                        </NavLink>

                            <NavLink className="dropdown-item" to="/verification">
                                <img className="img_deactive" src={B_verify} />
                                <img className="img_active" src={G_verify} />
                            Verification
                        </NavLink>

                            <NavLink className="dropdown-item" to="/profile">
                                <img className="img_deactive" src={B_profile} />
                                <img className="img_active" src={G_profile} />
                            Profile
                        </NavLink>

                            <NavLink className="dropdown-item" to="/referrals">
                                <img className="img_deactive" src={B_share} />
                                <img className="img_active" src={G_share} />
                            Referrals
                        </NavLink>

                            <NavLink className="dropdown-item" to="/guest_payment">
                                <img className="img_deactive" src={B_payment} />
                                <img className="img_active" src={G_payment} />
                            Payment
                        </NavLink>

                            <NavLink className="dropdown-item" to="/logout" onClick={logoutHandle}>
                                <img className="img_deactive" src={B_logout} />
                                <img className="img_active" src={G_logout} />
                                Logout
                        </NavLink>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
            }

        </>
    )
}

export default AuthComponent;
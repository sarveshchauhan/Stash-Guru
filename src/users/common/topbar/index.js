import React, {useState, useEffect} from 'react';
import {Navbar,NavDropdown,Nav, Row} from 'react-bootstrap';
import './topbar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/front/images/colored_logo.svg';
import no_img from '../../../assets/users/images/profile/no_img.png';


import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import G_home from '../../../assets/users/images/icons/menu/G_home.png';

import B_hand from '../../../assets/users/images/icons/menu/B_hand.png';
import G_hand from '../../../assets/users/images/icons/menu/G_hand.png';

import B_listing from '../../../assets/users/images/icons/menu/B_listing.png';
import G_listing from '../../../assets/users/images/icons/menu/G_listing.png';

import B_verify from '../../../assets/users/images/icons/menu/B_verify.png';
import G_verify from '../../../assets/users/images/icons/menu/G_verify.png';

import B_noVerify from '../../../assets/users/images/icons/menu/B_noVerify.png';
import G_noVerify from '../../../assets/users/images/icons/menu/G_noVerify.png';

import B_profile from '../../../assets/users/images/icons/menu/B_profile.png';
import G_profile from '../../../assets/users/images/icons/menu/G_profile.png';

import B_share from '../../../assets/users/images/icons/menu/B_share.png';
import G_share from '../../../assets/users/images/icons/menu/G_share.png';

import B_payment from '../../../assets/users/images/icons/menu/B_payment.png';
import G_payment from '../../../assets/users/images/icons/menu/G_payment.png';

import B_logout from '../../../assets/users/images/icons/menu/B_logout.png';
import G_logout from '../../../assets/users/images/icons/menu/G_logout.png';



import { getUsers, logoutUser } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';
const profileImages = require.context('../../../assets/users/images/profile', true);

function UserTopbarHeaderComponent(){   
    const [dispName, setDispName] = useState('');
    const [dispImg, setDispImg] = useState('no_img.png');
    const dispatch = useDispatch();
    const { authResponse, islogin } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getUsers());
        if(authResponse.users){
            setDispName(authResponse.users.name);
            setDispImg(authResponse.users.profile_pic);
        }
    }, [islogin]);

    const logoutHandle = (e) => {
        dispatch(logoutUser());
    }

    return(
        <>
            <Navbar sticky="top" style={{borderBottom:'2px solid #00000008'}}>
                <div className="nav_container ">
                    <Row className="align-items-center  justify-content-sm-center justify-content-between">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center text-lg-left text-md-left">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt=""  />
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                            <Nav className="ml-2 justify-content-center justify-content-lg-end justify-content-md-end">
                                <Nav.Item className="dash_avtar_user_list">
                                    <img className="dash_avtar_user" src={dispImg=='no_img.png' ? profileImages(`./${dispImg}`)  : dispImg} />
                                    <NavDropdown title={dispName}  id="collasible-nav-dropdown">
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
                                        
                                        <NavLink className="dropdown-item" to="/referrals">
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
                        </div>
                    </Row>
                </div>
            </Navbar>
        </>
    )
}


export default UserTopbarHeaderComponent;
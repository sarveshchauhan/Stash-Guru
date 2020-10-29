import React, {useState, useEffect} from 'react';
import {Navbar,NavDropdown,Nav, Row} from 'react-bootstrap';
import './topbar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/front/images/colored_logo.svg';
import avtar from '../../../assets/users/images/dummy/avtar.jpg';
import { getUsers, logoutUser } from '../../../redux';
import { connect, useDispatch, useSelector } from 'react-redux';

function UserTopbarHeaderComponent(){   
    const [dispName, setDispName] = useState('');
    const dispatch = useDispatch();
    const { authResponse, islogin } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getUsers());
        if(authResponse.users){
            setDispName(authResponse.users.name);
        }
    }, [islogin]);

    const logoutHandle = (e) => {
        dispatch(logoutUser());
    }

    return(
        <>
            <Navbar sticky="top" style={{borderBottom:'2px solid #00000008'}}>
                <div className="nav_container lg_screen_menu">
                    <Row className="align-items-center justify-content-between">
                        <div className="col-3 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt=""  />
                            </NavLink>
                        </div>
                        <div className="col-4 my-2">
                            <Nav className="ml-2 justify-content-end">
                                <Nav.Item className="dash_avtar_user_list">
                                    <img className="dash_avtar_user" src={avtar} />
                                    <NavDropdown title={dispName}  id="collasible-nav-dropdown">
                                        <NavLink className="dropdown-item" to="/dashboard"><i className="fa fa-home" aria-hidden="true"></i> Dashboard</NavLink>
                                        <NavLink className="dropdown-item" to="/booking"><i className="fa fa-hand-pointer-o" aria-hidden="true"></i> Booking</NavLink>
                                        <NavLink className="dropdown-item" to="/listing"><i className="fa fa-map-marker" aria-hidden="true"></i> Listing</NavLink>
                                        <NavLink className="dropdown-item" to="/verification"><i className="fa fa-shield" aria-hidden="true"></i> Verification</NavLink>
                                        <NavLink className="dropdown-item" to="/profile"><i className="fa fa-user-o" aria-hidden="true"></i> Profile</NavLink>
                                        <NavLink className="dropdown-item" to="/referrals"><i className="fa fa-share-alt" aria-hidden="true"></i> Referrals</NavLink>
                                        <NavLink className="dropdown-item" to="/logout" onClick={logoutHandle}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</NavLink>
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
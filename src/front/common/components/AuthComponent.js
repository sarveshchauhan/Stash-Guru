import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {NavDropdown,Nav} from 'react-bootstrap';
import { getUsers, logoutUser } from '../../../redux';
import { connect, useDispatch, useSelector } from 'react-redux';


import avtar from '../../../assets/users/images/dummy/avtar.jpg';

function AuthComponent(){

    const dispatch = useDispatch();
    const { authResponse, islogin } = useSelector(state => state.auth);
    const [dispName, setDispName] = useState('');
    
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
            { islogin === false ?
                <NavLink className="nav-link login_signup_btn" to="/login">Login/SignUp</NavLink>   
            :
                // <NavLink className="nav-link login_signup_btn" to="#" onClick={logoutHandle} >Logout</NavLink>     
                // <NavDropdown title={dispName} id="nav-dropdown">
                //     <NavDropdown.Item onClick={logoutHandle}>Logout</NavDropdown.Item>
                // </NavDropdown>
                
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
            }
                 
        </>
    )
}

export default AuthComponent;
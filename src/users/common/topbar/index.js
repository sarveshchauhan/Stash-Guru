import React, {useState, useEffect} from 'react';
import {Navbar,NavDropdown, Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/front/images/colored_logo.svg';
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
                        <NavDropdown title={dispName} id="nav-dropdown">
                            <NavDropdown.Item onClick={logoutHandle}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        </div>
                    </Row>
                </div>
            </Navbar>
        </>
    )
}


export default UserTopbarHeaderComponent;
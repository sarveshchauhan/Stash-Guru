import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import { getUsers, logoutUser } from '../../../redux';
import { connect, useDispatch, useSelector } from 'react-redux';

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
                <NavDropdown title={dispName} id="nav-dropdown">
                    <NavDropdown.Item onClick={logoutHandle}>Logout</NavDropdown.Item>
                </NavDropdown>
            }
                 
        </>
    )
}

export default AuthComponent;
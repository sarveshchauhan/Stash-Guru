import React, { useState, useEffect }  from 'react';
import { Button, Col, Container, Row ,Form, Alert} from 'react-bootstrap';

import { GoogleLogin } from 'react-google-login';
import GoogleLogo from '../../../assets/front/images/icons/GoogleLogo.png';
import facebook from '../../../assets/front/images/icons/facebook.png';

import catoons from '../../../assets/front/images/img/catoons.svg';
import family from '../../../assets/front/images/img/family.svg';

import './Register.scss';
import { NavLink } from 'react-router-dom';
import {registerUser, googleRegisterUser} from '../../../redux';
import { connect, useDispatch, useSelector } from 'react-redux';

function SignUpComponentCtrl(){

    const dispatch = useDispatch();

    const [fullname, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [fullnameError, setFullNameError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const { response, error, loading } = useSelector(state => state.register);

    useEffect(() => {
        setFullName("");
        setMobile("");
        setEmail("");
        setPassword(""); 
    }, [error]);

    useEffect(() => {
        setFullName("");
        setMobile("");
        setEmail("");
        setPassword(""); 
    }, [response]);

    const handleFormField = (e) => {
        switch (e.target.name){
            case 'email':
                setEmail(e.target.value);
                if (!e.target.value) {
                    setEmailError("Email is required!");
                }
                else {
                    let emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    if (!emailValid) {
                        setEmailError("Email is not valid!");
                    }
                    else {
                        setEmailError("");
                    }
                }
                break;
            case 'mobile':
                setMobile(e.target.value);
                if (!e.target.value) {
                    setMobileError("Mobile is required!");
                }
                else {
                    setMobileError("");
                }
                break;
            case 'fullname':
                setFullName(e.target.value);
                if (!e.target.value) {
                    setFullNameError("Name is required!");
                }
                else {
                    setFullNameError("");
                }
                break;
            case 'password':
                console.log(e.target.value.length);
                setPassword(e.target.value);
                if (!e.target.value) {
                    setPasswordError("Last Name is required!");
                }
                else if(e.target.value.length < 6)
                {
                    setPasswordError("Password must be 6 characters long!");
                }
                else {
                    setPasswordError("");
                }
                break;
            default:
                break;
        }
    }

    const validateForm = () => {
        let error = false;

        if (!fullname) {
            error = true;
            setFullNameError("Name is required!");
        }

        if (!email) {
            error = true;
            setEmailError("Email is required!");
        }

        if (!password) {
            error = true;
            setPasswordError("Password is required!");
        }

        if (!mobile) {
            error = true;
            setMobileError("Mobile is required!");
        }

        return error;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullnameError && !mobileError && !emailError && !passwordError && !validateForm()) {
            let data = {
                name: fullname,
                mobile: mobile,
                email: email,
                password: password
            };
            dispatch(registerUser(data));
        }
    }

    const responseGoogle = (response) => {
        dispatch(googleRegisterUser(response.tokenId));
    }

    return(
        <>
        <section className="section_padding">
            <Container>
                <Row className="align-items-center">
                    <Col sm={4} className="my-2">
                        <img src={catoons} />
                    </Col>
                    <Col sm={4} className="my-2">
                        <div className="register_card">
                            <Row>
                                <Col sm={12}>
                                    <div>
                                        <h2 className="register_hdng">
                                            <span>Sign Up</span> To Continue
                                        </h2>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                {
                                    response && (
                                        <Alert variant="success">
                                            {response}
                                        </Alert>

                                    )
                                }
                                </Col>
                                <Col sm={12}>
                                {
                                    error && (
                                        <Alert variant="danger">
                                            {error}
                                        </Alert>

                                    )
                                }
                                </Col>
                                <Col sm={12}>
                                        <Form onSubmit={handleSubmit}>
                                            <Row className="my-2 pt-2">
                                                <Col>
                                                    <Form.Group controlId="">
                                                        <Form.Control type="email" isInvalid={emailError} placeholder="Email Address" name="email" value={email} onChange={handleFormField} onBlur={handleFormField} />
                                                        {
                                                            emailError && <span className="error_msg text-danger">
                                                                {emailError}
                                                            </span>
                                                        }
                                                    </Form.Group>

                                                    <Form.Group controlId="">
                                                        <Form.Control type="text" isInvalid={mobileError} placeholder="Mobile NUmber" name="mobile" value={mobile} onChange={handleFormField} onBlur={handleFormField} />
                                                        {
                                                            mobileError && <span className="error_msg text-danger">
                                                                {mobileError}
                                                            </span>
                                                        }
                                                    </Form.Group>

                                                    <Form.Group controlId="">
                                                        <Form.Control type="text" isInvalid={fullnameError} placeholder="Full Name" name="fullname" value={fullname} onChange={handleFormField} onBlur={handleFormField} />
                                                        {
                                                            fullnameError && <span className="error_msg text-danger">
                                                                {fullnameError}
                                                            </span>
                                                        }
                                                    </Form.Group>

                                                    <Form.Group controlId="">
                                                        <Form.Control type="password" isInvalid={passwordError} placeholder="Create password (min. 8 characters)" name="password" value={password} onChange={handleFormField} onBlur={handleFormField} />
                                                        {
                                                            passwordError && <span className="error_msg text-danger">
                                                                {passwordError}
                                                            </span>
                                                        }
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            
                                            <Row className="mb-2">
                                                <Col sm={12}>
                                                    <Button className="btn-success btn-block" type="submit">Sign Up</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    <div className="or_divider">
                                        <span>or</span>
                                    </div>

                                        
                                    <Row>
                                        <Col sm={12} className="mt-2">
                                            <GoogleLogin
                                                clientId="450430578559-00gdj07dktsen73dudn1cpcko05tb5qi.apps.googleusercontent.com"
                                                buttonText="Sign In With Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                className="btn-block sign_with_google_btn btn"
                                            />
                                        </Col>
                                        {/* <Col sm={12} className="mt-2">
                                            <Button className="btn-block sign_with_google_btn">
                                                <img src={GoogleLogo}/> Sign In With Google
                                            </Button>
                                        </Col> */}
                                        <Col sm={12} className="mt-4">
                                            <Button className="btn-block sign_with_fb_btn">
                                            <img src={facebook}/> Sign In With Facebook
                                        </Button>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="text-center">
                                        <Col sm={12} className="mt-4">
                                            <NavLink to="/login" className="" style={{color:'#1BBDF6'}}>I Already have an account</NavLink>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col><Col sm={4} className="my-2">
                        <img src={family} />
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default SignUpComponentCtrl;
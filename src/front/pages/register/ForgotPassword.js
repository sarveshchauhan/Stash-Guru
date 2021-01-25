import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Container, Button, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, clearForgotPasswordMessage } from '../../../redux/auth/authActions';


function ForgotPassword() {

    const dispatch = useDispatch();
    const history = useHistory();
    const { forgotPasswordSuccess, forgotPasswordError, islogin } = useSelector(state => state.auth);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    useEffect(() => {

        if (islogin) {
            history.push('/');
        }


    }, [islogin]);

    useEffect(() => {

        if (forgotPasswordSuccess) {
            setEmail("");
            setSuccessMessage(forgotPasswordSuccess);
            dispatch(clearForgotPasswordMessage());
        }

    }, [forgotPasswordSuccess]);


    useEffect(() => {

        if (forgotPasswordError) {
            setErrorMessage(JSON.stringify(forgotPasswordError));
        }

    }, [forgotPasswordError])


    const validateEmail = (value) => {

        if (!value) {
            setEmailError("Email is required!");
        }
        else {
            setEmailError("");
        }

    }

    const onBlurEmail = (e) => {

        validateEmail(e.target.value);

    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setEmailError("Email is required!");
            return false;
        }
        else {
            setEmailError("");
        }

        dispatch(forgotPassword({
            email: email
        }));

    }

    return (
        <>

            <section className="section_padding register_bg">


                <Container>

                    <Row className="align-items-center justify-content-center">
                        <Col sm={8} md={6} xl={4} className="my-2">
                            <div className="register_card">
                                <Row>
                                    <Col sm={12}>
                                        <div>
                                            <h2 className="register_hdng">
                                                <span>Forgot</span> password
                                    </h2>
                                        </div>
                                    </Col>


                                    <Col sm={12}>
                                        <Form onSubmit={onFormSubmit}>
                                            <Row className="my-2 pt-2">
                                                <Col>
                                                    <Form.Group controlId="">
                                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={onBlurEmail} name="email" placeholder="Enter registered email" />
                                                        {
                                                            emailError && <small className="text-danger">{emailError}</small>
                                                        }
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="mb-2">
                                                <Col sm={12}>
                                                    <Button className="btn-success btn-block" type="submit" name="loginBtn">
                                                        Submit
                                                    </Button>
                                                </Col>
                                            </Row>


                                            {
                                                successMessage && <Row>
                                                    <Col sm={12}>
                                                        <Alert variant="success">{successMessage}</Alert>
                                                    </Col>
                                                </Row>
                                            }


                                            {
                                                errorMessage && <Row>
                                                    <Col sm={12}>
                                                        <Alert variant="danger">{errorMessage}</Alert>
                                                    </Col>
                                                </Row>
                                            }


                                        </Form>


                                        <div className="or_divider">
                                            <span>or</span>
                                        </div>



                                        <Row className="text-center">
                                            <Col sm={12} className="mt-4">
                                                <NavLink to="/login" className="" style={{ color: '#1BBDF6' }}>Back to login</NavLink>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </section>

        </>
    )
}

export default ForgotPassword

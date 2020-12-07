import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Container, Button, Alert } from 'react-bootstrap';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearResetPasswordMessage, resetPassword } from '../../../redux';



function ResetPassword() {

    const dispatch = useDispatch();
    const { token } = useParams();
    const history = useHistory();

    const [newPassword, setNewPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const { resetPasswordSuccess, resetPasswordError } = useSelector(state => state.auth);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        if (resetPasswordSuccess) {
            setNewPassword("");
            setConfirmPassword("");
            history.push('/login');
            // setSuccessMessage(resetPasswordSuccess);
            // dispatch(clearResetPasswordMessage());
        }

    }, [resetPasswordSuccess]);


    useEffect(() => {

        if (resetPasswordError) {
            setErrorMessage(JSON.stringify(resetPasswordError));
        }

    }, [resetPasswordError])



    const validateNewPassword = () => {
        if (!newPassword) {
            setNewPasswordError("New password is required!");
            return false;
        }
        else {
            setNewPasswordError("");
            return true;
        }
    }


    const validateConfirmPassword = () => {
        if (!newPassword) {
            setConfirmPasswordError("Confirm password is required!");
            return false;
        }
        else if (newPassword !== confirmPassword) {
            setConfirmPasswordError("Password not match");
            return false;
        }
        else {
            setConfirmPasswordError("");
            return true;
        }
    }


    const onFormSubmit = (e) => {
        e.preventDefault();

        if (validateNewPassword() && validateConfirmPassword()) {
            dispatch(resetPassword({
                token: token,
                password: newPassword
            }))
        }

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
                                                <span>Reset</span> password</h2>
                                        </div>
                                    </Col>


                                    <Col sm={12}>
                                        <Form onSubmit={onFormSubmit}>
                                            <Row className="my-2 pt-2">
                                                <Col>
                                                    <Form.Group controlId="">
                                                        <Form.Control type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} onBlur={validateNewPassword} name="newPassword" placeholder="Enter new password" />
                                                        {
                                                            newPasswordError && <small className="text-danger">{newPasswordError}</small>
                                                        }
                                                    </Form.Group>
                                                </Col>
                                            </Row>


                                            <Row className="my-2 pt-2">
                                                <Col>
                                                    <Form.Group controlId="">
                                                        <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={validateConfirmPassword} name="confirmPassword" placeholder="Confirm password" />
                                                        {
                                                            confirmPasswordError && <small className="text-danger">{confirmPasswordError}</small>
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

export default ResetPassword

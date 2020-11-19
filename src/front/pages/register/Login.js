import React from 'react';
import { Button, Col, Container, Row, Form, Alert } from 'react-bootstrap';

import catoons from '../../../assets/front/images/img/catoons.svg';
import family from '../../../assets/front/images/img/family.svg';

import { loginUser, googleLogin, loginWithFaceBook, clearResetPasswordMessage } from '../../../redux';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import './Register.scss';
import { NavLink } from 'react-router-dom';
import LoaderCtrl from '../../common/components/loader';
class LoginComponentCtrl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            },
            loginBtn: true,
            resetPasswordMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    componentDidMount() {


        window.scrollTo(0, 0);



        if (this.props.auth.auth.resetPasswordSuccess) {


            this.setState({
                resetPasswordMessage: this.props.auth.auth.resetPasswordSuccess
            });

            this.props.clearResetPasswordMessage();
        }

    }

    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 6
                        ? 'Password must be 6 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => {

            let validStatus = validateForm(this.state);
            if (!this.state.errors.email && !this.state.errors.password && validStatus) {
                this.setState({ loginBtn: false });
            }
            else {
                this.setState({ loginBtn: true });
            }
        })
    }

    responseGoogle(response) {
        this.props.googleLogin(response.tokenId);
    }

    responseFacebook(response) {
        this.props.loginWithFaceBook(response);
    }


    handleSubmit(event) {

        event.preventDefault();
        if (validateForm(this.state)) {
            let data = {
                email: this.state.email,
                password: this.state.password
            };
            const { loginUser, auth } = this.props;
            loginUser(data);
        }

    }

    render() {
        return (
            <>
                <LoaderCtrl loaderStatus={this.props.auth.auth.loading} {...this.props} />
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
                                                    <span>Login</span> To Continue
                                            </h2>
                                            </div>
                                        </Col>
                                        <Col sm={12}>
                                            {this.props.auth.auth.error &&
                                                <span>{JSON.stringify(this.props.auth.auth.error).replace(/["']/g, "")}</span>
                                            }
                                        </Col>
                                        <Col sm={12}>
                                            <Form onSubmit={this.handleSubmit}>
                                                <Row className="my-2 pt-2">
                                                    <Col>
                                                        <Form.Group controlId="">
                                                            <Form.Control type="email" name="email" isInvalid={this.state.errors.email} value={this.state.email} onChange={this.handleChange} placeholder="Email Address" />
                                                            {this.state.errors.email.length > 0 && <span className='error'>{this.state.errors.email}</span>}
                                                        </Form.Group>

                                                        <Form.Group controlId="">
                                                            <Form.Control type="password" name="password" isInvalid={this.state.errors.password} value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                                            {this.state.errors.password.length > 0 && <span className='error'>{this.state.errors.password}</span>}
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Row className="mb-2">
                                                    <Col sm={12}>
                                                        <Button className="btn-success btn-block" type="submit" name="loginBtn" disabled={this.state.loginBtn}>
                                                            Login
                                                        </Button>
                                                    </Col>
                                                </Row>


                                                {
                                                    this.state.resetPasswordMessage && <Row>
                                                        <Col sm={12}>
                                                            <Alert variant="success">
                                                                {this.state.resetPasswordMessage}
                                                            </Alert>

                                                        </Col>
                                                    </Row>

                                                }

                                            </Form>
                                            <div className="or_divider">
                                                <span>or</span>
                                            </div>


                                            <Row>
                                                <Col sm={12} className="mt-2">
                                                    <GoogleLogin
                                                        clientId="450430578559-00gdj07dktsen73dudn1cpcko05tb5qi.apps.googleusercontent.com"
                                                        buttonText="Sign In With Google"
                                                        onSuccess={(response) => this.responseGoogle(response)}
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
                                                    <FacebookLogin
                                                        appId="648585002686329"
                                                        fields="name,email,picture"
                                                        callback={(response) => this.responseFacebook(response)}
                                                        cssClass="my-facebook-button-class btn-block sign_with_fb_btn btn"
                                                        icon="fa-facebook"
                                                    />
                                                </Col>
                                                {/* <Col sm={12} className="mt-4">
                                                <Button className="btn-block sign_with_fb_btn">
                                                <img src={facebook}/> Sign In With Facebook
                                            </Button>
                                            </Col> */}
                                            </Row>

                                            <Row className="text-center">
                                                <Col sm={12} className="mt-4">
                                                    <NavLink to="/signup" className="" style={{ color: '#1BBDF6' }}>I don't have an account</NavLink>
                                                </Col>
                                                <Col sm={12} className="mt-4">
                                                    <NavLink to="/forgotpassword" className="link_text">I Forgot My Password</NavLink>
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
}



const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (val) => {

    let valid = true;

    if (!val.email) {
        valid = false;
        val.errors.email = "Emailid is required!";
    }

    if (!val.password) {
        valid = false;
        val.errors.password = "Password is required!";
    }

    return valid;
}

const mapStateToProps = state => {

    return {
        auth: state
    }

}

const mapDispatchToProps = dispatch => {

    return {
        loginUser: (user) => dispatch(loginUser(user)),
        googleLogin: (token) => dispatch(googleLogin(token)),
        loginWithFaceBook: (data) => dispatch(loginWithFaceBook(data)),
        clearResetPasswordMessage: () => dispatch(clearResetPasswordMessage())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponentCtrl);
import React from 'react';
import { Button, Col, Container, Row ,Form} from 'react-bootstrap';
import GoogleLogo from '../../../assets/front/images/icons/GoogleLogo.png';
import facebook from '../../../assets/front/images/icons/facebook.png';

import catoons from '../../../assets/front/images/img/catoons.svg';
import family from '../../../assets/front/images/img/family.svg';

import './Register.scss';
import { NavLink } from 'react-router-dom';
// import { createStore } from 'redux';
// import authApp from '../../../redux';
// const store = createStore(authApp)

// function LoginComponentCtrl(){
class LoginComponentCtrl extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.email);
        console.log('A name was submitted: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return(
            <>
            <section className="section_padding">
                <Container>
                    <Row className="align-items-center">
                        <Col sm={4} className="my-2">
                            <img src={catoons}  alt="" />
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
                                            <Form onSubmit={this.handleSubmit}>
                                                <Row className="my-2 pt-2">
                                                    <Col>
                                                        <Form.Group controlId="">
                                                            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email Address" />
                                                        </Form.Group>

                                                        <Form.Group controlId="">
                                                            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                
                                                <Row className="mb-2">
                                                    <Col sm={12}>
                                                        <Button className="btn-success btn-block" type="submit">
                                                            Login
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        <div className="or_divider">
                                            <span>or</span>
                                        </div>

                                            
                                        <Row>
                                            <Col sm={12} className="mt-2">
                                                <Button className="btn-block sign_with_google_btn">
                                                    <img src={GoogleLogo} alt="" /> Sign In With Google
                                                </Button>
                                            </Col>
                                            <Col sm={12} className="mt-4">
                                                <Button className="btn-block sign_with_fb_btn">
                                                <img src={facebook} alt="" /> Sign In With Facebook
                                            </Button>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="text-center">
                                            <Col sm={12} className="mt-4">
                                                <NavLink to="/signup" className="" style={{color:'#1BBDF6'}}>I don't have an account</NavLink>
                                            </Col>
                                            <Col sm={12} className="mt-4">
                                                <NavLink to="/" className="link_text">I Forgot My Password</NavLink>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col><Col sm={4} className="my-2">
                            <img src={family} alt=""  />
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
        )
    }
}
export default LoginComponentCtrl;
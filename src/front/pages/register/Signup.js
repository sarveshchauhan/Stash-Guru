import React, { useState, useEffect }  from 'react';
import { Button, Col, Container, Row ,Form, Alert} from 'react-bootstrap';
import GoogleLogo from '../../../assets/front/images/icons/GoogleLogo.png';
import facebook from '../../../assets/front/images/icons/facebook.png';

import catoons from '../../../assets/front/images/img/catoons.svg';
import family from '../../../assets/front/images/img/family.svg';

import './Register.scss';
import { NavLink } from 'react-router-dom';
import {registerUser} from '../../../redux';
import { connect, useDispatch, useSelector } from 'react-redux';

function SignUpComponentCtrl(){

    const dispatch = useDispatch();

    const [fullname, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                break;
            case 'mobile':
                setMobile(e.target.value);
                break;
            case 'fullname':
                setFullName(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            name: fullname,
            mobile: mobile,
            email: email,
            password: password
        };
        dispatch(registerUser(data));
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
                                                        <Form.Control type="email" placeholder="Email Address" name="email" value={email} onChange={handleFormField} onBlur={handleFormField} />
                                                    </Form.Group>

                                                    <Form.Group controlId="">
                                                        <Form.Control type="text" placeholder="Mobile NUmber" name="mobile" value={mobile} onChange={handleFormField} onBlur={handleFormField} />
                                                    </Form.Group>

                                                    <Form.Group controlId="">
                                                        <Form.Control type="text" placeholder="Full Name" name="fullname" value={fullname} onChange={handleFormField} onBlur={handleFormField} />
                                                    </Form.Group>

                                                    <Form.Group controlId="">
                                                        <Form.Control type="password" placeholder="Create password (min. 8 characters)" name="password" value={password} onChange={handleFormField} onBlur={handleFormField} />
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
                                            <Button className="btn-block sign_with_google_btn">
                                                <img src={GoogleLogo}/> Sign In With Google
                                            </Button>
                                        </Col>
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
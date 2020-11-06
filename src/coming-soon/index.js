import React from 'react';
import { Col, Container, Row,InputGroup,FormControl,Button } from 'react-bootstrap';
import './coming_soon.scss';
import logo from '../assets/front/images/colored_logo.svg';
import coming_soon_img1 from '../assets/coming-soon/coming_soon_img1.png';
import coming_soon_img2 from '../assets/coming-soon/coming_soon_img2.png';


function ComingSoonCtrl(){
    return(
        <>
            <section className="coming_soon_body">
                <Container className="pt-5">
                    <Row className="justify-content-between align-items-end">
                        <Col sm={5}>
                            <img className="coming_soon_logo" src={logo} alt="" />
                            <h3>We have more thinhg than we had ever before and less storage space</h3>
                            <p>It will become easier to store things nearby. Maybe you have a storage space to rent. whether you have space or have things to store, leave us your email address and we will let you know when we launch. It doesn't take long </p>

                            <Row>
                                <Col sm={12}>
                                    <InputGroup className="mb-3">
                                        <FormControl placeholder="Email Address" aria-label="" aria-describedby=""
                                        />
                                        <InputGroup.Append>
                                            <Button variant="success">NOTIFY ME</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                                <Col sm={12}>
                                    <div className="row justify-content-between m-0">
                                        <Button className="btn_milky_grn">
                                        <i className="fa fa-phone" aria-hidden="true"></i> 0800 122 3998
                                        </Button>
                                        <Button className="btn_milky_grn ml-2">
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i> support@stash.guru.com
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={5} className="text-center">
                            <h2>We're Coming Soon</h2>
                            <img width="100%" src={coming_soon_img1} />
                        </Col>
                    </Row>
                </Container>
                <div className="coming_soon_copyright">
                    <div className="coming_soon_copyright_txt">
                        Copyright &#169; Stash Guru 2018, All Right Reserved.
                    </div>
                </div>
            </section>
        </>
    )
}


export default ComingSoonCtrl;
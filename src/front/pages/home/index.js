import React,{useState} from 'react';
import { Col, Container, Row ,InputGroup,Button,FormControl,Carousel,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner_img from '../../../assets/front/images/img/banner_img.svg';

import browse from '../../../assets/front/images/icons/browse.svg';
import connect from '../../../assets/front/images/icons/connect.svg';
import store from '../../../assets/front/images/icons/store.svg';
import connecting_people from '../../../assets/front/images/img/connecting_people.png';
import boy from '../../../assets/front/images/img/boy.svg';
import girl from '../../../assets/front/images/img/girl.svg';
import some_empty_space from '../../../assets/front/images/img/some_empty_space.svg';

import Garage from '../../../assets/front/images/img/garage.png';
import Warehouse from '../../../assets/front/images/img/warehouse.png';
import LockUps from '../../../assets/front/images/img/lockUps.png';
import ParkingSpace from '../../../assets/front/images/img/parkingSpace.png';
import OutHoused from '../../../assets/front/images/img/outHoused.png';
import SpareRooms from '../../../assets/front/images/img/spareRooms.png';
import Basements from '../../../assets/front/images/img/basements.png';
import Lofts from '../../../assets/front/images/img/lofts.png';
import ContainerImg from '../../../assets/front/images/img/container.png';

import Local from '../../../assets/front/images/icons/localstorages.png';
import Affordable from '../../../assets/front/images/icons/payment.png';
import Flexible from '../../../assets/front/images/icons/flexible.png';
import Vetted from '../../../assets/front/images/icons/approved.png';
import IDChecks from '../../../assets/front/images/icons/id-card.png';
import Support from '../../../assets/front/images/icons/support.png';



import SearchComponent from '../../common/components/SearchCompo';

function FrontHomeCtrl(){

    const [index, setIndex] = useState(0);

    const connectingPeople = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return(
        <>
            <section className="home_banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="home_banner_content">
                                <h2>Need Storage Space?</h2>
                                <p>Store items locally with <b className="text_color_shamrock">trusted</b> storage hosts</p>
                                <div className="mt-5">
                                    <SearchComponent/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={banner_img} />
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="after_banner_strip">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={browse} />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Browse</h4>
                                    <p>Search for local storage space near you.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={connect} />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Connect</h4>
                                    <p>Chat to verified, local Hosts and book when you're ready.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={store} />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>Store</h4>
                                    <p>Start storing in your new space. Simple!</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="connecting_people">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6}>
                            
                        <div className="pl-xl-4">
                            <div className="stash_hdng">
                                <h3>Connecting people</h3>
                                <small>who need space, with people that have space.</small>
                            </div>
                            <div className="connecting_people_card">
                                <div className="connecting_people_img">
                                    <img src={boy} />
                                </div>
                                <div className="connecting_people_text">
                                    <h6>
                                        <b>Vlad</b> needs space to store some <b>household goods</b>
                                    </h6>
                                    <p>He needs a dry, safe and secure space for 8 months that is close to his house.</p>
                                </div>
                            </div>

                            
                            <div className="connecting_people_card">
                                <div className="connecting_people_img">
                                    <img src={girl} />
                                </div>
                                <div className="connecting_people_text">
                                    <h6>
                                        <b>Roxana</b> has a spare room that is <b>sitting empty</b>
                                    </h6>
                                    <p>Her spare room is dry, safe, secure and she can store Vlad's things for 8 months.</p>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className="connecting_people_polygon_img">
                                <img src={connecting_people} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="Left_hf_sky_blue_card">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} style={{position:'relative',zIndex:'+9'}}>
                            <div className="some_empty_space_text">
                                <h3>Get Some Empty Space?</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <button className="btn btn_milky">Get Statrted</button>
                                    <button className="btn btn_success">Chat Us</button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="some_empty_space_polygon_img">
                                <img src={some_empty_space} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            

            <section className="our_space_types">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="stash_hdng">
                                <h3>Our Space Types</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center align-items-center mt-5">
                        <Col md={10}>
                            <Row className="justify-content-center align-items-center">
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Garage</Button>
                                        <img src={Garage} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Warehouse</Button>
                                        <img src={Warehouse} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Lock Ups</Button>
                                        <img src={LockUps} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Parking Space</Button>
                                        <img src={ParkingSpace} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Out housed</Button>
                                        <img src={OutHoused} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Spare rooms</Button>
                                        <img src={SpareRooms} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Basement</Button>
                                        <img src={Basements} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Lofts</Button>
                                        <img src={Lofts} />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" >Container</Button>
                                        <img src={ContainerImg} />
                                    </div>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="why_stash_guru">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="stash_hdng milky">
                                <h3>Why stash.guru?</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">                        
                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Local} />
                                <h5>Local</h5>
                                <p>There are hundreds of local storage <br/> Hosts to choose from</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Affordable} />
                                <h5>Affordable</h5>
                                <p>Save on average 50% on your<br/> storage bill</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Flexible} />
                                <h5>Flexible</h5>
                                <p>Clear contracts, no hidden charges<br/> or fees</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Vetted} />
                                <h5>Vetted</h5>
                                <p>Spaces are quality controlled and<br/> approved by stash.guru</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={IDChecks} />
                                <h5>ID Checks</h5>
                                <p>All self storage hosts have their identity verified<br/>
                                 by an independent third party to ensure things<br/>
                                  are nice, safe and secure.</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Support} />
                                <h5>stash.guru Support</h5>
                                <p>Our team is here to help Guests and Hosts if any<br/>
                                 questions or issues arise with storage</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="featured_storages_cities">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="stash_hdng">
                                <h3>Featured Storages Cities</h3>
                            </div>
                        </Col>
                        <Col className="text-center my-5">
                            <Button variant="outline-success">Helsinki</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            
                            <Button variant="outline-success">Helsinki</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            
                            <Button variant="outline-success">Helsinki</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            
                            <Button variant="outline-success">Helsinki</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            
                            <Button variant="outline-success">Helsinki</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            
                            <Button variant="outline-success">Helsinki</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>
                            <Button variant="outline-success">Madrid</Button>
                            <Button variant="outline-success">Hobart</Button>
                            <Button variant="outline-success">Lorem ipsum</Button>                            
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="connecting_people_slider stash_guru_user_slider">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="stash_hdng">
                                <h3>Connecting people</h3>
                                <small>who need space, with people that have space.</small>
                            </div>
                        </Col>
                        <Col md={12}>
                            <Carousel activeIndex={index} controls={false} interval={3000} onSelect={connectingPeople}>
                                <Carousel.Item>
                                    <Row className="justify-content-center">
                                        <Col sm={8} md={5}>
                                            <img className="d-block w-100" src={boy} alt=""/>
                                            <h3>Steve Henderson</h3>
                                            <b>Velit imperdiet magna</b>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row className="justify-content-center">
                                        <Col sm={8} md={5}>
                                            <img className="d-block w-100" src={girl} alt=""/>
                                            <h3>Steve Henderson</h3>
                                            <b>Velit imperdiet magna</b>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row className="justify-content-center">
                                        <Col sm={8} md={5}>
                                            <img className="d-block w-100" src={boy} alt=""/>
                                            <h3>Steve Henderson</h3>
                                            <b>Velit imperdiet magna</b>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row className="justify-content-center">
                                        <Col sm={8} md={5}>
                                            <img className="d-block w-100" src={girl} alt=""/>
                                            <h3>Steve Henderson</h3>
                                            <b>Velit imperdiet magna</b>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </Col>

                    </Row>
                </Container>
            </section>



            <section className="right_hf_sky_blue_card">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6}>
                            <div className="here_to_help_you_polygon_img">
                                <img src={some_empty_space} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="here_to_help_you">
                                <h3>We're here to help you at every step along the way</h3>
                                <Nav className="flex-column">
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-phone mr-2"></i> 0800 112 3898</NavLink>
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-envelope mr-2"></i> support@stash.guru.com
                                    </NavLink>
                                </Nav>
                                <Row className="mt-5">
                                    <Col lg={7} className="mt-2">
                                        <SearchComponent/>
                                    </Col>
                                    <Col lg={5} className="mt-2">
                                        <Button className="btn-block btn-outline-light">
                                            <i className="fa fa-map-marker"></i> List Your Space
                                        </Button>
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

export default FrontHomeCtrl;
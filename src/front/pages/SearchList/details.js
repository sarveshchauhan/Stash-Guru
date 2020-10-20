import React,{useState} from 'react';
import { Col, Container, Row,Carousel, InputGroup ,FormControl,Button} from 'react-bootstrap';


// Assets Include
import './SearchList.scss';
import map from '../../../assets/front/images/dummy/map.jpg';
import browse from '../../../assets/front/images/icons/browse.svg';
import connect from '../../../assets/front/images/icons/connect.svg';
import store from '../../../assets/front/images/icons/store.svg';
import SearchList1 from '../../../assets/front/images/dummy/SearchList1.jpg';
import SearchList2 from '../../../assets/front/images/dummy/SearchList2.jpg';
import SearchList3 from '../../../assets/front/images/dummy/SearchList3.jpg';
import flexible from '../../../assets/front/images/icons/flexible.png';
import user_r_bg from '../../../assets/front/images/dummy/user_r_bg.jpg';
import user_r1 from '../../../assets/front/images/dummy/user_r1.png';

import Local from '../../../assets/front/images/icons/localstorages.png';
import Affordable from '../../../assets/front/images/icons/payment.png';
import Flexible from '../../../assets/front/images/icons/flexible.png';
import Vetted from '../../../assets/front/images/icons/approved.png';
import IDChecks from '../../../assets/front/images/icons/id-card.png';
import Support from '../../../assets/front/images/icons/support.png';

import some_empty_space from '../../../assets/front/images/img/some_empty_space.svg';

import door_lock from '../../../assets/front/images/icons/list-details/door-lock.png';
import alarm from '../../../assets/front/images/icons/list-details/alarm.png';
import cctv_camera from '../../../assets/front/images/icons/list-details/cctv_camera.png';
import light_bulb from '../../../assets/front/images/icons/list-details/light_bulb.png';
import file_alarm from '../../../assets/front/images/icons/list-details/file_alarm.png';
import electric_plug from '../../../assets/front/images/icons/list-details/electric_plug.png';
import heating from '../../../assets/front/images/icons/list-details/heating.png';
import water_drop from '../../../assets/front/images/icons/list-details/water_drop.png';

import open_box from '../../../assets/front/images/icons/list-details/open_box.png';
import time from '../../../assets/front/images/icons/list-details/time.png';
import blow_ground from '../../../assets/front/images/icons/list-details/blow_ground.png';
import key from '../../../assets/front/images/icons/list-details/key.png';

// Assets Include End





function FrontSearchDetailsCtrl(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <>
        <section className="py-4">
            <Container >
                <Row>
                    <Col md={8}>
                        <Carousel activeIndex={index} onSelect={handleSelect} indicators={true}>
                            <Carousel.Item>
                                <img className="d-block w-100" src={SearchList1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={SearchList2} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={SearchList3} alt="Second slide" />
                            </Carousel.Item>
                        </Carousel>
                            
                        <div>
                            <h3 className="my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsu.</p>
                            <hr/>
                        </div>

                        <div className="details_content">
                            <h5 className="my-4 sm2_hdng">Details</h5>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Type</label>
                                </Col>
                                <Col className="col-9">
                                    <b>Warehouse</b>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Can Be Used For</label>
                                </Col>
                                <Col className="col-9">
                                    <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</b>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Monthly Rental</label>
                                </Col>
                                <Col className="col-9">
                                    <b>$245</b> <span>/ month ex. VAT</span><br/>
                                    <b>$45 VAT</b> <span>/ month</span>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Annual Rental</label>
                                </Col>
                                <Col className="col-9">
                                    <b>$5000</b> <span>/ year ex. VAT</span>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Security Deposit</label>
                                </Col>
                                <Col className="col-9">
                                    <b>$500</b>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Total Size</label>
                                </Col>
                                <Col className="col-9">
                                    <b>450</b> <span>sq ft. (15 x 18 x 10)</span>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Minimum Rental</label>
                                </Col>
                                <Col className="col-9">
                                    <b>2</b> <span>Month</span>
                                </Col>
                            </Row>
                            <hr/>
                        </div>

                        <div className="details_content choose_your_location">
                            <h5 className="mt-4 sm2_hdng">Location</h5>
                            <Row>
                                <Col  sm={7}>
                                    <b>9961 St Paul Ave. Oceanside, CA 92054</b>
                                </Col>
                                <Col  sm={5}>
                                <InputGroup className="mb-3">
                                    <FormControl placeholder="Your Location" aria-label="" />
                                    <InputGroup.Append>
                                        <InputGroup.Text className="your_location_icon">
                                            <span></span>
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                </Col>
                                <Col sm={12}>
                                    <div className="details_your_location_map">
                                        <img src={map} />
                                    </div>
                                </Col>
                            </Row>
                            <hr/>
                        </div>

                        <div className="details_content">
                            <h5 className="mt-4 sm2_hdng">Features</h5>
                            <Row>
                                <Col  sm={3}>
                                    <div className="features_icon">
                                    <img src={door_lock}/>
                                        <p>Lockable <br/> Door</p>
                                    </div>
                                </Col>
                                <Col  sm={3}>
                                    <div className="features_icon">
                                        <img src={alarm}/>
                                        <p>Security <br/> Alarm</p>
                                    </div>
                                </Col>
                                <Col  sm={3}>
                                    <div className="features_icon">
                                        <img src={cctv_camera}/>
                                        <p>CCTV</p>
                                    </div>
                                </Col>
                                <Col  sm={3}>
                                    <div className="features_icon">
                                        <img src={light_bulb}/>
                                        <p>Lighitng</p>
                                    </div>
                                </Col>

                                <Col  sm={3}>
                                    <div className="features_icon">
                                        <img src={file_alarm}/>
                                        <p>Fire <br/> Alarm</p>
                                    </div>
                                </Col>
                                <Col  sm={3}>
                                    <div className="features_icon">
                                        <img src={electric_plug}/>
                                        <p>Electricity <br/> Points</p>
                                    </div>
                                </Col>
                                <Col  sm={3}>
                                    <div className="features_icon">
                                        <img src={heating}/>
                                        <p>Heating</p>
                                    </div>
                                </Col>
                                <Col  sm={3}>
                                    <div className="features_icon">
                                        <img src={water_drop}/>
                                        <p>Water <br/> Supply</p>
                                    </div>
                                </Col>
                            </Row>
                            <hr/>
                        </div>


                        <div className="details_content">
                            <h5 className="mt-4 sm2_hdng">Access</h5>
                            <Row>
                                <Col  sm={6}>
                                    <div className="access_card">
                                        <img src={open_box}/>
                                        <div className="access_card_text">
                                            <strong>Full Space</strong>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col  sm={6}>
                                    <div className="access_card">
                                        <img src={time}/>
                                        <div className="access_card_text">
                                            <strong>Any Time</strong>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col  sm={6}>
                                    <div className="access_card">
                                        <img src={blow_ground}/>
                                        <div className="access_card_text">
                                            <strong>Below Ground</strong>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col  sm={6}>
                                    <div className="access_card">
                                        <img src={key}/>
                                        <div className="access_card_text">
                                            <strong>Key Provided</strong>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <hr/>
                        </div>

                        <div className="details_content">
                            <h5 className="mt-4 sm2_hdng">Other Listings At This Location</h5>
                            <Row>
                                <Col  sm={6}>
                                    <div className="SearchListPlace_card">
                                        <img src={SearchList1} />
                                        <div className="SearchListPlace_card_body">
                                            <div className="SearchListPlaceUserArea">
                                                <img className="profileImg" src={user_r1} />
                                                <span className="profileName">Mary Ann Wagner</span>
                                            </div>

                                            <div className="SearchListPlaceAreaPlace">
                                                <Button size="sm">Garage</Button>
                                                <span><i className="fa fa-map-marker"></i> California </span>
                                            </div>

                                            <div className="SearchListPlaceAreaCost">
                                                <strong>$45.00/Month </strong>
                                                <span>20x25</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col  sm={6}>
                                    <div className="SearchListPlace_card">
                                        <img src={SearchList2} />
                                        <div className="SearchListPlace_card_body">
                                            <div className="SearchListPlaceUserArea">
                                                <img className="profileImg" src={user_r1} />
                                                <span className="profileName">Mary Ann Wagner</span>
                                            </div>

                                            <div className="SearchListPlaceAreaPlace">
                                                <Button size="sm">Warehouse</Button>
                                                <span><i className="fa fa-map-marker"></i> California </span>
                                            </div>

                                            <div className="SearchListPlaceAreaCost">
                                                <strong>$105.00/Month </strong>
                                                <span>100x25</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <hr/>
                        </div>

                        <div className="details_content">
                            <h5 className="mt-4 sm2_hdng">Host</h5>
                            <Row>
                                <Col  sm={6}>
                                    <div className="host_card">
                                        <img src={user_r_bg}/>
                                        <div className="access_card_text">
                                            <h4>Mary Ann Wagner</h4>
                                            <small>No Verifie Host</small>
                                            <Button variant="success">Message Mary Ann..</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
        
        <section className="after_banner_strip">
                <Container>
                    <h4 className="my-4 sm2_hdng">How Does It Work ?</h4>
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

            <section className="section_padding">
                <Container>
                    <h4 className="sm2_hdng">Why stash.guru?</h4>
                    <Row className="">                        
                        <Col md={4}>
                            <div className="why_stash_guru_card">
                                <img src={Local} />
                                <h5>Local</h5>
                                <p>There are hundreds of local storage <br/> Hosts to choose from</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="why_stash_guru_card">
                                <img src={Affordable} />
                                <h5>Affordable</h5>
                                <p>Save on average 50% on your<br/> storage bill</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="why_stash_guru_card">
                                <img src={Flexible} />
                                <h5>Flexible</h5>
                                <p>Clear contracts, no hidden charges<br/> or fees</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="why_stash_guru_card">
                                <img src={Vetted} />
                                <h5>Vetted</h5>
                                <p>Spaces are quality controlled and<br/> approved by stash.guru</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="why_stash_guru_card">
                                <img src={IDChecks} />
                                <h5>ID Checks</h5>
                                <p>All self storage hosts have their identity verified<br/>
                                 by an independent third party to ensure things<br/>
                                  are nice, safe and secure.</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="why_stash_guru_card">
                                <img src={Support} />
                                <h5>stash.guru Support</h5>
                                <p>Our team is here to help Guests and Hosts if any<br/>
                                 questions or issues arise with storage</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="section_padding about_stash">
                <Container>
                    <h4 className="sm2_hdng text-white">About stash.guru</h4>
                    <Row className="">                        
                        <Col md={6} className="about_stash_content">
                            <p className="text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p className="text-white"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                            <Button variant="" className="btn_milky"> <i className="fa fa-phone mr-2"></i>Contact Us</Button>
                            
                            <Button variant="" className="btn_trans ml-2"> <i className="fa fa-angle-up mr-2"></i>Back to Top</Button>
                        </Col>
                        <Col md={6}>
                            <div className="some_empty_space_polygon_img">
                                <img src={some_empty_space} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default FrontSearchDetailsCtrl;
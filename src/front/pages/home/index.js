import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Carousel, Nav } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
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
import ListYourSpace from '../../../assets/front/images/icons/list_your_space.png'


import SearchComponent from '../../common/components/SearchCompo';
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from '../../../redux/front/frontActions';

import { useTranslation, Trans } from 'react-i18next';

function FrontHomeCtrl() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { testimonialData } = useSelector(state => state.front);

    const { t } = useTranslation();



    useEffect(() => {

        dispatch(getTestimonials());

    }, [dispatch]);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

    const [index, setIndex] = useState(0);

    const connectingPeople = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <section className="home_banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="home_banner_content">
                                <h2>{t('homeHeading')}</h2>

                                <Trans

                                    i18nKey="homeSubHeading"
                                    default={`<p>Store items locally with <b className="text_color_shamrock">trusted</b> storage hosts</p>`}
                                    components={{ p: <p />, b: <b /> }}

                                >

                                </Trans>

                                <div className="mt-5">
                                    <SearchComponent />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={banner_img} alt="" />
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
                                    <img src={browse} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>{t('homeTabOneHeading')}</h4>
                                    <p>{t('homeTabOneDesc')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={connect} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>{t('homeTabTwoHeading')}</h4>
                                    <p>{t('homeTabTwoDesc')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="ab_strip_card">
                                <div className="ab_strip_card_icon">
                                    <img src={store} alt="" />
                                </div>
                                <div className="ab_strip_card_content">
                                    <h4>{t('homeTabThreeHeading')}</h4>
                                    <p>{t('homeTabThreeDesc')}</p>
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
                                    <h3>{t('homeConnectPeopleHeading')}</h3>
                                    <small>{t('homeConnectPeopleSubHeading')}</small>
                                </div>



                                <div className="connecting_people_card">
                                    <div className="connecting_people_img">
                                        <img src={boy} alt="" />
                                    </div>
                                    <div className="connecting_people_text">
                                        <h6>

                                            <Trans
                                                i18nKey="homeConnectPoepleAvatarOne"
                                                default="<b>Vlad</b> needs space to store some <b>household goods</b>"
                                                components={{
                                                    b: <b />
                                                }}
                                            >

                                            </Trans>

                                        </h6>
                                        <p>{t('homeConnectPeopleAvatarOneDesc')}</p>
                                    </div>
                                </div>


                                <div className="connecting_people_card">
                                    <div className="connecting_people_img">
                                        <img src={girl} alt="" />
                                    </div>
                                    <div className="connecting_people_text">
                                        <h6>



                                            <Trans
                                                i18nKey="homeConnectPoepleAvatarTwo"
                                                default="<b>Roxana</b> has a spare room that is <b>sitting empty</b>"
                                                components={{
                                                    b: <b />
                                                }}
                                            >

                                            </Trans>



                                        </h6>
                                        <p>{t('homeConnectPeopleAvatarTwoDesc')}</p>
                                    </div>
                                </div>




                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="connecting_people_polygon_img">
                                <img src={connecting_people} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="Left_hf_sky_blue_card">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} style={{ position: 'relative', zIndex: '+9' }}>
                            <div className="some_empty_space_text">
                                <h3>{t('homeGetSpaceHeading')}</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <button className="btn btn_milky" onClick={() => history.push('/list-your-space')}>{t('homeGetSpaceStartedBtn')}</button>
                                <button className="btn btn_success chat-us-btn-front" onClick={() => history.push('/contact')}>{t('homeGetSpaceChatBtn')}</button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="some_empty_space_polygon_img">
                                <img src={some_empty_space} alt="" />
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
                                <h3>{t('homeSpaceTypeHeading')}</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center align-items-center mt-5">
                        <Col sm={12} xl={10}>
                            <Row className="justify-content-center align-items-center">
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-garage')}>{t('homeGarageBtn')}</Button>
                                        <img src={Garage} alt="" style={imageStyle} onClick={() => history.push('/rent-my-garage')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-warehouse')}>{t('homeWarehouseBtn')}</Button>
                                        <img src={Warehouse} alt="" style={imageStyle} onClick={() => history.push('/rent-my-warehouse')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-lockup')}>{t('homeLockupBtn')}</Button>
                                        <img src={LockUps} alt="" onClick={() => history.push('/rent-my-lockup')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-parking-space')}>{t("homeParkingBtn")}</Button>
                                        <img src={ParkingSpace} alt="" onClick={() => history.push('/rent-my-parking-space')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-outhouse')}>{t('homeOutHouseBtn')}</Button>
                                        <img src={OutHoused} alt="" onClick={() => history.push('/rent-my-outhouse')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-spare-room')}>{t('homeSpareRoom')}</Button>
                                        <img src={SpareRooms} alt="" onClick={() => history.push('/rent-my-spare-room')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-basement')}>{t('homeBasementBtn')}</Button>
                                        <img src={Basements} alt="" onClick={() => history.push('/rent-my-basement')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-loft')}>{t('homeLoftBtn')}</Button>
                                        <img src={Lofts} alt="" onClick={() => history.push('/rent-my-loft')} />
                                    </div>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <div className="our_space_types_card">
                                        <Button variant="success" onClick={() => history.push('/rent-my-container')}>{t('homeContainerBtn')}</Button>
                                        <img src={ContainerImg} alt="" onClick={() => history.push('/rent-my-container')} />
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
                                <h3>{t('homeStFeatureHeading')}</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={Local} alt="" />
                                <h5>{t('homeStFeatureOneHeading')}</h5>

                                <Trans
                                    i18nKey="homeStFeatureOneDesc"
                                    defaultValue="<p>There are hundreds of local storage <br /> Hosts to choose from</p>"
                                    components={{
                                        p: <p />,
                                        br: <br />
                                    }}
                                >

                                </Trans>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={Affordable} alt="" />
                                <h5>{t('homeStFeatureTwoHeading')}</h5>

                                <Trans
                                    i18nKey="homeStFeatureTwoDesc"
                                    default="<p>Save on average 50% on your<br /> storage bill</p>"
                                    components={{
                                        p: <p />,
                                        br: <br />
                                    }}

                                >

                                </Trans>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={Flexible} alt="" />
                                <h5>{t('homeStFeatureThreeHeading')}</h5>

                                <Trans

                                    i18nKey="homeStFeatureThreeDesc"
                                    default="<p>Clear contracts, no hidden charges<br /> or fees</p>"
                                    components={{
                                        p: <p />,
                                        br: <br />
                                    }}
                                >

                                </Trans>


                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={Vetted} alt="" />
                                <h5>{t('homeStFeatureFourHeading')}</h5>
                                <Trans
                                    i18nKey="homeStFeatureFourDesc"
                                    default="<p>Spaces are quality controlled and<br /> approved by stash.guru</p>"
                                    components={{
                                        p: <p />,
                                        br: <br />
                                    }}
                                >

                                </Trans>

                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={IDChecks} alt="" />
                                <h5>{t('homeStFeatureFiveHeading')}</h5>
                                <Trans
                                    i18nKey="homeStFeatureFiveDesc"
                                    default="<p>All self storage hosts have their identity verified<br /> by an independent third party to ensure things<br /> are nice, safe and secure.</p>"
                                    components={{
                                        p: <p />,
                                        br: <br />
                                    }}
                                >

                                </Trans>
                            </div>
                        </Col>

                        <Col sm={6} lg={4}>
                            <div className="stash_guru_card_a">
                                <img src={Support} alt="" />
                                <h5>{t('homeStFeatureSixHeading')}</h5>
                                <Trans
                                    i18nKey="homeStFeatureSixDesc"
                                    default="<p>Our team is here to help Guests and Hosts if any<br /> questions or issues arise with storage</p>"
                                    components={{
                                        p: <p />,
                                        br: <br />
                                    }}
                                >

                                </Trans>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section className="featured_storages_cities">
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

 */}

            {(testimonialData && Array.isArray(testimonialData) && testimonialData.length > 0) &&
                <section className="connecting_people_slider stash_guru_user_slider">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={12}>
                                <div className="stash_hdng">
                                    <h3>{t('homeConnectPeopleHeading')}</h3>
                                    <small>{t('homeConnectPeopleDesc')}</small>
                                </div>
                            </Col>
                            <Col md={12}>
                                <Carousel activeIndex={index} controls={false} interval={3000} onSelect={connectingPeople}>

                                    {
                                        testimonialData && Array.isArray(testimonialData) && testimonialData.map((testimonial, index) => (
                                            <Carousel.Item key={index}>
                                                <Row className="justify-content-center">
                                                    <Col sm={8} md={5}>
                                                        <img className="d-block w-100" src={testimonial.tm_image} alt="" />
                                                        <h3>{testimonial.tm_name}</h3>
                                                        <b>{testimonial.tm_heading}</b>
                                                        <p>{testimonial.tm_description}</p>
                                                    </Col>
                                                </Row>
                                            </Carousel.Item>
                                        ))
                                    }


                                </Carousel>
                            </Col>

                        </Row>
                    </Container>
                </section>

            }


            <section className="right_hf_sky_blue_card">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6}>
                            <div className="here_to_help_you_polygon_img">
                                <img src={some_empty_space} alt="" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="here_to_help_you">
                                <h3>{t('homeHelpHeading')}</h3>
                                <Nav className="flex-column">
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-phone mr-2"></i> 0800 112 3898</NavLink>
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-envelope mr-2"></i> support@stash.guru.com
                                    </NavLink>
                                </Nav>
                                <Row className="mt-5">
                                    <Col lg={7} className="mt-2">
                                        <SearchComponent />
                                    </Col>
                                    <Col lg={5} className="mt-2">
                                        <Button className="btn-block btn-outline-light" onClick={() => history.push('list-your-space')}>
                                            <img width="15" className="mr-2" src={ListYourSpace} /> {t('homeHelpListSpaceBtn')}
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


const imageStyle = {

    cursor: "pointer"

}; 
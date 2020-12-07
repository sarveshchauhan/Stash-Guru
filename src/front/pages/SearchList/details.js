
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Col, Container, Row, Carousel, InputGroup, FormControl, Button, Modal, Form } from 'react-bootstrap';


// Assets Include
import './SearchList.scss';
import map from '../../../assets/front/images/dummy/map.jpg';
import browse from '../../../assets/front/images/icons/browse.svg';
import connect from '../../../assets/front/images/icons/connect.svg';
import store from '../../../assets/front/images/icons/store.svg';
import SearchList1 from '../../../assets/front/images/dummy/SearchList1.jpg';
import SearchList2 from '../../../assets/front/images/dummy/SearchList2.jpg';
import user_r1 from '../../../assets/front/images/dummy/user_r1.png';

import Local from '../../../assets/front/images/icons/localstorages.png';
import Affordable from '../../../assets/front/images/icons/payment.png';
import Flexible from '../../../assets/front/images/icons/flexible.png';
import Vetted from '../../../assets/front/images/icons/approved.png';
import IDChecks from '../../../assets/front/images/icons/id-card.png';
import Support from '../../../assets/front/images/icons/support.png';

import some_empty_space from '../../../assets/front/images/img/some_empty_space.svg';

import helping from '../../../assets/front/images/icons/helping.png';
import support from '../../../assets/front/images/icons/support.png';
import secure_payment from '../../../assets/front/images/icons/list-details/secure-payment.png';
import agreement from '../../../assets/front/images/icons/list-details/agreement.png';

// Assets Include End
import { useDispatch, useSelector } from 'react-redux';
import { getBookingInfoByStore, searchDetails, toggleBookingModal } from '../../../redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import LoaderCtrl from '../../common/components/loader';
import GoogleMapDetail from '../../common/components/google-map/GoogleMapDetail';
import ProfilePlaceholder from '../../../assets/front/images/profile-placeholder.png';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import BookingModal from './BookingModal';



const iconImages = require.context('../../../assets/front/images/icons/list-details', true);
const storeImages = require.context('../../../assets/front/images/store', true);
const profileImages = require.context('../../../assets/users/images/profile', true);



function FrontSearchDetailsCtrl() {



    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);



    const { searchId } = useParams();
    const [details, setDetails] = useState([]);
    const [verifyStatus, setVerifyStatus] = useState('No Verify Host');
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();


    const { schDetails, detailsResponse, vat, features, access, images, measurement_unit, used_type, loading } = useSelector(state => state.search);
    const { bookingInfo } = useSelector(state => state.booking);

    useEffect(() => {
        dispatch(searchDetails(searchId));
        dispatch(getBookingInfoByStore({
            store_id: +searchId
        }));
    }, [searchId]);

    useEffect(() => {
        setDetails(schDetails);
        if (schDetails && schDetails.u_verify == 'Yes') {
            setVerifyStatus('Verified Host');
        }
    }, [detailsResponse]);



    useEffect(() => {
        setLoader(loading);
    }, [loading]);

    // Back to Top
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('scroll', checkScrollTop);
    //////////// 


    // Search Details Slider
    const [index, setIndex] = useState(0);
    const search_Details_handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    /////////



    return (
        <>
            <LoaderCtrl loaderStatus={loader} />
            <section className="py-4">
                <Container className="">
                    <Row>
                        <Col lg={8}>
                            <Carousel activeIndex={index} onSelect={search_Details_handleSelect} indicators={true}>
                                {images.map((details, index) =>
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100" src={details.si_path} />
                                    </Carousel.Item>
                                )}
                            </Carousel>

                            <div>
                                <h3 className="my-4">{details && details.store_title}</h3>

                                <div dangerouslySetInnerHTML={{ __html: details.store_description }} />

                                <hr />
                            </div>

                            <div className="details_content">
                                <h5 className="my-4 sm2_hdng">Details</h5>
                                <Row className="mb-3">
                                    <Col className="col-3">
                                        <label>Type</label>
                                    </Col>
                                    <Col className="col-9">
                                        <b>{details && details.st_name}</b>
                                    </Col>
                                </Row>
                                {/* <Row className="mb-3">
                                    <Col className="col-3">
                                        <label>Can Be Used For</label>
                                    </Col>
                                    <Col className="col-9">
                                        <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</b>
                                    </Col>
                                </Row> */}
                                <Row className="mb-3">
                                    <Col className="col-3">
                                        <label>Monthly Rental</label>
                                    </Col>
                                    <Col className="col-9">
                                        <b>${details.store_cost}</b> <span>/ month </span><br />
                                    </Col>
                                </Row>

                                {
                                    details && details.store_security_deposit && <Row className="mb-3">
                                        <Col className="col-3">
                                            <label>Security Deposit</label>
                                        </Col>

                                        <Col className="col-9">
                                            <b>{details && details.store_security_deposit}</b>
                                        </Col>
                                    </Row>
                                }


                                <Row className="mb-3">
                                    <Col className="col-3">
                                        <label>Total Size</label>
                                    </Col>
                                    <Col className="col-9">

                                        {
                                            details.store_total_size && details.store_total_size.length > 0 &&
                                            <div>
                                                <p><strong>Width: </strong> {JSON.parse(details.store_total_size)[0].width} {measurement_unit && measurement_unit.mu_name}</p>
                                                <p><strong>Depth: </strong> {JSON.parse(details.store_total_size)[0].depth} {measurement_unit && measurement_unit.mu_name}</p>
                                                <p><strong>Height: </strong> {JSON.parse(details.store_total_size)[0].height} {measurement_unit && measurement_unit.mu_name}</p>
                                            </div>
                                        }

                                        {/* <p><strong>Total Size:</strong>   sq ft. ({details && details.store_size})</p> */}
                                    </Col>
                                </Row>

                                <hr />
                            </div>

                            <div className="details_content choose_your_location">
                                <h5 className="mt-4 sm2_hdng">Location</h5>
                                <Row>
                                    <Col sm={7}>
                                        <b>{details && `${details.store_address1}, ${details.store_address2 ? `${details.store_address2}, ` : ""} ${details.store_city}`} </b>
                                    </Col>
                                    <Col sm={5}>
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
                                            {/* <img src={map} alt="" /> */}

                                            <GoogleMapDetail />

                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                            </div>

                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">Features</h5>
                                <Row>
                                    {features.map((details, index) =>
                                        <Col sm={3} key={index}>
                                            <div className="features_icon">
                                                <img src={iconImages(`./${details.fs_icon}`)} alt={details.fs_name} />
                                                <p>{details.fs_name}</p>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                                <hr />
                            </div>


                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">Guest</h5>

                                <p>{details.gt_name}</p>

                                {/* <Row>   
                                    {access.map(details =>
                                        <Col sm={6}>
                                            <div className="access_card">
                                                <img src={iconImages(`./${details.as_icon}`)} alt={details.as_name} />
                                                <div className="access_card_text">
                                                    <strong>{details.as_name}</strong>
                                                    <p>{details.as_description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
 */}


                                <hr />
                            </div>



                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">Guest access</h5>

                                <p>{details.gta_name}</p>
                                <hr />
                            </div>



                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">Floor</h5>

                                <p>{details.fl_name}</p>
                                <hr />
                            </div>


                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">Space Used type</h5>

                                <p>{used_type && Array.isArray(used_type) && used_type.map(sut => sut.sut_name).join(", ")}</p>
                                <hr />
                            </div>

                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">About host</h5>

                                <p>{details.u_about}</p>
                                <hr />
                            </div>

                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">Other Listings At This Location</h5>
                                <Row>
                                    <Col sm={6}>
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList1} alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img width="100%" className="profileImg" src={user_r1} alt="" />
                                                    <span className="profileName">Mary Ann Wagner</span>
                                                </div>

                                                <div className="SearchListPlaceAreaPlace">
                                                    <div>
                                                        <Button size="sm">Garage</Button>
                                                        <span><i className="fa fa-map-marker"></i> California </span>
                                                    </div>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>20x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList2} alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r1} alt="" />
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
                                <hr />
                            </div>

                            <div className="details_content">
                                <h5 className="mt-4 sm2_hdng">Host</h5>
                                <Row>
                                    <Col sm={6}>
                                        <div className="host_card">
                                            <img src={details && details.u_pic ? details.u_pic : "no_img.png"} alt="" />
                                            <div className="access_card_text">
                                                <h4>{details && details.u_name}</h4>
                                                <small>{verifyStatus}</small>
                                                <Button variant="success" onClick={() => window.location.href = `/chat/list/${searchId}`}>Message Mary Ann..</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-4">
                                    <Col sm={12}>
                                        <MessageForm />
                                    </Col>
                                </Row>


                                <MessageList />


                            </div>

                        </Col>



                        <Col lg={4}>
                            <div className={`book_space_card${isSticky ? ' stickyRemove' : ' stickyAdd'}`} ref={ref}>
                                <div className="book_space_card_body">
                                    <Button variant="outline-info">Warehouse </Button>

                                    <div className="d-flex user_area align-items-center">
                                        <img width="30" height="30" src={details && details.u_pic == 'no_img.png' ? profileImages(`./${details.u_pic}`) : details.u_pic} alt="" />
                                        <div className="">
                                            <strong className="d-block">{details && details.u_name}</strong>
                                            <small className="d-block">{verifyStatus}</small>
                                        </div>
                                    </div>
                                    <small>
                                        <i className="fa fa-map-marker mr-3"></i>
                                        {`${details.store_address1}, ${details.store_address2}, ${details.store_city}, ${details.store_postcode}`}
                                    </small>
                                    <div className="SearchListPlaceAreaCost justify-content-between">
                                        <strong>${details && details.store_cost}/Month </strong>
                                        <span>{details && details.store_size} {measurement_unit && measurement_unit.mu_name}<sup>2</sup></span>
                                    </div>


                                    {/* {
                                        details.u_email !== localStorage.getItem("userEmail") && bookingInfo ? <Button variant="success" className="btn-block" onClick={() => window.location.href = `/booking/${bookingInfo.guid}`}>View Booking</Button> : <Button variant="success" className="btn-block" onClick={() => dispatch(toggleBookingModal(true))}>Book Space</Button>
                                    } */}

                                    {
                                        details.u_email !== localStorage.getItem("userEmail") ? bookingInfo ? <Button variant="success" className="btn-block" onClick={() => window.location.href = `/booking/${bookingInfo.guid}`}>View Booking</Button> : <Button variant="success" className="btn-block" onClick={() => dispatch(toggleBookingModal(true))}>Book Space</Button> : <Button variant="success" className="btn-block" onClick={() => window.location.href = `/list-preview/${searchId}`}>Edit Listing</Button>

                                    }



                                </div>
                                <div className="book_space_card_footer">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className="mr-3" src={helping} alt="" />
                                        <p className="m-0">$400 insurance included</p>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className="mr-3" src={support} alt="" />
                                        <p className="m-0">$400 insurance included</p>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className="mr-3" src={secure_payment} alt="" />
                                        <p className="m-0">$400 insurance included</p>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className="mr-3" src={agreement} alt="" />
                                        <p className="m-0">$400 insurance included</p>
                                    </div>
                                </div>
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
                                    <img src={browse} alt="" />
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
                                    <img src={connect} alt="" />
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
                                    <img src={store} alt="" />
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
                            <div className="stash_guru_card_a">
                                <img src={Local} alt="" />
                                <h5>Local</h5>
                                <p>There are hundreds of local storage <br /> Hosts to choose from</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Affordable} alt="" />
                                <h5>Affordable</h5>
                                <p>Save on average 50% on your<br /> storage bill</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Flexible} alt="" />
                                <h5>Flexible</h5>
                                <p>Clear contracts, no hidden charges<br /> or fees</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Vetted} alt="" />
                                <h5>Vetted</h5>
                                <p>Spaces are quality controlled and<br /> approved by stash.guru</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={IDChecks} alt="" />
                                <h5>ID Checks</h5>
                                <p>All self storage hosts have their identity verified<br />
                                 by an independent third party to ensure things<br />
                                  are nice, safe and secure.</p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="stash_guru_card_a">
                                <img src={Support} alt="" />
                                <h5>stash.guru Support</h5>
                                <p>Our team is here to help Guests and Hosts if any<br />
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

                            <Button variant="" className="btn_trans ml-2" onClick={scrollTop}> <i className="fa fa-angle-up mr-2"></i>Back to Top</Button>
                        </Col>
                        <Col md={6}>
                            <div className="some_empty_space_polygon_img">
                                <img src={some_empty_space} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <BookingModal />


        </>
    )
}
export default FrontSearchDetailsCtrl;
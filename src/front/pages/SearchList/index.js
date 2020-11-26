import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Button, Dropdown } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

// Assets Include
import '../../common/topbar/topbar.scss';
import './SearchList.scss';

import b_garage from '../../../assets/front/images/icons/storage_type/b_garage.png';

// Assets Include End

import SearchComponent from '../../common/components/SearchCompo';
import MapContainer from '../../common/components/map';
import { useDispatch, useSelector } from 'react-redux';
import { getCoordinates, searchListing } from '../../../redux';
import LoaderCtrl from '../../common/components/loader';
import GoogleMapListing from '../../common/components/google-map/GoogleMapListing';
import PlaceholderImage from '../../../assets/front/images/placeholder.png';


const storeImages = require.context('../../../assets/front/images/store', true);
const profileImages = require.context('../../../assets/users/images/profile', true);




function FrontSearchListCtrl() {

    const { key } = useParams();
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const { searchList, vat, loading } = useSelector(state => state.search);

    useEffect(() => {
        dispatch(searchListing(key));
        dispatch(getCoordinates({
            address: key
        }));
    }, [key]);

    useEffect(() => {
        setList(searchList);
    }, [searchList]);

    useEffect(() => {
        setLoader(loading);
    }, [loading]);

    return (
        <>
            <LoaderCtrl loaderStatus={loader} />
            <Container fluid>
                <Row>
                    <Col lg={6} className="">
                        <Navbar sticky="top" className="SearchListFilter">
                            <Row>
                                <Col sm={12}>
                                    <SearchComponent />
                                </Col>
                                <Col sm={8} className="SearchListFilter_Buttons">
                                    <Dropdown className="d-inline-block">
                                        <Dropdown.Toggle variant="outline-success" size="sm" id="StorageType">
                                            Storage Type
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu className="switch_dropdown_menu">
                                            <div className="switch_dropdown_row">
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">garge</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Spare rooms</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Lock Ups</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Basement</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Parking House</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Lofts</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Out housed</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Container</span>
                                                </div>
                                                <div className="switch_col">
                                                    <label class="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                    </label>
                                                    <span className="switch_label_name">Warehouse</span>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>

                                    </Dropdown>
                                    <Dropdown className="d-inline-block">
                                        <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                            Price
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="d-inline-block">
                                        <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                            Size
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Size</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="d-inline-block">
                                        <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                            Features
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Features</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="d-inline-block">
                                        <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                            More Filters
                                    </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">More Filters</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="outline-warning" size="sm">Reset Filters</Button>{' '}
                                </Col>
                                <Col sm={4} className="text--center text-md-right" style={{ fontSize: '14px' }}>
                                    <small className="mx-2 mt-4 d-inline-block">Showing {list.length} Results</small>
                                    <Button variant="link" className="p-0" style={{ fontSize: '14px', color: '#000', textDecoration: 'none' }}><b>Nearest <i className="fa fa-sort" aria-hidden="true"></i></b></Button>
                                </Col>
                            </Row>
                            <hr />
                        </Navbar>
                        <Row>
                            <Col lg={12} className="pt-3">
                                <div className="SearchListPlace_row">
                                    {list.map(details =>
                                        <div className="col-sm-6 col-xl-4 SearchListPlace_col" key={details.store_id}>
                                            <div className="SearchListPlace_card">
                                                <a href={'/search-details/' + details.store_id} >
                                                    <img width="100%" src={details.images && details.images.length > 0 ? details.images[0].si_path : PlaceholderImage} alt="" />
                                                    <div className="SearchListPlace_card_body">
                                                        <div className="SearchListPlaceUserArea">
                                                            <img className="profileImg" src={details.u_pic} alt="" />
                                                            <span className="profileName">{details.u_name}</span>
                                                        </div>

                                                        <div className="SearchListPlaceAreaPlace">
                                                            <Button size="sm">
                                                                <img width="100%" src={b_garage} alt="" /> {details.st_name}
                                                            </Button>
                                                            <span>{details.store_location} </span>
                                                            <span>|</span>
                                                            <span>1 Miles</span>
                                                        </div>

                                                        <div className="SearchListPlaceAreaCost">

                                                            {
                                                                details.store_cost && <strong>${(parseInt(details.store_cost) + (parseInt(details.store_cost) * (parseInt(vat) / 100))).toFixed(2)}/Month </strong>

                                                            }


                                                            <span>{details.store_size}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        {/* <div className="map_area"> */}
                        <GoogleMapListing />
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FrontSearchListCtrl;
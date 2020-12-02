import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


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
import lieIcon from '../../../assets/front/images/icons/lieIcon.png';
import StorageTypeFilter from './StorageTypeFilter';
import FeaturesFilter from './FeaturesFilter';





const storeImages = require.context('../../../assets/front/images/store', true);
const profileImages = require.context('../../../assets/users/images/profile', true);






function FrontSearchListCtrl() {
    // rangeSlider 
    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });
    function valuetext(value) {
        return `${value}°C`;
    }
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // rangeSlider  end


    const { key } = useParams();
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const { searchList, vat, loading } = useSelector(state => state.search);

    useEffect(() => {
        dispatch(searchListing({
            key: key,
            storage_type: "",
            features_type: "",
            price: ""
        }));
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
            <Container fluid className="">
                <Row className="">
                    <Col lg={6} className="">
                        <Navbar sticky="top" className="SearchListFilter">
                            <Row>
                                <Col sm={12}>
                                    <SearchComponent />
                                </Col>
                                <Col sm={8} className="SearchListFilter_Buttons">




                                    <StorageTypeFilter />


                                    <Dropdown className="d-inline-block">
                                        <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                            Price
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="priceSizeRS_card">
                                            <div className="priceSizeRS_card_body">
                                                <div className={classes.root}>
                                                    <Typography className="mb-5">Monthly Price Range</Typography>
                                                    <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="discrete-slider-always" getAriaValueText={valuetext} valueLabelDisplay="on"
                                                    />
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown className="d-inline-block">
                                        <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                            Size
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="priceSizeRS_card">
                                            <div className="priceSizeRS_card_body">
                                                <div className={classes.root}>
                                                    <Typography className="mb-5">Space Size</Typography>
                                                    <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="discrete-slider-always" getAriaValueText={valuetext} valueLabelDisplay="on"
                                                    />
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <FeaturesFilter />


                                    <Button variant="outline-warning" size="sm">Reset Filters</Button>{' '}
                                </Col>
                                <Col sm={4} className="text--center text-md-right" style={{ fontSize: '14px' }}>
                                    <small className="mx-2 mt-4 d-inline-block">Showing {list.length} Results</small>
                                    {/* <Button variant="link" className="p-0" style={{ fontSize: '14px', color: '#000', textDecoration: 'none' }}><b>Nearest <i className="fa fa-sort" aria-hidden="true"></i></b></Button> */}
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
                                                            <div className="">
                                                                <b className="PlaceAreaTitle d-block">
                                                                    {details.store_title.substring(0, 20)}...
                                                                </b>
                                                            </div>
                                                        </div>
                                                        <div className="SearchListPlaceUserArea">
                                                            <img className="profileImg" src={details.u_pic} alt="" />
                                                            <div className="">
                                                                <span className="profileName d-block">{details.u_name.split(" ")[0]}</span>
                                                            </div>
                                                        </div>

                                                        <div className="SearchListPlaceAreaPlace justify-content-between">
                                                            <span className="FrPlace" size="sm" variant="no_bg">
                                                                <img width="100%" src={details.st_path} alt="" /> {details.st_name}
                                                            </span>
                                                            <div>
                                                                <span><i className="fa fa-map-marker"></i></span>

                                                                {/* <span>|</span>
                                                                <span>1 km</span>
                                                             */}
                                                            </div>
                                                        </div>

                                                        <div className="SearchListPlaceAreaCost">
                                                            <div className="d-flex-wrap justify-content-between w-100 mx-0">
                                                                <div className="px-0">
                                                                    {
                                                                        details.store_cost &&
                                                                        <strong>
                                                                            {(parseInt(details.store_cost) + (parseInt(details.store_cost) * (parseInt(vat) / 100))).toFixed(0)}<span > Lei</span> <small>
                                                                                / month</small>
                                                                        </strong>

                                                                    }
                                                                </div>
                                                                <div className="px-0">
                                                                    <strong>{details.store_size}<small> m<sup>2</sup> </small> </strong>
                                                                </div>
                                                            </div>
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
                    <Col lg={6} className="">
                        <div className="map_area">
                            <GoogleMapListing />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FrontSearchListCtrl;
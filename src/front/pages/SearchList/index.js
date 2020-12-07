import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


import { Container, Row, Col, Navbar, Button, Dropdown } from 'react-bootstrap';

import { useHistory, useParams } from 'react-router-dom';

// Assets Include
import '../../common/topbar/topbar.scss';
import './SearchList.scss';
import './Filter.css';

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
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';





const storeImages = require.context('../../../assets/front/images/store', true);
const profileImages = require.context('../../../assets/users/images/profile', true);






function FrontSearchListCtrl() {

    const query = new URLSearchParams(window.location.search);
    const history = useHistory();

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
    const [currentList, setCurrentList] = useState(null);

    const { searchList, vat, loading } = useSelector(state => state.search);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);

    useEffect(() => {


        dispatch(searchListing({
            key: key,
            storage_type: query.get('storage') || "",
            features_type: query.get('features') || "",
            price: query.get('price') ? true : "",
            minPrice: query.get('price') ? +query.get('price').split(",")[0] : "",
            maxPrice: query.get('price') ? +query.get('price').split(",")[1] : "",
            size: query.get('size') ? true : "",
            minSize: query.get('size') ? +query.get('size').split(",")[0] : "",
            maxSize: query.get('size') ? +query.get('size').split(",")[1] : ""

        }));


        dispatch(getCoordinates({
            address: key
        }));
    }, [key, query.get('storage'), query.get('features'), query.get('price'), query.get('size')]);


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


                                    <PriceFilter />

                                    <SizeFilter />

                                    <FeaturesFilter />


                                    <Button variant="outline-warning" size="sm" onClick={() => history.push(`/search/${key}`)}>Reset Filters</Button>{' '}
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
                                        <div className="col-sm-6 col-xl-4 SearchListPlace_col" key={details.store_id} onMouseOver={() => setCurrentList(details)}>
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
                                                                            {details.store_cost}<span > Lei</span> <small>
                                                                                / month</small>
                                                                        </strong>

                                                                    }
                                                                </div>
                                                                <div className="px-0">
                                                                    <strong>{details.store_size}<small> {details.measurement_unit.mu_name}<sup>2</sup> </small> </strong>
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
                            <GoogleMapListing list={currentList} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FrontSearchListCtrl;
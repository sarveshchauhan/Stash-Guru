import React, { useEffect } from 'react'
import { Row, Col, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nearbyListing } from '../../../redux';
import { useHistory, useParams } from 'react-router';


function OtherListing() {

    const dispatch = useDispatch();
    const { searchId } = useParams();
    const { nearbyList, nearbyError } = useSelector(state => state.search);
    const history = useHistory();


    useEffect(() => {

        dispatch(nearbyListing({
            id: searchId
        }))

    }, [dispatch]);


    return (

        <div className="details_content">
            <h5 className="mt-4 sm2_hdng">Other Listings At This Location</h5>

            {
                nearbyError && <Alert variant="danger">{JSON.stringify(nearbyError)}</Alert>
            }


            <Row>

                {
                    nearbyList && Array.isArray(nearbyList) && nearbyList.map((list) => (

                        <Col sm={4} style={relatedStoreStyle} onClick={() => history.push(`/search-details/${list.store_id}`)}>
                            {/* <div className="SearchListPlace_card">
                                <img width="100%" src={list.images[0].si_path} alt="" />
                                <div className="SearchListPlace_card_body">
                                    <div className="SearchListPlaceUserArea">
                                        <img width="100%" className="profileImg" src={list.u_pic} alt="" />
                                        <span className="profileName">{list.u_name}</span>
                                    </div>

                                    <div className="SearchListPlaceAreaPlace">
                                        <div>
                                            <Button size="sm">{list.st_name}</Button>
                                            <span><i className="fa fa-map-marker"></i> {list.store_city} </span>
                                        </div>
                                    </div>

                                    <div className="SearchListPlaceAreaCost">
                                        <strong>{list.store_cost} Lei  </strong>
                                        <span>&nbsp;{list.store_size} {list.measurement_unit.mu_name}<sup>2</sup></span>
                                    </div>
                                </div>
                            </div> */}

                            <div className="SearchListPlace_card">
                                <a href="">
                                    <img width="100%" src={list.images[0].si_path} alt="" />
                                    <div className="SearchListPlace_card_body">
                                        <div className="SearchListPlaceUserArea">
                                            <div className>
                                                <b className="PlaceAreaTitle d-block">Warehouse divesh...</b>
                                            </div>
                                        </div>
                                        <div className="SearchListPlaceUserArea">
                                            <img width="100%" className="profileImg" src={list.u_pic} alt="" />
                                            <div className>
                                                <span className="profileName">{list.u_name}</span>
                                            </div>
                                        </div>
                                        <div className="SearchListPlaceAreaPlace justify-content-between">
                                            <span className="FrPlace" variant="no_bg">
                                                <img width="100%" src="https://sgapi.dizicraft.com/storagetype/warehouse-g.svg" alt="" /> {list.st_name}
                                            </span>
                                            <div>
                                                <span><i className="fa fa-map-marker"></i> {list.store_city} </span>
                                            </div>
                                            

                                        </div>
                                        <div className="SearchListPlaceAreaCost">
                                            <div className="d-flex-wrap justify-content-between w-100 mx-0">
                                                <div className="px-0">
                                                    <strong>{list.store_cost} <span> Lei</span> <small>/ month</small></strong>
                                                </div>
                                                <div className="px-0">
                                                    <strong>{list.store_size}<small> {list.measurement_unit.mu_name}<sup>2</sup> </small> </strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                    ))
                }

            </Row>
            <hr />
        </div>


    )
}

export default OtherListing


const relatedStoreStyle = {
    cursor: "pointer"
}


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

                        <Col sm={6} style={relatedStoreStyle} onClick={() => history.push(`/search-details/${list.store_id}`)}>
                            <div className="SearchListPlace_card">
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


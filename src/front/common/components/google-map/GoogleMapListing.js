import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, updateCoordinatesClient } from '../../../../redux';
import ListYourSpaceImage from '../../../../assets/front/images/icons/warehouse.svg';

import dummy1 from '../../../../assets//users/images/dummy/dummy1.jpg';
import { LIST_DETAIL_SUCCESS } from '../../../../redux/listspace/listspaceTypes';
import { config } from '../../../../config/config';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

export function GoogleMap(props) {

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const { coordinates } = useSelector(state => state.listspace);

    const { searchList, vat, loading } = useSelector(state => state.search);

    const initialPopupDetail = {
        lat: "",
        lng: "",
        title: "",
        address: ""
    };

    const [popupDetail, setPopupDetail] = useState(initialPopupDetail);


    useEffect(() => {

        if (props.list) {
            handleToggleOpen(null, props.list);
        }
        else {

        }

    }, [props]);


    const handleToggleOpen = (arg, listDetail) => {

        // console.log(arg);


        setPopupDetail({
            lat: listDetail.store_lat,
            lng: listDetail.store_long,
            title: listDetail.store_title,
            address: listDetail.store_address1 + ", " + listDetail.store_address2 + ", " + listDetail.store_city,
            image: listDetail.images && listDetail.images.length > 0 ? listDetail.images[0].si_path : "",
            cost: listDetail.store_cost,
            size: listDetail.store_size,
            unit: listDetail.measurement_unit.mu_name
        })

        setIsOpen(true);
    }

    const handleToggleClose = () => {
        setPopupDetail(initialPopupDetail);
        setIsOpen(false);
    }




    return (
        <>
            <Map
                google={props.google}
                style={mapStyles}
                zoom={10}
                center={{
                    lat: coordinates ? coordinates.latitude : 28.535601,
                    lng: coordinates ? coordinates.longitude : 77.209084
                }}
            >


                {
                    searchList && Array.isArray(searchList) && searchList.map((list, index) => (

                        <Marker key={index}

                            icon={{
                                url: list.st_map,
                                anchor: new props.google.maps.Point(48, 48),
                                scaledSize: new props.google.maps.Size(48, 48)
                            }}
                            // onMouseover={(e) => handleToggleOpen(e, list)}
                            // onMouseout={(e) => handleToggleClose()}
                            onClick={(e) => handleToggleOpen(e, list)}
                            name={'malviya nagar'}
                            position={{
                                lat: list.store_lat,
                                lng: list.store_long
                            }}
                        />

                    ))
                }




                <InfoWindow
                    position={{ lat: popupDetail.lat, lng: popupDetail.lng }}
                    visible={isOpen}>
                    <img src={popupDetail.image} />
                    <div className="gm_style_iw_body">
                        <h5>{popupDetail.title}</h5>
                        <div className="w-100 d-flex-wrap justify-content-around">
                            <div>
                                <strong>{popupDetail.cost}<span> Lei</span> <br />
                                    <small>month</small>
                                </strong>
                            </div>
                            <div>
                                <strong>{popupDetail.size}<br />
                                    <small>{popupDetail.unit}<sup>2</sup></small>
                                </strong>
                            </div>
                        </div>
                    </div>

                    {/* <p><strong>Address:</strong> {popupDetail.address} </p> */}
                </InfoWindow>


            </Map>
        </>
    );

}

export default GoogleApiWrapper({
    apiKey: config.googleMapApiKey
})(GoogleMap);
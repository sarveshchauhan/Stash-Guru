import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, updateCoordinatesClient } from '../../../../redux';

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

    const handleToggleOpen = (arg, listDetail) => {

        // console.log(arg);


        setPopupDetail({
            lat: listDetail.store_lat,
            lng: listDetail.store_long,
            title: listDetail.store_title,
            address: listDetail.store_address1 + ", " + listDetail.store_address2 + ", " + listDetail.store_city
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
                    <h5>{popupDetail.title}</h5>
                    {/* <p><strong>Address:</strong> {popupDetail.address} </p> */}
                </InfoWindow>


            </Map>
        </>
    );

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB103Ei2FmqUW2l1PHQAaf2u4xo3RzkEkg'
})(GoogleMap);
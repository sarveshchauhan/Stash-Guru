import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, updateCoordinatesClient } from '../../../../redux';
import { config } from '../../../../config/config';
// import logo from '../../../../assets/front/images/colored_logo.svg';

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


    const handleToggleOpen = (arg) => {

        console.log(arg);

        setIsOpen(true);
    }

    const handleToggleClose = () => {
        setIsOpen(false);
    }

    const onMarkerDragEnd = (coord) => {

        // alert('executed');

        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        dispatch(updateCoordinatesClient({
            latitude: lat,
            longitude: lng
        }));

        dispatch(getAddress({
            lat: lat,
            long: lng
        }));


    }


    return (
        <>
            <Map
                google={props.google}
                style={mapStyles}
                zoom={14}
                center={{
                    lat: coordinates && coordinates.latitude ? coordinates.latitude : 28.535601,
                    lng: coordinates && coordinates.longitude ? coordinates.longitude : 77.209084
                }}
            >

                {
                    coordinates && coordinates.latitude && coordinates.longitude && <Marker key="marker_1"
                        onClick={handleToggleOpen}
                        name={'malviya nagar'}
                        position={{
                            lat: coordinates.latitude,
                            lng: coordinates.longitude
                        }}
                        draggable={true}
                        onDragend={(t, map, coord) => onMarkerDragEnd(coord)}



                    />
                }


                <InfoWindow
                    position={{ lat: coordinates.latitude, lng: coordinates.longitude }}
                    visible={isOpen}>
                    {/* <small>{props.addressName}</small> */}
                </InfoWindow>


            </Map>
        </>
    );

}

export default GoogleApiWrapper({
    apiKey: config.googleMapApiKey
})(GoogleMap);
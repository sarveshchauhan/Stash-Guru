import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { config } from '../../../../config/config';



const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

export function GoogleMapPreview(props) {




    return (
        <>
            <Map
                google={props.google}
                style={mapStyles}
                zoom={14}
                center={{
                    lat: props && props.latitude ? props.latitude : 28.535601,
                    lng: props && props.longitude ? props.longitude : 77.209084
                }}
            >

                {
                    props && props.latitude && props.longitude && <Marker key="marker_1"
                        name={'malviya nagar'}
                        position={{
                            lat: props.latitude,
                            lng: props.longitude
                        }}

                    />
                }




            </Map>
        </>
    );

}

export default GoogleApiWrapper({
    apiKey: config.googleMapApiKey
})(GoogleMapPreview);
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import logo from '../../../../assets/front/images/colored_logo.svg';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

export class GoogleMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    handleToggleOpen = (arg) => {

        console.log(arg);

        this.setState({
            isOpen: true
        });
        console.log('hello');
    }

    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {

        return (
            <>
                <Map
                    google={this.props.google}
                    style={mapStyles}
                    zoom={14}
                    center={{
                        lat: this.props.lat ? this.props.lat : 28.535601,
                        lng: this.props.lng ? this.props.lng : 77.209084
                    }}
                >

                    {
                        this.props.lat && this.props.lng && <Marker key="marker_1"
                            onClick={this.handleToggleOpen}
                            name={'malviya nagar'}
                            position={{
                                lat: this.props.lat,
                                lng: this.props.lng
                            }}

                        />
                    }





                    {/* <Marker key="marker_2"
                        onClick={() => this.handleToggleOpen()}
                        name={'lado sarai'}
                        position={{
                            lat: 28.530090,
                            lng: 77.193481
                        }}
                    /> */}



                    <InfoWindow
                        position={{ lat: this.props.lat, lng: this.props.lng }}
                        visible={this.state.isOpen}>
                        <small>{this.props.addressName}</small>
                    </InfoWindow>
                </Map>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB103Ei2FmqUW2l1PHQAaf2u4xo3RzkEkg'
})(GoogleMap);
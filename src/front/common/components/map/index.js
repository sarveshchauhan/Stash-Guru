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

export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

  }

  handleToggleOpen = () => {

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
            lat: 28.535601,
            lng: 77.209084
          }}
        >
          <Marker key="marker_1"
            onClick={() => this.handleToggleOpen()}
            name={'malviya nagar'}
            position={{
              lat: 28.535601,
              lng: 77.209084
            }}

          />
          <Marker key="marker_2"
            onClick={() => this.handleToggleOpen()}
            name={'lado sarai'}
            position={{
              lat: 28.530090,
              lng: 77.193481
            }}
          />

          <InfoWindow
            position={{ lat: 28.535601, lng: 77.209084 }}
            visible={this.state.isOpen}>
            <small>Click on any of the markers to display an additional info.</small>
          </InfoWindow>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB103Ei2FmqUW2l1PHQAaf2u4xo3RzkEkg'
})(MapContainer);
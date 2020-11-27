import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { config } from '../../../config/config';



function GoogleSearch() {
    return (
        <div>
            <GooglePlacesAutocomplete apiKey={config.googleMapApiKey} />
        </div>
    )
}

export default GoogleSearch

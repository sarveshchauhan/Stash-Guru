import React, { useEffect, useState } from 'react'
import { config } from '../../../config/config';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

function GoogleSearch() {

    const [address, setAddress] = useState("");
    const { key } = useParams();


    useEffect(() => {
        setAddress(key);
    }, [key]);

    const handleChange = address => {
        setAddress(address);
    };

    const handleSelect = address => {

        setAddress(address);

        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    const search = () => {
        window.location.href = `/search/${address}`;
    }



    return (
        <>
            <div>

                <PlacesAutocomplete
                    value={address}
                    onChange={handleChange}
                    onSelect={handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion, index) => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            key={index}
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>

            </div>

            <Button variant="success" onClick={search}>
                <i className="fa fa-search"></i>
            </Button>

        </>
    )
}

export default GoogleSearch

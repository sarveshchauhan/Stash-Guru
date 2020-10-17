import React from 'react';
import {InputGroup,Button,FormControl} from 'react-bootstrap';

function SearchComponent(){
    return(
        <>
        
        <InputGroup className="location_search_bar">
            <InputGroup.Prepend>
                <InputGroup.Text>
                <i className="fa fa-map-marker"></i>
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" placeholder="Your Location" />
            <InputGroup.Append>
                <Button variant="success">
                    <i className="fa fa-search"></i>
                </Button>
            </InputGroup.Append>
        </InputGroup>
        </>
    )
}

export default SearchComponent;
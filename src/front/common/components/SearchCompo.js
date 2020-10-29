import React, {useState, useEffect} from 'react';
import {InputGroup,Button,FormControl,Form} from 'react-bootstrap';

function SearchComponent(){

    const [txtSearch, setTextSearch] = useState(null);

    const [errorSearch, setErrorSearch] = useState(null);

    const handleFormField = (e) => {
        switch(e.target.name){
            case 'txtSearch':
                setTextSearch(e.target.value);
                if (!e.target.value) {
                    setErrorSearch("Please enter search text");
                }
                else {
                    setErrorSearch("");
                }
                break;
            default:
                break;
        }
    }

    const validateForm = () => {
        let error = false;

        if (!txtSearch) {
            error = true;
            setErrorSearch("Please enter search text");
        }

        return error;
    }

    const hangleSubmit = (e) => {
        e.preventDefault();
        if (!errorSearch && !validateForm()) {
            window.location.href = `/search/${txtSearch}`;
        }
    }

    return(
        <>
            <Form onSubmit={hangleSubmit}>
                <InputGroup className="location_search_bar">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                        <i className="fa fa-map-marker"></i>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="basic-addon1" isInvalid={errorSearch} name="txtSearch" value={txtSearch} onChange={handleFormField} onBlur={handleFormField} placeholder="Your Location" />
                    <InputGroup.Append>
                        <Button variant="success" type="submit">
                            <i className="fa fa-search"></i>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                {
                    errorSearch && <span className="error_msg text-danger">
                        {errorSearch}
                    </span>
                }
            </Form>            
        </>
    )
}

export default SearchComponent;
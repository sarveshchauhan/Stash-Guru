import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Dropdown } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './Filter.css';


function SizeFilter() {

    const query = new URLSearchParams(window.location.search);
    const [value, setValue] = useState([0, 1000]);
    const history = useHistory();
    const { key } = useParams();

    useEffect(() => {

        if (query.get('size')) {
            setValue(query.get('size').split(","));
        }

    }, [query.get('size')]);


    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });
    const classes = useStyles();

    function valuetext(value) {
        return `${value}`;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const applySearch = () => {

        // const minPrice = value[0]; 
        // const maxPrice = value[1]; 

        history.push(`/search/${key}?storage=${query.get('storage') || ""}&features=${query.get('features') || ""}&price=${query.get("price") || ""}&size=${value.join(',')}`);

    }


    return (
        <>
            <Dropdown className="d-inline-block">
                <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type" className={query.get('size') ? "filter-btn-selected" : ""}>
                    Size
                </Dropdown.Toggle>
                <Dropdown.Menu className="priceSizeRS_card">
                    <div className="priceSizeRS_card_body">
                        <div className={classes.root}>
                            <Typography className="mb-5">Space Size</Typography>
                            <Slider value={value} max={1000} min={0} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="discrete-slider-always" getAriaValueText={valuetext} valueLabelDisplay="on"
                            />
                        </div>

                        <div>
                            <Button className="btn-sm float-right mb-2" variant="success" onClick={() => applySearch()}>Apply</Button>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default SizeFilter

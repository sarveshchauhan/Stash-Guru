import React, { useEffect, useState } from 'react'
import { Dropdown, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { getFeatures, searchListing } from '../../../redux';

function FeaturesFilter() {

    const { key } = useParams();
    const { featuresLoading, featuresList } = useSelector(state => state.listspace);
    const dispatch = useDispatch();

    const [features, setFeatures] = useState([]);


    useEffect(() => {

        dispatch(getFeatures());

    }, [dispatch]);


    useEffect(() => {

        dispatch(searchListing({
            key: key,
            storage_type: features.join(","),
            features_type: "",
            price: ""
        }));

    }, [features]);

    const onChecked = (e, feature_id) => {

        if (e.target.checked) {
            setFeatures([...features, feature_id]);
        } else {
            setFeatures(features.filter((fs) => {
                if (+fs !== +feature_id) {
                    return fs;
                }
            }))
        }

    }


    return (
        <>
            {
                featuresLoading ? <Spinner animation="border" variant="success" className="mt-2"></Spinner> : <Dropdown className="d-inline-block">
                    <Dropdown.Toggle variant="outline-success" size="sm" id="StorageType">
                        Features
                </Dropdown.Toggle>


                    <Dropdown.Menu className="switch_dropdown_menu">
                        <div className="switch_dropdown_row">

                            {
                                featuresList && featuresList.map((fs) => (
                                    <div className="switch_col" key={fs.fs_id}>
                                        <label class="switch">
                                            <input type="checkbox" onChange={(e) => onChecked(e, fs.fs_id)} />
                                            <span class="slider round"></span>
                                        </label>
                                        <span className="switch_label_name">{fs.fs_name}</span>
                                    </div>
                                ))
                            }


                        </div>
                    </Dropdown.Menu>

                </Dropdown>


            }


        </>
    )
}

export default FeaturesFilter

import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import { getFeatures, searchListing } from '../../../redux';
import './Filter.css';


function FeaturesFilter() {

    const history = useHistory();

    const query = new URLSearchParams(window.location.search);
    const { key } = useParams();
    const { featuresLoading, featuresList } = useSelector(state => state.listspace);
    const dispatch = useDispatch();

    const [features, setFeatures] = useState([]);


    useEffect(() => {

        dispatch(getFeatures());

    }, [dispatch]);


    useEffect(() => {

        if (query.get('features')) {

            setFeatures(query.get('features').split(','));
        }

    }, [query.get('features')]);



    // useEffect(() => {

    //     if (features.length > 0) {
    //         history.push(`/search/${key}?storage=${query.get('storage') ? query.get('storage') : ""}&features=${features.join(",")}&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
    //     }
    //     else {
    //         history.push(`/search/${key}?storage=${query.get('storage') ? query.get('storage') : ""}&features=&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
    //     }


    // }, [features]);


    const applySearch = () => {


        if (features.length > 0) {
            history.push(`/search/${key}?storage=${query.get('storage') ? query.get('storage') : ""}&features=${features.join(",")}&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
        }
        else {
            history.push(`/search/${key}?storage=${query.get('storage') ? query.get('storage') : ""}&features=&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
        }

    }


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


    const isFeatureExist = (f_id) => {
        let index = features.find(i => +i === +f_id);
        if (index) {
            return true;
        }
        return false;
    }


    return (
        <>
            {
                featuresLoading ? <Spinner animation="border" variant="success" className="mt-2"></Spinner> : <Dropdown className="d-inline-block">
                    <Dropdown.Toggle variant="outline-success" size="sm" id="StorageType" className={query.get('features') ? "filter-btn-selected" : ""}>
                        Features
                </Dropdown.Toggle>


                    <Dropdown.Menu className="switch_dropdown_menu">
                        <div>
                            <div className="switch_dropdown_row">
                                {
                                    featuresList && featuresList.map((fs) => (
                                        <div className="switch_col" key={fs.fs_id}>
                                            <label class="switch">
                                                <input type="checkbox" checked={isFeatureExist(fs.fs_id)} onChange={(e) => onChecked(e, fs.fs_id)} />
                                                <span class="slider round"></span>
                                            </label>
                                            <span className="switch_label_name">{fs.fs_name}</span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="apply-div">
                                <Button className="btn-sm float-right mr-2" variant="success" onClick={() => applySearch()}>Apply</Button>
                            </div>


                        </div>
                    </Dropdown.Menu>

                </Dropdown>


            }


        </>
    )
}

export default FeaturesFilter

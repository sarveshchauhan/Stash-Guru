import React, { useEffect, useState } from 'react'
import { Dropdown, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSpaceType, searchListing } from '../../../redux';

function StorageTypeFilter() {

    const { key } = useParams();
    const { spaceTypeList, spaceTypeListLoading } = useSelector(state => state.listspace);
    const dispatch = useDispatch();


    const [spaceTypes, setSpaceTypes] = useState([]);


    useEffect(() => {

        dispatch(getSpaceType());

    }, [dispatch]);


    useEffect(() => {

        dispatch(searchListing({
            key: key,
            storage_type: spaceTypes.join(","),
            features_type: "",
            price: ""
        }));

    }, [spaceTypes]);

    const onChecked = (e, st_id) => {

        if (e.target.checked) {
            setSpaceTypes([...spaceTypes, st_id]);
        } else {
            setSpaceTypes(spaceTypes.filter((st) => {
                if (+st !== +st_id) {
                    return st;
                }
            }))
        }

    }

    return (
        <>

            {
                spaceTypeListLoading ? <Spinner animation="border" variant="success" className="mt-2"></Spinner> : <Dropdown className="d-inline-block">
                    <Dropdown.Toggle variant="outline-success" size="sm" id="StorageType">
                        Storage Type
                </Dropdown.Toggle>


                    <Dropdown.Menu className="switch_dropdown_menu">
                        <div className="switch_dropdown_row">

                            {
                                spaceTypeList && spaceTypeList.map((st) => (
                                    <div className="switch_col" key={st.st_id}>
                                        <label class="switch">
                                            <input type="checkbox" onChange={(e) => onChecked(e, st.st_id)} />
                                            <span class="slider round"></span>
                                        </label>
                                        <span className="switch_label_name">{st.st_name}</span>
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

export default StorageTypeFilter

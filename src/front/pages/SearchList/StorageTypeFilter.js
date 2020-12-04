import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getSpaceType, searchListing } from '../../../redux';
import './Filter.css';



function StorageTypeFilter() {


    const query = new URLSearchParams(window.location.search);

    const history = useHistory();
    const { key } = useParams();
    const { spaceTypeList, spaceTypeListLoading } = useSelector(state => state.listspace);
    const dispatch = useDispatch();


    const [spaceTypes, setSpaceTypes] = useState([]);


    useEffect(() => {

        dispatch(getSpaceType());

    }, [dispatch]);


    useEffect(() => {

        if (query.get('storage')) {

            setSpaceTypes(query.get('storage').split(','));
        }

    }, [query.get('storage')]);

    // useEffect(() => {

    //     if (spaceTypes.length > 0) {
    //         history.push(`/search/${key}?storage=${spaceTypes.join(",")}&features=${query.get('features') ? query.get('features') : ""}&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
    //     }
    //     else {
    //         history.push(`/search/${key}?storage=&features=${query.get('features') ? query.get('features') : ""}&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
    //     }

    // }, [spaceTypes]);


    const applySearch = () => {

        if (spaceTypes.length > 0) {
            history.push(`/search/${key}?storage=${spaceTypes.join(",")}&features=${query.get('features') ? query.get('features') : ""}&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
        }
        else {
            history.push(`/search/${key}?storage=&features=${query.get('features') ? query.get('features') : ""}&price=${query.get('price') || ""}&size=${query.get('size') || ""}`);
        }

    }

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

    const isSpaceTypeExists = (st_id) => {
        let index = spaceTypes.find(i => +i === +st_id);
        if (index) {
            return true;
        }
        return false;
    }

    return (
        <>

            {
                spaceTypeListLoading ? <Spinner animation="border" variant="success" className="mt-2"></Spinner> : <Dropdown className="d-inline-block">
                    <Dropdown.Toggle variant="outline-success" size="sm" id="StorageType" className={query.get('storage') ? "filter-btn-selected" : ""}>
                        Storage Type
                </Dropdown.Toggle>


                    <Dropdown.Menu className="switch_dropdown_menu">

                        <div>
                            <div className="switch_dropdown_row">
                                {
                                    spaceTypeList && spaceTypeList.map((st) => (
                                        <div className="switch_col" key={st.st_id}>
                                            <label class="switch">
                                                <input type="checkbox" checked={isSpaceTypeExists(st.st_id)} onChange={(e) => onChecked(e, st.st_id)} />
                                                <span class="slider round"></span>
                                            </label>
                                            <span className="switch_label_name">{st.st_name}</span>
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

export default StorageTypeFilter

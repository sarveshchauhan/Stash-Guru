import React, { useEffect, useState } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSpaceType, stepOneSave } from '../../../redux/listspace/listspaceActions';
import GoogleSearchListing from '../../common/components/GoogleSearchListing';


function StepOneForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { spaceTypeList, stepOne, spaceTypeListLoading } = useSelector(state => state.listspace);


    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");
    const [spaceType, setSpaceType] = useState("");
    const [spaceTypeError, setSpaceTypeError] = useState("");

    // useEffect(() => {

    //     if (stepOne) {
    //         setLocation(stepOne.location);
    //         setSpaceType(stepOne.spaceType);
    //     }

    // }, [stepOne]);


    useEffect(() => {

        dispatch(getSpaceType());

    }, [dispatch])

    useEffect(() => {

        if (spaceTypeList && Array.isArray(spaceTypeList) && spaceTypeList.length > 0) {
            setSpaceType(spaceTypeList[0].st_id);
        }

    }, [spaceTypeList]);


    const handleFormFields = (e) => {

        let error = false;
        setLocationError("");
        setSpaceTypeError("");


        switch (e.target.name) {

            case "location":
                if (!location) {
                    error = true;
                    setLocationError("Location is required");
                }
                else {
                    setLocationError("");
                }

            case "spaceType":
                if (!spaceType) {
                    error = true;
                    setSpaceTypeError("Type is required");
                }
                else {
                    setSpaceTypeError("");
                }

                return error;

        }




    }

    const validateFields = () => {

        let error = false;

        if (!location) {
            error = true;
            setLocationError("Location is required");
        }
        else {
            setLocationError("");
        }

        if (!spaceType) {
            error = true;
            setSpaceTypeError("Type is required");
        }
        else {
            setSpaceTypeError("");
        }

        return error;

    }


    const submitForm = (e) => {
        e.preventDefault();

        if (!validateFields()) {

            dispatch(stepOneSave({
                location: location,
                spaceType: spaceType
            }))

            history.push('/create-your-list');

        }

    }


    return (
        <>

            {
                spaceTypeListLoading ? <div className="text-center"><Spinner animation="border" variant="success"></Spinner></div> :
                    <Form onSubmit={submitForm}>
                        <h5 className="pb-4">Lorem ipsum dolor sit amet</h5>
                        <Form.Group className="custom_select" style={{ height: '48px' }}>
                            <Form.Control as="select" name="spaceType" value={spaceType} onChange={(e) => setSpaceType(e.target.value)} onBlur={handleFormFields}>

                                {
                                    spaceTypeList && Array.isArray(spaceTypeList) && spaceTypeList.map((st, index) => (
                                        <option key={index} value={st.st_id}>{st.st_name}</option>
                                    ))
                                }

                            </Form.Control>

                            {
                                spaceTypeError && <small className="text-danger">
                                    {spaceTypeError}
                                </small>
                            }



                        </Form.Group>

                        <Form.Group className="my_form_control_styles">

                            <GoogleSearchListing />
                            {/* <Form.Control type="text" placeholder="Your Location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} onBlur={handleFormFields} /> */}

                            {
                                locationError && <small className="text-danger">
                                    {locationError}
                                </small>
                            }

                        </Form.Group>

                        <Button variant="success" type="submit" className="btn-block mt-4">List your space</Button>
                    </Form>

            }


        </>
    )
}

export default StepOneForm

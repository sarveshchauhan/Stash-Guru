import React, { useEffect, useState } from 'react'
import { Form, Button, Spinner, Alert, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCoordinates, stepTwoSave } from '../../../redux';
import Swal from 'sweetalert2';



function ManualAddressForm(props) {

    const dispatch = useDispatch();
    const { coordinates, manualCoordinates, coordinatesError, coordinatesLoading, stepTwo } = useSelector(state => state.listspace);
    const { county, locality, postcode, state, state_district, road } = useSelector(state => state.listspace.addressData);

    const history = useHistory();


    const [house_no, set_house_no] = useState("");
    const [house_no_error, set_house_no_error] = useState("");

    const [address1, set_address1] = useState("");
    const [address1_error, set_address1_error] = useState("");


    const [address2, set_address2] = useState("");
    const [address2_error, set_address2_error] = useState("");


    const [city, set_city] = useState("");
    const [city_error, set_city_error] = useState("");

    const [postal_code, set_postal_code] = useState("");
    const [postal_code_error, set_postal_code_error] = useState("");

    const [showAddressForm, setShowAddressForm] = useState(false);


    useEffect(() => {

        setShowAddressForm(props.showManualForm);

    }, [props.showManualForm]);


    useEffect(() => {

        if (house_no) {
            setShowAddressForm(true);
        }

    }, [house_no]);


    useEffect(() => {

        if (road) {
            set_address1(road);
        }

        if (county) {
            set_address1(county);
        }

        if (locality) {
            set_address2(locality);
        }

        if (postcode) {
            set_postal_code(postcode);
        }

        if (state_district) {
            set_city(state_district);
        }

        if (state) {
            set_city(state);
        }

    }, [county, locality, postcode, state, state_district]);

    useEffect(() => {

        if (stepTwo) {

            set_house_no(stepTwo.house_no);
            set_address1(stepTwo.address1);
            set_address2(stepTwo.address2);
            set_city(stepTwo.city);
            set_postal_code(stepTwo.postal_code);

        }

    }, [stepTwo]);



    const validateField = (field) => {

        switch (field) {
            case "house_no":
                if (!house_no) {
                    set_house_no_error("Street/House no is required!");
                }
                else {
                    set_house_no_error("");
                }
                break;

            case "address1":
                if (!address1) {
                    set_address1_error("Address 1 is required!");
                }
                else {
                    set_address1_error("");
                }

            case "city":
                if (!city) {
                    set_city_error("City is required!");
                }
                else {
                    set_city_error("");
                }

            case "postal_code":
                if (!postal_code) {
                    set_postal_code_error("Postal code is required!");
                }
                else {
                    set_postal_code_error("");
                }

            default:
                break;
        }



    }


    const onSubmitForm = (e) => {

        e.preventDefault();

        if (!showAddressForm) {

            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to save this address or Want to enter it manually?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#4fd78a',
                confirmButtonText: 'Enter manually',
                cancelButtonText: 'Save'
            }).then((result) => {

                console.log('result is');
                console.log(result);


                if (result.isConfirmed) {


                    setShowAddressForm(true);


                }
                else {


                    //as it is save the address
                    if (result.dismiss === "cancel") {


                        let saveArg = {
                            house_no: "",
                            address1: address1,
                            address2: address2,
                            city: city,
                            postal_code: postal_code,
                            lat: coordinates.latitude,
                            lng: coordinates.longitude

                        };

                        dispatch(stepTwoSave(saveArg, "/create-your-list-step3"));

                        // dispatch(getCoordinates({
                        //     address: full_address
                        // }, true, saveArg));

                    }


                }
            })


        }
        else {

            validateField("house_no");
            validateField("address1");
            validateField("city");
            validateField("postal_code");

            if (house_no && address1 && city && postal_code) {

                let full_address = `${house_no}, ${address1}, `;

                if (address2) {
                    full_address += `${address2},`;
                }

                full_address += `${city}, ${postal_code}`;



                let saveArg = {
                    house_no: house_no,
                    address1: address1,
                    address2: address2,
                    city: city,
                    postal_code: postal_code,
                    lat: coordinates.latitude,
                    lng: coordinates.longitude

                };

                dispatch(getCoordinates({
                    address: full_address
                }, true, saveArg));

                return true;


            }




        }


    }


    return (
        <>
            <Form className="pb-5" onSubmit={onSubmitForm}>

                <div hidden={!showAddressForm}>

                    <h2>Add Address</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Street/House Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Street/House Number" name="house_no" value={house_no} onChange={(e) => set_house_no(e.target.value)} onBlur={() => validateField("house_no")} />

                        {
                            house_no_error && <small className="text-danger">{house_no_error}</small>
                        }

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Address1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address1" name="address1" value={address1} onChange={(e) => set_address1(e.target.value)} onBlur={() => validateField("address1")} />
                        {
                            address1_error && <small className="text-danger">{address1_error}</small>
                        }


                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Address2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address2" name="address2" value={address2} onChange={(e) => set_address2(e.target.value)} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="formBasicEmail">
                            <Form.Label>City/Town</Form.Label>
                            <Form.Control type="text" placeholder="Enter City/Town" name="city" value={city} onChange={(e) => set_city(e.target.value)} onBlur={() => validateField("city")} />
                            {
                                city_error && <small className="text-danger">{city_error}</small>
                            }

                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="formBasicPassword">
                            <Form.Label>Post Code</Form.Label>
                            <Form.Control type="text" placeholder="Post Code" name="postal_code" value={postal_code} onChange={(e) => set_postal_code(e.target.value)} onBlur={() => validateField("postal_code")} />

                            {
                                postal_code_error && <small className="text-danger">{postal_code_error}</small>
                            }
                        </Form.Group>
                    </Form.Row>

                </div>

                <Form.Group>
                    <Button variant="next" type="submit">
                        Next
                </Button>

                    {
                        coordinatesLoading && <> &nbsp; <Spinner variant="success" animation="border"></Spinner> </>
                    }

                </Form.Group>


                {
                    coordinatesError && <Alert variant="danger">{coordinatesError}</Alert>
                }

            </Form>
        </>
    )
}

export default ManualAddressForm

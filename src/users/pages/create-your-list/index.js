import React, { useEffect, useState } from 'react';
import { Col, Form, Row, InputGroup, FormControl, Button, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { MapContainer } from '../../../front/common/components/map';
import GoogleMap from '../../../front/common/components/google-map/GoogleMap';
import { getCoordinates } from '../../../redux';
import './createList.scss';
import ManualAddressForm from './ManualAddressForm';

function UserCreateYourListCtrl() {

    const dispatch = useDispatch();
    const { coordinates, coordinatesError, coordinatesLoading, stepOne } = useSelector(state => state.listspace);

    const [manually, setManually] = useState([!false]);
    const [search, setSearch] = useState("");
    const [addressName, setAddressName] = useState("");


    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");


    useEffect(() => {

        if (stepOne && stepOne.location) {
            setSearch(stepOne.location);
            setAddressName(stepOne.location);
            dispatch(getCoordinates({
                address: stepOne.location
            }));
        }

    }, [stepOne]);


    useEffect(() => {

        if (coordinates.latitude && coordinates.longitude) {
            setLat(coordinates.latitude);
            setLng(coordinates.longitude);
            setAddressName(search);
        }

    }, [coordinates]);


    useEffect(() => {

        if (coordinatesError) {
            setLat("");
            setLng("");
            setAddressName("");
        }

    }, [coordinatesError]);


    // useEffect(() => {

    //     document.getElementById("manualBtn").click();

    // }, [document]);


    const onSearchBtnClick = () => {

        // setLat(28.535601);
        // setLng(77.209084);



        dispatch(getCoordinates({
            address: search
        }));


    }



    return (
        <>
            <Container>
                <div className="create_your_list_area">
                    <Row>
                        <Col sm={5}>
                            <h2 className="bg_bld_txt zambezi_color">Create Your <span className="text_color_shamrock"> Listing</span> </h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed diam nonumy eirmod.</p>
                            <Form className="py-2">
                                <Form.Label>Add Your Location</Form.Label>
                                <InputGroup className="location_search_bar mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="">
                                            <i className="fa fa-map-marker"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder="Location" aria-label="Username" aria-describedby="" onChange={(e) => setSearch(e.target.value)} value={search} />
                                    <InputGroup.Append>
                                        <Button variant="success" id="searchBtn" onClick={onSearchBtnClick}>
                                            <i className="fa fa-search"></i>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>

                                {
                                    coordinatesLoading && <Spinner variant="success" animation="border"></Spinner>
                                }

                                {
                                    coordinatesError && <small className="text-danger">{coordinatesError}</small>
                                }



                                {/* <p>Can't find your address?
                                <span className="text_color_shamrock pl-2" style={{ cursor: 'pointer' }} id="manualBtn" onClick={() => setManually(!manually)}>Enter it manually.</span>
                                </p> */}



                            </Form>
                            <div className={`d-block`}>
                                <ManualAddressForm />
                            </div>
                        </Col>

                        <Col sm={7} style={{ maxHeight: "450px" }}>

                            <GoogleMap lat={lat} lng={lng} addressName={addressName} />

                        </Col>

                    </Row>


                    {/* <div className="create_your_list_map">

                    </div> */}


                </div>
            </Container>
        </>
    )
}


export default UserCreateYourListCtrl;
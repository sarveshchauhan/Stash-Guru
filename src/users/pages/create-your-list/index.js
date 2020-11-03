import React,{useState} from 'react';
import { Breadcrumb, Col, Form, Row,InputGroup,FormControl,Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './createList.scss';
import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import map from '../../../assets/front/images/dummy/map.jpg';

function UserCreateYourListCtrl(){
    const [manually, setManually] = useState([!false]);
    return(
        <>
        <Container>
            <div className="create_your_list_area">
                <Row>
                    <Col sm={5}>
                        <Breadcrumb>
                            <NavLink className="breadcrumb-item" to="/dashboard"><img src={B_home}/> Dashboard</NavLink>
                            <NavLink className="breadcrumb-item" to="/create-your-list"> Listing</NavLink>
                        </Breadcrumb>
                        <h2 className="bg_bld_txt zambezi_color">Create Your <span className="text_color_shamrock"> Listing</span> </h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br/> sed diam nonumy eirmod.</p>
                        <Form className="py-2">
                            <Form.Label>Add Your Location</Form.Label>
                            <InputGroup className="location_search_bar mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="">
                                        <i className="fa fa-map-marker"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="Location" aria-label="Username" aria-describedby="" value="E1 7AA" />
                                <InputGroup.Append>
                                    <Button  variant="success" >
                                    <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>

                            <p>Can't find your address? 
                                <span className="text_color_shamrock pl-2" style={{cursor:'pointer'}} onClick={() => setManually()}>Enter it manually.</span>
                            </p>
                        </Form>
                        <div className={manually ? "d-none" : "d-block"}>
                        <Form className="pb-5">
                            <h2>Add Address</h2>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Street/House Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Street/House Number" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Address1</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address1" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Address2</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address2" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>City/Town</Form.Label>
                                <Form.Control type="text" placeholder="Enter City/Town" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Post Code</Form.Label>
                                <Form.Control type="text" placeholder="Post Code" />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Add Address
                            </Button>
                        </Form>
                        </div>
                    </Col>
                </Row>
                <div className="create_your_list_map">
                    <div className="">
                        <img src={map}  alt="" />
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}


export default UserCreateYourListCtrl;
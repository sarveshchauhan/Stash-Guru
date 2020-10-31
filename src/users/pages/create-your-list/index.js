import React from 'react';
import { Breadcrumb, Col, Form, Row,InputGroup,FormControl,Button, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './createList.scss';
import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import map from '../../../assets/front/images/dummy/map.jpg';

function UserCreateYourListCtrl(){
    return(
        <>
        <Container>
            <div className="create_your_list_area">
                <Row>
                    <Col sm={6}>
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
                            <p>Can't find your address? <a className="text_color_shamrock" href="#">Enter it manually.</a>
                            </p>
                        </Form>
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
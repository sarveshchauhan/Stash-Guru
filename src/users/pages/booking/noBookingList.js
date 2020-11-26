import React from 'react';
import { Row, Col, Button,Form,InputGroup,FormControl, } from 'react-bootstrap';
import './booking.scss';
import nothing_here from '../../../assets/users/images/img/nothing_here.png';

function UserNoBookingListCtrl(){
    return(
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">Bookings</h2>
                    <div className="user_page_hdng_left">
                        <Form className="d-inline-block float-left" style={{maxWidth:'350px'}}>
                            <InputGroup>
                                <FormControl placeholder="Search Booking" aria-label="Search Booking" aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                    <Button variant="success" className="px-3">
                                        <i className="fa fa-search"></i>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        <Button variant="outline-success" className="ml-2" style={{minWidth:'150px'}}><i className="fa fa-filter" aria-hidden="true"></i> Filters</Button>
                    </div>
                </div>
            </div>

            <Row className="justify-content-center">
                <Col sm={12} className="text-center my-4">
                    <h2 className="m-0 text_hdng_h3">Nothing to see here!</h2>
                    <p className="m-0">
                        <small>Looks like you don't have any bookings yet.</small>
                    </p>
                    <Button variant="success" className="my-3 px-4">Find A Space <i className="fa fa-search" aria-hidden="true"></i></Button>
                </Col>
                <Col sm={12} sm={6} className="text-center mx-auto mb-4">
                    <img src={nothing_here} alt="noting to see here" />
                </Col>
            </Row>
        </>
    )
}

export default UserNoBookingListCtrl;
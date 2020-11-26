import React from 'react';
import { Button,Form,InputGroup,FormControl } from 'react-bootstrap';
import './booking.scss';


function UserBookingCtrl(){
    return(
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <div className="w-100 d-flex-wrap justify-content-between">
                    <h2 className="user_page_hdng_txt">Bookings</h2>
                    <div className="user_page_hdng_left">
                        <Form className="d-inline-block float-left" style={{width:'350px'}}>
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
        </>
    )
}

export default UserBookingCtrl;
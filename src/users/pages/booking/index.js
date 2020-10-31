import React from 'react';
import { Button,Form,Card } from 'react-bootstrap';
import './booking.scss';


function UserBookingCtrl(){
    return(
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">Booking</h2>
                <div className="d-inline-block user_page_hdng_left">
                    <Form className="d-inline-block float-left" style={{width:'150px'}}>
                        <Form.Group className="mb-0" controlId="" >
                            <Form.Control as="select">
                                <option>All</option>
                                <option>list1</option>
                                <option>list2</option>
                                <option>list3</option>
                                <option>list4</option>
                                <option>list5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Button className="float-left ml-2 btn-success" style={{minWidth:'150px'}}>+ New Listing</Button>
                </div>
            </div>
        </>
    )
}

export default UserBookingCtrl;
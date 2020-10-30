import React from 'react';
import { Button,Form } from 'react-bootstrap';


function UserListingtrl(){
    return(
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">Listings</h2>
                <div className="d-inline-block user_page_hdng_left">
                    <Form className="d-inline-block float-left" style={{width:'130px'}}>
                        <Form.Group className="mb-0" controlId="" >
                            <Form.Control as="select">
                                <option>All</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Button className="float-left ml-2" style={{width:'130px'}}>+ New Listing</Button>
                </div>
            </div>
        </>
    )
}

export default UserListingtrl;
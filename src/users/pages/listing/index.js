import React from 'react';
import { Button,Form,Card } from 'react-bootstrap';
import './listing.scss';
import SearchList1 from '../../../assets/users/images/dummy/SearchList1.jpg'


function UserListingtrl(){
    return(
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">Listings</h2>
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


            <div className="warning_strip">
                <div>
                    <p className="m-0"><i className="fa fa-exclamation-triangle pr-2"></i> Just a couple of steps, and you'll be set to accept bookings and receive payouts</p>
                </div>
                <Button className="btn btn-outline-white">Complete Setup</Button>
            </div>


            <Card className="listing_card listing_card_progress">
                <Card.Header className="listing_card_header">
                    <p><i className="fa fa-exclamation-circle pr-2"></i> Unfinished Listing</p>
                    <div className="listing_card_header_righr">
                        <Button className="btn_milky_grn mr-2">Finish Listing</Button>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-pencil-square-o"></i>
                            <br/> Edit
                        </span>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-eye"></i>
                            <br/> Preview
                        </span>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-th-list"></i>
                            <br/> Re-List
                        </span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="listing_card_body">
                        <div className="listing_img_area">
                            <img src={SearchList1}/>
                        </div>
                        <div className="listing_content_area">
                        <h6>In Progress</h6>
                        <h4>Storage + Desk + Storage-Crate + Pallet-Storage + Dcument-Storage + Workspace In Warehouse</h4>
                        <div className="listing_deal_area">
                            <h5>
                                <strong>$2500</strong>
                                <small>/Month</small>
                            </h5>
                            <h5>
                                <strong>100</strong>
                                <small>sq ft.</small>
                            </h5>
                            <h5>
                                <strong>1</strong>
                                <small>Quantity</small>
                            </h5>
                        </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card className="listing_card listing_card_hold">
                <Card.Header className="listing_card_header">
                    <p><i className="fa fa-map-marker pr-2"></i> London, E1 7AA</p>
                    <div className="listing_card_header_righr">
                        <span className="listing_card_header_icon">
                            <i className="fa fa-pencil-square-o"></i>
                            <br/> Edit
                        </span>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-eye"></i>
                            <br/> Preview
                        </span>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-th-list"></i>
                            <br/> Re-List
                        </span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="listing_card_body">
                        <div className="listing_img_area">
                            <img src={SearchList1}/>
                        </div>
                        <div className="listing_content_area">
                        <h6>On Hold</h6>
                        <h4>Storage + Desk + Storage-Crate + Pallet-Storage + Dcument-Storage + Workspace In Warehouse</h4>
                        <div className="listing_deal_area">
                            <h5>
                                <strong>$2500</strong>
                                <small>/Month</small>
                            </h5>
                            <h5>
                                <strong>100</strong>
                                <small>sq ft.</small>
                            </h5>
                            <h5>
                                <strong>1</strong>
                                <small>Quantity</small>
                            </h5>
                        </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card className="listing_card listing_card_progress">
                <Card.Header className="listing_card_header">
                    <p><i className="fa fa-exclamation-circle pr-2"></i> Unfinished Listing</p>
                    <div className="listing_card_header_righr">
                        <Button className="btn_milky_grn mr-2">Finish Listing</Button>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-pencil-square-o"></i>
                            <br/> Edit
                        </span>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-eye"></i>
                            <br/> Preview
                        </span>
                        <span className="listing_card_header_icon">
                            <i className="fa fa-th-list"></i>
                            <br/> Re-List
                        </span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="listing_card_body">
                        <div className="listing_img_area">
                            <img src={SearchList1}/>
                        </div>
                        <div className="listing_content_area">
                        <h6>In Progress</h6>
                        <h4>Storage + Desk + Storage-Crate + Pallet-Storage + Dcument-Storage + Workspace In Warehouse</h4>
                        <div className="listing_deal_area">
                            <h5>
                                <strong>$-----</strong>
                                <small>/Month</small>
                            </h5>
                            <h5>
                                <strong>-----</strong>
                                <small>sq ft.</small>
                            </h5>
                            <h5>
                                <strong>1</strong>
                                <small>Quantity</small>
                            </h5>
                        </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>




            
        </>
    )
}

export default UserListingtrl;
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Alert, Spinner, Table } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import StepsNavListCtrl from './steps_nav_list';
import GoogleMap from '../../../front/common/components/google-map/GoogleMap';

import approved from '../../../assets/users/images/icons/approved.png';
import SearchList1 from '../../../assets/users/images/dummy/SearchList1.jpg';
import user1 from '../../../assets/users/images/dummy/user1.jpg';

function ListPreviewCtrl(){
    return(
        <>
        
            <StepsNavListCtrl />
            <section className="my-5">
                <Container>
                    <Row className="justify-content-between pb-3">
                        <Col>
                        <div className="d-flex-wrap justify-content-between">
                            <h3 className="m-0 md_bld_txt mb-3">You're Live</h3>
                            <img height="40" src={approved} />
                        </div>
                            <small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="ListPreviewCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Features</h5>                                    
                                    <Button variant="edit">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                <Table size="sm">
                                    <tbody>
                                        <tr>
                                            <th width="100">Description</th>
                                            <td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</td>
                                        </tr>
                                        <tr>
                                            <th width="100">Type</th>
                                            <td>Warehouse</td>
                                        </tr>
                                        <tr>
                                            <th width="100">Can be Used For</th>
                                            <td>
                                                <span className="g_dt">Storage</span>
                                                <span className="g_dt">Desk</span>
                                                <span className="g_dt">Storage-Crate</span>
                                                <span className="g_dt">Pallet Storage</span>
                                                <span className="g_dt">Document Storage</span>
                                                <span className="g_dt">Workspace</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="100">Features</th>
                                            <td>
                                                <span className="g_dt">Security</span>
                                                <span className="g_dt">Alarm</span>
                                                <span className="g_dt">CCTV</span>
                                                <span className="g_dt">Lockable Door</span>
                                                <span className="g_dt">Security Gates</span>
                                                <span className="g_dt">Padlock</span>
                                                <span className="b_dt">Water Supply</span>
                                                <span className="b_dt">Shelving</span>
                                                <span className="b_dt">Lighting</span>
                                                <span className="b_dt">Heating</span>
                                                <span className="b_dt">Fire Alarm</span>
                                                <span className="b_dt">Electricity Points</span>
                                                <span className="b_dt">Dehumidifier</span>
                                                <span className="b_dt">Lift</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="100">Level</th>
                                            <td>Ground Level</td>
                                        </tr>
                                        <tr>
                                            <th width="100">Access Time</th>
                                            <td>Any Time</td>
                                        </tr>
                                        <tr>
                                            <th width="100">Access Time</th>
                                            <td>No</td>
                                        </tr>
                                    </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="ListPreviewCard PreviewPhotosCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Photo</h5>                                    
                                    <Button variant="edit">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <Row className="m-0">
                                        <Col sm="4 p-0">
                                            <div className="PreviewAddedPhotosCard">
                                                <img src={SearchList1} alt="" />
                                            </div>
                                        </Col>
                                        <Col sm="4 p-0">
                                            <div className="PreviewAddedPhotosCard">
                                                <img src={SearchList1} alt="" />
                                            </div>
                                        </Col>
                                        <Col sm="4 p-0">
                                            <div className="PreviewAddedPhotosCard">
                                                <img src={SearchList1} alt="" />
                                            </div>
                                        </Col>
                                        <Col sm="4 p-0">
                                            <div className="PreviewAddedPhotosCard">
                                                <img src={SearchList1} alt="" />
                                            </div>
                                        </Col>
                                        <Col sm="4 p-0">
                                            <div className="PreviewAddedPhotosCard">
                                                <img src={SearchList1} alt="" />
                                            </div>
                                        </Col>
                                        <Col sm="4 p-0">
                                            <div className="PreviewAddedPhotosCard">
                                                <Button variant="no_style_btn text_color_shamrock">
                                                    +Add More
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="ListPreviewCard PreviewSizePricingCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Size & Pricing</h5>                                    
                                    <Button variant="edit">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                <Table size="sm">
                                    <tbody>
                                        <tr>
                                            <th width="100">Size</th>
                                            <td>
                                                <strong>100</strong> sq ft. <small>(10x10x12)</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th width="100">Price</th>
                                            <td><strong>$2500</strong> /month</td>
                                        </tr>
                                        <tr>
                                            <th width="100">Quantity</th>
                                            <td>
                                                <strong>1</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="ListPreviewCard PreviewLocationCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Location</h5>                                    
                                    <Button variant="edit">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <div className="GoogleMapLocation">
                                        <GoogleMap />
                                    </div>
                                    <Table size="sm">
                                        <tbody>
                                            <tr>
                                                <th width="100">Street Number</th>
                                                <td>
                                                    1
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="100">Address 1</th>
                                                <td>MIDDLESEX ST</td>
                                            </tr>
                                            <tr>
                                                <th width="100">Address 2</th>
                                                <td>-----</td>
                                            </tr>
                                            <tr>
                                                <th width="100">City/Town</th>
                                                <td>LONDON</td>
                                            </tr>
                                            <tr>
                                                <th width="100">Postcode</th>
                                                <td>E17AA</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                        
                        <Col md={12}>
                            <div className="ListPreviewCard PreviewProfileCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Profile</h5>                                    
                                    <Button variant="edit">
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <div className='d-flex-wrap'>
                                        <div className="col PreviewProfileImg">
                                            <img src={user1} />
                                        </div>
                                        <div className="col PreviewProfilecontent">
                                            <Table size="sm">
                                                <tbody>
                                                    <tr>
                                                        <th>Bio</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>VAT Registered?</th>
                                                    </tr>
                                                    <tr>
                                                        <td>No</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className="ListPreviewCheckItOut">
                                <div className="">
                                    <h3>Check It Out!</h3>                                    
                                    <p>See your listing the way a Stash.Guru Guest sees it. Make sure<br/> everything looks prim and proper.</p>
                                    <Button className="btn_milky_grn px-4">Preview Listing</Button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ListPreviewCtrl;
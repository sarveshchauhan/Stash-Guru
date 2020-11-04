import React,{useCallback} from 'react';
import { Col, Container, Row,Breadcrumb, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import Dropzone from 'react-dropzone'


import B_home from '../../../assets/users/images/icons/menu/B_home.png';
import no_img from '../../../assets/users/images/profile/no_img.png';
import B_step6 from '../../../assets/users/images/icons/steps/B_step6.png';

import StepsNavListCtrl from './steps_nav_list';

function CreateYourListStepSeventhCtrl(){
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumb>
                            <NavLink className="breadcrumb-item" to="/dashboard"><img src={B_home}/> Dashboard</NavLink>
                            <NavLink className="breadcrumb-item" to="/create-your-list"> Listing</NavLink>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <StepsNavListCtrl/>
            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="7" md="6">
                            <h3 className="md_bld_txt mb-3">Photos of the space</h3>
                            <div className="photos_of_space_row">
                                <div className="photos_of_space_img_col">
                                    <div className="uploader_user">
                                        <img src={no_img} />
                                    </div>
                                    <spn className="uploader_change_own_img">
                                        <img src={B_step6} />
                                    </spn>
                                </div>
                                <div className="photos_of_space_text_msg_col">
                                    <textarea placeholder="Write something about you as a Stash.Guru Host....."></textarea>
                                    <p>This is publicly visible, so nothing too personal</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="5" className="offset-lg-1">
                            <h5 className=""><b>Lorem ipsum dolor sit</b></h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt">Are You VAT Registered?</h3>
                            <Button variant="success" className="mr-2 mt-2 px-5">Yes</Button>
                            <Button className="btn_outline_success mr-2  mt-2 px-5">No</Button>
                        </Col>
                        <Col lg="4" md="5" className="offset-lg-1">
                            <h5 className=""><b>Lorem ipsum dolor sit</b></h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list-step5">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>
                                    Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <Button variant="success" className="mr-2 mt-2 px-5">
                                Publish
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepSeventhCtrl;
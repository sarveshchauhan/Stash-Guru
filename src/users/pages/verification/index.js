import React , { useState} from 'react';
import { Button,Col,Form,Modal, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Dropzone from 'react-dropzone';

import not_verified from '../../../assets/users/images/icons/not_verified.png';
import verified from '../../../assets/users/images/icons/verified.png';
import verify_id from '../../../assets/users/images/verify/verify_id.png';
import photoTips from '../../../assets/users/images/verify/photoTips.jpg';
import img_icon from '../../../assets/users/images/icons/img_icon.png';


function UserVerificationCtrl(){
    const [verifyIDmodal, setverifyIDmodal] = useState(false);
    const handlesetverifyIDmodalClose = () => setverifyIDmodal(false);
    const handlesetverifyIDmodalShow = () => setverifyIDmodal(true);

    
    const [documentDetailsmodal, setdocumentDetailsmodal] = useState(false);
    const handlesetDocumentDetailsmodalClose = () => setdocumentDetailsmodal(false);
    const handlesetDocumentDetailsmodalShow = () => setdocumentDetailsmodal(true);

    
    const [documentUploadmodal, setdocumentUploadmodal] = useState(false);

    const handlesetDocumentUploadModalClose = () => setdocumentUploadmodal(false);
    const handlesetDocumentUploadModalShow = () => setdocumentUploadmodal(true);


    return(
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">Verification</h2>
            </div>


            <div className="verificationCard text-center">
                <div className="verificationCardBody">
                    <img src={not_verified} alt="" />
                    <h3 className="text_color_l_orange">Account not verified</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </div>
            </div>

            {/* <div className="verificationCard text-center">
                <div className="verificationCardBody">
                    <img src={verified} alt="" />
                    <h3 className="text_color_shamrock">Account Verified</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </div>
            </div> */}
            
            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">ID Verification</h3>
                    <NavLink to="" className="text_color_deep_skyi">Required for booking</NavLink>
                </div>
                <div>
                    <Button className="btn_l_orange" onClick={handlesetverifyIDmodalShow}>Verify Account</Button>
                </div>
            </div>
            
            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">Phone Number Verification</h3>
                    <NavLink to="" className="text_color_shamrock">Verified</NavLink> 
                    <span className="text_color_gray">(682)840-7833)</span>
                </div>
                <div>
                    <Button className="btn_success">Change Number</Button>
                </div>
            </div>
            
            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">Email Verification</h3>
                    <NavLink to="" className="text_color_shamrock">Verified</NavLink> 
                    <span className="text_color_gray"> (denise.gibson@mail.com)</span>
                </div>
                <div>
                    <Button className="btn_success">Change Email</Button>
                </div>
            </div>

            <div>
                <Modal className="user_modal" show={verifyIDmodal} onHide={handlesetverifyIDmodalClose} backdrop="static" keyboard={false}>
                    <button className="user_modal_close_btn" onClick={handlesetverifyIDmodalClose}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button> 
                    <Modal.Header className="justify-content-center">
                        <div  className="text-center">
                            <Modal.Title>Verify ID</Modal.Title>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            <img src={verify_id} alt="" />
                            <p>Verifying your identity helps us to keep the platform safe and ensures we only connect real users who are genuinely interested.</p>
                            <p>You'll need a clear photograph of your Driving Licence, Passport or National ID Card.</p>
                            <p>You'll only have to do this once.<NavLink to="">Read more.</NavLink> </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className=" justify-content-end">
                        <span  onClick={ handlesetverifyIDmodalClose}>
                            <Button variant="next" onClick={handlesetDocumentDetailsmodalShow}> Next
                            </Button>
                        </span> 
                    </Modal.Footer>
                </Modal>

                
                <Modal className="user_modal" show={documentDetailsmodal} onHide={handlesetDocumentDetailsmodalClose} backdrop="static" keyboard={false}>
                    <button className="user_modal_close_btn" onClick={handlesetDocumentDetailsmodalClose}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button> 
                    <Modal.Header>
                        <div>
                            <Modal.Title>Document Details</Modal.Title>
                            <small>Please select which document you will be uploading and enter your name</small>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-left">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Select Document Type</Form.Label>
                                    <Form.Control className="rectu_form_field" as="select">
                                        <option>Driving Licence</option>
                                        <option>Voter Id Card</option>
                                        <option>Aadhar Card</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control className="rectu_form_field" type="text" placeholder="Password"  />
                                </Form.Group>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className=" justify-content-between">
                        <span onClick={handlesetverifyIDmodalShow }>
                            <Button variant="previous" onClick={handlesetDocumentDetailsmodalClose }> Previous </Button>
                        </span>
                        <span onClick={handlesetDocumentUploadModalShow }>
                            <Button variant="next" onClick={handlesetDocumentDetailsmodalClose}> Next </Button>
                        </span>
                    </Modal.Footer>
                </Modal>


                <Modal className="user_modal" show={documentUploadmodal} onHide={handlesetDocumentUploadModalClose} backdrop="static" keyboard={false}>
                    <button className="user_modal_close_btn" onClick={handlesetDocumentUploadModalClose}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button> 
                    <Modal.Header>
                        <div>
                            <Modal.Title>Document Upload</Modal.Title>
                            <small>Please select which document you will be uploading and enter your name</small>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-left">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Photo Tips</Form.Label>
                                    <Row className="photoTips_row">
                                        <Col className="col">
                                            <div className="photoTips_img_card">
                                                <img width="100%" src={photoTips} alt="" />
                                            </div>
                                        </Col>
                                        <Col className="col">
                                            <div className="photoTips_img_card">
                                                <img width="100%" src={photoTips} alt="" />
                                            </div>
                                        </Col>
                                        <Col className="col">
                                            <div className="photoTips_img_card">
                                                <img width="100%" src={photoTips} alt="" />
                                            </div>
                                        </Col>
                                        <Col className="col">
                                            <div className="photoTips_img_card">
                                                <img width="100%" src={photoTips} alt="" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <div className="dropzone_section">
                                    <div className="dropzone upload_verify_id">
                                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                            {({getRootProps, getInputProps}) => (
                                                <section>
                                                    <div {...getRootProps()}>
                                                        <input {...getInputProps()} />
                                                        <div>
                                                            <img src={img_icon} alt="" />
                                                        </div>
                                                        <p className="text_color_zambezi">Drop your image here. or 
                                                            <span className="text_color_shamrock">Browse</span>
                                                        </p>
                                                    </div>
                                                </section>
                                            )}
                                        </Dropzone>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className=" justify-content-between">
                        <span onClick={handlesetDocumentDetailsmodalShow }>
                            <Button variant="previous" onClick={handlesetDocumentUploadModalClose }> Previous </Button>
                        </span>
                        <Button variant="upload"> Upload </Button>
                    </Modal.Footer>
                </Modal>
            
            </div>
        </>
    )
}

export default UserVerificationCtrl;
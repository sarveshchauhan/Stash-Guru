import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { docUpload, toggleDocumentDetailModal, toggleDocumentUploadModal } from '../../../redux/document/documentActions';
import photoTips from '../../../assets/users/images/verify/photoTips.jpg';
import img_icon from '../../../assets/users/images/icons/img_icon.png';
import { Modal, Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import Dropzone from 'react-dropzone';



function DocumentUpload() {

    const dispatch = useDispatch();
    const { documentUploadModalShow, documentUploadLoading, uploadedDocs } = useSelector(state => state.document);


    const onChangeFiles = (e) => {

        // setFiles(Array.from(e.target.files));

        for (let i = 0; i < e.target.files.length; i++) {
            dispatch(docUpload(e.target.files[i]));
        }

    }


    return (
        <>


            <Modal className="user_modal" show={documentUploadModalShow} onHide={() => dispatch(toggleDocumentUploadModal(false))} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={() => dispatch(toggleDocumentUploadModal(false))}>
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
                            <Row>
                            <Col md="12">
                                <label className="pt-4">Front Side</label>
                                <div className="dropzone_section">
                                    <div className="dropzone upload_verify_id">
                                        {
                                            documentUploadLoading ? <div className="text-center">
                                                <Spinner animation="border" variant="success"></Spinner>
                                            </div>
                                                :
                                            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <section {...getRootProps()}>
                                                        <div>
                                                            <input {...getInputProps()} onChange={onChangeFiles} />
                                                            <div>
                                                                <img className="upload_img_icon" src={img_icon} alt="" />
                                                            </div>
                                                            <p className="text_color_zambezi">Drop your image here. or
                                                            <span className="text_color_shamrock">Browse</span>
                                                            </p>
                                                        </div>



                                                            <div  className="uploaded_id_card">
                                                                {
                                                                    uploadedDocs && Array.isArray(uploadedDocs) && uploadedDocs.length > 0 && <div className="uploaded_Img">
                                                                        {
                                                                            uploadedDocs.map((doc) => (
                                                                                <img width="100%" src={doc} alt="" />
                                                                            ))
                                                                        }
                                                                    </div>
                                                                }
                                                            </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        }

                                    </div>
                                </div>
                            </Col>
                            <Col  md="12">
                                <label className="pt-4">Back Side</label>
                                <div className="dropzone_section">
                                    <div className="dropzone upload_verify_id">
                                        {
                                            documentUploadLoading ? <div className="text-center">
                                                <Spinner animation="border" variant="success"></Spinner>
                                            </div>
                                                :
                                            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <section {...getRootProps()}>
                                                        <div>
                                                            <input {...getInputProps()} onChange={onChangeFiles} />
                                                            <div>
                                                                <img className="upload_img_icon" src={img_icon} alt="" />
                                                            </div>
                                                            <p className="text_color_zambezi">Drop your image here. or
                                                            <span className="text_color_shamrock">Browse</span>
                                                            </p>
                                                        </div>



                                                            <div  className="uploaded_id_card">
                                                                {
                                                                    uploadedDocs && Array.isArray(uploadedDocs) && uploadedDocs.length > 0 && <div className="uploaded_Img">
                                                                        {
                                                                            uploadedDocs.map((doc) => (
                                                                                <img width="100%" src={doc} alt="" />
                                                                            ))
                                                                        }
                                                                    </div>
                                                                }
                                                            </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        }

                                    </div>
                                </div>
                            </Col>
                            </Row>

                            
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer className=" justify-content-between">
                    <span onClick={() => dispatch(toggleDocumentDetailModal(true))}>
                        <Button variant="previous" onClick={() => dispatch(toggleDocumentUploadModal(false))}> Previous </Button>
                    </span>
                    <Button variant="upload" onClick={() => dispatch(toggleDocumentUploadModal(false))}> Upload </Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}

export default DocumentUpload

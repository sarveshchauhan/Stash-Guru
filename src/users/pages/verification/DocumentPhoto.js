import React, { useRef, useState } from 'react'
import Dropzone from 'react-dropzone';
import { Modal, Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { docUpload, toggleDocumentDetailModal, toggleDocumentUploadModal } from '../../../redux/document/documentActions';
import photoTips from '../../../assets/users/images/verify/photoTips.jpg';
import img_icon from '../../../assets/users/images/icons/img_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import './Document.css';

function DocumentPhoto(props) {

    const dispatch = useDispatch();
    const { documentUploadModalShow, documentUploadLoading, uploadedDocs } = useSelector(state => state.document);

    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const [frontImageError, setFrontImageError] = useState("");
    const [backImageError, setBackImageError] = useState("");


    const onChangeFiles = (e) => {

        // setFiles(Array.from(e.target.files));

        for (let i = 0; i < e.target.files.length; i++) {
            dispatch(docUpload(e.target.files[i]));
        }

    }


    const validateFileType = (name) => {
        name = name.split(".")[1];
        if (name === "jpg" || name === "jpeg" || name === "png" || name === "gif") {
            return true;
        }
        return false;
    }



    const onChangeFront = (e) => {

        setFrontImageError("");
        console.log(e.target.files[0].size);

        if (e.target.files[0]) {

            if (validateFileType(e.target.files[0].name)) {

                if (e.target.files[0].size >= 1000000) {
                    setFrontImageError("File should not be greater than 1 MB");
                    return false;
                }
                else {

                    props.frontPhoto(e.target.files[0]);

                    let reader = new FileReader();
                    reader.onload = function (e) {
                        setFrontImage(e.target.result);
                    };
                    reader.readAsDataURL(e.target.files[0]);

                }



            }
            else {

                setFrontImageError("File type should be jpg, png, jpeg, gif");

            }

        }


    }

    const onChangeBack = (e) => {

        setBackImageError("");
        console.log(e.target.files[0].size);

        if (e.target.files[0]) {

            if (validateFileType(e.target.files[0].name)) {

                if (e.target.files[0].size >= 1000000) {
                    setBackImageError("File should not be greater than 1 MB");
                    return false;
                }
                else {

                    props.backPhoto(e.target.files[0]);

                    let reader = new FileReader();
                    reader.onload = function (e) {
                        setBackImage(e.target.result);
                    };
                    reader.readAsDataURL(e.target.files[0]);

                }



            }
            else {

                setBackImageError("File type should be jpg, png, jpeg, gif");

            }

        }


    }


    const onDeleteFrontImage = (e) => {

        e.preventDefault();
        props.frontPhoto(null);
        setFrontImage(null);

    }

    const onDeleteBackImage = (e) => {

        e.preventDefault();
        props.backPhoto(null);
        setBackImage(null);
    }

    return (
        <>

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

                        {frontImage && <button className="btn btn-sm btn-danger document-photo" onClick={onDeleteFrontImage}><i className="fa fa-times"></i></button>}

                        <div className="dropzone upload_verify_id">


                            {
                                frontImage ? <><img src={frontImage} /></> : <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section {...getRootProps()}>
                                            <div>
                                                <input {...getInputProps()} onChange={onChangeFront} multiple={false} />
                                                <div>
                                                    <img className="upload_img_icon" src={img_icon} alt="" />
                                                </div>
                                                <p className="text_color_zambezi">Drop your image here. or
                                                            <span className="text_color_shamrock">Browse</span>
                                                </p>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            }

                        </div>
                    </div>

                    {
                        frontImageError && <div><small className="text-danger">{frontImageError}</small></div>
                    }



                </Col>
                <Col md="12">
                    <label className="pt-4">Back Side</label>
                    <div className="dropzone_section">

                        {backImage && <button className="btn btn-sm btn-danger document-photo" onClick={onDeleteBackImage}><i className="fa fa-times"></i></button>}

                        <div className="dropzone upload_verify_id">

                            {
                                backImage ? <><img src={backImage} /></> : <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section {...getRootProps()}>
                                            <div>
                                                <input {...getInputProps()} onChange={onChangeBack} />
                                                <div>
                                                    <img className="upload_img_icon" src={img_icon} alt="" />
                                                </div>
                                                <p className="text_color_zambezi">Drop your image here. or
                                                            <span className="text_color_shamrock">Browse</span>
                                                </p>
                                            </div>


                                        </section>
                                    )}
                                </Dropzone>
                            }



                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default DocumentPhoto

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { documentStepOneSave, getDocumentList, toggleDocumentDetailModal, toggleDocumentUploadModal, toggleVerifyIdModal } from '../../../redux/document/documentActions';
import { Modal, Form, Button, Spinner, Alert } from 'react-bootstrap';
import DocumentPhoto from './DocumentPhoto';

function DocumentDetailsSecond() {

    const dispatch = useDispatch();
    const { documentDetailsModalSecondShow, documentList, documentStepOneResult, documentStepOneSaveLoading, documentStepOneSaveError } = useSelector(state => state.document);


    const [documentType, setDocumentType] = useState("");
    const [documentTypeError, setDocumentTypeError] = useState("");

    const [nameOnDocument, setNameOnDocument] = useState("");
    const [nameOnDocumentError, setNameOnDocumentError] = useState("");

    const [frontDocumentFile, setFrontDocumentFile] = useState(null);
    const [frontDocumentError, setFrontDocumentError] = useState("");

    const [backDocumentFile, setBackDocumentFile] = useState(null);
    const [backDocumentError, setBackDocumentError] = useState("");


    useEffect(() => {

        dispatch(getDocumentList({
            token: JSON.parse(localStorage.getItem("stashGuruToken"))
        }));

    }, [dispatch]);


    const frontPhoto = (file) => {
        console.log(file);
        setFrontDocumentFile(file);
    }

    const backPhoto = (file) => {
        console.log(file);
        setBackDocumentFile(file);
    }



    const onSubmit = (e) => {

        e.preventDefault();

        let error = false;

        setNameOnDocumentError("");
        setDocumentTypeError("");
        setFrontDocumentError("");
        setBackDocumentError("");


        if (!nameOnDocument) {
            setNameOnDocumentError("Name is required!");
            error = true;
        }
        if (!documentType) {
            setDocumentTypeError("Document type is required!");
            error = true;
        }

        if (!frontDocumentFile) {
            setFrontDocumentError("Front side of document is requried!");
            error = true;
        }

        if (!backDocumentFile) {
            setBackDocumentError("Back side of document is required!");
            error = true;
        }


        if (!error) {

            let formData = new FormData();
            formData.append("token", JSON.parse(localStorage.getItem("stashGuruToken")));
            formData.append("type", "ID1");
            formData.append("name", nameOnDocument);
            formData.append("doc_type", documentType);
            formData.append("front_doc", frontDocumentFile);
            formData.append("back_doc", backDocumentFile);


            // console.log(`Name is ${frontDocumentFile.name} and size is ${frontDocumentFile.size}`);
            // console.log(backDocumentFile);

            dispatch(documentStepOneSave(formData, "ID1"));


        }




    }



    return (
        <>

            <Modal className="user_modal" show={documentDetailsModalSecondShow} onHide={() => dispatch(toggleDocumentDetailModal(false))} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={() => dispatch(toggleDocumentDetailModal(false))}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <Modal.Header>
                    <div>
                        <Modal.Title>
                            <h3>Document Details</h3>
                            <h5>Second Document</h5>
                        </Modal.Title>
                        {/* <small>Please select which document you will be uploading and enter your name</small> */}
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-left">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Select Document Type</Form.Label>
                                <Form.Control as="select" style={{ borderRadius: '5px' }} value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
                                    <option value="">Select Document Type</option>
                                    {
                                        documentList && Array.isArray(documentList) && documentList.map((document, index) => (
                                            <option value={document.dl_id} key={index}>{document.dl_name}</option>
                                        ))
                                    }
                                </Form.Control>

                                {
                                    documentTypeError && <small className="text-danger">{documentTypeError}</small>
                                }

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Name on Document" style={{ borderRadius: '5px' }} value={nameOnDocument} onChange={(e) => setNameOnDocument(e.target.value)} />

                                {
                                    nameOnDocumentError && <small className="text-danger">{nameOnDocumentError}</small>
                                }


                            </Form.Group>



                            <DocumentPhoto frontPhoto={frontPhoto} backPhoto={backPhoto} />

                            {
                                documentStepOneSaveError && <Alert variant="danger">{documentStepOneSaveError}</Alert>
                            }

                            {
                                frontDocumentError && <Alert variant="danger">{frontDocumentError}</Alert>
                            }

                            {
                                backDocumentError && <Alert variant="danger">{backDocumentError}</Alert>
                            }

                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer className=" justify-content-between">
                    <span onClick={() => dispatch(toggleVerifyIdModal(true))}>
                        <Button variant="previous" onClick={() => dispatch(toggleDocumentDetailModal(false))}> Previous </Button>
                    </span>
                    <span>


                        {
                            documentStepOneSaveLoading ? <Spinner variant="success" animation="border"></Spinner> : <Button variant="next" onClick={onSubmit}> Next</Button>

                        }


                    </span>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default DocumentDetailsSecond

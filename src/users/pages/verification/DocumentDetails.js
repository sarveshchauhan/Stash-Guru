import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { documentStepOneSave, getDocumentList, toggleDocumentDetailModal, toggleDocumentUploadModal, toggleVerifyIdModal } from '../../../redux/document/documentActions';
import { Modal, Form, Button, Spinner, Alert } from 'react-bootstrap';

function DocumentDetails() {

    const dispatch = useDispatch();
    const { documentDetailsModalShow, documentList, documentStepOneResult, documentStepOneSaveLoading, documentStepOneSaveError } = useSelector(state => state.document);


    const [documentType, setDocumentType] = useState("");
    const [documentTypeError, setDocumentTypeError] = useState("");

    const [nameOnDocument, setNameOnDocument] = useState("");
    const [nameOnDocumentError, setNameOnDocumentError] = useState("");


    useEffect(() => {

        dispatch(getDocumentList({
            token: JSON.parse(localStorage.getItem("stashGuruToken"))
        }));

    }, [dispatch]);


    const onSubmit = (e) => {
        e.preventDefault();

        let error = false;

        setNameOnDocumentError("");
        setDocumentTypeError("");


        if (!nameOnDocument) {
            setNameOnDocumentError("Name is required!");
            error = true;
        }
        if (!documentType) {
            setDocumentTypeError("Document type is required!");
            error = true;
        }

        if (!error) {
            dispatch(documentStepOneSave({
                token: JSON.parse(localStorage.getItem("stashGuruToken")),
                type: "ID",
                name: nameOnDocument,
                doc_type: documentType
            }))
        }




    }



    return (
        <>

            <Modal className="user_modal" show={documentDetailsModalShow} onHide={() => dispatch(toggleDocumentDetailModal(false))} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={() => dispatch(toggleDocumentDetailModal(false))}>
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
                                <Form.Control as="select" style={{ borderRadius: '5px' }} value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
                                    <option value="">Select Document Type</option>
                                    {
                                        documentList && Array.isArray(documentList) && documentList.map((document) => (
                                            <option value={document.dl_id}>{document.dl_name}</option>
                                        ))
                                    }
                                    {
                                        documentTypeError && <small className="text-danger">{documentTypeError}</small>
                                    }

                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Name on Document" style={{ borderRadius: '5px' }} value={nameOnDocument} onChange={(e) => setNameOnDocument(e.target.value)} />

                                {
                                    nameOnDocumentError && <small className="text-danger">{nameOnDocumentError}</small>
                                }


                            </Form.Group>

                            {
                                documentStepOneSaveError && <Alert variant="danger">{documentStepOneSaveError}</Alert>
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

export default DocumentDetails

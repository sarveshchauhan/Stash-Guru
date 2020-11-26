import React from 'react';
import { Button,Form,InputGroup,FormControl } from 'react-bootstrap';
import './booking.scss';


function bookingSpaceCtrl(){
    const [bookingSpaceModal, setBookingSpaceModal] = useState(false);
    const handlesetbookingSpaceModalClose = () => setBookingSpaceModal(false);
    const handlesetbookingSpaceModalShow = () => setBookingSpaceModal(true);

    return(
        <>
            <Modal className="user_modal" show={bookingSpaceModal} onHide={handlesetbookingSpaceModalClose} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={handlesetbookingSpaceModalClose}>
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
                                <Form.Control className="rectu_form_field" type="text" placeholder="Mike Garrett"  />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer className=" justify-content-between">
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default bookingSpaceCtrl;
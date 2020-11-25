import React from 'react'
import { Modal, Button, NavLink } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import verify_id from '../../../assets/users/images/verify/verify_id.png';
import { toggleDocumentDetailModal, toggleVerifyIdModal } from '../../../redux/document/documentActions';


function VerifyIdModal() {

    const dispatch = useDispatch();
    const { verifyIdModalShow } = useSelector(state => state.document);

    return (
        <>
            <Modal className="user_modal" show={verifyIdModalShow} onHide={() => dispatch(toggleVerifyIdModal(false))} backdrop="static" keyboard={false}>
                <button className="user_modal_close_btn" onClick={() => dispatch(toggleVerifyIdModal(false))}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <Modal.Header className="justify-content-center">
                    <div className="text-center">
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
                    <span onClick={() => dispatch(toggleVerifyIdModal(false))}>
                        <Button variant="next" onClick={() => dispatch(toggleDocumentDetailModal(true))}> Next
                            </Button>
                    </span>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VerifyIdModal

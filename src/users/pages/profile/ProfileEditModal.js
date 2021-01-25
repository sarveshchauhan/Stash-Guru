import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveProfile, toggleProfileModal } from '../../../redux';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';


function ProfileEditModal() {

    const dispatch = useDispatch();
    const { showProfileEditModal, authResponse, saveProfileLoading } = useSelector(state => state.auth);

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [about, setAbout] = useState("");


    useEffect(() => {

        if (authResponse && authResponse.users && authResponse.users.name) {
            setName(authResponse.users.name);
        }

        if (authResponse && authResponse.users && authResponse.users.about) {
            setAbout(authResponse.users.about);
        }

    }, [authResponse]);


    const onSubmitForm = (e) => {

        e.preventDefault();

        setNameError("");

        if (!name) {
            setNameError("Name is required!");
            return false;
        }

        dispatch(saveProfile({
            name: name,
            about: about
        }));

    }

    return (
        <>

            <Modal
                show={showProfileEditModal}
                onHide={() => dispatch(toggleProfileModal(false))}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            {
                                nameError && <small className="text-danger">{nameError}</small>
                            }
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>About</Form.Label>
                            <Form.Control name="about" as="textarea" value={about} onChange={(e) => setAbout(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            {
                                saveProfileLoading && <Spinner variant="success" animation="border"></Spinner>
                            }
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>


                    <Button className="px-5 mdlBtnFooterClose" variant="light" onClick={() => dispatch(toggleProfileModal(false))}> Close </Button>
                    <Button className="px-5" variant="success" type="button" disabled={saveProfileLoading} onClick={onSubmitForm}>Save</Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProfileEditModal

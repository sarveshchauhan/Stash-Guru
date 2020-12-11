import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addInventory, toggleInventoryModal } from '../../../redux';


function InventoryModal() {

    const { showInventoryModal, addInventoryLoading, addInventoryError, bookingInfo } = useSelector(state => state.booking);
    const dispatch = useDispatch();
    const [inventory, setInventory] = useState("");

    useEffect(() => {

        setInventory(bookingInfo.inventory);

    }, [bookingInfo.inventory]);


    const onSubmitForm = (e) => {

        e.preventDefault();
        dispatch(addInventory({
            inventory: inventory
        }));

    }


    return (
        <>
            <Modal
                show={showInventoryModal}
                onHide={() => dispatch(toggleInventoryModal(false))}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Inventory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Your inventory will be used if you need to make an insurance claim, so take time to list out everything you are storing.
                   </p>

                    <Form onSubmit={onSubmitForm}>

                        <Form.Group>
                            <Form.Control as="textarea" value={inventory} onChange={(e) => setInventory(e.target.value)} placeholder="Enter your inventory here"></Form.Control>
                        </Form.Group>

                        <Form.Group>

                            {
                                addInventoryLoading ? <Spinner animation="border" variant="success" /> : <Button type="submit">Save</Button>
                            }


                        </Form.Group>

                        {
                            addInventoryError && <Alert variant="danger">{JSON.stringify(addInventoryError)}</Alert>
                        }


                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(toggleInventoryModal(false))}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InventoryModal

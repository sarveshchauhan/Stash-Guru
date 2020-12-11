import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleInventoryViewModal } from '../../../redux';


function InventoryViewModal() {

    const dispatch = useDispatch();
    const { show, inventory } = useSelector(state => state.booking.inventoryViewModal);

    return (
        <>

            <Modal
                show={show}
                onHide={() => dispatch(toggleInventoryViewModal({
                    inventory: "",
                    show: false
                }))}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Inventory Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {
                            inventory ? inventory : "Not added by guest"
                        }
                    </p>




                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(toggleInventoryViewModal({
                        show: false,
                        inventory: ""
                    }))}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default InventoryViewModal

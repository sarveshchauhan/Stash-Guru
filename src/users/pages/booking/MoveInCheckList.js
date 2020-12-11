import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleBookingTermsModalHost, toggleInventoryViewModal } from '../../../redux';

function MoveInCheckList({ bookingId, inventory, host_sign_in }) {

    const dispatch = useDispatch();

    return (
        <>
            <div className="d-flex-wrap justify-content-between">



                <Dropdown>
                    <Dropdown.Toggle size="sm" className="btn_milky_bl mt-3">
                        Move-in-Checklist
                                        </Dropdown.Toggle>

                    <Dropdown.Menu className="move_in_checklist">

                        <Dropdown.Item href="#/action-2" className="" onClick={() => dispatch(toggleInventoryViewModal({
                            show: true,
                            inventory: inventory
                        }))}>
                            Inventory
                        </Dropdown.Item>

                        {
                            host_sign_in && host_sign_in === "Yes" ? <Dropdown.Item href="#/action-2" className="">
                                Sign Booking Document &nbsp; <i className="fa fa-check"></i>
                            </Dropdown.Item> : <Dropdown.Item href="#/action-2" className="" onClick={() => dispatch(toggleBookingTermsModalHost({
                                show: true,
                                bookingId: bookingId
                            }))}>
                                    Sign Booking Document
                            </Dropdown.Item>
                        }




                        {/* <Dropdown.Divider />
                        <Dropdown.Item href="#/action-2" className="cancelBooking">
                            <i className="fa fa-times-circle" aria-hidden="true"></i>
                                                Cancel Booking
                                            </Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        </>
    )
}

export default MoveInCheckList

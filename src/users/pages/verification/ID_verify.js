import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function IdVerifyCtrl (){
    return(
        <>
        <Modal.Header className="justify-content-center">
            <div  className="text-center">
                <Modal.Title>Verify ID</Modal.Title>
            </div>
        </Modal.Header>
        <Modal.Body>
            I will not close if you click outside me. Don't even try to press escape key.
        </Modal.Body>
        </>
    )
}

export default IdVerifyCtrl;
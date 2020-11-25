import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import { socketIO } from '../../../helpers/socketHelper';

const socket = socketIO;

function MessageForm() {


    const { searchId } = useParams();
    const [message, setMessage] = useState();
    const [successMessage, setSuccessMessage] = useState("");


    const onSubmitForm = (e) => {
        e.preventDefault();

        setSuccessMessage("");

        if (message) {

            if (localStorage.getItem("stashGuruToken")) {
                socket.emit("chat", {
                    type: "GUEST",
                    message: message,
                    listId: searchId,
                    token: JSON.parse(localStorage.getItem("stashGuruToken"))
                });
                setMessage("");
                setSuccessMessage("Message sent successfully!");
            }
            else {
                window.location.href = "/login?redirect_url=" + encodeURIComponent(window.location.href);
            }






        }


    }

    return (
        <>

            <Form onSubmit={onSubmitForm}>
                <Form.Control as="textarea" cols="4" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message....."></Form.Control>
                <Button type="submit" className="btn-sm mt-2 float-right">Submit</Button>


                {
                    successMessage && <Form.Group style={{ marginTop: "65px" }}>
                        <Alert variant="success">{successMessage}</Alert>
                    </Form.Group>
                }



            </Form>

        </>
    )
}

export default MessageForm

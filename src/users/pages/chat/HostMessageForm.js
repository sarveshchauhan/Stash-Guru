import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { socketIO } from '../../../helpers/socketHelper';
import { pushMessageIntoList } from '../../../redux/chat/chatActions';

const socket = socketIO;

function HostMessageForm() {

    const dispatch = useDispatch();

    const [message, setMessage] = useState();
    const { currentChatGroupId, currentListId, messageListLoading, currentGuestEmail, currentHostEmail } = useSelector(state => state.chat);



    const onSubmitForm = (e) => {

        e.preventDefault();

        if (message) {

            let senderType = "HOST";

            if (currentGuestEmail === localStorage.getItem("userEmail")) {
                senderType = "GUEST";
            }
            else {
                senderType = "HOST";
            }

            socket.emit("chat", {
                message: message,
                token: JSON.parse(localStorage.getItem("stashGuruToken")),
                type: senderType,
                chatGroupId: currentChatGroupId,
                listId: currentListId
            });

            let messageInfo = {
                cm_message: message,
                cm_status: 0,
                u_email: localStorage.getItem("userEmail"),
                u_name: "",
                store_id: currentListId,
                cg_id: currentChatGroupId
            };


            dispatch(pushMessageIntoList(messageInfo));

            setMessage("");




        }





    }

    return (
        <>

            {
                !messageListLoading && <Form onSubmit={onSubmitForm}>
                    <Form.Control placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)}></Form.Control>
                    <Button variant="success" type="submit" className="mt-2 px-5">Submit</Button>
                </Form>
            }



        </>
    )
}

export default HostMessageForm

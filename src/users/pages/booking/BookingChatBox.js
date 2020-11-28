import React, { useEffect, useRef, useState } from 'react'
import paperClip from '../../../assets/users/images/chat/paperClip.png';
import send from '../../../assets/users/images/chat/send.png';
import warning from '../../../assets/users/images/chat/warning.png';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { socketIO } from '../../../helpers/socketHelper';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getChatMessageList, pushMessageIntoList, pushRemoteChat } from '../../../redux';
import dateFormat from 'dateformat';



const socket = socketIO;

function BookingChatBox() {

    const messageListBox = useRef();
    const dispatch = useDispatch();

    const [message, setMessage] = useState("");
    const { listId } = useParams();
    const { cgInfo, messageList } = useSelector(state => state.chat);


    useEffect(() => {



        socket.on("chat", (data) => {



            if (data.email !== localStorage.getItem("userEmail")) {


                let messageInfo = {
                    cm_id: data.data.cm_id,
                    cm_message: data.data.cm_message,
                    cm_status: 0,
                    u_email: data.email,
                    u_name: data.name,
                    store_id: +data.store_id,
                    cg_id: +data.data.cg_id
                };


                dispatch(pushMessageIntoList(messageInfo));
                // dispatch(pushRemoteChat(messageInfo));


            }
        });


    }, [socket]);


    useEffect(() => {

        if (cgInfo.cg_id) {

            dispatch(getChatMessageList({
                token: JSON.parse(localStorage.getItem("stashGuruToken")),
                chat_id: cgInfo.cg_id,
                list_id: +listId
            }))

        }

    }, [cgInfo]);


    useEffect(() => {

        messageListBox.current.scrollTop = messageListBox.current.scrollHeight;

    }, [messageList]);


    const onSubmitMessage = (e) => {

        e.preventDefault();

        if (cgInfo && cgInfo.cg_id) {

            socket.emit("chat", {
                type: "GUEST",
                message: message,
                listId: listId,
                chatGroupId: +cgInfo.cg_id,
                token: JSON.parse(localStorage.getItem("stashGuruToken"))
            });


            setMessage("");

            let messageInfo = {
                cm_message: message,
                cm_status: 0,
                u_email: localStorage.getItem("userEmail"),
                u_name: "",
                store_id: listId,
                cg_id: +cgInfo.cg_id,
                created_at: Date.now()
            };



            dispatch(pushMessageIntoList(messageInfo));



        }


    }

    return (
        <>


            <div className="box_Card booking_chat_card">
                <div className="box_CardBody" ref={messageListBox}>

                    {
                        messageList && Array.isArray(messageList) && messageList.map((chatMessage, index) => (

                            chatMessage.u_email === localStorage.getItem("userEmail") ? <div key={index} className="booking_chatMsg MsgByMe">

                                <div className="booking_chat_user_details">
                                    <small className="d-block booking_chat_user_name">{"You"}</small>
                                    <div className="d-flex">
                                        <div style={{ maxWidth: '100%' }}>
                                            <div className="d-block">
                                                <span className="text_msg">{chatMessage.cm_message}</span>
                                                <span className="timing">{dateFormat(chatMessage.created_at, "dd/mm/yyyy HH:MM")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                :
                                <div className="booking_chatMsg" key={index}>
                                    <div className="booking_chat_user_icn">
                                        {/* <img src={user1} /> */}
                                        <span>{chatMessage.u_name.substring(0, 1).toUpperCase()}</span>
                                    </div>
                                    <div className="booking_chat_user_details">
                                        <small className="d-block booking_chat_user_name">{chatMessage.u_name}</small>
                                        <div className="d-flex">
                                            <div style={{ maxWidth: '100%' }}>
                                                <div className="d-block">
                                                    <span className="text_msg">{chatMessage.cm_message}</span>
                                                    <span className="timing">{dateFormat(chatMessage.created_at, "dd/mm/yyyy HH:MM")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                        ))
                    }




                </div>
                <Form onSubmit={onSubmitMessage}>
                    <InputGroup className="chat_text_field">
                        <FormControl placeholder="Write your message...." aria-label="Recipient's username" aria-describedby="basic-addon2" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <InputGroup.Append>


                            {/* <Button className="btn_attachment">
                            <img src={paperClip} />
                        </Button> */}

                            <Button className="btn_send" type="submit">
                                <img src={send} onClick={onSubmitMessage} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>


        </>
    )
}

export default BookingChatBox

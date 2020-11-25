import React, { useEffect, useState } from 'react';
import { Button, Col, Form, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePlaceholder from '../../../assets/front/images/profile-placeholder.png';
import { socketIO } from '../../../helpers/socketHelper';
import { getChatGroupList, getChatMessageList } from '../../../redux/chat/chatActions';
import HostMessageForm from './HostMessageForm';
import HostMessageList from './HostMessageList';
import './Chat.css';

const socket = socketIO;


function ChatCtrl() {

    const dispatch = useDispatch();
    const { chatGroupList, chatGroupListLoading, currentChatGroupId } = useSelector(state => state.chat);

    useEffect(() => {

        dispatch(getChatGroupList({
            token: JSON.parse(localStorage.getItem("stashGuruToken"))
        }));

    }, [dispatch])


    return (
        <>
            <div >
                <h2 className="user_page_hdng_txt">Chat</h2>


                <Row style={chatBoxStyle}>
                    <Col md={3}>

                        <h4>Listings</h4>


                        {
                            chatGroupListLoading ? <Spinner animation="border" variant="success"></Spinner> :
                                <ListGroup>

                                    {
                                        chatGroupList && Array.isArray(chatGroupList) && chatGroupList.map((chatGroup, index) => (

                                            <ListGroup.Item className={+currentChatGroupId === +chatGroup.cg_id ? "chat-space-list-item-selected" : "chat-space-list-item"} key={index} onClick={() => dispatch(getChatMessageList({
                                                token: JSON.parse(localStorage.getItem("stashGuruToken")),
                                                chat_id: chatGroup.cg_id,
                                                list_id: chatGroup.store_id,
                                                host_email: chatGroup.host_email,
                                                guest_email: chatGroup.guest_email,
                                            }))}>

                                                {chatGroup.store_title}

                                                {
                                                    localStorage.getItem("userEmail") === chatGroup.host_email && ` - ${chatGroup.guest_name}`
                                                }


                                            </ListGroup.Item>

                                        ))
                                    }
                                </ListGroup>

                        }


                    </Col>

                    <Col md={9}>
                        <h4>Messages</h4>

                        <HostMessageList />


                        <Row>
                            <Col md={12} className="mt-4">

                                <HostMessageForm />

                            </Col>
                        </Row>



                    </Col>
                </Row>




            </div>
        </>
    )
}

export default ChatCtrl;



const chatBoxStyle = {

    minHeight: "450px"

};

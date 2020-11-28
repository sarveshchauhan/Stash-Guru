import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePlaceholder from '../../../assets/front/images/profile-placeholder.png';
import LoaderCtrl from '../../../front/common/components/loader';
import { socketIO } from '../../../helpers/socketHelper';
import { pushMessageIntoList, pushRemoteChat } from '../../../redux/chat/chatActions';

const socket = socketIO;

function HostMessageList() {

    const dispatch = useDispatch();

    const { messageList, messageListLoading, currentChatGroupId, currentListId } = useSelector(state => state.chat);


    useEffect(() => {


        socket.on("chat", (data) => {

            // alert(`cgid ${data.data.cg_id} other ${currentChatGroupId} email: ${data.email}`);
            // console.log(data);

            if (data.email !== localStorage.getItem("userEmail")) {

                let messageInfo = {
                    cm_id: data.data.cm_id,
                    cm_message: data.data.cm_message,
                    cm_status: 0,
                    u_email: data.email,
                    u_name: "",
                    store_id: +data.store_id,
                    cg_id: +data.data.cg_id
                };

                dispatch(pushRemoteChat(messageInfo));


            }



        })

    }, [socket]);


    return (
        <>

            {
                messageListLoading && <LoaderCtrl loaderStatus={messageListLoading} />
            }

            {
                messageList && Array.isArray(messageList) && messageList.map((message, index) => (


                    message.u_email !== localStorage.getItem("userEmail") ? <Row className="mt-2" key={index}>
                        <Col md={1}>
                            <img src={ProfilePlaceholder} />
                        </Col>
                        <Col md={9} style={chatMessageStyleOpponent}>
                            {message.cm_message}
                        </Col>
                    </Row>
                        :


                        <Row className="mt-2" key={index}>
                            <Col md={9} style={chatMessageStyleMe}>
                                {message.cm_message}
                            </Col>
                            <Col md={1}>
                                <img src={ProfilePlaceholder} />
                            </Col>
                        </Row>

                ))
            }



        </>
    )
}

export default HostMessageList



const chatMessageStyleMe = {

    fontSize: "12px",
    textAlign: "right"

};


const chatMessageStyleOpponent = {

    fontSize: "12px",
    textAlign: "left"

};




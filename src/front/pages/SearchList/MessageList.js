import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePlaceholder from '../../../assets/front/images/profile-placeholder.png';


function MessageList() {

    const dispatch = useDispatch();
    const { messageList } = useSelector(state => state.chat);


    return (
        <>


            {

                messageList && Array.isArray(messageList) && messageList.map((message) => (


                    <Row className="mt-4" style={{ fontSize: "12px" }}>
                        <Col sm={1}>
                            <img src={ProfilePlaceholder} alt="" style={{ width: "100%" }} />
                        </Col>


                        <Col sm={11}>
                            <p>{message.cm_message}</p>
                        </Col>


                    </Row>

                ))

            }




            {/* <Row className="mt-4" style={{ fontSize: "12px" }}>
                <Col sm={11}>
                    <p>test jsdfasdfkl askdlfjalsdf ksdjfklasdfjl asdkfjalsdfj lasdkfjlasdfjklasdf asdf as asklfj laskdf jlkasd jlkasfjlkasdjklfasdkl  aklsdfj lkasdasldk  lsj flasdf lasdjflasd aksld f</p>
                </Col>

                <Col sm={1}>
                    <img src={ProfilePlaceholder} alt="" style={{ width: "100%" }} />
                </Col>
            </Row> */}

        </>
    )
}

export default MessageList

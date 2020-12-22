import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { socketIO } from '../../../helpers/socketHelper';
import { callUnseenList, getUnseenMessageList } from '../../../redux';
import store from '../../../redux/store';

const socket = socketIO;

function MessageHelper() {

    const dispatch = useDispatch();

    useEffect(() => {


        if (localStorage.getItem("userEmail")) {

            socket.emit("userLogin", {
                email: localStorage.getItem("userEmail")
            });


            socket.on("chat", (data) => {

                let { store_id, booking_guid } = data;
                let { u_id, cg_id, cm_message, cm_id } = data.data;

                let paramsList = window.location.href.split("/");

                if (paramsList.length > 5 && paramsList[3] === "book") {

                    let listId = paramsList[4];
                    let bookingGuid = paramsList[5];

                    if (+listId !== +store_id || bookingGuid !== booking_guid) {

                        //then we have to push message into notification
                        dispatch(getUnseenMessageList());
                    }


                }
                else {

                    //same task call api
                    dispatch(getUnseenMessageList());
                }


            });

        }


    }, [socket]);



    return (
        <>

        </>
    )
}

export default MessageHelper

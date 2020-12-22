export const notificationMiddleware = (data) => {

    let paramsList = window.location.href.split("/");

    if (paramsList[3] === "book") {
        let listId = paramsList[4];
        let bookingGuid = paramsList[5];

        let data_store_id = data.store_id;
        let data_booking_guid = data.booking_guid;


        if (listId !== data_store_id || bookingGuid !== data_booking_guid) {


            //then emit resource

            // socket.emit('create_msg_notification', {
            //     chat: data.data,
            //     booking_guid: data_booking_guid,
            //     token: get_login_token()
            // });



        }


    }
    else {

        //emit resource



    }

}
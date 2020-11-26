import React, { useEffect } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';
import './listing.scss';
import SearchList1 from '../../../assets/users/images/dummy/SearchList1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import LoaderCtrl from '../../../front/common/components/loader';
import { getDraftStatus, listAllSpace, setListDetailClient } from '../../../redux';


function UserListingtrl() {

    const dispatch = useDispatch();
    const { listAllSpaceLoading, allSpaceList, listAllSpaceError, draftStatus, draftStatusError } = useSelector(state => state.listspace);


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        dispatch(listAllSpace({
            token: JSON.parse(localStorage.getItem("stashGuruToken"))
        }));

    }, [dispatch]);



    const get_draft_status = (id, e) => {
        e.preventDefault();


        dispatch(getDraftStatus({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            id: id
        }));

    }

    const edit_listing = (id) => {

        dispatch(setListDetailClient(id, '/create-your-list'));

    }



    return (
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">Listings</h2>
                <div className="d-inline-block user_page_hdng_left">
                    <Form className="d-inline-block float-left" style={{ width: '150px' }}>
                        <Form.Group className="mb-0" controlId="" >
                            <Form.Control as="select">
                                <option>All</option>
                                <option>list1</option>
                                <option>list2</option>
                                <option>list3</option>
                                <option>list4</option>
                                <option>list5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Button className="float-left ml-2 btn-success" style={{ minWidth: '150px' }}>+ New Listing</Button>
                </div>
            </div>


            <div className="warning_strip">
                <div>
                    <p className="m-0"><i className="fa fa-exclamation-triangle pr-2"></i> Just a couple of steps, and you'll be set to accept bookings and receive payouts</p>
                </div>
                <Button className="btn btn-outline-white">Complete Setup</Button>
            </div>


            {
                listAllSpaceError && <Alert variant="danger">{listAllSpaceError}</Alert>
            }

            <LoaderCtrl loaderStatus={listAllSpaceLoading} />



            {
                allSpaceList && allSpaceList.length > 0 && allSpaceList.map((list, index) => (



                    <Card className="listing_card listing_card_progress" key={index}>
                        <Card.Header className="listing_card_header">
                            <p><i className="fa fa-exclamation-circle pr-2"></i> Unfinished Listing</p>
                            <div className="listing_card_header_righr">

                                {
                                    list.store_status === "Progress" ? <Button className="btn_milky_grn mr-2" onClick={(e) => get_draft_status(list.store_id, e)}>Finish Listing</Button> : ""
                                }




                                <span className="listing_card_header_icon" onClick={() => window.location.href = `/list-preview/${list.store_id}`}>
                                    <i className="fa fa-pencil-square-o"></i>
                                    <br /> Edit
                    </span>
                                <span className="listing_card_header_icon" onClick={() => window.open(`/search-details/${list.store_id}?preview=true`)}>
                                    <i className="fa fa-eye"></i>
                                    <br /> Preview
                                </span>

                                <span className="listing_card_header_icon">
                                    <i className="fa fa-th-list"></i>
                                    <br /> Re-List
                    </span>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="listing_card_body">
                                <div className="listing_img_area">
                                    {
                                        list.images && list.images.length > 0 ? <img src={list.images[0].si_path} /> : <img src={SearchList1} />
                                    }

                                </div>
                                <div className="listing_content_area">
                                    <h6>{list.store_status}</h6>
                                    <h4>{list.store_title}</h4>
                                    <div className="listing_deal_area">
                                        <h5>
                                            <strong>${list.store_cost ? list.store_cost : 0}</strong>
                                            <small>/Month</small>
                                        </h5>
                                        <h5>
                                            <strong>{list.store_size ? list.store_size : 0}</strong>
                                            <small>sq ft.</small>
                                        </h5>
                                        <h5>
                                            <strong>1</strong>
                                            <small>Quantity</small>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>




                ))
            }





        </>
    )
}

export default UserListingtrl;
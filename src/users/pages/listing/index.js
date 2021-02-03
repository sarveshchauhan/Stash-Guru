import React, { useEffect, useState } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';
import './listing.scss';
import SearchList1 from '../../../assets/users/images/dummy/SearchList1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import LoaderCtrl from '../../../front/common/components/loader';
import { getDraftStatus, listAllSpace, setListDetailClient } from '../../../redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';


function UserListingtrl() {

    const { t } = useTranslation();

    const dispatch = useDispatch();
    const { listAllSpaceLoading, allSpaceList, allSpaceListDraft, listAllSpaceError, draftStatus, draftStatusError } = useSelector(state => state.listspace);
    const { authResponse } = useSelector(state => state.auth);
    const history = useHistory();
    const [status, setStatus] = useState("All");

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        dispatch(listAllSpace({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            status: status
        }));

    }, [dispatch, status]);



    const get_draft_status = (id, e) => {
        e.preventDefault();


        dispatch(getDraftStatus({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            id: id
        }));

    }

    const editListing = (id) => {

        dispatch(setListDetailClient(id));
        window.location.href = `/list-preview/${id}`

    }


    const getCurrentStep = (store_id) => {
        if (!allSpaceListDraft) {
            console.log('list not found');
            return null;
        }


        const resultList = allSpaceListDraft && Array.isArray(allSpaceListDraft) && allSpaceListDraft.find(i => +i.store_id === +store_id);

        if (resultList) {
            return resultList.draft_step;
        }


        return false;

    }


    const redirectToListSpace = () => {

        let stepOneData = {
            location: "Cluj-Napoca, Romania",
            spaceType: 1
        };

        localStorage.setItem("listStepOne", JSON.stringify(stepOneData));

        window.location.href = "/create-your-list";

        // history.push('/create-your-list');


    }



    return (
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">{t('dbListingHeading')}</h2>
                <div className="d-inline-block user_page_hdng_left">
                    <Form className="d-inline-block float-left" style={{ width: '150px' }}>
                        <Form.Group className="mb-0" controlId="" >

                            {
                                allSpaceList && allSpaceList.length > 0 && <Form.Control as="select" onChange={(e) => setStatus(e.target.value)} value={status}>
                                    <option value="All">All</option>
                                    <option value="Draft">Draft</option>
                                    <option value="Under Review">Under Review</option>
                                    <option value="Published">Published</option>
                                    <option value="Deactivated">Deactivated</option>
                                </Form.Control>
                            }





                        </Form.Group>
                    </Form>
                    <Button onClick={() => window.location.href = "/list-your-space"} className="float-left ml-2 btn-success" style={{ minWidth: '150px' }}>+ {t('dbListingNewBtnLabel')}</Button>
                </div>
            </div>


            {
                authResponse && authResponse.users && authResponse.users.verify !== "Yes" && <div className="warning_strip">

                    <div>
                        <p className="m-0"><i className="fa fa-exclamation-triangle pr-2"></i> {t('dbListingVerifyAccount')}</p>
                    </div>
                    <Button className="btn btn-outline-white" onClick={() => window.location.href = "/verification"}>{t('dbListingVerifyBtnLabel')}</Button>
                </div>

            }


            {
                listAllSpaceError && <div className="card-body listing_bg">
                    <div className="row">
                        <div className="col-md-6 text-white">
                            <h2>{t('dbListingCreateFirstListing')}</h2>
                            <p>{t('dbListingCreateListingDesc')}</p>
                            <button className="btn btn-success px-4" onClick={() => redirectToListSpace()}>{t('dbListingCreateListingBtn')}</button>
                        </div>
                    </div>
                </div>
            }

            <LoaderCtrl loaderStatus={listAllSpaceLoading} />



            {
                allSpaceList && allSpaceList.length > 0 && allSpaceList.map((list, index) => (



                    <Card className="listing_card listing_card_progress" key={index}>
                        <Card.Header className="listing_card_header">
                            <p><i className="fa fa-exclamation-circle pr-2"></i> {list.store_status}</p>
                            <div className="listing_card_header_righr">



                                {
                                    getCurrentStep(list.store_id) && getCurrentStep(list.store_id) < 7 ? <Button className="btn_milky_grn mr-2" onClick={(e) => get_draft_status(list.store_id, e)}>{t('dbListingFinishListing')}</Button> : ""
                                }



                                <span className="listing_card_header_icon" onClick={() => editListing(list.store_id)}>
                                    <i className="fa fa-pencil-square-o"></i>
                                    <br /> {t('dbListingEdit')}
                                </span>
                                <span className="listing_card_header_icon" onClick={() => window.open(`/search-details/${list.store_id}?preview=true`)}>
                                    <i className="fa fa-eye"></i>
                                    <br /> {t('dbListingPreview')}
                                </span>

                                <span className="listing_card_header_icon">
                                    <i className="fa fa-th-list"></i>
                                    <br /> {t('dbListingReList')}
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
                                            <small>/{t('dbListingPerMonth')}</small>
                                        </h5>
                                        <h5>
                                            <strong>{list.store_size ? list.store_size : 0}</strong>
                                            <small>sq ft.</small>
                                        </h5>
                                        <h5>
                                            <strong>1</strong>
                                            <small>{t('dbListingQty')}</small>
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
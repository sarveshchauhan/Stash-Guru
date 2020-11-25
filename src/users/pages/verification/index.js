import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import not_verified from '../../../assets/users/images/icons/not_verified.png';
import verified from '../../../assets/users/images/icons/verified.png';
import verify_id from '../../../assets/users/images/verify/verify_id.png';
import DocumentDetails from './DocumentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getVerifyList, toggleDocumentDetailModal } from '../../../redux/document/documentActions';
import DocumentUpload from './DocumentUpload';
import VerifyIdModal from './VerifyIdModal';


function UserVerificationCtrl() {

    const dispatch = useDispatch();

    const { verifyList } = useSelector(state => state.document);

    const [idVerified, setIdVerified] = useState("Pending");
    const [phoneVerified, setPhoneVerified] = useState("Pending");
    const [emailVerified, setEmailVerified] = useState("Pending");



    useEffect(() => {

        if (verifyList && verifyList.length > 0) {
            for (let i = 0; i < verifyList.length; i++) {
                if (verifyList[i].uv_type === "Email") {
                    setEmailVerified(verifyList[i].uv_status);
                }

                if (verifyList[i].uv_type === "Phone") {
                    setPhoneVerified(verifyList[i].uv_status);
                }

                if (verifyList[i].uv_type === "Doc") {
                    setIdVerified(verifyList[i].uv_status);
                }
            }
        }

    }, [verifyList]);

    useEffect(() => {

        dispatch(getVerifyList({
            token: JSON.parse(localStorage.getItem("stashGuruToken"))
        }))

    }, [dispatch]);



    return (
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">Verification</h2>
            </div>


            <div className="verificationCard text-center">
                <div className="verificationCardBody">
                    <img src={not_verified} alt="" />
                    <h3 className="text_color_l_orange">Account not verified</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </div>
            </div>



            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">ID Verification</h3>
                    <NavLink to="" className="text_color_deep_skyi">Required for booking ({idVerified})</NavLink>
                </div>
                <div>
                    <Button className="btn_l_orange" onClick={() => dispatch(toggleDocumentDetailModal(true))}>Verify Account</Button>
                </div>
            </div>

            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">Phone Number Verification</h3>
                    <NavLink to="" className="text_color_shamrock">

                        {
                            phoneVerified && phoneVerified === "Verify" && <NavLink to="" className="text_color_shamrock">Verified</NavLink>
                        }

                        {
                            phoneVerified && phoneVerified === "Pending" && <p className="text-danger">Pending</p>
                        }

                    </NavLink>
                    <span className="text_color_gray">(682)840-7833)</span>
                </div>
                <div>
                    <Button className="btn_success">Change Number</Button>
                </div>
            </div>

            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">Email Verification</h3>

                    {
                        emailVerified && emailVerified === "Verify" && <NavLink to="" className="text_color_shamrock">Verified</NavLink>
                    }

                    {
                        emailVerified && emailVerified === "Pending" && <p className="text-danger">Pending</p>
                    }



                    <span className="text_color_gray"> (denise.gibson@mail.com)</span>
                </div>
                <div>
                    <Button className="btn_success">Change Email</Button>
                </div>
            </div>

            <div>


                <VerifyIdModal />

                <DocumentDetails />

                <DocumentUpload />

            </div>
        </>
    )
}

export default UserVerificationCtrl;
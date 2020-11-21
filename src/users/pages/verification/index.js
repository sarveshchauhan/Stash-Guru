import React from 'react';
import { Button,Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import not_verified from '../../../assets/users/images/icons/not_verified.png';
import verified from '../../../assets/users/images/icons/verified.png';


function UserVerificationCtrl(){
    return(
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
                    <NavLink to="" className="text_color_deep_skyi">Required for booking</NavLink>
                </div>
                <div>
                    <Button className="btn_l_orange">Verify Account</Button>
                </div>
            </div>
            
            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">Phone Number Verification</h3>
                    <NavLink to="" className="text_color_shamrock">Verified</NavLink> <span className="text_color_gray">(682)840-7833)</span>
                </div>
                <div>
                    <Button className="btn_success">Change Number</Button>
                </div>
            </div>
            
            <div className="sg_box_flex_card align-items-center justify-content-between">
                <div className="">
                    <h3 className="text_color_zambezi">Email Verification</h3>
                    <NavLink to="" className="text_color_shamrock">Verified</NavLink> <span className="text_color_gray"> (denise.gibson@mail.com)</span>
                </div>
                <div>
                    <Button className="btn_success">Change Email</Button>
                </div>
            </div>
        </>
    )
}

export default UserVerificationCtrl;
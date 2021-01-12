import React, { useEffect } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import G_profile from '../../../assets/users/images/icons/G_profile.png';
import bell from '../../../assets/users/images/icons/bell.png';
import promotion from '../../../assets/users/images/icons/promotion.png';
import user_img from '../../../assets/users/images/dummy/user1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { saveProfilePic, toggleMobileVerifyModal, toggleProfileModal } from '../../../redux';
import MobileVerification from '../verification/MobileVerification';
import ProfileEditModal from './ProfileEditModal';


function UserProfileCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    const dispatch = useDispatch();
    const { authResponse, saveProfilePicLoading } = useSelector(state => state.auth);


    const onChangeProfilePic = (e) => {

        dispatch(saveProfilePic(e.target.files[0]));

    }


    return (
        <>
            <div className="user_page_hdng justify-content-between align-items-center">
                <h2 className="user_page_hdng_txt">Profile</h2>
            </div>
            <Row>
                <Col lg={8}>
                    <div className="about_user_profile">

                        <div className="change_user_profile_img">


                            {
                                saveProfilePicLoading ? <Spinner variant="success" animation="border"></Spinner> : <>

                                    {
                                        authResponse && authResponse.users && authResponse.users.profile_pic ? <img src={authResponse.users.profile_pic} /> : <img src={user_img} />
                                    }
                                    <div className="change_user_icon_camera">
                                        <div className="upload-btn-wrapper">
                                            <button className="change_user_icon_camera_btn">
                                                <i className="fa fa-camera"></i>
                                            </button>
                                            <input className="change_user_icon_file" type="file" name="myfile" onChange={onChangeProfilePic} />
                                        </div>
                                    </div>
                                </>

                            }


                        </div>



                        <div className="verify_user_email_mob">
                            <div className="verify_user_email_mob_content">

                                <div className="verify_user_email_mob_flex mt-3">
                                    <div className="verify_user_email_mob_icn">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <small>Name</small>
                                        <h4>{authResponse && authResponse.users && authResponse.users.name}</h4>
                                    </div>
                                    <div>
                                        <Button className="P_verify_btn" type="button" onClick={() => dispatch(toggleProfileModal(true))}>Edit</Button>
                                    </div>
                                </div>

                                <ProfileEditModal />


                                <div className="verify_user_email_mob_flex mt-3">
                                    <div className="verify_user_email_mob_icn">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <small>Mobile</small>
                                        <h4>

                                            {
                                                authResponse && authResponse.users && authResponse.users.mobile && authResponse.users.country_code ?

                                                    `${authResponse.users.country_code}-${authResponse.users.mobile}`
                                                    :

                                                    "Not Yet"
                                            }


                                        </h4>
                                    </div>
                                    <div>
                                        <Button className="P_verify_btn" onClick={(e) => dispatch(toggleMobileVerifyModal(true))}>Edit</Button>
                                        <MobileVerification />
                                    </div>
                                </div>

                                <div className="verify_user_email_mob_flex mb-3">
                                    <div className="verify_user_email_mob_icn">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <small>Email</small>
                                        <h4>{authResponse && authResponse.users && authResponse.users.email}</h4>
                                    </div>
                                    <div>
                                        {/* <Button className="P_verify_btn">Verify</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="align-items-center justify-content-between">
                        <div className="">
                            <h3 className="text_color_zambezi user_hdng_2nd">{authResponse && authResponse.users && authResponse.users.name}</h3>
                            <h6>About You</h6>
                            <p>
                                {authResponse && authResponse.users && authResponse.users.about}
                            </p>


                        </div>
                    </div>
                </Col>



                <Col lg={4}>
                    <div className="sg_box_flex_card profile_r_card">
                        <div className="profile_l_body">
                            <h5>Account Support</h5>
                            <small>Important information about your account, bookings and listings (including account setup, booking alerts and messages).</small>
                        </div>
                        <div className="profile_r_body">
                            <img src={G_profile} />
                        </div>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={type} className="mt-3">
                                    <Row>
                                        <Col className="p_check">
                                            <Form.Check custom type={type} id={`custom-${type}ac_support_email`} label={`Email`} />
                                        </Col>
                                        <Col className="p_check">
                                            <Form.Check custom type={type} id={`custom-${type}ac_support_sms`} label={`SMS`}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Form>
                    </div>


                    <div className="sg_box_flex_card profile_r_card">
                        <div className="profile_l_body">
                            <h5>Reminders</h5>
                            <small>Prompts and reminders relating to your listings, bookings and other account activity.</small>
                        </div>
                        <div className="profile_r_body">
                            <img src={bell} />
                        </div>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={type} className="mt-3">
                                    <Row>
                                        <Col className="p_check">
                                            <Form.Check custom type={type} id={`custom-${type}reminder_email`} label={`Email`} />
                                        </Col>
                                        <Col className="p_check">
                                            <Form.Check custom type={type} id={`custom-${type}reminder_sms`} label={`SMS`}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Form>
                    </div>

                    <div className="sg_box_flex_card profile_r_card">
                        <div className="profile_l_body">
                            <h5>Marketing</h5>
                            <small>Newsletters, promotions, product updates, referral invitations, surveys and helpful tips about storage.</small>
                        </div>
                        <div className="profile_r_body">
                            <img src={promotion} />
                        </div>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={type} className="mt-3">
                                    <Row>
                                        <Col className="p_check">
                                            <Form.Check custom type={type} id={`custom-${type}marketing_email`} label={`Email`} />
                                        </Col>
                                        <Col className="p_check">
                                            <Form.Check custom type={type} id={`custom-${type}marketing_sms`} label={`SMS`}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default UserProfileCtrl;
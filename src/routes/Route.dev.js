import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';


import RegisterPagesLayoutCtrl from '../front/layout/registerLayout';
import FrontHomePagesLayoutCtrl from '../front/layout/HomeLayout';
import FrontPagesLayoutCtrl from '../front/layout/PageLayout';
import FrontPagesMaxLayoutCtrl from '../front/layout/PageLayoutMax';


import LoginComponentCtrl from '../front/pages/register/Login';
import SignUpComponentCtrl from '../front/pages/register/Signup';
import EmailVerifyCtrl from '../front/pages/register/verifyEmail';

import FrontHomeCtrl from '../front/pages/home';
import FrontAboutCtrl from '../front/pages/about';
import FrontFaqsCtrl from '../front/pages/faqs';
import FrontSitemapCtrl from '../front/pages/sitemap';
import FrontRefundPolicyCtrl from '../front/pages/refund-policy';
import FrontsayHelloCtrl from '../front/pages/help-center/sayHello';
import FrontHelpCenterCtrl from '../front/pages/help-center';
import FrontBookingSpaceDetailsCtrl from '../front/pages/help-center/bookingSpace_Details';
import FrontHostingSpaceDetailsCtrl from '../front/pages/help-center/hostingSpace_Detail';
import FrontHostingSpaceCtrl from '../front/pages/help-center/hostingSpace';
import FrontCommonQuestionsCtrl from '../front/pages/help-center/commonQuestions';

import FrontSearchListCtrl from '../front/pages/SearchList';
import FrontSearchDetailsCtrl from '../front/pages/SearchList/details';
import ListYourSpaceComponentCtrl from '../front/pages/ListYourSpace';
import FrontBecomeHostCtrl from '../front/pages/become-host';

import FrontBusinessStorageCtrl from '../front/pages/business-storage'


// user layout
import UserPagesLayoutCtrl from '../users/layout/PageLayout';
import UserCreateYourListCtrl from '../users/pages/create-your-list';
// user layout end


// side menu bar layout
import SideMenuPageLayoutCtrl from '../users/layout/SideMenuLayout';
import UserHomeCtrl from '../users/pages/home';
import UserListingtrl from '../users/pages/listing';
import UserBookingCtrl from '../users/pages/booking';
import UserBookingListCtrl from '../users/pages/booking/bookingList';
import UserNoBookingListCtrl from '../users/pages/booking/noBookingList';
import UserBookingChatCtrl from '../users/pages/booking/bookingChat';


import UserVerificationCtrl from '../users/pages/verification';
import UserProfileCtrl from '../users/pages/profile';
import UserPaymentPayoutCtrl from '../users/pages/payment';
import UserPaymentPayoutListCtrl from '../users/pages//payment/paymentPayoutList';
import UserReferralsCtrl from '../users/pages/referrals';
// side menu bar layout End


import CreateYourListStepThitdCtrl from '../users/pages/create-your-list/LYS_step3';
import CreateYourListStepForthCtrl from '../users/pages/create-your-list/LYS_step4';
import CreateYourListStepFifthCtrl from '../users/pages/create-your-list/LYS_step5';
import CreateYourListStepSixthCtrl from '../users/pages/create-your-list/LYS_step6';
import CreateYourListStepSeventhCtrl from '../users/pages/create-your-list/LYS_step7';
import ListPreviewCtrl from '../users/pages/create-your-list/listPreview';
import ForgotPassword from '../front/pages/register/ForgotPassword';
import ResetPassword from '../front/pages/register/ResetPassword';
import ChatCtrl from '../users/pages/chat';
import { socketIO } from '../helpers/socketHelper';


const socket = socketIO;

const Root = () => {


    useEffect(() => {
        if (localStorage.getItem("userEmail")) {

            socket.emit("userLogin", {
                email: localStorage.getItem("userEmail")
            });

        }


    }, [socket]);


    return (<BrowserRouter>
        <Switch>
            {/* <PrivateRoute exact path="/login" parentComponent={RegisterPagesLayoutCtrl} childComponent={LoginComponentCtrl} /> */}

            <Route exact path="/login" render={(props) => (< RegisterPagesLayoutCtrl children={LoginComponentCtrl} {...props} />)} />



            <Route exact path="/signup" render={(props) => (< RegisterPagesLayoutCtrl children={SignUpComponentCtrl} {...props} />)} />
            <Route exact path="/forgotpassword" render={(props) => (< RegisterPagesLayoutCtrl children={ForgotPassword} {...props} />)} />
            <Route exact path="/resetpassword/:token" render={(props) => (< RegisterPagesLayoutCtrl children={ResetPassword} {...props} />)} />


            <Route exact path="/verifyEmail/:token" render={(props) => (< RegisterPagesLayoutCtrl children={EmailVerifyCtrl} {...props} />)} />

            <Route exact path="/" render={(props) => (<FrontHomePagesLayoutCtrl children={FrontHomeCtrl} {...props} />)} />
            {/* <Route exact path="/search/:key"  render={FrontSearchListCtrl } /> */}
            <Route exact path="/search/:key" render={(props) => (< FrontPagesMaxLayoutCtrl children={FrontSearchListCtrl} {...props} />)} />
            <Route exact path="/list-your-space" render={(props) => (<FrontPagesLayoutCtrl children={ListYourSpaceComponentCtrl} {...props} />)} />
            <Route exact path="/about" render={(props) => (<FrontPagesLayoutCtrl children={FrontAboutCtrl} {...props} />)} />
            <Route exact path="/search-details/:searchId" render={(props) => (< FrontPagesLayoutCtrl children={FrontSearchDetailsCtrl} {...props} />)} />
            <Route exact path="/FAQS" render={(props) => (< FrontPagesLayoutCtrl children={FrontFaqsCtrl} {...props} />)} />
            <Route exact path="/sitemap" render={(props) => (< FrontPagesLayoutCtrl children={FrontSitemapCtrl} {...props} />)} />
            <Route exact path="/refund-policy" render={(props) => (< FrontPagesLayoutCtrl children={FrontRefundPolicyCtrl} {...props} />)} />
            <Route exact path="/become-a-host" render={(props) => (< FrontHomePagesLayoutCtrl children={FrontBecomeHostCtrl} {...props} />)} />
            <Route exact path="/say-hello" render={(props) => (< FrontPagesLayoutCtrl children={FrontsayHelloCtrl} {...props} />)} />
            <Route exact path="/manage-your-booking" render={(props) => (< FrontPagesLayoutCtrl children={FrontHelpCenterCtrl} {...props} />)} />
            <Route exact path="/manage-your-booking/details" render={(props) => (< FrontPagesLayoutCtrl children={FrontBookingSpaceDetailsCtrl} {...props} />)} />
            <Route exact path="/hosting-a-space" render={(props) => (< FrontPagesLayoutCtrl children={FrontHostingSpaceCtrl} {...props} />)} />
            <Route exact path="/hosting-a-space/details" render={(props) => (< FrontPagesLayoutCtrl children={FrontHostingSpaceDetailsCtrl} {...props} />)} />
            <Route exact path="/common-questions" render={(props) => (< FrontPagesLayoutCtrl children={FrontCommonQuestionsCtrl} {...props} />)} />
            <Route exact path="/business-storage" render={(props) => (< FrontPagesLayoutCtrl children={FrontBusinessStorageCtrl} {...props} />)} />

            {/* <PrivateRoute exact path="/dashboard" parentComponent={SideMenuLayoutCtrl} childComponent={UserHomeCtrl} /> */}
            <PrivateRoute exact path="/dashboard" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserHomeCtrl} />
            <PrivateRoute exact path="/listing" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserListingtrl} />
            <PrivateRoute exact path="/booking/:guid" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserBookingCtrl} />
            <PrivateRoute exact path="/booking" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserBookingListCtrl} />
            <PrivateRoute exact path="/no-any-list" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserNoBookingListCtrl} />

            <PrivateRoute exact path="/chat/list/:listId" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserBookingChatCtrl} />


            <PrivateRoute exact path="/verification" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserVerificationCtrl} />
            <PrivateRoute exact path="/profile" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserProfileCtrl} />
            {/* <PrivateRoute exact path="/payment" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserPaymentPayoutCtrl} /> */}
            <PrivateRoute exact path="/payment" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserPaymentPayoutListCtrl} />
            <PrivateRoute exact path="/referrals" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserReferralsCtrl} />

            {/* <Route exact path="/dashboard" render={(props)=> (<UserPagesLayoutCtrl children={UserHomeCtrl} {...props} />)} /> */}

            {/* <Route exact path="/create-your-list" render={(props) => (<UserPagesLayoutCtrl children={UserCreateYourListCtrl} {...props} />)} /> */}

            <PrivateRoute exact path="/create-your-list" parentComponent={UserPagesLayoutCtrl} childComponent={UserCreateYourListCtrl} />

            {/* <Route exact path="/create-your-list-step3" render={(props) => (<UserPagesLayoutCtrl children={CreateYourListStepThitdCtrl} {...props} />)} /> */}
            <PrivateRoute exact path="/create-your-list-step3" parentComponent={UserPagesLayoutCtrl} childComponent={CreateYourListStepThitdCtrl} />


            {/* <Route exact path="/create-your-list-step4" render={(props) => (<UserPagesLayoutCtrl children={CreateYourListStepForthCtrl} {...props} />)} /> */}
            <PrivateRoute exact path="/create-your-list-step4" parentComponent={UserPagesLayoutCtrl} childComponent={CreateYourListStepForthCtrl} />


            {/* <Route exact path="/create-your-list-step5" render={(props) => (<UserPagesLayoutCtrl children={CreateYourListStepFifthCtrl} {...props} />)} /> */}
            <PrivateRoute exact path="/create-your-list-step5" parentComponent={UserPagesLayoutCtrl} childComponent={CreateYourListStepFifthCtrl} />


            {/* <Route exact path="/create-your-list-step6" render={(props) => (<UserPagesLayoutCtrl children={CreateYourListStepSixthCtrl} {...props} />)} /> */}
            <PrivateRoute exact path="/create-your-list-step6" parentComponent={UserPagesLayoutCtrl} childComponent={CreateYourListStepSixthCtrl} />

            {/* <Route exact path="/create-your-list-step7" render={(props) => (<UserPagesLayoutCtrl children={CreateYourListStepSeventhCtrl} {...props} />)} /> */}
            <PrivateRoute exact path="/create-your-list-step7" parentComponent={UserPagesLayoutCtrl} childComponent={CreateYourListStepSeventhCtrl} />
            <PrivateRoute exact path="/list-preview/:id" parentComponent={UserPagesLayoutCtrl} childComponent={ListPreviewCtrl} />


            <PrivateRoute exact path="/chat/host" parentComponent={SideMenuPageLayoutCtrl} childComponent={ChatCtrl} />
            {/* <Route exact path="/list-preview/:id" render={(props) => (<UserPagesLayoutCtrl children={ListPreviewCtrl} {...props} />)} /> */}


        </Switch>
    </BrowserRouter>)


}

export default Root;
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';


import RegisterPagesLayoutCtrl from '../front/layout/registerLayout';
import FrontHomePagesLayoutCtrl from '../front/layout/HomeLayout';
import FrontPagesLayoutCtrl from '../front/layout/PageLayout';
import FrontPagesMaxLayoutCtrl from '../front/layout/PageLayoutMax';


import LoginComponentCtrl from '../front/pages/register/Login';
import SignUpComponentCtrl from '../front/pages/register/Signup';


import FrontHomeCtrl from '../front/pages/home';
import FrontAboutCtrl from '../front/pages/about';
import FrontFaqsCtrl from '../front/pages/faqs';
import FrontSitemapCtrl from '../front/pages/sitemap';
import FrontRefundPolicyCtrl from '../front/pages/refund-policy';
import FrontHelpCenterCtrl from '../front/pages/help-center';
import FrontSearchListCtrl from '../front/pages/SearchList';
import FrontSearchDetailsCtrl from '../front/pages/SearchList/details';
import ListYourSpaceComponentCtrl from '../front/pages/ListYourSpace';

// user layout
import UserPagesLayoutCtrl from '../users/layout/PageLayout';
import UserCreateYourListCtrl from '../users/pages/create-your-list';
// user layout end


// side menu bar layout
import SideMenuPageLayoutCtrl from '../users/layout/SideMenuLayout';
import UserHomeCtrl from '../users/pages/home';
import UserListingtrl from '../users/pages/listing';
import UserBookingCtrl from '../users/pages/booking';
// side menu bar layout End


import CreateYourListStepThitdCtrl from '../users/pages/create-your-list/LYS_step3';
import CreateYourListStepForthCtrl from '../users/pages/create-your-list/LYS_step4';
import CreateYourListStepFifthCtrl from '../users/pages/create-your-list/LYS_step5';
import CreateYourListStepSixthCtrl from '../users/pages/create-your-list/LYS_step6';
import CreateYourListStepSeventhCtrl from '../users/pages/create-your-list/LYS_step7';

const Root = () =>(
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/login" parentComponent={RegisterPagesLayoutCtrl} childComponent={LoginComponentCtrl} />
            <Route exact path="/signup" render={(props)=> (< RegisterPagesLayoutCtrl children={SignUpComponentCtrl} {...props} />)} />

            <Route exact path="/" render={(props)=> (<FrontHomePagesLayoutCtrl children={FrontHomeCtrl} {...props} />)} />
            {/* <Route exact path="/search/:key"  render={FrontSearchListCtrl } /> */}
            <Route exact path="/search/:key" render={(props)=> (< FrontPagesMaxLayoutCtrl children={FrontSearchListCtrl} {...props} />)} />
            <Route exact path="/list-your-space" render={(props)=> (<FrontPagesLayoutCtrl  children={ListYourSpaceComponentCtrl} {...props} />)} />
            <Route exact path="/about" render={(props)=> (<FrontPagesLayoutCtrl  children={FrontAboutCtrl} {...props} />)} />
            <Route exact path="/search-details/:searchId" render={(props)=> (< FrontPagesLayoutCtrl children={FrontSearchDetailsCtrl} {...props} />)} />
            <Route exact path="/FAQS" render={(props)=> (< FrontPagesLayoutCtrl children={FrontFaqsCtrl} {...props} />)} />
            <Route exact path="/sitemap" render={(props)=> (< FrontPagesLayoutCtrl children={FrontSitemapCtrl} {...props} />)} />
            <Route exact path="/refund-policy" render={(props)=> (< FrontPagesLayoutCtrl children={FrontRefundPolicyCtrl} {...props} />)} />
            <Route exact path="/help-center" render={(props)=> (< FrontPagesLayoutCtrl children={FrontHelpCenterCtrl} {...props} />)} />

            {/* <PrivateRoute exact path="/dashboard" parentComponent={SideMenuLayoutCtrl} childComponent={UserHomeCtrl} /> */}
            <PrivateRoute exact path="/dashboard" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserHomeCtrl} />
            <PrivateRoute exact path="/listing" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserListingtrl} />
            <PrivateRoute exact path="/booking" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserBookingCtrl} />
            {/* <Route exact path="/dashboard" render={(props)=> (<UserPagesLayoutCtrl children={UserHomeCtrl} {...props} />)} /> */}
            <Route exact path="/create-your-list" render={(props)=> (<UserPagesLayoutCtrl children={UserCreateYourListCtrl} {...props} />)} />
            <Route exact path="/create-your-list-step3" render={(props)=> (<UserPagesLayoutCtrl children={CreateYourListStepThitdCtrl} {...props} />)} />
            <Route exact path="/create-your-list-step4" render={(props)=> (<UserPagesLayoutCtrl children={CreateYourListStepForthCtrl} {...props} />)} />
            <Route exact path="/create-your-list-step5" render={(props)=> (<UserPagesLayoutCtrl children={CreateYourListStepFifthCtrl} {...props} />)} />
            <Route exact path="/create-your-list-step6" render={(props)=> (<UserPagesLayoutCtrl children={CreateYourListStepSixthCtrl} {...props} />)} />
            <Route exact path="/create-your-list-step7" render={(props)=> (<UserPagesLayoutCtrl children={CreateYourListStepSeventhCtrl} {...props} />)} />
        </Switch>
    </BrowserRouter>
)

export default Root;
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


import UserPagesLayoutCtrl from '../users/layout/PageLayout';
import SideMenuPageLayoutCtrl from '../users/layout/SideMenuLayout';
import UserHomeCtrl from '../users/pages/home';


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
            <Route exact path="/search-details" render={(props)=> (< FrontPagesLayoutCtrl children={FrontSearchDetailsCtrl} {...props} />)} />
            <Route exact path="/FAQS" render={(props)=> (< FrontPagesLayoutCtrl children={FrontFaqsCtrl} {...props} />)} />
            <Route exact path="/sitemap" render={(props)=> (< FrontPagesLayoutCtrl children={FrontSitemapCtrl} {...props} />)} />
            <Route exact path="/refund-policy" render={(props)=> (< FrontPagesLayoutCtrl children={FrontRefundPolicyCtrl} {...props} />)} />
            <Route exact path="/help-center" render={(props)=> (< FrontPagesLayoutCtrl children={FrontHelpCenterCtrl} {...props} />)} />

            {/* <PrivateRoute exact path="/dashboard" parentComponent={SideMenuLayoutCtrl} childComponent={UserHomeCtrl} /> */}
            <PrivateRoute exact path="/dashboard" parentComponent={SideMenuPageLayoutCtrl} childComponent={UserHomeCtrl} />
            {/* <Route exact path="/dashboard" render={(props)=> (<UserPagesLayoutCtrl children={UserHomeCtrl} {...props} />)} /> */}
        </Switch>
    </BrowserRouter>
)

export default Root;
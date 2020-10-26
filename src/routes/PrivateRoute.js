import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { getRedirectToURL } from '../helpers/redirectHelper'
import { get_login_token } from '../helpers/tokenHelpers';
import RegisterPagesLayoutCtrl from '../front/layout/registerLayout';
import LoginComponentCtrl from '../front/pages/register/Login';

export const PrivateRoute = ({ parentComponent: ParentComponent, childComponent: ChildComponent, ...rest }) => {
    
    return <Route {...rest} render={(props) => (

        get_login_token() ?
            <ParentComponent children={ChildComponent} {...props} />
            :
            <LoginComponentCtrl children={RegisterPagesLayoutCtrl} {...props} />

    )} />

}






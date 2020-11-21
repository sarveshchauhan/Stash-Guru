import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { get_login_token } from '../helpers/tokenHelpers';
import RegisterPagesLayoutCtrl from '../front/layout/registerLayout';
import LoginComponentCtrl from '../front/pages/register/Login';

export const PrivateRoute = ({ parentComponent: ParentComponent, childComponent: ChildComponent, ...rest }) => {


    // const query = new URLSearchParams(window.location.search);


    return <Route {...rest} render={(props) => (

        get_login_token() ?
            <ParentComponent children={ChildComponent} {...props} />
            :
            <Redirect to={`/signup?redirect_url=${encodeURIComponent(window.location.href)}`} />

    )} />

}






import React from 'react'
import { Route } from 'react-router-dom'
import { get_login_token } from '../helpers/tokenHelpers';
import RegisterPagesLayoutCtrl from '../front/layout/registerLayout';
import LoginComponentCtrl from '../front/pages/register/Login';

export const PrivateRoute = ({ parentComponent: ParentComponent, childComponent: ChildComponent, ...rest }) => {
    
    return <Route {...rest} render={(props) => (

        get_login_token() ?
            <ParentComponent children={ChildComponent} {...props} />
            :
            <RegisterPagesLayoutCtrl children={LoginComponentCtrl} {...props} />        

    )} />

}






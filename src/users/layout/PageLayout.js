import React,{Component} from 'react';

import UserTopbarHeaderComponent from '../../users/common/topbar';



export default class UserPagesLayoutCtrl extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }




    render(){
        return(
            <>
                <UserTopbarHeaderComponent/>
                <div className="user_pages_content_body_wrapper">
                    <this.props.children {...this.props} />
                </div>
            </>
        )
    }
}
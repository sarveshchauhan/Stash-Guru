

import React ,{Component} from 'react';
import RegisterTopbarHeaderComponent from '../common/topbar/RegisterTopbar';
import './layout.scss';
import '../../assets/front/scss/style.scss';
import '../../assets/front/scss/responsive.scss';
import LoaderCtrl from '../common/components/loader';






export default class RegisterPagesLayoutCtrl extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <>
                
                <RegisterTopbarHeaderComponent {...this.props} />
                <div className="front_pages_content_body_wrapper">
                    <this.props.children {...this.props} />
                </div>
                <LoaderCtrl/>
            </>
        )
    }
}

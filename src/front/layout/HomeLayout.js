

import React ,{Component} from 'react';
import HomeTopbarHeaderComponent from '../common/topbar/HomeTopbar';
import FooterComponent from '../common/footer';
import './layout.scss';
import '../../assets/front/scss/style.scss';
import '../../assets/front/scss/responsive.scss';


import LoaderCtrl from '../common/components/loader';




export default class FrontHomePagesLayoutCtrl extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <>
                
                <HomeTopbarHeaderComponent {...this.props} />

                <div className="front_pages_content_body_wrapper">
                    <this.props.children {...this.props} />
                </div>
                
                <FooterComponent {...this.props} />
                <LoaderCtrl/>
            </>
        )
    }
}

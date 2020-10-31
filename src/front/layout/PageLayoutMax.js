
import React ,{Component} from 'react';
import PageTopbarMaxHeaderComponent from '../common/topbar/PageTopbarMax';
import FooterComponent from '../common/footer';
import LoaderCtrl from '../common/components/loader';
import './layout.scss';
import '../../assets/front/scss/style.scss';
import '../../assets/front/scss/responsive.scss';

export default class fixedTopbarHeaderComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <>
                
                <PageTopbarMaxHeaderComponent {...this.props} />
                
                <div className="front_pages_content_body_wrapper bg_white_smoke">
                    <this.props.children {...this.props} />
                </div>
                <LoaderCtrl/>
                
            </>
        )
    }
}


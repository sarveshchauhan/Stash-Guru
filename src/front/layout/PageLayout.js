
import React ,{Component} from 'react';
import PageTopbarHeaderComponent from '../common/topbar/PageTopbar';
import FooterComponent from '../common/footer';
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
                
                <PageTopbarHeaderComponent {...this.props} />
                
                <div className="front_pages_content_body_wrapper bg_white_smoke">
                    <this.props.children {...this.props} />
                </div>
                
                <FooterComponent {...this.props} />

            </>
        )
    }
}


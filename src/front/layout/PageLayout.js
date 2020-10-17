
import React ,{Component} from 'react';
import PageTopbarHeaderComponent from '../common/topbar/PageTopbar';
import FooterComponent from '../common/footer';
import './layout.scss';
import '../../assets/front/scss/style.scss';

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

                <div className="front_pages_content_body_wrapper">
                    <this.props.children {...this.props} />
                </div>
                
                <FooterComponent {...this.props} />
            </>
        )
    }
}


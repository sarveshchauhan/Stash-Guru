import React, { Component } from 'react';
import FooterComponent from '../common/footer';
import './layout.scss';
import '../../assets/front/scss/style.scss';
import '../../assets/front/scss/responsive.scss';
import PageTopbarHeaderNoSearchComponent from '../common/topbar/PageTopbarNoSearch';

export default class fixedTopbarHeaderNoSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <PageTopbarHeaderNoSearchComponent {...this.props} />
                <div className="front_pages_content_body_wrapper bg_white_smoke">
                    <this.props.children {...this.props} />
                </div>
                <FooterComponent {...this.props} />
            </>
        )
    }
}


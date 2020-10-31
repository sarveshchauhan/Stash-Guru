import React,{Component} from 'react';
import { Container } from 'react-bootstrap';
import './user_pagelayout.scss';

import '../../assets/users/scss/style.scss';

import UserTopbarHeaderComponent from '../../users/common/topbar';
import FooterComponent from '../../front/common/footer';
import LoaderCtrl from '../../front/common/components/loader';

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
                    <Container>
                        <this.props.children {...this.props} />
                    </Container>
                </div>
                <FooterComponent/>               
                <LoaderCtrl/>
            </>
        )
    }
}
import React,{Component} from 'react';
import { Container, Row } from 'react-bootstrap';
import './user_pagelayout.scss';

import UserTopbarHeaderComponent from '../../users/common/topbar';
import PageSideMenuCtrl from '../common/sidebar';
import FooterComponent from '../../front/common/footer';
import LoaderCtrl from '../../front/common/components/loader';


export default class SideMenuPageLayoutCtrl extends Component{
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
                        <Row>
                            <div className="PageSideMenu sm_user_side_menu_hide">
                                <PageSideMenuCtrl/>
                            </div>
                            <div className="PageSideMenuBody">
                                <this.props.children {...this.props} />
                            </div>
                        </Row>
                    </Container>
                    
                <FooterComponent/>
                <LoaderCtrl/>
                </div>
            </>
        )
    }
}
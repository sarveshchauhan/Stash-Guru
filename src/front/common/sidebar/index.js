import React from 'react';
import {Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './sidebar.scss'
class FrontSideBarMenu extends React.Component{
    state={       
        isChatUserActive:true,
    };

    ChatSwitchToggle(e){
        e.preventDefault();
        this.setState({
            isChatUserActive: !this.state.isChatUserActive
        });
    }

    render(){
        return(
            <>
            <Nav.Link className="py-0 pl-5" onClick={(e) => this.ChatSwitchToggle(e)} style={{lineHeight:'0px'}}>
                <i style={{fontSize:'30px'}} className="fa fa-bars" aria-hidden="true"></i>
            </Nav.Link>
            <div className={this.state.isChatUserActive ? "side_menu" : "side_menu open_side_menu"}>
                <Nav.Link className="close_menu" onClick={(e) => this.ChatSwitchToggle(e)}>
                    <i style={{fontSize:'30px'}} className="fa fa-times" aria-hidden="true"></i>
                </Nav.Link>
                <NavLink to="/">Post Property</NavLink>
                <NavLink to="/">Buy Our Services</NavLink>
                <NavLink to="/">Customer Service</NavLink>
                <NavLink to="/">Builders in India</NavLink>
                <NavLink to="/">Buy Our Services</NavLink>
                <NavLink to="/">Customer Service</NavLink>
            </div>
            </>
        )
    }
}

export default FrontSideBarMenu;
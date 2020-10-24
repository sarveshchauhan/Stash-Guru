import React from 'react';
import { Container, Row, Col,Navbar,Nav,Button,Dropdown } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

// Assets Include
import '../../common/topbar/topbar.scss';
import './SearchList.scss';
import logo from '../../../assets/front/images/colored_logo.svg';
import map from '../../../assets/front/images/dummy/map.jpg';
import SearchList1 from '../../../assets/front/images/dummy/SearchList1.jpg';
import SearchList2 from '../../../assets/front/images/dummy/SearchList2.jpg';
import SearchList3 from '../../../assets/front/images/dummy/SearchList3.jpg';
import user_r1 from '../../../assets/front/images/dummy/user_r1.png';
import user_r2 from '../../../assets/front/images/dummy/user_r2.png';
import user_r3 from '../../../assets/front/images/dummy/user_r3.png';
// Assets Include End



import SearchComponent from '../../common/components/SearchCompo';
import FrontSideBarMenu from '../../common/sidebar';

function FrontSearchListCtrl(){
    return(
        <>
            <Navbar className="SearchListNavbar">
                <div className="lg_screen_menu w-100">
                    <Container fluid className="align-items-center justify-content-between px-0">
                        <div className="col-3 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo}  alt="" />
                            </NavLink>
                        </div>
                        <div className="col-4 my-2">
                            <Nav className="justify-content-md-end justify-content-center align-items-center">
                                <NavLink className="nav-link list_your_space" to="/list-your-space">List your space</NavLink>
                                <NavLink className="nav-link login_signup_btn" to="/login">Login/SignUp</NavLink>
                                <FrontSideBarMenu/>
                            </Nav>
                        </div>
  
                    </Container>
                </div>

                <div className="sm_screen_menu w-100">
                    <Container fluid className="align-items-center justify-content-between px-0">
                        <Col className="col-12 text-center text-lg-left align-items-center d-flex justify-content-between">
                            <NavLink className="navbar-brand" to="/">
                                <img width="100%" src={logo} alt=""  />
                            </NavLink>
                            <span  className="mob_toggler">
                                <FrontSideBarMenu />
                            </span>
                        </Col>
                    </Container>
                </div>
            </Navbar>

            <Container fluid>
                <Row>
                    <Col lg={6} className="">
                        <Navbar sticky="top" className="SearchListFilter">
                            <Row>
                                <Col sm={12}>
                                    <SearchComponent/>
                                </Col>
                                <Col sm={8} className="SearchListFilter_Buttons">
                                <Dropdown className="d-inline-block">
                                    <Dropdown.Toggle variant="outline-success" size="sm" id="StorageType">
                                    Storage Type
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="switch_dropdown_menu">
                                        <div className="switch_dropdown_row">
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">garge</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Spare rooms</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Lock Ups</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Basement</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Parking House</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Lofts</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Out housed</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Container</span>
                                            </div>
                                            <div className="switch_col">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                </label>
                                                <span className="switch_label_name">Warehouse</span>
                                            </div>
                                        </div>
                                    </Dropdown.Menu>
                                    
                                </Dropdown>
                                <Dropdown className="d-inline-block">
                                    <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                    Price
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="d-inline-block">
                                    <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                    Size
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Size</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="d-inline-block">
                                    <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                    Features
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Features</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="d-inline-block">
                                    <Dropdown.Toggle variant="outline-success" size="sm" id="Storage Type">
                                    More Filters
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">More Filters</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="outline-warning" size="sm">Reset Filters</Button>{' '}
                                </Col>
                                <Col sm={4} className="text--center text-md-right" style={{fontSize:'14px'}}>
                                    <small className="mx-2 mt-4 d-inline-block">Showing 45 Results</small>
                                    <Button variant="link" className="p-0" style={{fontSize:'14px',color:'#000',textDecoration:'none'}}><b>Nearest <i className="fa fa-sort" aria-hidden="true"></i></b></Button>
                                </Col>
                            </Row>
                        <hr/>
                        </Navbar>
                        <Row>
                            <Col lg={12} className="pt-3">
                                <div className="SearchListPlace_row">
                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList1}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r1} alt=""  />
                                                    <span className="profileName">Mary Ann Wagner</span>
                                                </div>

                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Garage</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>20x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList2}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r2}  alt="" />
                                                    <span className="profileName">Chris Stewart</span>
                                                </div>

                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Warehouse</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>100x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList3}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r3}  alt="" />
                                                    <span className="profileName">Bobby Wagner</span>
                                                </div>
                                                
                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Parking House</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>25x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList1}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r1}  alt="" />
                                                    <span className="profileName">Mary Ann Wagner</span>
                                                </div>

                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Garage</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>20x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList2}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r2}  alt="" />
                                                    <span className="profileName">Chris Stewart</span>
                                                </div>

                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Warehouse</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>100x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList3}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r3}  alt="" />
                                                    <span className="profileName">Bobby Wagner</span>
                                                </div>
                                                
                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Parking House</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>25x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList1}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r1}  alt="" />
                                                    <span className="profileName">Mary Ann Wagner</span>
                                                </div>

                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Garage</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>20x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList2}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r2}  alt="" />
                                                    <span className="profileName">Chris Stewart</span>
                                                </div>

                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Warehouse</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>100x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="SearchListPlace_col">
                                        <div className="SearchListPlace_card">
                                            <img width="100%" src={SearchList3}  alt="" />
                                            <div className="SearchListPlace_card_body">
                                                <div className="SearchListPlaceUserArea">
                                                    <img className="profileImg" src={user_r3}  alt="" />
                                                    <span className="profileName">Bobby Wagner</span>
                                                </div>
                                                
                                                <div className="SearchListPlaceAreaPlace">
                                                    <Button size="sm">Parking House</Button>
                                                    <span>California </span>
                                                    <span>|</span>
                                                    <span>1 Miles</span>
                                                </div>

                                                <div className="SearchListPlaceAreaCost">
                                                    <strong>$45.00/Month </strong>
                                                    <span>25x25</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <div className="map_area">
                            <img src={map}  alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FrontSearchListCtrl;
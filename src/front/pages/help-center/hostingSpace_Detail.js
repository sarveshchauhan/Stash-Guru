import React, { useState } from 'react';
import { Col, Container, Row, Button, ButtonGroup,ListGroup } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import SearchComponent from '../../common/components/SearchCompo';
import helpCenter from '../../../assets/front/images/img/helpCenter.png';
import logo_icon from '../../../assets/front/images/icons/logo_icon.png';


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
    },
    tabs: {
    //   borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));





function FrontHostingSpaceDetailsCtrl(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, ManagingYourBookingValue) => {
        setValue(ManagingYourBookingValue);
    };


    return(
        <>
            <section className="page_banner about_page_banner">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="help_center_banner_btns">
                                <h2>Help Center</h2>
                                <ButtonGroup>
                                    <Link to="/manage-your-booking" className="btn" >Booking a Space</Link>
                                    <Link to="/hosting-a-space" className="btn active">Hosting a Space</Link>
                                    <Link to="/common-questions" className="btn">Common Questions</Link>
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="page_banner_img">
                                <img src={helpCenter} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            
            <section className="bg-white help_center_details py-5">
                <Container>
                    <div className={classes.root}>
                        <Col md="3" className="">
                            <div className="tabVrtHr">
                                <h6 className="d-block">Managing Your Booking</h6>
                                <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs}
                                >   
                                    <Tab label="Making an Enquiry" {...a11yProps(0)} />
                                    <Tab label="Making a Booking" {...a11yProps(1)} />
                                    <Tab label="Verifying Your Account" {...a11yProps(2)} />
                                    <Tab label="Guest Cancellations & Refunds" {...a11yProps(3)} />

                                    <h6 className="d-block">Protecting Your Booking</h6>
                                    <Tab label="Booking Protection" {...a11yProps(4)} />
                                    <Tab label="Payment Protection" {...a11yProps(5)} />
                                    <Tab label="Putting Down a Deposit" {...a11yProps(6)} />

                                    <h6 className="d-block">Ending Booking</h6>
                                    <Tab label="Serving Notice" {...a11yProps(7)} />
                                    <Tab label="Moving Out" {...a11yProps(8)} />
                                </Tabs>
                                </div>
                        </Col>
                            
                        <Col md="9">
                            <TabPanel value={value} index={0}>
                                <div className="help_center_details_content">
                                    <h3 className="pg_bg_hdng">Listing Your Space</h3>
                                    <p>To create a listing, you’ll need to fill out a few key details about the space and what it can be used for.</p>
                                    <p>You’ll be asked how much space you have, so make sure you have the measurements of your space ready. </p>
                                    <p>You’ll also need to upload a few up-to-date photos and write a short description of your space.</p>
                                    <div className="highLight_box mt-3">
                                    <h5>Top tips for taking photos of your space</h5>
                                        <ul>
                                            <li><text>Make sure the space is well lit. It makes all the difference! </text></li>
                                            <li><text>Take photos that are at least 1024 x 683px. If you’re using a smartphone, you’ll be fine. </text></li>
                                            <li><text>Make sure your space is clear and free of any clutter.</text></li>
                                            <li><text>To get a cleaner shot, keep your camera straight. Aligning it with the walls can make this easier.</text></li>
                                            <li><text>Portrait photos won’t showcase your space as well, so it’s best to take your photos in landscape format.</text></li>
                                        </ul>
                                    </div>
                                    <div className="highLight_box my-3">
                                    <h5>Top tips for writing your description</h5>
                                        <ul>
                                            <li><text>Include as much information as possible. Detail is key!</text></li>
                                            <li><text>Shout about features that aren’t visible in your photos.</text></li>
                                            <li><text>Give some more information about how the space is accessed.</text></li>
                                            <li><text>Include some details about the nearest transport links.</text></li>
                                        </ul>
                                    </div>

                                    <p>We ask for the address of your space so we can put it on our search map and help potential Guests find your listing.<br/> We won’t share your full address and phone number with Guests unless you choose to do that from your booking dashboard. When you do, the Guest will be asked to verify their account before being able to see your details.<br/> Once you are happy with your listing, you can publish it yourself, and it will be live and bookable on the search map immediately.<br/> If you have any questions, our Host team will be happy to help. We do our best to take a look at new listings, so keep an eye out for expert tips on how to improve your listing.</p>
                                    <h5>Listing Score</h5>
                                    <p>We’ve put in place a scoring system for listings based on what we know Guests are looking for and what sells best on StashGuru. As you’re listing your space, keep an eye out for the ‘Section Score’ pointers and tasks on the right-hand side which will guide you to create the best listing possible.</p>
                                    <p>Once your space is listed, you can see your listing score in your Hosting dashboard alongside tips on how you can improve it.</p>
                                    <Button variant="success" className="px-5">Create My Listing</Button>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                            </TabPanel>
                            <TabPanel value={value} index={7}>
                            </TabPanel>
                            <TabPanel value={value} index={8}>
                            </TabPanel>
                            <div className="text-right"><Button className="btn_milky_grn px-3">Pricing Your Space <i className="fa fa-long-arrow-right"></i></Button></div>
                        </Col>
                            
                    </div>
                </Container>
            </section>

  

            <section className="bottom_search_strip">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={4}>
                            <div className="bx_shd_crd">
                                <div className="">
                                    <SearchComponent />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bx_shd_crd">
                                <div className="">
                                    <NavLink to="/list-your-space">
                                        <Button variant="milky" className="btn-block">List Your Space</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="bx_shd_crd">
                                <div className="">
                                    <NavLink to="/contact">
                                        <Button variant="milky" className="btn-block">
                                            <i className="fa fa-phone mr-1" aria-hidden="true"></i> Contact Us
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FrontHostingSpaceDetailsCtrl;
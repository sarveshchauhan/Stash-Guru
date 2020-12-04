import React, { useState } from 'react';
import { Col, Container, Row, Button,ButtonGroup } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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





function FrontBookingSpaceDetailsCtrl(){
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
                                    <Link to="/manage-your-booking" className="btn active">Booking a Space</Link>
                                    <Link to="/hosting-a-space" className="btn">Hosting a Space</Link>
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
                                    <h3 className="pg_bg_hdng">Making an Enquiry</h3>
                                    <p>Not sure if a space is suitable for your needs? You can message the Host with questions and chat to find out if the space is right.</p>
                                    <p>To start an enquiry, all you need to do is choose your planned start date and roughly how long you need the space for. Don’t worry, you can always change the start date closer to the time.</p>
                                    <p>If you’re not sure what to say, start by telling the Host what you’ll be using the space for and how often you would like to visit. Don’t forget to introduce yourself too.</p>
                                    <p className="highLight_box">Remember: Always communicate through the StashGuru website and don’t share personal contact details. You’ll be able to see the Host’s address once they’ve shared it with you and you have <strong>verified your account.</strong></p>
                                    <p className="highLight_box">Once you’ve decided that you want to take a space, you can make a booking by putting down a payment. <strong>Learn more about how to make a booking.</strong></p>

                                    <h4><img height="40" src={logo_icon} /><strong className="text_color_shamrock">StashGuru Managed Spaces</strong></h4>
                                    <p>These spaces are looked after by Stashguru on behalf of the Host, so you will be chatting directly with someone from our team!</p>
                                    <p>These are typically larger commercial spaces where we provide dedicated support to the Host, such as managing enquiries, organising viewings and helping with contractual negotiations.</p>
                                    <p>Due to the more complex nature of such spaces, you can only enquire about them, but not book directly.</p>
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

export default FrontBookingSpaceDetailsCtrl;
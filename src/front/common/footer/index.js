import React from 'react';
import { Col, Container, Row, Nav, Accordion } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './footer.scss';
import Logo from '../../../assets/front/images/white_logo.png';

import { useTranslation, Trans } from 'react-i18next';

function FooterComponent() {

    const { t } = useTranslation();

    const history = useHistory();


    return (
        <>
            <footer>
                <Container className="footer_content">
                    <Row>
                        <Col lg={4}>
                            <div className="footer_links">
                                <NavLink to="/" className="mt-3">
                                    <img className="brand_logo" src={Logo} alt="" />
                                </NavLink>
                                <h4 className="mt-3">{t('footerContactHeading')}</h4>
                                <Nav className="flex-column">
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-phone"></i> 0800 112 3898</NavLink>
                                    <NavLink to="" className="nav-link">
                                        <i className="fa fa-envelope"></i> support@stash.guru.com
                                </NavLink>
                                </Nav>
                            </div>
                            <div className="social_links">
                                <Nav className="justify-content-start">
                                    <Nav.Item as="li">
                                        <NavLink className="nav-link" to="/">
                                            <i className="fa fa-facebook"></i>
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <NavLink className="nav-link" to="/">
                                            <i className="fa fa-twitter"></i>
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <NavLink className="nav-link" to="/">
                                            <i className="fa fa-linkedin"></i>
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <NavLink className="nav-link" to="/">
                                            <i className="fa fa-pinterest-p"></i>
                                        </NavLink>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="hidden_sm_ftr_menu">
                                <Row className="justify-content-between">
                                    <Col sm={4} className="footer_links">
                                        <h4 className="mt-3">{t('footerRentASpace')}</h4>
                                        <Nav className="flex-column">
                                            <NavLink to="/search/Cluj-Napoca, Romania" className="nav-link">{t('footerStartStoring')}</NavLink>
                                            <NavLink to="/domestic-storage" className="nav-link">{t('footerDomesticStorage')}</NavLink>
                                            <NavLink to="/business-storage" className="nav-link">{t('footerBusinessStorage')}</NavLink>
                                            <NavLink to="/parking-spaces" className="nav-link">{t('footerRentAParkingSpace')}</NavLink>
                                            <NavLink to="/storage-space" className="nav-link">{t('footerStorageSpace')}</NavLink>
                                            <NavLink to="/garage" className="nav-link">{t('footerRentAGarage')}</NavLink>
                                            <NavLink to="/warehouse" className="nav-link">{t('footerRentAWarehouse')}</NavLink>
                                            <NavLink to="/spare-rooms" className="nav-link">{t('footerRentSpareRoom')}</NavLink>
                                        </Nav>
                                    </Col>
                                    <Col sm={4} className="footer_links">
                                        <h4 className="mt-3">{t('footerHosting')}</h4>
                                        <Nav className="flex-column">
                                            <NavLink to="/become-a-host" className="nav-link">{t('footerBecomeHost')}</NavLink>
                                            <NavLink to="/rent-my-garage" className="nav-link">{t('footerRentYourGarage')}</NavLink>
                                            <NavLink to="/rent-my-parking-space" className="nav-link">{t('footerRentYourParkingSpace')}</NavLink>
                                            <NavLink to="/rent-my-warehouse" className="nav-link">{t('footerRentYourWarehouse')}</NavLink>
                                            <NavLink to="/rent-my-spare-room" className="nav-link">{t('footerRentYourSpareRoom')}</NavLink>
                                            <NavLink to="/rent-my-outhouse" className="nav-link">{t('footerRentYourOutHouse')}</NavLink>
                                            <NavLink to="/rent-my-lockup" className="nav-link">{t('footerRentYourLockup')}</NavLink>
                                            <NavLink to="/rent-my-loft" className="nav-link">{t('footerRentYourLoft')}</NavLink>
                                            <NavLink to="/rent-my-basement" className="nav-link">{t('footerRentYourBasement')}</NavLink>
                                            <NavLink to="/rent-my-container" className="nav-link">{t('footerRentYourContainer')}</NavLink>
                                        </Nav>
                                    </Col>
                                    <Col sm={4} className="footer_links">
                                        <h4 className="mt-3">{t('footerPlatform')}</h4>
                                        <Nav className="flex-column">


                                            <NavLink to="/" className="nav-link">{t('footerHome')}</NavLink>
                                            <NavLink to="/about" className="nav-link">{t('footerAbout')}</NavLink>
                                            <NavLink to="/FAQS" className="nav-link">{t('footerFaq')}</NavLink>
                                            <NavLink to="/manage-your-booking" className="nav-link">{t('footerHelpCenter')}</NavLink>

                                            <NavLink to="/contact" className="nav-link"> Contact Us </NavLink>
                                            <NavLink to="/privacy-policy" className="nav-link"> Privacy Policy </NavLink>
                                            <NavLink to="/terms" className="nav-link"> Terms & Conditions </NavLink>

                                            <NavLink to="/refund-policy" className="nav-link">{t('footerRefundAndCancel')}</NavLink>

                                            <NavLink to="/non-descrimination" className="nav-link"> Non-Discrimination </NavLink>

                                            <NavLink to="/sitemap" className="nav-link">{t('footerSiteMap')}</NavLink>


                                        </Nav>
                                    </Col>
                                </Row>
                            </div>


                            <div className="hidden_lg_ftr_menu">
                                <Row>
                                    <Col sm={12} className="footer_links">
                                        <Accordion>
                                            <Accordion.Toggle variant="link" eventKey="0">
                                                <h4 className="my-2">Rent A Space</h4>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Nav className="flex-column">

                                                    <NavLink to="/search/Cluj-Napoca, Romania" className="nav-link">{t('footerStartStoring')}</NavLink>
                                                    <NavLink to="/domestic-storage" className="nav-link">{t('footerDomesticStorage')}</NavLink>
                                                    <NavLink to="/business-storage" className="nav-link">{t('footerBusinessStorage')}</NavLink>
                                                    <NavLink to="/parking-spaces" className="nav-link">{t('footerRentAParkingSpace')}</NavLink>
                                                    <NavLink to="/storage-space" className="nav-link">{t('footerStorageSpace')}</NavLink>
                                                    <NavLink to="/garage" className="nav-link">{t('footerRentAGarage')}</NavLink>
                                                    <NavLink to="/warehouse" className="nav-link">{t('footerRentAWarehouse')}</NavLink>
                                                    <NavLink to="/spare-rooms" className="nav-link">{t('footerRentSpareRoom')}</NavLink>

                                                </Nav>
                                            </Accordion.Collapse>
                                        </Accordion>
                                    </Col>
                                    <Col sm={12} className="footer_links">
                                        <Accordion>
                                            <Accordion.Toggle variant="link" eventKey="1">
                                                <h4 className="my-2">Hosting</h4>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Nav className="flex-column">



                                                    <NavLink to="/become-a-host" className="nav-link">{t('footerBecomeHost')}</NavLink>
                                                    <NavLink to="/rent-my-garage" className="nav-link">{t('footerRentYourGarage')}</NavLink>
                                                    <NavLink to="/rent-my-parking-space" className="nav-link">{t('footerRentYourParkingSpace')}</NavLink>
                                                    <NavLink to="/rent-my-warehouse" className="nav-link">{t('footerRentYourWarehouse')}</NavLink>
                                                    <NavLink to="/rent-my-spare-room" className="nav-link">{t('footerRentYourSpareRoom')}</NavLink>
                                                    <NavLink to="/rent-my-outhouse" className="nav-link">{t('footerRentYourOutHouse')}</NavLink>
                                                    <NavLink to="/rent-my-lockup" className="nav-link">{t('footerRentYourLockup')}</NavLink>
                                                    <NavLink to="/rent-my-loft" className="nav-link">{t('footerRentYourLoft')}</NavLink>
                                                    <NavLink to="/rent-my-basement" className="nav-link">{t('footerRentYourBasement')}</NavLink>
                                                    <NavLink to="/rent-my-container" className="nav-link">{t('footerRentYourContainer')}</NavLink>


                                                </Nav>
                                            </Accordion.Collapse>
                                        </Accordion>
                                    </Col>
                                    <Col sm={12} className="footer_links">
                                        <Accordion>
                                            <Accordion.Toggle variant="link" eventKey="2">
                                                <h4 className="my-2">Platform</h4>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Nav className="flex-column">



                                                    <NavLink to="/" className="nav-link">{t('footerHome')}</NavLink>
                                                    <NavLink to="/about" className="nav-link">{t('footerAbout')}</NavLink>
                                                    <NavLink to="/FAQS" className="nav-link">{t('footerFaq')}</NavLink>
                                                    <NavLink to="/manage-your-booking" className="nav-link">{t('footerHelpCenter')}</NavLink>

                                                    <NavLink to="/contact" className="nav-link"> Contact Us </NavLink>
                                                    <NavLink to="/privacy-policy" className="nav-link"> Privacy Policy </NavLink>
                                                    <NavLink to="/terms" className="nav-link"> Terms & Conditions </NavLink>

                                                    <NavLink to="/refund-policy" className="nav-link">{t('footerRefundAndCancel')}</NavLink>

                                                    <NavLink to="/non-descrimination" className="nav-link"> Non-Discrimination </NavLink>

                                                    <NavLink to="/sitemap" className="nav-link">{t('footerSiteMap')}</NavLink>




                                                </Nav>
                                            </Accordion.Collapse>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="copyright_section">
                    <hr />
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center text-lg-left">
                            {t('footerCopyright')}
                        </Col>
                        <Col lg={6}>
                            <Nav className="justify-content-center justify-content-lg-end">
                                <Nav.Item as="li">
                                    <NavLink className="nav-link" to="/terms">{t('footerTerms')}</NavLink>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <NavLink className="nav-link" to="/privacy-policy">{t('footerPrivacyPolicy')}</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default FooterComponent;
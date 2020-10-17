import React,{useState} from 'react';
import { Col, Container, Row,Carousel, InputGroup ,FormControl} from 'react-bootstrap';


// Assets Include
import './SearchList.scss';
import mylocation from '../../../assets/front/images/icons/mylocation.png';
import SearchList1 from '../../../assets/front/images/dummy/SearchList1.jpg';
import SearchList2 from '../../../assets/front/images/dummy/SearchList2.jpg';
import SearchList3 from '../../../assets/front/images/dummy/SearchList3.jpg';
// Assets Include End





function FrontSearchDetailsCtrl(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <>
        <section className="py-4">
            <Container >
                <Row>
                    <Col md={8}>
                        <Carousel activeIndex={index} onSelect={handleSelect} indicators={true}>
                            <Carousel.Item>
                                <img className="d-block w-100" src={SearchList1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={SearchList2} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={SearchList3} alt="Second slide" />
                            </Carousel.Item>
                        </Carousel>
                            
                        <div>
                            <h3 className="my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsu.</p>
                            <hr/>
                        </div>

                        <div className="details_content">
                            <h5 className="my-4 sm2_hdng">Details</h5>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Type</label>
                                </Col>
                                <Col className="col-9">
                                    <b>Warehouse</b>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Can Be Used For</label>
                                </Col>
                                <Col className="col-9">
                                    <b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</b>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Monthly Rental</label>
                                </Col>
                                <Col className="col-9">
                                    <b>$245</b> <span>/ month ex. VAT</span><br/>
                                    <b>$45 VAT</b> <span>/ month</span>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Annual Rental</label>
                                </Col>
                                <Col className="col-9">
                                    <b>$5000</b> <span>/ year ex. VAT</span>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Security Deposit</label>
                                </Col>
                                <Col className="col-9">
                                    <b>$500</b>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Total Size</label>
                                </Col>
                                <Col className="col-9">
                                    <b>450</b> <span>sq ft. (15 x 18 x 10)</span>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-3">
                                    <label>Minimum Rental</label>
                                </Col>
                                <Col className="col-9">
                                    <b>2</b> <span>Month</span>
                                </Col>
                            </Row>
                            <hr/>
                        </div>

                        <div className="details_content">
                            <h5 className="mt-4 sm2_hdng">Location</h5>
                            <Row>
                                <Col  sm={7}>
                                    <b>9961 St Paul Ave. Oceanside, CA 92054</b>
                                </Col>
                                <Col  sm={5}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Your Location"
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">h</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default FrontSearchDetailsCtrl;
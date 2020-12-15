import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Spinner, Table } from 'react-bootstrap';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import StepsNavListCtrl from './steps_nav_list';
import GoogleMap from '../../../front/common/components/google-map/GoogleMap';
import GoogleMapPreview from '../../../front/common/components/google-map/GoogleMapPreview';


import approved from '../../../assets/users/images/icons/approved.png';
import SearchList1 from '../../../assets/users/images/dummy/SearchList1.jpg';
import user1 from '../../../assets/users/images/dummy/user1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getListDetails, publishSpace, setListDetailClient } from '../../../redux';

function ListPreviewCtrl() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [depth, setDepth] = useState("");

    const { stepSeven, publishLoading, stepSix } = useSelector(state => state.listspace);
    const { details, features, images, measurement_unit, used_type } = useSelector(state => state.listspace.listDetailData);


    const [aboutState, setAboutState] = useState("");
    const [vatState, setVatState] = useState("");

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    useEffect(() => {

        if (stepSeven) {
            if (sessionStorage.getItem("step7")) {
                let sevenInfo = JSON.parse(sessionStorage.getItem("step7"));
                setAboutState(sevenInfo.about);
                setVatState(sevenInfo.vat);
            }
            else {
                setAboutState(stepSeven.about);
                setVatState(stepSeven.vat);
            }
        }

    }, [stepSeven]);


    useEffect(() => {

        if (details) {

            if (details.store_total_size) {

                let storeSize = JSON.parse(details.store_total_size);
                let storeWidth = storeSize && storeSize.length > 0 ? storeSize[0].width : 0;
                let storeHeight = storeSize && storeSize.length > 0 ? storeSize[0].height : 0;
                let storeDepth = storeSize && storeSize.length > 0 ? storeSize[0].depth : 0;

                setWidth(storeWidth);
                setHeight(storeHeight);
                setDepth(storeDepth);

            }

        }

    }, [details]);


    useEffect(() => {

        if (id) {
            dispatch(getListDetails({
                id: id,
                token: JSON.parse(localStorage.getItem("stashGuruToken"))
            }));

            dispatch(setListDetailClient(id));
        }

    }, [id, dispatch]);


    const onPublishList = (e) => {
        e.preventDefault();

        let about = "";
        let vat = "";

        if (sessionStorage.getItem("step7")) {
            let sevenInfo = JSON.parse(sessionStorage.getItem("step7"));
            about = sevenInfo.about;
            vat = sevenInfo.vat;
            sessionStorage.removeItem("step7");
        }
        else {
            about = stepSeven.about;
            vat = stepSeven.vat;
        }

        dispatch(publishSpace({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            about: about,
            vat: vat,
            id: stepSix.id
        }));


    }


    return (
        <>

            <StepsNavListCtrl />
            <section className="my-5">
                <Container>
                    <Row className="justify-content-between pb-3">
                        <Col>
                            <div className="d-flex-wrap justify-content-between">
                                <h3 className="m-0 md_bld_txt mb-3">You're Live</h3>
                                <img height="40" src={approved} />
                            </div>
                            <small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="ListPreviewCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Features</h5>
                                    <Button variant="edit" onClick={() => window.location.href = "/create-your-list-step3"}>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <Table size="sm">
                                        <tbody>

                                            <tr>
                                                <th width="100">Title</th>
                                                <td>
                                                    {

                                                        details && <div dangerouslySetInnerHTML={{ __html: details.store_title }} />


                                                    }


                                                </td>
                                            </tr>


                                            <tr>
                                                <th width="100">Description</th>
                                                <td>
                                                    {

                                                        details && <div dangerouslySetInnerHTML={{ __html: details.store_description }} />


                                                    }


                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="100">Type</th>
                                                <td>{details && details.st_name}</td>
                                            </tr>
                                            <tr>
                                                <th width="100">Can be Used For</th>
                                                <td>

                                                    {
                                                        used_type && Array.isArray(used_type) && used_type.map((sut) => (
                                                            <span className="g_dt">{sut.sut_name}</span>
                                                        ))
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="100">Features</th>
                                                <td>

                                                    {
                                                        features && Array.isArray(features) && features.map((feature, index) => (
                                                            <span className="g_dt" key={index}>{feature.fs_name}</span>
                                                        ))
                                                    }



                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <th width="100">Level</th>
                                                <td>Ground Level</td>
                                            </tr> */}
                                            <tr>
                                                <th width="100">Guest Access Time</th>
                                                <td>{details && details.gt_name}</td>
                                            </tr>
                                            <tr>
                                                <th width="100">Guest Access Apace</th>
                                                <td>{details && details.gta_name}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="ListPreviewCard PreviewPhotosCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Photo</h5>
                                    <Button variant="edit" onClick={() => window.location.href = "/create-your-list-step6"}>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <Row className="m-0">

                                        {
                                            images && Array.isArray(images) && images.map((image, index) => (
                                                <Col sm="4 p-0" key={index}>
                                                    <div className="PreviewAddedPhotosCard">
                                                        <img src={image.si_path} alt="" />
                                                    </div>
                                                </Col>
                                            ))
                                        }


                                        <Col sm="4 p-0">
                                            <div className="PreviewAddedPhotosCard">
                                                <Button variant="no_style_btn text_color_shamrock">
                                                    +Add More
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="ListPreviewCard PreviewSizePricingCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Size & Pricing</h5>
                                    <Button variant="edit" onClick={() => window.location.href = "/create-your-list-step5"}>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <Table size="sm">
                                        <tbody>
                                            <tr>
                                                <th width="100">Size</th>
                                                <td>

                                                    {
                                                        width && height && depth && <>
                                                            <strong>{+width * +depth}</strong>
                                                      &nbsp; sq {measurement_unit && measurement_unit.mu_name} <small>
                                                                ({`${width} x ${height} x ${depth}`})
                                                        </small>
                                                        </>
                                                    }



                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="100">Price</th>
                                                <td><strong>{details && details.store_cost} Lei</strong> /month</td>
                                            </tr>
                                            <tr>
                                                <th width="100">Quantity</th>
                                                <td>
                                                    <strong>1</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="ListPreviewCard PreviewLocationCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Location</h5>
                                    <Button variant="edit" onClick={() => window.location.href = "/create-your-list"}>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <div className="GoogleMapLocation">
                                        <GoogleMapPreview latitude={details && details.store_lat} longitude={details && details.store_long} />
                                    </div>
                                    <Table size="sm">
                                        <tbody>
                                            <tr>
                                                <th width="100">Street Number</th>
                                                <td>
                                                    {details && details.store_street}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th width="100">Address 1</th>
                                                <td>{details && details.store_address1}</td>
                                            </tr>
                                            <tr>
                                                <th width="100">Address 2</th>
                                                <td>{details && details.store_address2 ? details.store_address2 : "-----"}</td>
                                            </tr>
                                            <tr>
                                                <th width="100">City/Town</th>
                                                <td>{details && details.store_city}</td>
                                            </tr>
                                            <tr>
                                                <th width="100">Postcode</th>
                                                <td>{details && details.store_postcode}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className="ListPreviewCard PreviewProfileCard">
                                <div className="ListPreviewCardHeader">
                                    <h5>Profile</h5>
                                    <Button variant="edit" onClick={() => window.location.href = "/create-your-list-step7"}>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </Button>
                                </div>
                                <div className="ListPreviewCardBody">
                                    <div className='d-flex-wrap'>
                                        <div className="col PreviewProfileImg">
                                            {
                                                details && details.u_pic ? <img src={details.u_pic} /> : <img src={user1} />
                                            }


                                        </div>
                                        <div className="col PreviewProfilecontent">
                                            <Table size="sm">
                                                <tbody>
                                                    <tr>
                                                        <th>Bio</th>
                                                    </tr>
                                                    <tr>
                                                        <td>

                                                            {aboutState}

                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <th>VAT Registered?</th>
                                                    </tr>
                                                    <tr>
                                                        <td>{vatState}</td>
                                                    </tr> */}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className="ListPreviewCheckItOut">
                                <div className="">
                                    <h3>Check It Out!</h3>
                                    <p>See your listing the way a Stash.Guru Guest sees it. Make sure<br /> everything looks prim and proper.</p>
                                    <Button className="btn_milky_grn px-4" onClick={() => window.open(`/search-details/${id}?preview=true`)}>Preview Listing</Button>
                                    &nbsp;<Button className="btn_milky_grn px-4" onClick={onPublishList}>Publish Listing</Button>

                                    {
                                        publishLoading
                                        &&
                                        <Spinner variant="success" animation="border"></Spinner>
                                    }

                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ListPreviewCtrl;
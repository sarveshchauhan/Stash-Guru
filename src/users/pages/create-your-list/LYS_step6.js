import React, { useCallback, useEffect } from 'react';
import { Col, Container, Row, Button, FormControl, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';


import Dropzone from 'react-dropzone';


import img_icon from '../../../assets/users/images/icons/img_icon.png';
import street_view_doll from '../../../assets/users/images/icons/street-view-doll.png'
import StepsNavListCtrl from './steps_nav_list';
import { useDispatch, useSelector } from 'react-redux';
import { getListDetails, stepSixUpdateClient, updateCaption, uploadImageFile } from '../../../redux/listspace/listspaceActions';

function CreateYourListStepSixthCtrl() {

    const dispatch = useDispatch();
    const { stepFive, listDetailData, captionUpdateSuccess, captionUpdateError, captionUpdateLoading, uploadLoading } = useSelector(state => state.listspace);
    const history = useHistory();

    useEffect(() => {


        if (stepFive) {
            dispatch(getListDetails({
                id: stepFive.id,
                token: JSON.parse(localStorage.getItem('stashGuruToken'))
            }));
        }
        else {
            history.push('/create-your-list-step4');
        }


    }, [stepFive, dispatch]);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    const onChangeFile = (files) => {

        for (var i = 0; i < files.length; i++) {
            dispatch(uploadImageFile(files[i], stepFive.id));
        }


    }

    const updateImageCaption = (img_id, caption) => {

        dispatch(updateCaption({
            token: JSON.parse(localStorage.getItem("stashGuruToken")),
            img_id: img_id,
            store_id: stepFive.id,
            caption: caption
        }));

    }


    const onSubmitForm = (e) => {

        e.preventDefault();
        dispatch(stepSixUpdateClient({ id: stepFive.id }));
        history.push('/create-your-list-step7');


    }

    return (
        <>
            <StepsNavListCtrl />

            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="5" md="6">
                            <h3 className="md_bld_txt mb-3">Photos of the space</h3>
                            <div className="dropzone_section">
                                <div className="dropzone">
                                    <Dropzone onDrop={onChangeFile}>
                                        {({ getRootProps, getInputProps }) => (
                                            <section>
                                                <div {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <div>
                                                        <img src={img_icon} alt="" />
                                                    </div>
                                                    <p className="text_color_zambezi">Drop your image here. or
                                                         <span className="text_color_shamrock">Browse</span>
                                                    </p>
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                </div>
                            </div>

                            {
                                uploadLoading && <div className="text-center mt-2">
                                    <Spinner animation="border" variant="success"></Spinner>
                                </div>
                            }

                            {/* <div className="uploaded_images">
                                <img src={img_icon} alt="" />
                                <img src={img_icon} alt="" />
                                <img src={img_icon} alt="" />
                                <img src={img_icon} alt="" />
                                <img src={img_icon} alt="" />
                            </div> */}
                        </Col>
                        <Col lg="4" md="5" className="offset-lg-1">
                            <h5 className=""><b>Lorem ipsum dolor sit</b></h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                        </Col>
                    </Row>


                    {
                        listDetailData && listDetailData.images && listDetailData.images.length > 0 && <>

                            <Row>
                                <Col>
                                    <h4 className="mt-4">Images</h4>
                                </Col>
                            </Row>
                            <div className="PhotosSpaceUploadImagesList">

                                {
                                    listDetailData.images.map((image, index) => (
                                        <div className="PhotosSpaceUploadImages" key={index}>
                                            <div className="PhotosSpaceimg">
                                                <img src={image.si_path} alt="" />
                                            </div>
                                            <FormControl className="rectu_form_field" defaultValue={image.si_name} placeholder="Enter caption" onBlur={(e) => updateImageCaption(image.si_id, e.target.value)} ></FormControl>
                                        </div>
                                    ))
                                }
                            </div>




                        </>
                    }


                </Container>
            </section>

            {/*       
            <section className="my-5 text-center">
                <Container>
                    <h3 className="md_bld_txt mb-3">Street View</h3>
                </Container>
                <Container className="SetStreetView">
                    <Row className="justify-content-between">
                        <Col lg="12" md="6">
                            <img width="70" src={street_view_doll} alt="" />
                            <h4 className="m-0">Set Street View</h4>
                            <p className="my-2">Move the camera to put your space in view</p>
                            <Button className="btn_milky_grn px-5">Let's Go!</Button>
                        </Col>
                    </Row>
                </Container>
                <h5 className="my-3"><b>What is Street View ?</b></h5>
            </section>

         */}

            <section className="my-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg="6" md="6" className="text-left">
                            <NavLink to="/create-your-list-step5">
                                <Button className="btn_outline_success mr-2  mt-2 px-5">
                                    <i className="fa fa-long-arrow-left mr-2" aria-hidden="true"></i>
                                    Previous
                                </Button>
                            </NavLink>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                            <NavLink to="/create-your-list-step7" onClick={onSubmitForm}>
                                <Button className="btn_outline_success mr-2 mt-2 px-5">
                                    Next
                                    <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                                </Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CreateYourListStepSixthCtrl;
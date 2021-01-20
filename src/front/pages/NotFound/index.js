import React from 'react'
import  _404_bnr from '../../../assets/front/images/img/_404_bnr.svg';
import _404_cartun from '../../../assets/front/images/img/_404_cartun.svg';

function NotFoundComponent() {
    return (
        <section className="page_banner">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="page_banner_content">
                            <h2>Oops!</h2>
                            <h5 className="text5 my-3">Looks like this page doesn't exist.</h5>
                            
                        </div>
                        <p>This isn’t a single font nonetheless a household of ancient serif typefaces. It’s one of the most used font out there that you can also use in your designs to make them more professional and <b className="text_color_shamrock">beautiful.</b></p>
                        
                        <div className="">
                            <div className="row">
                                <div className="col-sm-4">
                                    <button className="btn m-1 btn-success btn-block"> <i className="fa fa-home"></i> Back To Home</button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn m-1 btn-success btn-block"><i className="fa fa-search" aria-hidden="true"></i> Search Places</button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn m-1 btn-success btn-block"><i className="fa fa-map-marker" aria-hidden="true"></i> List Your Space</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 _404_bnr_img">
                        <img src={_404_bnr} />
                    </div>
                </div>
            </div>
            <img style={{maxWidth: '400px', width: '100%'}} src={_404_cartun} />
        </section>
    )
}

export default NotFoundComponent

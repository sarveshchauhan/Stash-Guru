import React from 'react';
import Stash_Loader from '../../../../assets/front/images/Stash_Loader.gif';
import './loader.scss';

function LoaderCtrl(){
    return(
        <>
            <div className="loader_container d-none">
            {/* <div className="loader_container d-block"> */}
                <div className="loader">
                    <img src={Stash_Loader} />
                </div>
            </div>
        </>
    )
}
export default LoaderCtrl;
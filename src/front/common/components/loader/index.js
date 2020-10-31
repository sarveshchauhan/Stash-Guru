import React from 'react';
import Stash from '../../../../assets/front/images/stash.gif';
import './loader.scss';

function LoaderCtrl(){
    return(
        <>
            <div className="loader_container d-none">
            {/* <div className="loader_container d-block"> */}
                <div className="loader">
                    <img src={Stash} />
                </div>
            </div>
        </>
    )
}
export default LoaderCtrl;
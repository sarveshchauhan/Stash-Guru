import React, {useEffect, useState} from 'react';
import Stash_Loader from '../../../../assets/front/images/Stash_Loader.gif';
import './loader.scss';

function LoaderCtrl(state){
    const [status, setStatus] = useState('d-block');

    useEffect(() => {
        state.loaderStatus === true ? setStatus('d-block') : setStatus('d-none')
    }, [state.loaderStatus]);

    return(
        <>
            <div className={`loader_container ${status}`}>
                <div className="loader">
                    <img src={Stash_Loader} />
                </div>
            </div>
        </>
    )
}
export default LoaderCtrl;
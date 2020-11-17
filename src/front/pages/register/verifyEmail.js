import React, { useState, useEffect }  from 'react';
import { Col, Container, Row , Alert} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import './Register.scss';
import {verifyToken} from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import LoaderCtrl from '../../common/components/loader';

function SignUpComponentCtrl(){

    const dispatch = useDispatch();
    const { token } = useParams();
    const [loader, setLoader] = useState(false);
    const { response, error, loading } = useSelector(state => state.register);

    useEffect(() => {
        setLoader(loading);
    }, [loading]);
    
    useEffect(() => {
        dispatch(verifyToken(token));
    }, [token]);

    return(
        <>
        <LoaderCtrl loaderStatus={loader} />
        <section className="section_padding">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} className="my-2">
                        {
                            response && (
                                <Alert variant="success">
                                    {response}
                                </Alert>

                            )
                        }
                    </Col>
                    <Col sm={12} className="my-2">
                        {
                            error && (
                                <Alert variant="danger">
                                    {error}
                                </Alert>

                            )
                        }
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default SignUpComponentCtrl;
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function FrontRefundPolicyCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    return (
        <>
            <section>
                <Container>
                    <h1>Refund Policy</h1>
                </Container>
            </section>
        </>
    )
}

export default FrontRefundPolicyCtrl;
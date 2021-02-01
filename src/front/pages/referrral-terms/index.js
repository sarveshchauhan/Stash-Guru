import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function ReferralTermsCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    return (
        <>
            <section>
                <Container>
                    <h1>Referral Terms</h1>
                </Container>
            </section>
        </>
    )
}

export default ReferralTermsCtrl;
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function FrontPrivacyPolicyCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    return (
        <>
            <section>
                <Container>
                    <h1>Privacy Policy</h1>
                </Container>
            </section>
        </>
    )
}

export default FrontPrivacyPolicyCtrl;
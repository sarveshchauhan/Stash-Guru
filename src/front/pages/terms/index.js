import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function TermsCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    return (
        <>
            <section>
                <Container>
                    <h1>Terms</h1>
                </Container>
            </section>
        </>
    )
}

export default TermsCtrl;
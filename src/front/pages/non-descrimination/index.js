import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function NonDiscriminationPolicyCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    return (
        <>
            <section>
                <Container>
                    <h1>Non Descrimination Policy</h1>
                </Container>
            </section>
        </>
    )
}

export default NonDiscriminationPolicyCtrl;
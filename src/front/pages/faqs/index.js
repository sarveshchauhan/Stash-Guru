import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function FrontFaqsCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);


    return (
        <>
            <section>
                <Container>
                    <h1>Faqs</h1>
                </Container>
            </section>
        </>
    )
}

export default FrontFaqsCtrl;
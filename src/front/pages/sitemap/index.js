import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function FrontSitemapCtrl() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [window]);

    return (
        <>
            <section>
                <Container>
                    <h1>Sitemap</h1>
                </Container>
            </section>
        </>
    )
}

export default FrontSitemapCtrl;
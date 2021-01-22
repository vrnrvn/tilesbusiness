import React from 'react';
import { Container } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
    h2 {
        text-align: center;

    }

    p {
        margin-top: 5em;
        margin-left: 2em;
        font-size: 18px;
        line-height: 2;
    }
`

const Home = () => {
    return ( 
    <Container className="text-center">
        <Styles>
        <h2>Welcome to Blue Garden Tiles</h2>
        <p>      
        Blue Garden Tiles was conceived from our passion for the <b>azulejos</b> (Portuguese tiles) that embellish streets, homes, shops, gardens, or any space that allows for the addition of these fabulous mosaics, seen throughout Portugal.

        Our founding member was introduced to this form of art through her Portuguese grandparents, inciting her interest and fascination in the practice. Around this passion, she created a small team with other artisan family members, all of whom share a love for <b>azulejos</b> and craftsmanship.

        Our tiles are hand glazed and hand painted, no stencils or imprints are used. We apply the same technique used four centuries ago, which ensures that the tiles are durable and temperature-tolerant.

        I hope you enjoy our tiles. Some were inspired by antique mosaics, some were uniquely created in our studio. Either way they were all made with love!
        </p>
        </Styles>

    </Container> );
}
 
export default Home;
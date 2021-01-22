import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Image from '../assets/Image.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${Image}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return ( 
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Blue Garden Tiles</h1>
                    <p>Hand painted tiles</p>
                </Container>

            </Jumbo>
        </Styles>
     );
}
 
export default Jumbotron;
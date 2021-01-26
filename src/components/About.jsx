import React from 'react';
import { Container } from 'react-bootstrap';
import image2 from '../assets/painting.jpg';
import styled from 'styled-components';

const Styles = styled.div`
    .header-image {
        border-radius: 50%;
        float: right;
        margin-top: 2em;
        margin-bottom: 5em;
        margin-left: 8em;
        margin-right: 3em;
    }

    h1 {
        text-align: center;

    }

    p {
        margin-top: 5em;
        margin-left: 2em;
        font-size: 18px;
        float: center;
    }
`

const About = () => {
    return ( 
        <Styles>
            <div>
                <Container className="text-center">
                <h1>About</h1>
                <img src={image2} alt="Crafting a tile" className="header-image"/>
                <p>
                We are a team of artisans and artists who have been studying and working on the techniques of hand painting tiles, specifically, <b>azulejos</b>.
We craft almost all details, from making the glaze and the cobalt wash (paint), to the difficult and messy process of tile glazing. We review and fix each and every tile individually before beginning the fun part: painting. 
 Tiles are then fired in the kiln for several hours. It is a quite long and rewarding process!
                </p>
                </Container>
            </div> 
            
        </Styles>
    );
}
 
export default About;
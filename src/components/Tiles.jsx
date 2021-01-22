import React from 'react';
import { Figure } from 'react-bootstrap';
import image3 from '../assets/tileImage.png';

const Tiles = () => {
    return ( 
    <div className="text-center">
        <h2>This is a gallery of picturs of tiles available</h2>
        <p>
            This will have several pictures of tiles, perhaps photos sent in from clients who already installed the tiles
        </p>
        <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={image3}
  />
  <Figure.Caption>
    This is the first tile, it's blue and white.
  </Figure.Caption>
        <br/>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={image3}
  />
  <Figure.Caption>
    This is the second tile, it's blue and white.
  </Figure.Caption>
        <br/>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={image3}
  />
  <Figure.Caption>
    This is the third tile, it's blue and white.
  </Figure.Caption>
        <br/>
</Figure>
    </div> 
    );
}
 
export default Tiles;
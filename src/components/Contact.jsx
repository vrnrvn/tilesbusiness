import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Contact = () => {
    return ( 
        <Container className="text-center">
        <Card>
        <Card.Body>
          <Card.Title className="text-center">Contact</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">Find Blue Garden Tiles on different platforms</Card.Subtitle>
          <Card.Text className="text-center">
            <br></br>
            Purchase tiles through Etsy:
          </Card.Text>
          <Card.Link href="https://www.etsy.com/shop/BlueGardenTiles" className="text-center">Etsy page</Card.Link>
          <Card.Text> </Card.Text>
          <Card.Text> </Card.Text>
          <br></br>
          <Card.Text className="text-center">
            E-mail Blue Garden Tiles for any question or order propositions:
          </Card.Text>
          <Card.Link href="mailto: bluegardentiles@gmail.com" className="text-center">bluegardentiles@gmail.com</Card.Link>
          <Card.Text> </Card.Text>
          <br></br>
          <Card.Text className="text-center">
            Find us on social media:
          </Card.Text>
          <Card.Link href="https://www.facebook.com/Blue-Garden-Tiles-1943399269301246/" >Facebook</Card.Link>
          <Card.Link href="https://www.instagram.com/bluegardentiles/" >Instagram</Card.Link>
        </Card.Body>     
      </Card>
      </Container>);
}
 //
export default Contact;
import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Hero = ({ children }) => (
  <Jumbotron>
    <Container>
      {children}
    </Container>
  </Jumbotron>
);

export default Hero;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Content = ({ children }) => (
  <Container className="content">
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);

export default Content;

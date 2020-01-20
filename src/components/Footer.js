import { Link } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Content from '../components/Content';
import Display from '../components/Display';

const Footer = () => (
  <React.Fragment>
    <Content>
      <Display
        className="mb-5"
        size={3}
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        Feel free to reach out.
        <div className="text-primary">Let's Talk!</div>
      </Display>

      <p
        className="lead mb-0 font-weight-semibold"
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >Email address.</p>
      <a
        className="lead"
        href="mailto:aron.jasso@gmail.com"
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >aron.jasso@gmail.com</a>
    </Content>

    <Container className="footer">
      <Row>
        <Col className="footer_branding">
          <Link className="lead" to="/">aron.</Link>
        </Col>
        <Col>
          <ul className="list-inline text-right">
            <li className="list-inline-item">
              <a
                className="lead"
                href="https://github.com/aronjasso"
                target="_blank"
                rel="noopener noreferrer"
              >GitHub</a>
            </li>
            <li className="list-inline-item">
              <a
                className="lead"
                href="https://www.linkedin.com/in/aronjasso"
                target="_blank"
                rel="noopener noreferrer"
              >LinkedIn</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Footer;

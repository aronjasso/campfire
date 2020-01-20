import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import Content from '../components/Content';
import Display from '../components/Display';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const About = () => (
  <Layout>
    <SEO title="About" />

    <Content>
      <Row
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Col xs={6} md={4} lg={3}>
          <Image
            className="mb-4"
            src="/images/profile@2x.png"
            fluid
            rounded
            width={630}
          />
        </Col>
        <Col xs={12} md={8} lg={7}>
          <Display size={2}>About Me.</Display>
          <p>
            I'm a self-taught software engineer with over eight years of web
            development experience. I am passionate about learning new things,
            building great software, and helping others achieve their goals in life
            and work.
          </p>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default About;

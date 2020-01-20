import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import Content from '../components/Content';
import Display from '../components/Display';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Work = () => (
  <Layout>
    <SEO title="Work" />

    <Content>
      <Row>
        <Col className="mb-5" sm={12} md={6}>
          <Image
            src="/images/work_rodio@2x.png"
            width={100}
          />
          <Display size={3}>Rodio</Display>
          <p>
            A messaging platform that helps connect a dispersed
            workforce with the resources they need.
          </p>
          <a
            className="lead mb-5"
            href="https://rodioapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >https://rodioapp.com</a>
          <p className="lead font-weight-semibold">More details coming soon</p>
        </Col>
        <Col>
          <Image
            src="/images/work_socialrest@2x.png"
            width={100}
          />
          <Display size={3}>SocialRest</Display>
          <p>
            SocialRest was a SaaS social analytics platform that my co-founders
            and I started back in late 2013. We raised 300k in seed funding and
            acquired a handful of customers.
          </p>
          <p className="lead font-weight-semibold">More details coming soon</p>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Work;

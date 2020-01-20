import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import Content from '../components/Content';
import Display from '../components/Display';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />

    <Hero>
      <Row noGutters={true}>
        <Col md={12} lg={7} style={{zIndex: 1}}>
          <Display id="title" size={2}>
            <div
              className="text-primary"
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >Hello there!</div>
            <div
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
              style={{'--sal-delay': '1.4s'}}
            >
              My name is <span style={{whiteSpace: 'nowrap'}}>Aron Jasso.</span>
              <br/> I'm a Software Engineer.
            </div>
          </Display>
          <p
            className="mb-5"
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease"
            style={{'--sal-delay': '3.2s'}}
          >
            I love building amazing web experiences for others to enjoy.
          </p>
        </Col>
        <Col>
          <Image
            id="hello-bg"
            fluid
            src="/images/hello_bg@2x.png"
            width={413}
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-easing="ease"
            style={{'--sal-delay': '2.2s'}}
          />
          <Image
            id="hello-aron"
            fluid
            src="/images/hello_aron@2x.png"
            width={188}
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-easing="ease"
            style={{'--sal-delay': '2.2s'}}
          />
          <Image
            id="hello-sarah"
            fluid
            src="/images/hello_sarah@2x.png"
            width={293}
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
            style={{'--sal-delay': '2.2s'}}
          />
        </Col>
      </Row>
    </Hero>

    <Content>
      <Display
        className="mb-5"
        size={3}
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
        style={{'--sal-delay': '3.2s'}}
      >My Specialties:</Display>

      <Row>
        <Col
          lg={5}
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <Image src="/images/development_icon@2x.png" width={42} />
          <p className="mb-5">
            <strong>Web Development.</strong> For the past 8 years, I’ve worked
            with dev teams to build steller web apps and solve hard problems for
            our users. Using technolegy such as javascript, react, python, ruby,
            graphql, and many others.
          </p>
        </Col>
        <Col
          lg={{ span: 5, offset: 1 }}
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <Image src="/images/design_icon@2x.png" width={42} />
          <p>
            <strong>Interface Design.</strong> The other half of development is
            design, and I believe that good design is good business. Over the
            years, I've acquired knowledge and skill to create great user
            interfaces that are not only beautiful but functional.
          </p>
        </Col>
      </Row>
    </Content>

    <Content>
      <Display
        size={3}
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        Featured Work.
        <div className="text-primary">Rodio.</div>
      </Display>
      <Row
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Col className="text-center" sm={{span: 10, offset: 1}}>
          <Image
            id="featured-work"
            src="/images/feature_rodio@2x.png"
            fluid
            width={1290}
          />
        </Col>
      </Row>
      <Row
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Col className="text-center" sm={{ span: 6, offset: 3 }}>
          <p className="mb-1">
            <strong>Rodio</strong> is a messaging platform that helps connect a
            dispersed workforce with the resources they need.
          </p>
          <p className="lead font-weight-semibold">More details coming soon</p>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default IndexPage;

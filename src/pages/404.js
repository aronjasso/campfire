import React from 'react';

import Content from '../components/Content';
import Display from '../components/Display';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />

    <Content>
      <Display size={3}>Page was not found.</Display>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </Layout>
);

export default NotFoundPage;

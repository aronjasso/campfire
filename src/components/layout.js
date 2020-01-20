import React, { Fragment } from 'react';

import 'modern-normalize/modern-normalize.css';
import '../scss/theme.scss';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;

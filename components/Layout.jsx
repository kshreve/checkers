import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';


const Layout = props => (
  <Fragment>
    <Header />
    {props.children}
  </Fragment>
);
Layout.displayName = 'Layout';
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Layout from 'components/Layout';
import Checkerboard from 'components/Checkerboard';

const Checkers = ({ size }) => (
  <Fragment>
    <Head>
      <title>{size} Checkers</title>
    </Head>
    <Layout>
      <div className="content">
        <Checkerboard size={size} />
      </div>
    </Layout>
  </Fragment>
);
Checkers.displayName = 'Checkers';
Checkers.propTypes = {
  size: PropTypes.number,
};
Checkers.defaultProps = {
  size: 8,
};

Checkers.getInitialProps = async (context) => {
  const { size } = context.query;

  return { size: parseInt(size, 10) };
};

export default Checkers;

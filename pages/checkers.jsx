import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import Checkerboard from 'components/Checkerboard';

const Checkers = ({ size }) => (
  <Fragment>
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

  return { size };
};

export default Checkers;

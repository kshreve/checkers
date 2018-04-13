import React, { Fragment } from 'react';

import Layout from 'components/Layout';

const giraffe = require('assets/giraffe.jpg');

const Index = () => (
  <Fragment>
    <Layout>
      <p className="content">Hello Checkers</p>
      <img className="full-bleed" alt="giraffe" src={giraffe} />
    </Layout>
  </Fragment>
);
Index.displayName = 'Index';

export default Index;

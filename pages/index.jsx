import React, { Fragment } from 'react';

import Layout from 'components/Layout';
import Checkerboard from 'components/Checkerboard';

const Index = () => (
  <Fragment>
    <Layout>
      <div className="content">
        <p>Hello Checkers</p>
        <Checkerboard size={10} />
      </div>
    </Layout>
  </Fragment>
);
Index.displayName = 'Index';

export default Index;

import React, { Fragment } from 'react';

import Layout from 'components/Layout';
import Checkerboard from 'components/Checkerboard';

const Index = () => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .heading {
        text-align: center;
      }
    `}
    </style>
    <Layout>
      <div className="content">
        <h1 className="heading">Hello Checkers</h1>
        <Checkerboard size={10} />
      </div>
    </Layout>
  </Fragment>
);
Index.displayName = 'Index';

export default Index;

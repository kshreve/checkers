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
        <Checkerboard size={2} />
        <Checkerboard size={4} />
        <Checkerboard size={6} />
        <Checkerboard size={8} />
        <Checkerboard size={10} />
        <Checkerboard size={16} />
      </div>
    </Layout>
  </Fragment>
);
Index.displayName = 'Index';

export default Index;

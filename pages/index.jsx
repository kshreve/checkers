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
        <Checkerboard size={8} />
      </div>
    </Layout>
  </Fragment>
);
Index.displayName = 'Index';

export default Index;

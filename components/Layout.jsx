import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import reset from 'assets/reset';
import Header from 'components/Header';

const Layout = props => (
  <Fragment>
    <Head>
      <style key="reset">
        ${reset}
      </style>
    </Head>
    {/* language=SCSS */}
    <style jsx global>{`
      .grid,
      .align-full {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: [full-start] minmax(3em, 1fr) [wide-start] minmax(0, 1fr) [content-start] minmax(0, 55rem) [content-end] minmax(0, 1fr) [wide-end] minmax(1em, 1fr) [full-end];
      }

      .main {
        background-color: white;
        position: relative;
        margin: 0 auto;
        padding: 1em 0;
      }

      .full-bleed {
        width: 100%;
        grid-column: full;
      }

      .content {
        grid-column: content;
        text-align: center;
      }

      .sidebar {
        grid-column: full-start/wide-start;
      }
    `}
    </style>
    <section className="main grid">
      <Header className="sidebar" />
      {props.children}
    </section>
  </Fragment>
);
Layout.displayName = 'Layout';
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

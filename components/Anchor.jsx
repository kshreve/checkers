import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Anchor = ({ to, text, ...rest }) => (
  <Fragment>
    <style jsx>{`
      a {
          margin-right: 15px;
      }
    `}
    </style>
    <Link prefetch href={to}>
      <a href={to} {...rest}>{text}</a>
    </Link>
  </Fragment>
);

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Anchor;

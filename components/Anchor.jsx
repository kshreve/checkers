import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Anchor = ({
  to, text, as, ...rest
}) => (
  <Fragment>
    <style jsx>{`
      a {
          margin-right: 15px;
      }
    `}
    </style>
    <Link prefetch href={to} as={as}>
      <a href={as || to} {...rest}>{text}</a>
    </Link>
  </Fragment>
);

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  as: PropTypes.string,
};
Anchor.defaultProps = {
  as: null,
};

export default Anchor;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { primaryColor, secondaryColor } from 'assets/colors';

const Square = ({ row }) => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .square {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${primaryColor};
        color: ${secondaryColor};
        text-align: center;
        padding: 50% 0;
      }

      .square:nth-child(2n+${row}) {
        background: ${secondaryColor};
        color: ${primaryColor};
      }
  `}</style>
    <div className="square" />
  </Fragment>
);
Square.displayName = 'Square';
Square.propTypes = {
  row: PropTypes.number.isRequired,
};

export default Square;

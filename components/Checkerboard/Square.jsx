import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { gridLines, primaryColor, secondaryColor } from 'assets/colors';

const Square = ({ column, row }) => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .square {
        background: ${primaryColor};
        color: ${secondaryColor};
        text-align: center;
        padding: 50% 0;
        border: 1px solid ${gridLines};
        grid-column: ${column + 1};
        grid-row: ${row + 1};
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
  column: PropTypes.number.isRequired,
};

export default Square;

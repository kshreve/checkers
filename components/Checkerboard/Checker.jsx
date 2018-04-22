import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { primaryColor, secondaryColor } from 'assets/colors';


const Checker = ({
  row, column, firstPlayer, secondPlayer,
}) => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .checker {
        border-color: white;
        border-style: solid;
        border-width: medium;
        border-radius: 100px;
        grid-column: ${column + 1};
        grid-row: ${row + 1};

        background-color: ${firstPlayer && primaryColor};
        background-color: ${secondPlayer && secondaryColor};
      }
    `}
    </style>
    <div className="checker" />
  </Fragment>
);
Checker.displayName = 'Checker';
Checker.defaultProps = {
  firstPlayer: true,
  secondPlayer: false,
};
Checker.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  firstPlayer: PropTypes.bool,
  secondPlayer: PropTypes.bool,
};

export default Checker;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Checker = ({ row, column }) => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .checker {
        background-color: white;
        border-radius: 100px;
        grid-column: ${column + 1};
        grid-row: ${row + 1};
      }
    `}
    </style>
    <div className="checker" />
  </Fragment>
);
Checker.displayName = 'Checker';
Checker.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
};

export default Checker;

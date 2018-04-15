import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const primaryColor = 'white';
const secondaryColor = 'black';

const Square = ({ index, row }) => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .square {
        min-width: 30px;
        min-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .square-even {
        text-align: center;
        background: ${index % 2 === 0 ? primaryColor : secondaryColor};
        color: ${index % 2 === 0 ? secondaryColor : primaryColor};
      }

      .square-odd {
        text-align: center;
        background: ${index % 2 === 0 ? secondaryColor : primaryColor};
        color: ${index % 2 === 0 ? primaryColor : secondaryColor};
      }
    `}
    </style>
    <div className={`square ${row % 2 === 0 ? 'square-even' : 'square-odd'}`}>
      {index}
    </div>
  </Fragment>
);
Square.displayName = 'Square';
Square.propTypes = {
  index: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
};

export default Square;

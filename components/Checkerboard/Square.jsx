import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const primaryColor = 'white';
const secondaryColor = 'black';

const Square = ({ index, row }) => (
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
      }

      .square:nth-child(2n+${row}) {
        background: ${secondaryColor};
        color: ${primaryColor};
      }
  `}</style>
    <div className="square">
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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Square = ({ index }) => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .square {
        text-align: center;
        background: ${index % 2 === 0 ? 'black' : 'white'};
        color: ${index % 2 === 0 ? 'white' : 'black'};
      }
    `}
    </style>
    <div className="square">
      {index}
    </div>
  </Fragment>
);
Square.displayName = 'Square';
Square.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Square;

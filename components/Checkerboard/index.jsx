/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from 'components/Checkerboard/Square';
import { gridLines } from 'assets/colors';

const makeBoard = (size) => {
  const arr = [...new Array(size * size)];

  return arr.map((item, index) => (<Square
    key={index}
    row={Math.floor(index / size)}
  />));
};

const Checkerboard = ({ size }) => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      .checkerboard {
        display: grid;
        grid-template-columns: repeat(${size}, 1fr);
        margin: 0 auto 10px auto;
        border: 2px solid ${gridLines};
        max-width: 640px;
      }
    `}
    </style>
    <div className="checkerboard">
      {makeBoard(size)}
    </div>
  </Fragment>
);
Checkerboard.displayName = 'Checkerboard';
Checkerboard.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Checkerboard;

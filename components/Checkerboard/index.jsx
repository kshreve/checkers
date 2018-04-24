/* eslint-disable react/no-array-index-key */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from 'components/Checkerboard/Square';
import Checker from 'components/Checkerboard/Checker';
import { gridLines } from 'assets/colors';

const addSquares = (gridArray, size) => gridArray.map((item, index) => (<Square
  key={index}
  column={index % size}
  row={Math.floor(index / size)}
/>));

const addCheckers = (gridArray, size) => gridArray.map((item, index) => {
  let checker = null;
  let rowsOfCheckers = 3;

  if (size <= 6 && size > 4) {
    rowsOfCheckers = 2;
  } else if (size === 4) {
    rowsOfCheckers = 1;
  }

  const row = Math.floor(index / size);
  const firstPlayer = (row < rowsOfCheckers);
  const secondPlayer = (row >= size - rowsOfCheckers);

  if (
    (firstPlayer || secondPlayer) &&
    ((row % 2 === 0 && index % 2) ||
      (row % 2 === 1 && index % 2 === 0))
  ) {
    checker = (<Checker
      key={index}
      firstPlayer={firstPlayer}
      secondPlayer={secondPlayer}
      column={index % size}
      row={row}
    />);
  }

  return checker;
});

const getInitialBoard = (size) => {
  const gridArray = [...new Array(size * size)];

  return {
    checkerboard: addSquares(gridArray, size),
    checkers: addCheckers(gridArray, size),
  };
};


export default class Checkerboard extends Component {
  static displayName = 'Checkerboard';
  static propTypes = {
    size: PropTypes.number.isRequired,
  };

  static getDerivedStateFromProps({ size }, prevState) {
    let state = {};

    if (prevState.size !== size) {
      state = Object.assign({}, state, {
        ...getInitialBoard(size),
        size,
      });
    }

    return state;
  }

  constructor(props) {
    super(props);

    this.state = {
      ...getInitialBoard(props.size),
      size: props.size,
    };
  }

  render() {
    const { checkerboard, checkers, size } = this.state;

    return (
      <Fragment>
        {/* language=SCSS */}
        <style jsx>{`
          .checkerboard-grid {
            display: grid;
            grid-template-columns: repeat(${size}, 1fr);
            margin: 0 auto 10px auto;
            border: 2px solid ${gridLines};
            max-width: 640px;
          }
        `}
        </style>
        <div className="checkerboard-grid">
          {checkerboard}
          {checkers}
        </div>
      </Fragment>
    );
  }
}

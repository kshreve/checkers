/* eslint-disable react/no-array-index-key */
import React, { Component, Fragment } from 'react';
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

export default class Checkerboard extends Component {
  static displayName = 'Checkerboard';
  static propTypes = {
    size: PropTypes.number.isRequired,
  };

  static getDerivedStateFromProps({ size }, prevState) {
    let state = {};

    if (prevState.size !== size) {
      state = Object.assign({}, state, {
        checkerboard: makeBoard(size),
        size,
      });
    }

    return state;
  }

  constructor(props) {
    super(props);

    this.state = {
      checkerboard: makeBoard(props.size),
      size: props.size,
    };
  }

  render() {
    const { checkerboard, size } = this.state;

    return (
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
          {checkerboard}
        </div>
      </Fragment>
    );
  }
}

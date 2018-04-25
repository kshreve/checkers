/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { primaryColor, secondaryColor } from 'assets/colors';
import MousePositionContext from 'components/Checkerboard/MousePositionContext';

class Checker extends Component {
  static displayName = 'Checker';
  static propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    firstPlayer: PropTypes.bool.isRequired,
    secondPlayer: PropTypes.bool.isRequired,
  };

  state = {
    floating: false,
  };

  onClick = () => {
    this.setState({
      floating: !this.state.floating,
    });
  };

  render() {
    const {
      row, column, firstPlayer, secondPlayer,
    } = this.props;
    const { floating } = this.state;

    let backgroundColor = null;

    if (firstPlayer) {
      backgroundColor = primaryColor;
    } else if (secondPlayer) {
      backgroundColor = secondaryColor;
    }

    return (
      <MousePositionContext.Consumer>
        {({ clientX, clientY }) => (
          <Fragment>
            {/* language=SCSS */}
            <style jsx>{`
              .checker {
                border-color: white;
                border-style: solid;
                border-width: medium;
                border-radius: 100px;
                background-color: ${backgroundColor};
                padding: 45% 0;

                ${floating ? (`
                  background-color: pink;
                  position: absolute;
                  top: ${clientY}px;
                  left: ${clientX}px;
                  width: 100px;
                  height: 100px;
                  padding: 0;
                `) : (`
                  grid-column: ${column + 1};
                  grid-row: ${row + 1};
                `)}
              }
            `}
            </style>
            <div className="checker" role="button" onClick={this.onClick} onMouseMove={this.onMouseMove} />
          </Fragment>
        )}
      </MousePositionContext.Consumer>
    );
  }
}

export default Checker;

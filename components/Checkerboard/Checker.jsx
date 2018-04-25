import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { primaryColor, secondaryColor } from '../../assets/colors';

class Checker extends Component {
  static displayName = 'Checker';
  static propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    firstPlayer: PropTypes.bool.isRequired,
    secondPlayer: PropTypes.bool.isRequired,
  };

  render() {
    const {
      row, column, firstPlayer, secondPlayer,
    } = this.props;

    let backgroundColor = null;
    if (firstPlayer) {
      backgroundColor = primaryColor;
    } else if (secondPlayer) {
      backgroundColor = secondaryColor;
    }

    return (
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

            background-color: ${backgroundColor};
          }
        `}
        </style>
        <div className="checker">
          &nbsp;
        </div>
      </Fragment>
    );
  }
}

export default Checker;

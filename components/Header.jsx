import React, { Fragment } from 'react';
import Anchor from 'components/Anchor';

const Header = props => (
  <Fragment>
    <header {...props}>
      <Anchor to="/" text="Home" />
    </header>
  </Fragment>
);
Header.displayName = 'Header';

export default Header;

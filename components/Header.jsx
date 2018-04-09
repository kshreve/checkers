import React, { Fragment } from 'react';
import Anchor from 'components/Anchor';

const Header = () => (
  <Fragment>
    <Anchor to="/" text="Home" />
  </Fragment>
);
Header.displayName = 'Header';

export default Header;

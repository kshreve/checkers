import React, { Fragment } from 'react';
import Anchor from 'components/Anchor';

const Header = () => (
  <Fragment>
    <Anchor to="/" text="Home" />
    <Anchor to="/about" text="About" />
    <Anchor to="/blog" text="Blog" />
    <Anchor to="/batman" text="Batman" />
  </Fragment>
);
Header.displayName = 'Header';

export default Header;

import React, { Fragment } from 'react';

import Anchor from 'components/Anchor';

const Header = props => (
  <Fragment>
    {/* language=SCSS */}
    <style jsx>{`
      header {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
    `}
    </style>
    <header {...props}>
      <Anchor to="/" text="Home" />
      <Anchor to="/checkers?size=4" as="/c/4" text="4" />
      <Anchor to="/checkers?size=6" as="/c/6" text="6" />
      <Anchor to="/checkers?size=10" as="/c/10" text="10" />
    </header>
  </Fragment>
);
Header.displayName = 'Header';

export default Header;

// Header.js

import React from 'react';

const Header = ({ currentPage }) => {
  return (
    <div className="header">
      <h1>{currentPage}</h1>
    </div>
  );
};

export default Header;


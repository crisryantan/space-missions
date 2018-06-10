import React from 'react';
import DropdownImg from 'images/down-chevron.svg';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="space-savy">SPACE SAVY</div>
    <div className="discover-space-missions">Discover Space Missions</div>
    <div className="dropdown-img">
      <a href="#search-results">
        <img src={DropdownImg} alt="" />
      </a>
    </div>
  </div>
);

export default Header;

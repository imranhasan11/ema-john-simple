
import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

function Header(props) {
  return (
      <nav className='header'>
          <img src={logo} alt="" />
          <div>
          <a href="/shop">Shop</a>
          <a href="/order">Orders</a>
          <a href="/inventory">Inventory</a>
          <a href="login">login</a>
          </div>
          
          
          
      </nav>
  );
}

export default Header;
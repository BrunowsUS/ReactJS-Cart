// import React from 'react';
import './Header.css';
import Searchbar from '../SearchBar/Searchbar';
import CartButton from '../CartButton/CartButton';


const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
          <Searchbar/>
          <CartButton/>
        </div>
    </header>
  );
};

export default Header;
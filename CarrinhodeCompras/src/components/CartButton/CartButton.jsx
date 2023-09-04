// import React from 'react';
import { BiCartAdd } from 'react-icons/bi';
import './CartButton.css';

const CartButton = () => {
  return (
    <button type='button' className='cart__button'>
        <BiCartAdd/>
        <span className='cart-status'>1</span>
    </button>

  )
}

export default CartButton;

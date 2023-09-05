import React from 'react'
import './ProductCard.css';
import { CgShoppingBag }  from 'react-icons/cg';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';

const ProductCard = ( {data} ) => {

  const {title, thumbnail, price} = data;



  return (
    <section className="product-card">
        <img 
        alt='product' 
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        className="card__image"></img>
        <div className="card__infos">
            <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
            <h2 className="card__title">{data.title}</h2>
        </div>
            <button 
            type='button' 
            className='button__addcart'>
                <CgShoppingBag></CgShoppingBag>
            </button>
    </section>
  )
}

ProductCard.propTypes = {
  data: propTypes.shape({}), 
}.isRequired ;

export default ProductCard;

// import React from 'react;'
import './ProductCard.css';
import { CgShoppingBag }  from 'react-icons/cg';

const ProductCard = () => {
  return (
    <section className="product-card">
        <img alt='product' src='https://http2.mlstatic.com/D_790522-MLA47782243619_102021-W.jpg' className="card__image"></img>
        <div className="card__infos">
            <h2 className="card__price">R$ 200</h2>
            <h2 className="card__title">Nome</h2>
        </div>
            <button type='button' className='button__addcart'>
                <CgShoppingBag></CgShoppingBag>
            </button>
    </section>
  )
}

export default ProductCard;
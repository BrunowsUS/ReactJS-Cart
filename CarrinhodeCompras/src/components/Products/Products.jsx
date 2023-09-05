import { useEffect, useState } from 'react';
import './Products.css';
import fetchProducts from '../../API/fetchproducts';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts('iphone').then((response) => {
            setProducts(response);
        });
    },
    []);

    console.log(products);
  return (
    <section className='products container'>
        {
          products.map((product) => <ProductCard key={product.id} data={product} />)
        }
    </section>

  );
};

export default Products;
import { useContext, useState } from 'react';
import './Searchbar.css';
import { BiSearch } from 'react-icons/bi';
import fetchProducts from '../../API/fetchProducts';
import AppContext from '../../context/AppContext';

const Searchbar = () => {

  const { setProducts, setLoading } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
 
    setProducts(products);
    setSearchValue('');
    setLoading(false);
    };


  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <input 
            required
            type='search' 
            value={ searchValue}
            placeholder='buscar produtos'
            className='search__input'
            onChange={({ target }) => setSearchValue(target.value)}
            ></input>
        <button 
            type='submit' 
            value='submit' 
            className='search__button'>
              <BiSearch />
            </button>
  </form>
  )
}

export default Searchbar;

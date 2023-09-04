import { useState } from 'react';
import './Searchbar.css';
import { BiSearch } from 'react-icons/bi';

const Searchbar = () => {

  const [searchValue, setSearchValue] = useState("");

  return (
    <form className='searchbar'>
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

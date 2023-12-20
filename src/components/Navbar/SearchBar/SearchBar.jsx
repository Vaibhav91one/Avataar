import './SearchBar.scss'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

export const SearchBar = () => {
  // const [isSearchVisible, setIsSearchVisible] = useState(false);
  // const toggleSearch = () => {
  //   setIsSearchVisible(!isSearchVisible);
  // };  
  return (
      <>
      <div className='SearchContainer'>
      <FaSearch className='SearchIcon'/>
      {/* <div className={`search-overlay ${isSearchVisible ? 'visible' : ''}`}>
      <input type="text" placeholder="Search..." />
        <button onClick={toggleSearch}>Close</button>
      </div> */}
        <input className="SearchBox" type="text" placeholder="Search something"/>
      </div>
       
      </>
    )
  }

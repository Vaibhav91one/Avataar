import './Navbar.scss';
import { SearchBar } from './SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";

const menuItems = ['Home', 'Electronics', 'Books', 'Music', 'Movies', 'Clothing', 'Games'];
const dropdownItems = ['Games', 'Clothing', 'Movies', 'Music', 'Books', 'Electronics', 'Home', 'TV series'];

export const Navbar = () => {
  const DropdownMenu = () => {
    const DropdownItem = (props) => {
      return (
        <li>
          <a href="#" className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
          </a>
        </li>
      );
    }
    return (
      <>
        <div className='dropdown-menu'>
          <ul>
            {dropdownItems.map((item, index) => (<DropdownItem> {item} </DropdownItem>))}
          </ul>
        </div>
      </>
    )
  }

  return (
    <>
      <nav className='nav-container'>
        <div className='logo'> <GiThreeLeaves /> <h1>ICON</h1> </div>

        <ul className='desktop-menu'>
          {menuItems.map((item, index) => (<NavItem name={item} />))}
          <NavItem name='More' icon={<FaAngleDown />}>
            <DropdownMenu  />
          </NavItem>
        </ul>
        <SearchBar className='Search' />
      </nav>
    </>
  )
}

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">

      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.name}
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );

}

import './Navbar.scss';
import { SearchBar } from './SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";

const menuItems = ['Home', 'Electronics', 'Books', 'Music', 'Movies', 'Clothing', 'Games'];
const dropdownItems = ['Games', 'Clothing', 'Movies', 'Music', 'Books', 'Electronics', 'Home', 'TV series'];

export const Navbar = () => {
  // const [menuItems, setMenuItems] = useState(initialMenuItems);
  // const [dropdownItems, setDropdownItems] = useState(initialDropdownItems);
  // const breakpoints = [1000,1450]; 

  // const handleResize = () => {
  //   const width = window.innerWidth;

  //   if(width <= breakpoints[0]){
  //     if(menuItems.length > 1){
  //       for(var i = 0; i < 2; i++){
  //         const firstItem = menuItems.pop();
  //         dropdownItems.unshift(firstItem)
  //       }
  //     }
  //   }
  //   else if(width <= breakpoints[1]){
  //     if(menuItems.length > 1){
  //       for(var i = 0; i < 2; i++){
  //         const firstItem = menuItems.pop()
  //         dropdownItems.unshift(firstItem)
  //       }
  //     }

  //   }
  //   else if(breakpoints[0] < width < breakpoints[0] || width > breakpoints[1] ){
  //     for(var i = 0; i < 2; i++){
  //       const firstItem = dropdownItems.pop()
  //       menuItems.push(firstItem)
  //     }
  //   }

  //   setDropdownItems([...dropdownItems]);
  //   setMenuItems([...menuItems]);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   }; }, [menuItems, dropdownItems]);


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
            <DropdownMenu />
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

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SearchContext from './Context';

//Navigates to page and updates path based upon click. 
const Nav = () => {
  const { updatePath } = useContext(SearchContext);

    return ( 
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats' onClick={() => updatePath('cats')}>Cats</NavLink></li>
          <li><NavLink to='/dogs' onClick={() => updatePath('dogs')}>Dogs</NavLink></li>
          <li><NavLink to="/dinos" onClick={() => updatePath('dinos')}>Dinos</NavLink></li>
        </ul>
      </nav>
      
    );
}
 
export default Nav;
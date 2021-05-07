import React, { useState } from 'react';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../Styles/header.css';
import SearchBar from './SearchBar';

function Header({ title }) {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);

  function searchBar() {
    setDisplaySearchBar(!displaySearchBar)
  }

  return (
    <div>
      <ModalHeader className="main-header-container">
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="icone de perfil"
          />
        </Link>
        <h1>{ title }</h1>
        <button
          type="button"
          onClick={ searchBar }
        >
          <img src={ searchIcon } alt="icone da barra de busca" />
        </button>
      </ModalHeader>
      {(displaySearchBar) && <SearchBar /> }
    </div>
  )
}

export default Header;

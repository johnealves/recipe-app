import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchRecipiesApi, searchDrinksApi } from '../action';
import '../Styles/searchBar.css';

function SearchBar({ pageType, searchRecipies, searchDrinks }) {
  const [searchRadio, setSearchRadio] = useState('ingredient');
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = ({ target }) => {
    setSearchRadio(target.value);
  }

  const handleInput = ({ target: { value } }) => {
    setSearchInput(value)
  }

  const handleButton = () => {
    if (!searchInput.length) {
      return null
    }
    if (searchRadio === 'firstLetter' && searchInput.length !== 1) {
      alert('Please, use 1 letter');
    } else {
      if(pageType === 'food') {
        searchRecipies(searchRadio, searchInput);
      } else {
        searchDrinks(searchRadio, searchInput)
      }
    }
  }

  return (
    <Form className="search-bar-container">
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3 radio-container"onChange={ handleSearch }>
          <Form.Check 
            type={type}
            id={`Ingredient`}
            label={`Ingredient`}
            name="search-radio"
            value="ingredient"
          />
          <Form.Check 
            type={type}
            id={'name'}
            label={'name'}
            name="search-radio"
            value="name"
          />
          <Form.Check 
            type={type}
            id={`First letter`}
            label={`First letter`}
            name="search-radio"
            value="firstLetter"
          />
        </div>
      ))}
      <InputGroup className="mb-3">
        <FormControl
          // placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={ handleInput }
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={ handleButton }
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

const mapStateToProps = ({ recipeReducer }) => ({
  pageType: recipeReducer.pageType,
})

const mapDispatchToProps = (dispatch) => ({
  searchRecipies: (radio, value) => dispatch(searchRecipiesApi(radio, value)),
  searchDrinks:(radio, value) => dispatch(searchDrinksApi(radio, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

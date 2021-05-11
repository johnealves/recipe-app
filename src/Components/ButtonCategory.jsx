import { func, string } from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonCategory({ title, onclick }) {
  return (
    <Button
      type="button"
      data-testid={ `${title}-category-filter` }
      onClick={ () => onclick(title) }
    >
      { title }
    </Button>
  );
}

ButtonCategory.propTypes = {
  title: string.isRequired,
  onclick: func.isRequired,
};

export default ButtonCategory;

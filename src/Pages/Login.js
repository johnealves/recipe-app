import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../Styles/Login.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setEmailLogin } from '../action';

function Login({
   setEmailLogin,
   emailLogin,
  }) {
  // const [passwordLogin, setPasswordLogin] = useState();
  const [disable, setDisable] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  function checkValidation() {
    if (validEmail && validPassword) {
      setDisable(false);
    }
  }

  function handleEmail({ target: { value } }) {
    setEmailLogin(value)
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = regex.test(value);
    setValidEmail(isValid);
  }

  function handlePassword({ target: { value } }) {
    // setPasswordLogin(value);
    const minLength = 6;
    if (value.length >= minLength) {
      setValidPassword(true);
    }
  }

  useEffect(() => {
    checkValidation();
  });

  function handleClick() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: emailLogin }));
    <Redirect to="/comidas " />
  }

  return (
    <div className="login-container">
      <h1>Trybe Recipies</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          data-testid="email-input"
          onChange={ handleEmail }
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
          data-testid="password-input"
          onChange={ handlePassword }
        />
      </InputGroup>
      <Link to="/comidas">  
        <Button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disable }
          onClick={ () => handleClick() }
        >
          Entrar
        </Button>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setEmailLogin: (email) => dispatch(setEmailLogin(email))
})

const mapStateToProps = ({ loginReducer  }) => ({
  emailLogin: loginReducer.emailLogin,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
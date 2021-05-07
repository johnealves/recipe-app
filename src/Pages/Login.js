import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../Styles/Login.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { GoLock } from 'react-icons/go';

function Login() {
  const [emailLogin, setEmailLogin] = useState('')
  // const [passwordLogin, setPasswordLogin] = useState();
  const [disable, setDisable] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  function checkValidation() {
    if (validEmail && validPassword) {
      setDisable(false);
    } else {
      setDisable(true)
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
    } else {
      setValidPassword(false);
    }
  }

  useEffect(() => {
    checkValidation();
  });

  function handleClick() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: emailLogin }));
    <Redirect to="/foods" />
  }

  return (
    <div className="login-container">
      <h1>Trybe Recipies</h1>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1"><AiOutlineUser className="icon"/></InputGroup.Text>
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
          <InputGroup.Text id="basic-addon2"><GoLock className="icon" /></InputGroup.Text>
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
      <Link to="/foods">  
        <Button
          // href="/comidas"
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

export default Login;
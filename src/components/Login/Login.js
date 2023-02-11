import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { QuotesClient } from '../../axios/QuotesClient'; 

//Styled components
const LoginStyle = styled.section`
  padding-top: 2rem;
`;

const LoginTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;

const LoginForm = styled(Form)`
  font-size: 2rem;
`;

const AlertStyle = styled(Alert)`
  font-size: 2rem;
`;

const ButtonStyle = styled(Button)`
  font-size: 1.5rem;
  width: 100%;  
`;

const FormLink = styled(Link)`
  color: #000;
  font-weight: 600;
  transition: all .25s linear;

  &:hover {
        color: #f48225 !important;
    }
`;


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const usernameEl = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Checked
    setSuccess(true);
    let myToken = [{ token: "token here" }]
    localStorage.setItem('token', JSON.stringify(myToken));
    console.log('Login...');
    setTimeout(() => {
      window.location.replace('/');
    }, 3000);
  }

  const handleLogout = () => {
    if (window.confirm('Are you want logout ?') === true) {
      localStorage.removeItem('token');
      console.log('Logout...');
      window.location.replace('/');
    }
  }

  const isLoggedIn = localStorage.getItem('token');

  if (!isLoggedIn) {
    return (
      <>
        <section>

          <LoginTitle> Login </LoginTitle>
          {success ? (
            <LoginStyle>
              <Container>
                <AlertStyle variant='primary'>
                  You are logged in !
                  <p className='mt-2'>
                    <FormLink to='/'>3s Go to Home</FormLink>
                  </p>
                </AlertStyle>
              </Container>
            </LoginStyle>
          ) : (
            <LoginStyle>
              <Container>
                <LoginForm
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      ref={usernameEl}
                      type="text"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                      required
                    />
                  </Form.Group>
                  <ButtonStyle variant="primary" type="submit" className='mb-3'>
                    Submit
                  </ButtonStyle>
                  <Form.Group className="mb-3">
                    <p>
                      Need an Account ?<br />
                      <span>
                        <FormLink to='/register'>Sign Up</FormLink>
                      </span>
                    </p>
                  </Form.Group>
                </LoginForm>
              </Container>
            </LoginStyle>
          )
          }
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>

          <LoginStyle>
            <Container>
              <AlertStyle variant='primary'>
                You are logged in !
                <p className='mt-2'>
                  <FormLink to='/'> Go to Home</FormLink>
                </p>
              </AlertStyle>
              <ButtonStyle variant="danger" className='mb-3' onClick={handleLogout}>
                Logout
              </ButtonStyle>
            </Container>
          </LoginStyle>
        </section>
      </>
    );
  }
}

export default Login
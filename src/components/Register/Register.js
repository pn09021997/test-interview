import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

//Styled components
const RegisterStyle = styled.section`
  padding-top: 2rem;
`;

const RegisterTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;

const RegisterForm = styled(Form)`
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


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setPrepassword] = useState('');
  const [success, setSuccess] = useState(false);

  const usernameEl = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Checked
    if (password !== rePassword) {
      console.log('Register Fail !');
      e.stopPropagation();
    } else {
      setSuccess(true);
      console.log('Register...');
      setTimeout(() => {
        window.location.replace('/');
      }, 3000);
    }
  }

  return (
    <>
      <section>
        <RegisterTitle>
          Register
        </RegisterTitle>
        {success ? (
          <RegisterStyle>
            <Container>
              <AlertStyle variant='primary'>
                Register successfully !
                <p className='mt-2'>
                  <FormLink to='/'>3s Go to Home</FormLink>
                </p>
              </AlertStyle>
            </Container>
          </RegisterStyle>
        ) : (
          <RegisterStyle>
            <Container>
              <RegisterForm
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

                <Form.Group className="mb-3" controlId="formRePassword">
                  <Form.Label>Re-Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={rePassword}
                    placeholder="re-password"
                    onChange={(e) => { setPrepassword(e.target.value) }}
                    required
                  />
                </Form.Group>
                <ButtonStyle variant="primary" type="submit" className='mb-3'>
                  Submit
                </ButtonStyle>
                <Form.Group className="mb-3">
                  <p>
                    I am are ready have an Account !
                    <FormLink to='/login'>Sign In</FormLink>
                  </p>
                </Form.Group>
              </RegisterForm>
            </Container>
          </RegisterStyle>
        )}
      </section>
    </>
  );
}

export default Register
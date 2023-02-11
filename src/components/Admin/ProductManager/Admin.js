import React from 'react';
import Container from 'react-bootstrap/Container';
import CreateExpense from './CreateExpense';

const Admin = () => {
  return (
    <>
      <section>
        <Container>
          <CreateExpense />
        </Container>
      </section>
    </>
  )
}

export default Admin;

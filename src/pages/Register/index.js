import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container, Page, SubmitButton, Info } from './styles';

import logo from '../../assets/logo.png';

export default function Register() {
  function handleSubmit({ name, email, password }) {
    console.log(name, email, password);
  }

  return (
    <Page>
      <Container>
        <Info>
          <img src={logo} alt="B Beers Logo" />
          <p>
            Make your account.
            <br /> Discover a new beer right next to you
          </p>
          <Link to="/">Back to home page</Link>
        </Info>

        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" name="name" />
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <SubmitButton> Register </SubmitButton>
        </Form>
      </Container>
    </Page>
  );
}

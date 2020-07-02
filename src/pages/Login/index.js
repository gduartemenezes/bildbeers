import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, Page, SubmitButton, Info } from './styles';

import logo from '../../assets/logo.png';

export default function Login() {
  function handleSubmit({ email, password }) {
    console.log(email, password);
  }

  return (
    <Page>
      <Container>
        <Info>
          <img src={logo} alt="B Beers Logo" />
          <p>
            Join other Brewers.
            <br /> Discover a new beer right next to you
          </p>
          <Link to="/">Back to home page</Link>
        </Info>

        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <SubmitButton> Log in </SubmitButton>
        </Form>
      </Container>
    </Page>
  );
}

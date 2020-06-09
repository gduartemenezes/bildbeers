import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Page, Container, Form, Input, SubmitButton, Info } from './styles';

import logo from '../../assets/logo.png';

export default class Register extends Component {
  render() {
    return (
      <Page>
        <Container>
          <Info>
            <img src={logo} alt="B Beers Logo" />

            <p>
              Make your account
              <br /> Discover a new beer right next to you
            </p>
            <Link to="/">Back to home page.</Link>
          </Info>

          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <SubmitButton> Register </SubmitButton>
          </Form>
        </Container>
      </Page>
    );
  }
}

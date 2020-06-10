import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, ActionBox, Header } from './styles';

import logo from '../../assets/logo_transparent_1.png';

export default function Main() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo"/>
        <ul className="list-actions">
          <li>About us</li>
          <li>Trending Beers</li>
          <li>Search</li>
        </ul>
        <ul className="list-user">
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </Header>
      <h1>
        Say goodbye to the same old beers.
        <br />
        It's time to discover.
      </h1>
      <ActionBox>
        <Link to="/register">Join Now</Link>
        <Link to="/popular" className="btn-beers">
          Popular Beers
        </Link>
      </ActionBox>
    </Container>
  );
}

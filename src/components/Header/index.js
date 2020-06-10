import React from 'react';

import logo from '../../assets/logo.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <ul className="list-actions">
        <li>About us</li>
        <li>Trending Beers</li>
        <li>Search</li>
      </ul>
      <ul className="list-user">
        <li>Login</li>
        <li>Sign up</li>
      </ul>
    </Container>
  );
}

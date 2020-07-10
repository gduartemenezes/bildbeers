import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="list-actions">
        <Link to="/">
          <li>About us</li>
        </Link>
        <Link to="/beers">
          <li>Trending Beers</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
      </ul>
      <ul className="list-user">
        <Link to="/login">
          <li>Log in</li>
        </Link>
        <Link to="/register">
          <li>Sign up</li>
        </Link>
      </ul>
    </Container>
  );
}

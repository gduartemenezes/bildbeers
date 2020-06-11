import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Page, Form, Input, SubmitButton, Info } from './styles';

import logo from '../../assets/logo.png';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  redirectTo = () => {
    const { history } = this.props;
    if (history) history.push('/popular');
  };

  handleInput = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };

    console.log(data);
    this.redirectTo();
  };

  render() {
    const { email, password } = this.state;
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

          <Form onSubmit={this.handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleInput}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleInput}
            />
            <SubmitButton> Log in </SubmitButton>
          </Form>
        </Container>
      </Page>
    );
  }
}

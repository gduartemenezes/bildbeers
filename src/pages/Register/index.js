import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Container, Page, Form, Input, SubmitButton, Info } from './styles';

import logo from '../../assets/logo.png';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  redirectHome = () => {
    const { history } = this.props;
    if (history) history.push('/popular');
  };

  handleInput = (e) => {
    const tg = e.target;
    const val = tg.value;
    const { name } = tg;

    this.setState({ [name]: val });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const data = {
      name,
      email,
      password,
    };
    console.log(data);
    this.redirectHome();
  };

  render() {
    const { name, email, password } = this.state;
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

          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
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
            <SubmitButton> Register </SubmitButton>
          </Form>
        </Container>
      </Page>
    );
  }
}

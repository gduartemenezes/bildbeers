import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Page, Container, Form, Input, SubmitButton, Info } from './styles';
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

  handleInput = (e) => {
    const {target} = e;
    const value = target.value;
    const {name} = target;

    this.setState({[name] : value});

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = this.state;
    const data = {
      name,
      email,
      password
    };

    console.log(data);
  }


  render() {
    const {name, email, password} = this.state;
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

          <Form onSubmit={this.handleSubmit}>
            <Input type="text" placeholder="Name" name="name" value={name} onChange={this.handleInput} />
            <Input type="text" placeholder="Email" name="email" value={email} onChange={this.handleInput}/>
            <Input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput}/>
            <SubmitButton> Register </SubmitButton>
          </Form>
        </Container>
      </Page>
    );
  }
}

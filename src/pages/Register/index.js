import React, { Component } from 'react';

import { Page, Container, Form, Input } from './styles';

export default class Register extends Component {
  render() {
    return (
      <Page>
        <Container>
          <Form>
            <Input />
            <Input />
            <Input />
          </Form>
        </Container>
      </Page>
    );
  }
}

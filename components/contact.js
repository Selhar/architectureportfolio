import React from 'react'
import styled from 'styled-components'

import { transparentBackground, primary } from '../styleguide/colors'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  background-color: ${transparentBackground};
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${primary};
`

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alias: '',
      email: '',
      text: ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel>
          Nome:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </StyledLabel>
        <StyledLabel>
          Apelido(opcional):
          <input type="text" value={this.state.alias} onChange={this.handleChange} />
        </StyledLabel>
        <StyledLabel>
          E-mail:
          <input type="text" value={this.state.email} onChange={this.handleChange} />
        </StyledLabel>
        <StyledLabel>
          Mensagem:
          <input type="text" value={this.state.text} onChange={this.handleChange} />
        </StyledLabel>
        <input type="submit" value="Submit" />
      </StyledForm>
    );
  }
}
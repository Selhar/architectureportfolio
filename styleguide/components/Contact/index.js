import React from 'react';
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledDiv = styled.div`
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  margin: 0 auto;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

const StyledField = styled(Field)`
  margin-top: 20px;
  padding: 20px;
  border-bottom: 1px solid grey;
  font-size: 20px;
`

const Title = styled.h1`
  font-size: 35px;
`

const Submit = styled.button`
  width: fit-content;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid black;
  margin-top: 20px;
`

const Contact = () => (
  <StyledDiv>
    <Title>Fale conosco</Title>
    <Formik
      initialValues={{ email: '', name: '', message: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Campo obrigatório';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'E-mail inválido.';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledField type="text" name="name" placeholder="Nome"/>
          <ErrorMessage name="name" component="div" />
          <StyledField type="email" name="email" label="E-mail" placeholder="E-mail" />
          <ErrorMessage name="email" component="div" />
          <StyledField type="textarea" component="textarea" rows="4" cols="50" name="message" placeholder="Mensagem" />
          <ErrorMessage name="message" component="div" />
          <Submit type="submit" disabled={isSubmitting}>
            Enviar
          </Submit>
        </StyledForm>
      )}
    </Formik>
  </StyledDiv>
);

export default Contact;

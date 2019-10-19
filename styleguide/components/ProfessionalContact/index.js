import React from 'react';
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const perfis = [
  { 
    id: 'architect',
    label: 'Arquiteto(a)'
  },{ 
    id: 'entrepeneur',
    label: 'Construtora/Empreendedor(a)'
  },{ 
    id: 'designer',
    label: 'Decorador(a)'
  },
]

const projectType = [
  { 
    id: 'illustrative',
    label: 'Imagem ilustrativa'
  },{ 
    id: 'animationmodel',
    label: 'Modelagem em 3d'
  },{ 
    id: 'videomodel',
    label: 'Animação/vídeo'
  },{ 
    id: 'image',
    label: 'Imagens 360º'
  },
]

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
  padding: 20px;
  border-bottom: 1px solid grey;
  font-size: 20px;
  background-color: none;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

const Label = styled.label`
  margin-left: 10px;
`

const ProfessionalContact = () => (
  <StyledDiv>
    <Title>Fale conosco</Title>
    <Formik
      initiallabels={{
        email: '',
        name: '',
        message: '',
        telefone: '',
        hasModel: 'false'
      }}
      validate={labels => {
        let errors = {};
        if (!labels.email) {
          errors.email = 'Campo obrigatório';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(labels.email)
        ) {
          errors.email = 'E-mail inválido.';
        }
        return errors;
      }}
      onSubmit={(labels, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(labels, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledField type="text" name="name" placeholder="Nome"/>
          <ErrorMessage name="name" component="div" />
          <StyledField type="email" name="email" id="E-mail" placeholder="E-mail" />
          <ErrorMessage name="email" component="div" />
          <StyledField type="textarea" component="textarea" rows="4" cols="50" name="message" placeholder="Mensagem" />
          <ErrorMessage name="message" component="div" />
          <Wrapper>
            <StyledField
              name="perfil"
              component="select"
            >
              <option defaultlabel>Escolha seu perfil</option>
              {perfis.map(perfil => (
                <option key={perfil.id} label={perfil.label}>
                  {perfil.label}
                </option>
              ))}
            </StyledField>
          </Wrapper>
          <Wrapper>
            <StyledField
              name="projectType"
              component="select"
            >
              <option defaultlabel>Escolha o tipo de projeto</option>
              {projectType.map(type => (
                <option key={type.id} label={type.label}>
                  {type.label}
                </option>
              ))}
            </StyledField>
          </Wrapper>
          <Wrapper>
            <StyledField name="hasModel" type="checkbox" id="hasModel" />
            <Label htmlFor="hasModel">Possui modelo 3d?</Label>
          </Wrapper>
          <Submit type="submit" disabled={isSubmitting}>
            Enviar
          </Submit>
        </StyledForm>
      )}
    </Formik>
  </StyledDiv>
);

export default ProfessionalContact;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Muito curto!')
    .max(50, 'Muito longo!')
    .required('Campo obrigatório'),
  perfil: Yup.string()
    .required('Selecione o seu perfil'),
  projectType: Yup.string()
    .required('Selecione o seu tipo de projeto'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
});

export default ({perfis, projectType}) => (
  <div className="w-11/12 sm:w-2/3 xl:w-1/3 m-auto">
    <h1 className="text-center text-3xl mb-8 font-bold tracking-widest uppercase">Orçamento</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form className="flex flex-col">
          <div className="mb-2 w-full">
            <Field className="rounded p-3 w-full" placeholder="Nome" name="firstName" />
            {errors.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
          </div>
          <div className="mb-2 w-full">
            <Field className="rounded p-3 w-full" placeholder="E-mail" name="email" type="email" />
              {errors.email ? <div>{errors.email}</div> : null}
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-full mr-2 mb-2">
              <Field className="rounded w-full bg-orange p-4" name="perfil" component="select" placeholder="Escolha seu perfil">
                <option defaultValue>Escolha seu perfil</option>
                {perfis.map(perfil => (
                  <option key={perfil.id} value={perfil.label}>
                    {perfil.label}
                  </option>
                ))}
              </Field>
              {errors.perfil? (
                <div>{errors.perfil}</div>
              ) : null}
            </div>
            <div className="w-full mb-2">
              <Field className="rounded w-full bg-orange p-4" name="projectType" component="select" placeholder="Escolha o tipo de projeto">
                <option defaultValue>Escolha seu tipo de projeto</option>
                {projectType.map(project => (
                  <option key={project.id} value={project.label}>
                    {project.label}
                  </option>
                ))}
              </Field>
              {errors.projectType ? (
                <div>{errors.projectType}</div>
              ) : null}
            </div>
          </div>
          <Field 
            className="rounded mb-2 p-3" 
            component="textarea"
            placeholder="Caso sinta necessidade, fale um pouquinho sobre o projeto!" 
            name="description" />


          <button className="bg-orange mt-2 w-40 m-auto p-2 text-center rounded" type="submit">Enviar proposta</button>
        </Form>
      )}
    </Formik>
  </div>
);
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Campo obrigatório'),
  perfil: Yup.string()
    .required('Campo obrigatório'),
  projectType: Yup.string()
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  phone: Yup.string()
    .required('Campo obrigatório')
});

export default ({perfis, projectType}) => (
  <div className="w-11/12 lg:w-2/3 xxl:w-1/3 m-auto ">
    <h1 className="text-center text-3xl sm:mb-10 font-bold tracking-widest uppercase arrow relative title">Orçamento</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        projectType: '',
        perfil: '',
        phone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form className="flex flex-col mt-5 sm:mt-0">
          <div className="mb-2 w-full">
            <Field placeholder="Nome" name="firstName">
            {({field,meta}) => (<div>
              <input className="rounded-md bg-lightGrey placeholder-white placeholder-opacity-75 p-4 w-full" type="text" placeholder="Nome/Apelido" {...field} />
                {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                )}
              </div>
            )}
            </Field>
          </div>
          <div className="mb-2 w-full">
            <Field placeholder="E-mail" name="email" type="email">
              {({field,meta}) => (<div>
                <input className="rounded-md bg-lightGrey placeholder-white placeholder-opacity-75 p-4 w-full" type="text" placeholder="E-mail" {...field} />
                  {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-full mr-2 mb-2">
              <Field name="perfil">
                {({field,meta}) => (<div>
                    <select name="perfil" placeholder="Escolha seu perfil" className="rounded-md w-full p-4 bg-orange placeholder-white placeholder-opacity-75" {...field} >
                      <option name="perfil" defaultValue>Escolha seu perfil</option>
                      {perfis.map(perfil => (
                        <option name="perfil" key={perfil.id} value={perfil.label}>
                          {perfil.label}
                        </option>
                      ))}
                    </select>
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className="w-full mb-2">
            <Field name="projectType">
                {({field,meta}) => (<div>
                    <select name="projectType" placeholder="Escolha seu tipo de projeto" className="rounded-md w-full p-4 bg-orange placeholder-white placeholder-opacity-75" {...field} >
                      <option defaultValue>Escolha seu tipo de projeto</option>
                      {projectType.map(projectType => (
                        <option key={projectType.id} value={projectType.label}>
                          {projectType.label}
                        </option>
                      ))}
                    </select>
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
            </div>
          </div>
          <div className="mb-2 w-full">
            <Field placeholder="Telefone" name="phone">
            {({field,meta}) => (<div>
              <input className="rounded-md bg-lightGrey placeholder-white placeholder-opacity-75 p-4 w-full" type="text" placeholder="Telefone" {...field} />
                {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                )}
              </div>
            )}
            </Field>
          </div>
          <Field 
            className="rounded-md bg-lightGrey placeholder-white placeholder-opacity-75 p-4 w-full" 
            component="textarea"
            placeholder="Fale um pouquinho sobre o projeto!" 
            name="description" />
            
          <button className="mt-5 w-40 m-auto p-2 text-center rounded-md bg-orange" type="submit">Enviar proposta</button>
        </Form>
      )}
    </Formik>
  </div>
);
import React, { useState, InputHTMLAttributes } from "react";
import { Formik, Form, Field } from "formik";
import { Title } from "../Title";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import { perfis, projectType } from "../utils/constants";
import TextField from "../TextField";
import TextAreaField from "../TextAreaField";
import SelectField from "../SelectField";

type ContactForm = {
  name: string;
  email: string;
  perfil: string;
  projectType: string;
  phone: string;
  description: string;
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("!"),
  perfil: Yup.string().required("!"),
  projectType: Yup.string().required("!"),
  email: Yup.string().email("E-mail inválido").required("!"),
  phone: Yup.string()
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "Telefone precisa seguir o formato: (00) 00000-0000"
    )
    .required("!"),
});

const Contact = () => {
  const [submitText, setSubmitText] = useState("");
  const initialValues: ContactForm = {
    name: "",
    email: "",
    perfil: "",
    projectType: "",
    phone: "",
    description: "",
  };

  return (
    <div className={"max-w-2xl mx-auto my-0 mb-16"}>
      <Title classes={"text-center"} text="Orçamento" />
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          emailjs.send(
            "gmail",
            "contato",
            values,
            "user_FNftmIgR960O1Oawh9AAM"
          );
          setSubmitText(
            "Obrigada pela mensagem, em breve entraremos em contato!"
          );
        }}
      >
        <Form className={"flex flex-col "}>
          <TextField placeholder="Nome" name="name" />
          <TextField placeholder="E-mail" name="email" type="email" />
          <div className="flex flex-col justify-between lg:flex-row">
            <SelectField
              name="perfil"
              options={perfis}
              placeholder="Escolha seu perfil"
              classes="mr-2"
            />
            <SelectField
              name="projectType"
              options={projectType}
              placeholder="Escolha seu tipo de projeto"
              errorClasses="error-right"
            />
          </div>
          <TextField
            placeholder="Telefone"
            name="phone"
            mask="(99) 99999-9999"
          />
          <TextAreaField
            placeholder="Fale um pouquinho sobre o projeto!"
            name="description"
          />
          <button
            className={"mt-2 w-40 m-auto p-2 text-center rounded-md bg-orange"}
            type="submit"
          >
            Enviar proposta
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;

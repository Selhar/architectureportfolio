import { Formik, Form, Field, FieldHookConfig, FieldProps } from "formik";

type TextAreaField = {
  placeholder: string;
  name: string;
};

const CustomInputComponent = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps) => (
  <div className="inputContainer">
    <textarea className="inputField bg-lightGrey" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error error-right" />
    )}
  </div>
);

const TextAreaField = ({ placeholder, name }: TextAreaField) => (
  <Field
    placeholder={placeholder}
    name={name}
    component={CustomInputComponent}
  />
);

export default TextAreaField;

import { Formik, Form, Field, FieldHookConfig, FieldProps } from "formik";

type SelectField = {
  placeholder: string;
  name: string;
  options: Array<Option>;
  classes?: string;
  errorClasses?: string;
};

type Option = {
  id: string;
  label: string;
};

type Classes = {
  classes?: string;
  errorClasses?: string;
};

const CustomInputComponent = ({
  field,
  classes,
  errorClasses,
  form: { touched, errors },
  ...props
}: FieldProps & Classes) => (
  <div className={"inputContainer " + classes}>
    <select className="inputField bg-orange" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className={errorClasses || "error"} />
    )}
  </div>
);

const SelectField = ({
  placeholder,
  name,
  options,
  classes,
  errorClasses,
}: SelectField) => (
  <Field
    placeholder={placeholder}
    name={name}
    component={CustomInputComponent}
    classes={classes}
    errorClasses={errorClasses}
  >
    <option disabled selected value="">
      {placeholder}
    </option>
    {options.map((option) => (
      <option key={option.id} value={option.label}>
        {option.label}
      </option>
    ))}
  </Field>
);

export default SelectField;

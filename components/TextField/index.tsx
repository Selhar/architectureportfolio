import { Field, FieldProps } from "formik";
import InputMask from "react-input-mask";

type TextField = {
  placeholder: string;
  name: string;
  type?: string;
  mask?: string;
};

type Mask = {
  mask?: string;
};
const CustomInputComponent = ({
  field,
  mask,
  form: { touched, errors },
  ...props
}: FieldProps & Mask) => (
  <div className="inputContainer">
    <InputMask
      className="inputField bg-lightGrey border-b-2 border-transparent focus:border-yellow solid"
      mask={mask}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && <div className="error" />}
  </div>
);

const TextField = ({ placeholder, name, type, mask }: TextField) => (
  <Field
    placeholder={placeholder}
    name={name}
    type={type || "text"}
    component={CustomInputComponent}
    mask={mask}
  />
);

export default TextField;

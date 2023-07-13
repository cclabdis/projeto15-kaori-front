import { Input } from "../styles/styles.js";

const SignUpInput = ({ type, id, name, placeholder }) => {
  return (
    <Input
      id={id}
      placeholder={placeholder}
      name={name}
      type={type}
      required
    ></Input>
  );
};

export default SignUpInput;

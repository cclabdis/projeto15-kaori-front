import { Input } from "../styles/styles.js";

const LoginInput = ({ type, id, name, placeholder }) => {
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

export default LoginInput;

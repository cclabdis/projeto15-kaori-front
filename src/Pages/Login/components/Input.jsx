import { Input } from "../styles/styles.js";

const LoginInput = ({ body, setBody, type, id, name, placeholder }) => {
  return (
    <Input
      onChange={(e) => setBody({...body, [e.target.name]: e.target.value})}
      id={id}
      placeholder={placeholder}
      name={name}
      type={type}
      required
    ></Input>
  );
};

export default LoginInput;

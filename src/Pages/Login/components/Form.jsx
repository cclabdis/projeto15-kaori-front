import { Form } from "../styles/styles.js";

const LoginForm = ({ children, onSubmit }) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

export default LoginForm;

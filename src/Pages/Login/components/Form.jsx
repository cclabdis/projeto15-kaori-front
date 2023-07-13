import { Form } from "../styles/styles.js";

const LoginForm = ({ children, submitFunction }) => {
  return <Form onSubmit={submitFunction}>{children}</Form>;
};

export default LoginForm;

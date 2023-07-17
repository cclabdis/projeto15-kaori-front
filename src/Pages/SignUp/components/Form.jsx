import { Form } from "../styles/styles.js";

const SignUpForm = ({ children, submitFunction }) => {
  return <Form onSubmit={submitFunction}>{children}</Form>;
};

export default SignUpForm;
import { Button } from "../styles/styles.js";

const LoginButton = ({ purpose }) => {
  return <Button type="submit">{purpose}</Button>;
};

export default LoginButton;

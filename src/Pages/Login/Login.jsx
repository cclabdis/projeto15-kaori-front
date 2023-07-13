import axios from "axios";
import LoginForm from "./components/Form.jsx";
import LoginInput from "./components/Input.jsx";
import LoginButton from "./components/Button.jsx";
import { useNavigate } from "react-router-dom";
import Motd from "./components/MOTD.jsx";

const LoginPage = () => {


    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();

        if(true) {
            navigate("/sign-up");
        }
    }

  return (
    
    <LoginForm
      onSubmit={handleSubmit}
    >
      <LoginInput
        placeholder={"Digite seu E-mail"}
        type={"email"}
        id={"email"}
        name={"email"}
      ></LoginInput>
      <LoginInput
        placeholder={"Digite sua Senha"}
        type={"password"}
        id={"password"}
        name={"password"}
      ></LoginInput>
      <LoginButton purpose={"Login"}></LoginButton>
      <Motd handleFunction={() => {navigate("/sign-up")}} content={"Não possui cadastro? Cadastre-se!"}></Motd>
    </LoginForm>
    
  );
};

export default LoginPage;

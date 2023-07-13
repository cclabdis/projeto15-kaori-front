import { useNavigate } from "react-router-dom";
import SignUpButton from "./components/Button.jsx";
import SignUpInput from "./components/Input.jsx";
import SignUpForm from "./components/Form.jsx";
import Motd from "./components/MOTD.jsx";

const SignUp = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    console.log("oi");
    e.preventDefault();
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <SignUpInput
        placeholder={"Digite seu Nome"}
        type={"text"}
        id={"name"}
        name={"name"}
      ></SignUpInput>
      <SignUpInput
        placeholder={"Digite seu E-mail"}
        type={"email"}
        id={"email"}
        name={"email"}
      ></SignUpInput>
      <SignUpInput
        placeholder={"Digite sua Senha"}
        type={"password"}
        id={"password"}
        name={"password"}
      ></SignUpInput>
      <SignUpInput
        placeholder={"Confirme sua Senha"}
        type={"password"}
        id={"confirmPassword"}
        name={"ConfirmPassword"}
      ></SignUpInput>
      <SignUpButton purpose={"Cadastrar"}></SignUpButton>
      <Motd
        handleFunction={() => {
          navigate("/");
        }}
        content={"Já possui cadastro? Logue!"}
      ></Motd>
    </SignUpForm>
  );
};

export default SignUp;

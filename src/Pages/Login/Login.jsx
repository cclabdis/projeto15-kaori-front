import axios from "axios";
import LoginForm from "./components/Form.jsx";
import LoginInput from "./components/Input.jsx";
import LoginButton from "./components/Button.jsx";
import { useNavigate } from "react-router-dom";
import Motd from "./components/MOTD.jsx";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const promise = axios.post(`${import.meta.env.VITE_API_URL}/login`, body);

    promise
      .then((res) => {
        alert("logado");
      })
      .catch((err) => alert(err.response));
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginInput
        body={body}
        setBody={setBody}
        value={body.email}
        placeholder={"Digite seu E-mail"}
        type={"email"}
        id={"email"}
        name={"email"}
      ></LoginInput>
      <LoginInput
        body={body}
        setBody={setBody}
        value={body.password}
        placeholder={"Digite sua Senha"}
        type={"password"}
        id={"password"}
        name={"password"}
      ></LoginInput>
      <LoginButton purpose={"Login"}></LoginButton>
      <Motd
        handleFunction={() => {
          navigate("/sign-up");
        }}
        content={"Não possui cadastro? Cadastre-se!"}
      ></Motd>
    </LoginForm>
  );
};

export default LoginPage;

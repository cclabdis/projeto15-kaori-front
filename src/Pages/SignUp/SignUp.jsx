import { useNavigate } from "react-router-dom";
import SignUpButton from "./components/Button.jsx";
import SignUpInput from "./components/Input.jsx";
import SignUpForm from "./components/Form.jsx";
import Motd from "./components/MOTD.jsx";
import axios from "axios";
import { useRef, useState } from "react";

const SignUp = () => {
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function signup(event) {
    event.preventDefault();

    if (body.password !== body.confirmPassword) {
      alert("Ambas as senhas informadas devem coincidir!");
      return;
    }

    delete body.confirmPassword

    const promise = axios.post(`${import.meta.env.VITE_API_URL}/signup`, body);
    
    promise
      .then((res) => {
        navigate("/");
      })
      .catch((err) => alert(err.response.message));

    return false;
  }

  return (
    <SignUpForm submitFunction={signup}>
      <SignUpInput
        body={body}
        setBody={setBody}
        value={body.name}
        placeholder={"Digite seu Nome"}
        type={"text"}
        id={"name"}
        name={"name"}
      ></SignUpInput>
      <SignUpInput
        body={body}
        setBody={setBody}
        value={body.email}
        placeholder={"Digite seu E-mail"}
        type={"email"}
        id={"email"}
        name={"email"}
      ></SignUpInput>
      <SignUpInput
        body={body}
        setBody={setBody}
        value={body.password}
        placeholder={"Digite sua Senha"}
        type={"password"}
        id={"password"}
        name={"password"}
      ></SignUpInput>
      <SignUpInput
        body={body}
        setBody={setBody}
        value={body.confirmPassword}
        placeholder={"Confirme sua Senha"}
        type={"password"}
        id={"confirmPassword"}
        name={"confirmPassword"}
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

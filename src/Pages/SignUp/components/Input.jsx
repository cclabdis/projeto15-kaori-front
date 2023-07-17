import { useState } from "react";
import { Input } from "../styles/styles.js";

const SignUpInput = ({ body, setBody, value, type, id, name, placeholder }) => {
  
  return (
    <Input
      onChange={(e) => setBody({...body, [e.target.name]: e.target.value})}
      value={value}
      id={id}
      placeholder={placeholder}
      name={name}
      type={type}
      required
    ></Input>
  );
};

export default SignUpInput;

import { styled } from "styled-components";

export const Input = styled.input`
  height: 35px;
  width: 80%;
  border: 1px solid #000;
  border-radius: 1em;
  padding: 10px;
`;

export const Button = styled.button`
  height: 50px;
  width: 86.25%;
  border: 1px solid #000;
  border-radius: 1em;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  max-width: 100vw;
  gap: 10px;
`;

export const MotdButton = styled.p`
  border: none;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "./styles";

import Logo from "./img/Logo.svg";

const LandingHeader = (props) => {
  const dispatch = useDispatch();

  const showRegisterForm = () => {
    dispatch({ type: "SHOW_REGISTER" });
  };

  const showListagem = () => {
    dispatch({ type: "SHOW_LISTAGEM" });
  };

  return (
    <>
      <Container>
        <div className="Header">
          <img src={Logo} alt="logo" className="logo" />
          <div>
            <button onClick={showRegisterForm} className="btnCadastrar">
              Cadastrar
            </button>
            <button onClick={showListagem}>Listagem</button>
            <button onClick={props.onClick}>Sair</button>
          </div>
        </div>
        <div className="Cards">{props.children}</div>
      </Container>
    </>
  );
};

export default LandingHeader;

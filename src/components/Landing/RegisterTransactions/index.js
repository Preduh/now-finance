import React from "react";

import { Container } from "./styles";

import api from "../../../api";

const TransactionRegister = ({ userId }) => {
  const createTransaction = async () => {
    const title = document.getElementsByClassName("registerInput")[0].value;
    const price = document.getElementsByClassName("registerInput")[1].value;

    if (price !== "") {
      await api.post("transaction/create", {
        userId,
        transaction: [
          {
            title: title,
            price: price,
          },
        ],
      });
    }
  };

  return (
    <Container>
      <form className="transactions-register-form">
        <input
          type="text"
          className="registerInput"
          placeholder="Nome da transação"
        />
        <input type="number" className="registerInput" placeholder="Valor" />
        <button type="button" onClick={createTransaction}>
          Criar finança
        </button>
      </form>
    </Container>
  );
};

export default TransactionRegister;

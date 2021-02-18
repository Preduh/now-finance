import React from "react";

import { Container } from "./styles";

import api from "../../../api";

const TransactionRegister = ({ userId }) => {

  const createTransaction = async () => {
    const title = document.getElementsByClassName("registerInput")[0].value;
    const price = document.getElementsByClassName("registerInput")[1].value;

    await api.post(
      "http://localhost:8081/transaction/create",
      {
        userId,
        transaction: [
          {
            title: title,
            price: price,
          },
        ],
      }
    );
  };

  return (
    <Container>
      <form>
        <input type="text" className="registerInput" />
        <input type="text" className="registerInput" />
        <button type="button" onClick={createTransaction}>
          Criar finança
        </button>
      </form>
    </Container>
  );
};

export default TransactionRegister;

import React, { useEffect, useState } from "react";

import api from "../../../api";

import Entradas from "./img/Entradas.svg";
import Saidas from "./img/Saidas.svg";
import Total from "./img/Total.svg";

import { Container } from "./styles";

const Card = ({ userId }) => {
  const [transactionData, setTransactionData] = useState([]);
  const [currentValue, setCurrentValue] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await api.post(
        "/transaction/list",
        {
          userId,
        }
      );

      if (!data.Error) {
        setTransactionData(data);
      }
    })();
  }, [userId]);

  useEffect(() => {
    if (transactionData.length > 0) {
      const values = transactionData.map((transaction) => {
        return parseInt(transaction.price);
      });

      const entradaValue = values.reduce((accumulator = 0, value) => {
        if (value > 0) {
          return accumulator + value;
        } else {
          return accumulator;
        }
      });

      const totalValue = values.reduce((accumulator = 0, value) => {
        if (value) {
          return value + accumulator;
        } else {
          return accumulator;
        }
      });

      const saidaValue = totalValue - entradaValue;

      setCurrentValue({
        entradaValue: entradaValue.toFixed(2).replace('.', ','),
        saidaValue: saidaValue.toFixed(2).replace('.', ','),
        totalValue: totalValue.toFixed(2).replace('.', ','),
      });
    }
  }, [transactionData]);

  return (
    <Container>
      <div>
        <header>
          <h1 style={{ color: "#363F5F" }}>Entradas</h1>
          <img src={Entradas} alt="entradas-icon" />
        </header>
        <h2 style={{ color: "#363F5F" }}>R$ {currentValue.entradaValue}</h2>
      </div>
      <div>
        <header>
          <h1 style={{ color: "#363F5F" }}>Saídas</h1>
          <img src={Saidas} alt="saidas-icon" />
        </header>
        <h2 style={{ color: "#363F5F" }}>R$ {currentValue.saidaValue}</h2>
      </div>
      <div>
        <header>
          <h1>Total</h1>
          <img src={Total} alt="total-icon" />
        </header>
        <h2>R$ {currentValue.totalValue}</h2>
      </div>
    </Container>
  );
};

export default Card;

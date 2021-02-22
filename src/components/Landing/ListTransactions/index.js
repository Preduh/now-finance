import React, { useEffect, useState } from "react";

import api from "../../../api";

import { Container } from "./styles";

const TransactionList = ({ userId }) => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.post("/transaction/list", {
        userId,
      });

      if (!data.Error) {
        setTransactionData(data);
      }
    })();
  }, [userId]);

  return (
    <>
      <Container id="transactionList">
        <table className="content-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((transaction) => (
              <tr key={transaction._id}>
                <td>
                  {transaction.title.length > 30
                    ? `${transaction.title.slice(0, 30)}...`
                    : transaction.title}
                </td>
                <td>
                  {transaction.price > 0 ? (
                    <span className="price-positive">
                      R$ {transaction.price.toFixed(2).replace(".", ",")}
                    </span>
                  ) : (
                    <span className="price-negative">
                      R$ {transaction.price.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                </td>
                <td>
                  <span className="date">{transaction.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default TransactionList;

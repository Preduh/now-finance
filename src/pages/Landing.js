import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import api from "../api";

import LandingHeader from "../components/Landing/Header/index";
import Card from "../components/Landing/Card/index";
import Content from "../components/Landing/Content/index";
import TransactionList from "../components/Landing/ListTransactions/index";
import TransactionRegister from "../components/Landing/RegisterTransactions/index";

const Landing = () => {
  const [verifyToken, setVerifyToken] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [userId, setUserId] = useState({});

  const show = useSelector((state) => state.show);

  useEffect(() => {
    setShowRegister(show);
  }, [show]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/auth/me", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
      });
      if (!data.Error) {
        setUserId(data._id);
      }
    })();
  }, []);

  const Logout = () => {
    localStorage.removeItem("TOKEN");
    setVerifyToken(false);
  };

  return (
    <>
      {verifyToken ? (
        <>
          <LandingHeader onClick={Logout}>
            {showRegister ? "" : <Card userId={userId}/>}
          </LandingHeader>
          <Content>
            {showRegister ? (
              <TransactionRegister userId={userId} />
            ) : (
              <TransactionList userId={userId} />
            )}
          </Content>
        </>
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </>
  );
};

export default Landing;

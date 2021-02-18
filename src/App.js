import React from "react";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";

import { Routes } from "./routes";
import store from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
};

export default App;

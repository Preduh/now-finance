import { createStore } from "redux";

const INITIAL_STATE = {
  show: false,
};

const getUserInfos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_REGISTER":
      return { ...state, show: true };
    case "SHOW_LISTAGEM":
      return { ...state, show: false };
    default:
      return state;
  }
};

const store = createStore(getUserInfos);

export default store;

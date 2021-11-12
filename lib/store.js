import { createContext, useReducer } from "react";

const initialState = {
  selected: [],
  userAgent: {}
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    if (action.type == "selected") {
      return { ...state, selected: action.payload }; 
    } else if (action.type == "analytics") {
      return { ...state, sentAnalytics: action.payload };
    } else {
      throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

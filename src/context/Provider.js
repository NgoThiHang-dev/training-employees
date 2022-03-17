import React, { createContext, useReducer } from "react";
import layoutInitialState from "./initialstates/layoutInitialState";
import layoutReducer from "./reducers/layoutReducer";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    
  const [layoutState, layoutDispatch] = useReducer(
    layoutReducer,
    layoutInitialState
  );
  return (
    <GlobalContext.Provider value={{ layoutState, layoutDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

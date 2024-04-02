import React, { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
import { Action, PizzaState } from "../Types";

type PropList = {
  children: React.ReactNode;
};

const initialPizzas: PizzaState = {
  pizzas: [],
};

export const PizzaContext = createContext<{
  state: PizzaState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialPizzas,
  dispatch: () => null,
});

const PizzaContextProvider = ({ children }: PropList) => {
  const [state, dispatch] = useReducer(reducer, initialPizzas);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;

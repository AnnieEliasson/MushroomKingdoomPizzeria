import React, { createContext, useReducer } from "react";
import menu from "../menu.json";

type PropList = {
  children: React.ReactNode;
};

export type Topping = {
  name: string;
  price: number;
};

export type Pizza = {
  id: string;
  name: string;
  toppings: Topping[];
  price: number;
};

type PizzaState = {
  pizzas: Pizza[];
};

const initialPizzas: PizzaState = {
  pizzas: [],
};

type Action =
  | { type: "ADD"; payload: { pizza: Pizza; toppings: string[] } }
  | { type: "REMOVE"; payload: string };

const reducer = (state: PizzaState, action: Action) => {
  switch (action.type) {
    case "ADD":
      let toppings = action.payload.toppings;
      let pizza = action.payload.pizza;
      let result: Topping[] = [];

      menu.toppings.forEach((item) => {
        if (toppings.includes(item.name)) {
          result.push(item);
        }
      });
      pizza.toppings = result;

      return { pizzas: [...state.pizzas, pizza] };

      case "REMOVE":
        return {
          ...state,
          pizzas: [...state.pizzas.filter((p) => p.id != action.payload)],
        };

    default: return state;
  }
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

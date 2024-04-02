import { Action, PizzaState, Topping } from "../Types";
import menu from "../../menu.json";

export const reducer = (state: PizzaState, action: Action) => {
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

    default:
      return state;
  }
};

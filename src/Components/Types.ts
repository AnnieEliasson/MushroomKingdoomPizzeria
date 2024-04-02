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
  
  export type PizzaState = {
    pizzas: Pizza[];
  };

  export type Action =
  | { type: "ADD"; payload: { pizza: Pizza; toppings: string[] } }
  | { type: "REMOVE"; payload: string };
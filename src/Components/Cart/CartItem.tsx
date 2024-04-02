import { useContext } from "react";
import { PizzaContext } from "../ContextProvider/PizzaContextProvider";
import { Pizza } from "../Types";

type PropList = {
  p: Pizza;
};

const CartItem = ({ p }: PropList) => {
  const { dispatch } = useContext(PizzaContext);
  return (
    <li key={p.id}>
      <button
        className="delete-btn"
        onClick={() => {
          dispatch({ type: "REMOVE", payload: p.id });
        }}
      >
        X
      </button>
      <h2>{p.name}</h2>

      {p.toppings.map((t) => {
        return <span key={t.name}>{t.name}, </span>;
      })}

      <p>
        {p.price} <span className="coins">coins</span>
      </p>
    </li>
  );
};

export default CartItem;

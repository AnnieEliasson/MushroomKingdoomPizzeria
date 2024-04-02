import { useContext } from "react";
import { PizzaContext } from "../ContextProvider/PizzaContextProvider";
import CartItem from "./CartItem";

const handleClick = () => {
  const cart = document.querySelector(".Cart") as HTMLElement;
  cart.classList.toggle("show-cart");
};

const Cart = () => {
  const { state } = useContext(PizzaContext);
  let cartTotal = 0;

  state.pizzas.forEach((p) => {
    cartTotal = cartTotal + p.price;
  });
  return (
    <div className="Cart">
      <ul>
        <li>
          <button className="close-cart" onClick={handleClick}>
            Close
          </button>
        </li>
        {state.pizzas.map((p) => {
          return <CartItem key={p.id} p={p} />;
        })}
        <li>
          <p>
            Total Price: {cartTotal} <span className="coins">coins</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Cart;

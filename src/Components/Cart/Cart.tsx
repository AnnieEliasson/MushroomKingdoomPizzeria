import { useContext } from "react";
import { PizzaContext } from "../PizzaContextProvider";

const handleClick = () => {
  const cart = document.querySelector(".Cart") as HTMLElement;
  /* cart.style.display="none" */
  cart.classList.toggle("show-cart");
};

const Cart = () => {
  const { state, dispatch } = useContext(PizzaContext);
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
          return (
            <li>
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
                return <span>{t.name}, </span>;
              })}

              <p>
               <select name="addTopping" id="addTopping">
                {/* <option value="">+</option>
                </select><select name="removeTopping" id="removeTopping">
                <option value="">-</option> */}
                </select> {p.price} <span className="coins">coins</span>
              </p>
            </li>
          );
        })}
        <li>
          <p>
            Total Price: {cartTotal} <span className="coins">coins</span>
          </p>
          {/* <button>DELIVER</button> */}
        </li>
      </ul>
    </div>
  );
};

export default Cart;

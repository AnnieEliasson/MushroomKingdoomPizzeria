import { useContext, useRef } from "react";
import menu from "../../menu.json";
import { Pizza } from "../Menu/Menu";
import { PizzaContext } from "../PizzaContextProvider";
type PropList = {
  pizza: Pizza;
  setPizza: any;
};

const Preview = ({ pizza, setPizza }: PropList) => {
  const { dispatch } = useContext(PizzaContext);
  const addTopping = useRef<HTMLSelectElement | null>(null);

  const handleClickAdd = () => {
    const result = menu.toppings.filter(
      (t) => t.name === addTopping.current?.value
    );

    if (!pizza.toppings.includes(result[0])) {
      setPizza({
        ...pizza,
        toppings: [...pizza.toppings, result[0]],
        price: pizza.price + result[0].price,
      });
    } else {
      console.log("finns redan");
    }
  };

  const handleClickTopping = (e: any) => {
    const result = menu.toppings.filter((t) => t.name === e.target.id);
    if (e.target.isChecked === true) {
      setPizza({ ...pizza, price: pizza.price + result[0].price });
      e.target.isChecked = false;
    } else {
      setPizza({ ...pizza, price: pizza.price - result[0].price });
      e.target.isChecked = true;
    }
  };

  const handleClickAddToCart = () => {
    const checkboxes = document.querySelectorAll(
      ".checkbox"
    ) as NodeListOf<HTMLInputElement>;

    let checked: string[] = [];

    checkboxes.forEach((box) => {
      if (box.checked) {
        checked.push(box.id);
      }
    });

    dispatch({ type: "ADD", payload: { pizza: pizza, toppings: checked } });
    const preview = document.querySelector(".Preview") as HTMLElement;
    preview.style.display = "none";
  };
  return (
    <div className="Preview">
      <div className="pizza-preview">
        <ul>
          <li className="title">{pizza.name}</li>
          {pizza.toppings.map((t) => {
            return (
              <li key={t.name}>
                <input
                  className="checkbox"
                  onClick={handleClickTopping}
                  defaultChecked={true}
                  type="checkbox"
                  name={t.name}
                  id={t.name}
                />
                <label htmlFor={t.name}>
                  {t.name}, {t.price} coins
                </label>
              </li>
            );
          })}
          <li className="extra">
            <p>Add extra topping?</p>
            <select ref={addTopping} name="add-item" id="add-item">
              <option value={""}>Choose item</option>
              {menu.toppings.map((t) => {
                if (!pizza.toppings.includes(t)) {
                  return (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  );
                }
              })}
            </select>
            <button onClick={handleClickAdd}>Add</button>
          </li>
          <li>
            {pizza.price} coins{" "}
            <button onClick={handleClickAddToCart} style={{ float: "right" }}>
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Preview;

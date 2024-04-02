import { useState } from "react";
import menu from "../../menu.json";
import Preview from "../Preview/Preview";
import uuid from "react-uuid";
import { Pizza, Topping } from "../Types";

const calcPrice = (topping: { name: string }[]) => {
  let result;

  let totalTopping: Topping[] = [];
  let totalPrice = 0;

  topping.forEach((t) => {
    result = menu.toppings.filter((top) => top.name === t.name);

    totalTopping.push(result[0]);
  });

  totalTopping.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });

  return totalPrice;
};

const Menu = () => {
  const [pizza, setPizza] = useState<Pizza>({
    id: uuid(),
    name: "",
    toppings: [],
    price: 0,
  });

  const handleClick = (e: any) => {
    const checkboxes = document.querySelectorAll(
      ".checkbox"
    ) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((b) => {
      b.checked = true;
    });
    const name = e.target.innerText;
    const toppings: Topping[] = [];
    let price = menu.priceList.base;

    const result = menu.pizzas.filter((p) => p.name === e.target.innerText);
    result[0].topping.forEach((t) => {
      const item = menu.toppings.filter((topping) => topping.name === t.name);

      toppings.push(item[0]);
      price = price + item[0].price;
    });

    setPizza({ name: name, toppings: [...toppings], price: price, id: uuid() });
    const preview = document.querySelector(".Preview") as HTMLElement;
    preview.style.display = "flex";
  };
  return (
    <div className="Menu">
      <ul className="Menu-list">
        {menu.pizzas.map((p) => {
          return (
            <li className="menu-item" key={p.name}>
              <b className="title" onClick={handleClick}>
                {p.name}
              </b>
              <ul className="topping-items">
                {p.topping.map((t) => {
                  return <span key={t.name}>{t.name}, </span>;
                })}
              </ul>
              <b className="bottom-row">
                {menu.priceList.base + calcPrice(p.topping)}{" "}
                <span className="coins">coins</span>
              </b>
            </li>
          );
        })}
      </ul>
      <Preview pizza={pizza} setPizza={setPizza} />
    </div>
  );
};

export default Menu;

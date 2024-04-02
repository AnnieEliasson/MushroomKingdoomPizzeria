import React from "react";
import menu from "../../../../menu.json";
import { Pizza } from "../../../Types";

type PropList = {
  addTopping: React.LegacyRef<HTMLSelectElement> | undefined;
  pizza: Pizza;
};

const ExtraTopping = ({ addTopping, pizza }: PropList) => {
  return (
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
  );
};

export default ExtraTopping;

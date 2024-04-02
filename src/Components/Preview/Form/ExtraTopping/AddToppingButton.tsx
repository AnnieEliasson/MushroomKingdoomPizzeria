import React from "react";
import menu from "../../../../menu.json";
import { Pizza } from "../../../Types";

type PropList = {
  addTopping: React.LegacyRef<HTMLSelectElement> | undefined;
  pizza: Pizza;
  setPizza: any;
};

const AddToppingButton = ({ addTopping, pizza, setPizza }: PropList) => {
  const handleClickAdd = (addTopping: any, pizza: Pizza, setPizza: any) => {
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

  return (
    <button
      onClick={() => {
        handleClickAdd(addTopping, pizza, setPizza);
      }}
    >
      Add
    </button>
  );
};

export default AddToppingButton;

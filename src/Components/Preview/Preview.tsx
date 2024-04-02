import { useRef } from "react";
import { Pizza } from "../Types";
import Checkboxes from "./Form/Checkboxes";
import ExtraTopping from "./Form/ExtraTopping/ExtraTopping";
import AddToppingButton from "./Form/ExtraTopping/AddToppingButton";
import AddToCartButton from "./AddToCartButton";

type PropList = {
  pizza: Pizza;
  setPizza: any;
};

const Preview = ({ pizza, setPizza }: PropList) => {
  const addTopping = useRef<HTMLSelectElement | null>(null);

  return (
    <div className="Preview">
      <div className="pizza-preview">
        <ul>
          <li className="title">{pizza.name}</li>
          {pizza.toppings.map((t) => {
            return <Checkboxes key={t.name} t={t} pizza={pizza} setPizza={setPizza} />;
          })}
          <li className="extra">
            <p>Add extra topping?</p>
            <ExtraTopping addTopping={addTopping} pizza={pizza} />
            <AddToppingButton
              addTopping={addTopping}
              pizza={pizza}
              setPizza={setPizza}
            />
          </li>
          <li>
            {pizza.price} coins <AddToCartButton pizza={pizza} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Preview;

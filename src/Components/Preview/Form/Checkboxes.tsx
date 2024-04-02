import { Pizza, Topping } from "../../Types";
import menu from "../../../menu.json";

type PropList = {
  t: Topping;
  pizza: Pizza;
  setPizza: any;
};

const handleClickTopping = (e: any, pizza: Pizza, setPizza: any) => {
  const result = menu.toppings.filter((t: Topping) => t.name === e.target.id);
  if (e.target.isChecked === true) {
    setPizza({ ...pizza, price: pizza.price + result[0].price });
    e.target.isChecked = false;
  } else {
    setPizza({ ...pizza, price: pizza.price - result[0].price });
    e.target.isChecked = true;
  }
};

const Checkboxes = ({ t, pizza, setPizza }: PropList) => {
  return (
    <li key={t.name}>
      <input
        className="checkbox"
        onClick={(e) => {
          handleClickTopping(e, pizza, setPizza);
        }}
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
};

export default Checkboxes;

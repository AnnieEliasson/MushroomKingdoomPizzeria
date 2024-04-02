import { useContext } from "react";
import { PizzaContext } from "../ContextProvider/PizzaContextProvider";
import { Pizza } from "../Types";

type PropList = {
  pizza: Pizza;
};

const AddToCartButton = ({ pizza }: PropList) => {
  const { dispatch } = useContext(PizzaContext);

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
    <button onClick={handleClickAddToCart} style={{ float: "right" }}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;

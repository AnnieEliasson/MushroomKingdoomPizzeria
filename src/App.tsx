import "./App.scss";
import Cart from "./Components/Cart/Cart";
import Cart_btn from "./Components/Cart/Cart_btn";
import Menu from "./Components/Menu/Menu";
import PizzaContextProvider from "./Components/PizzaContextProvider";

function App() {
  return (
    <>
      <h1>Mushroom Kingdom Pizzeria</h1>
      <h2>Where Every Bite's a Power-Up!</h2>
      
      <PizzaContextProvider>
        <Menu />
        <Cart_btn />
        <Cart />
      </PizzaContextProvider>
    </>
  );
}

export default App;

import "./App.scss";
import Cart from "./Components/Cart/Cart";
import Cart_btn from "./Components/Cart/Cart_btn";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import PizzaContextProvider from "./Components/ContextProvider/PizzaContextProvider";

function App() {
  return (
    <>
      <Header />

      <PizzaContextProvider>
        <Menu />
        <Cart_btn />
        <Cart />
      </PizzaContextProvider>
    </>
  );
}

export default App;

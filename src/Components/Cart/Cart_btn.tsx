import { useContext } from "react"
import { PizzaContext } from "../PizzaContextProvider"


const handleClick = () => {
    const cart = document.querySelector(".Cart") as HTMLElement
    cart.style.display="block"
    cart.classList.toggle("show-cart")
}

const Cart_btn = () => {
const {state} = useContext(PizzaContext)
let cartItems = state.pizzas.length    
  return (
    <div onClick={handleClick} className='Cart_btn'><p>{cartItems}</p></div>
  )
}

export default Cart_btn
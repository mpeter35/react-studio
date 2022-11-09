import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  
  

  return (
    <div className="App">
      <h1>Maddie's Yummy Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem info={item} num={index} cart={cart} setCart={setCart} count={count} setCount={setCount}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map(item => <p>{item}</p>)}
        <h3> Total Cost ${count}</h3>
        <div>

		</div>

      </div>
    </div>
  );
}

export default App;

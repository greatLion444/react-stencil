import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PurchableItem from "./purchaseable";
import purchase from "./purchase-data.json";

purchase.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [items, setItems] = useState([])
  const [sum, totalSum] = useState(0)
  return (
    <div className="App">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {purchase.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <p>
          <PurchableItem name={item.name} image={item.image} price={item.price}/>
          <button onClick={() => {setItems([...items, item]); totalSum(sum + item.price)}}>Add To Cart</button>
        </p> // replace with BakeryItem component
      ))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// function filterPrice(bakingList){
  
// }

export default App;


import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PurchableItem from "./purchaseable";
import purchase from "./purchase-data.json";

purchase.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const [items, setItems] = useState(purchase)
  const [sum, totalSum] = useState(0)
  const[cart, setCart] = useState([])
  const[shopList, setShop] = useState([])

  function sortLowHigh() {
    let cartList = [...items]
    cartList.sort((a,b) => a.price - b.price)
    setItems(cartList)
    // console.log(x.value)
  }

  function resetSort() {
    setItems(purchase)
  }

  function LessThan(price){
    let lessList = [...purchase]
    let shownList = lessList.filter(x => x.price < price)

    setItems(shownList)
}

  function justType(type) {
    let typeList = [...purchase]
    let types = typeList.filter(k => k.type == type)
    setItems(types)
  }

  function itemCart(currItem) {
    let itemsCart  = [...cart, currItem]
    let objnames = cart.filter(x => x.name)
    // let adding = [...itemsCart, currItem]
    setCart(itemsCart)
  }

  function fromTotal(takeFrom) {
    let presNum = sum - takeFrom
    totalSum(presNum)
  }

  function fromCart(objs) {
    let newCart = cart;
    newCart.splice(cart.indexOf(objs), 1);
    console.log(newCart);
    setCart(newCart);
}
  // useEffect - whenever state updates, it will run code
  return (
    <div className="App">
      <div id = "topPage">
        <h1>Kloset</h1>
        <img id = "logoIm" src = {process.env.PUBLIC_URL + "/" + "images/shoes.png"}/>
      </div>

      <makeCart usedCart ="sum"></makeCart>
        <div id = "allItems">
          <div id = "dropsection">
            <div class="dropdown">
              {/* <img src="images/cartImage.png"></img> */}
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                  <a onClick={() => sortLowHigh()}>Sort Low High</a>
                  <a onClick ={() => resetSort()}>Reset List</a>
                  <a onClick ={() => justType("shoes")}>Shoes</a>
                  <a onClick ={() => justType("Pants")}>Pants</a>
                  <a onClick ={() => justType("Coat")}>Coats</a>
              </div>
            </div>

            <div id = "optionSelect">
              {/* <label for="Priced">From Prices:</label> */}
              <input type="number" id="lowPrice" name="Priced" min="0" max="1000" step="10"></input>
              <button id = "priceButt" onClick ={() => LessThan(document.querySelector('input').value)}> Filter Price </button>
            </div>
            <div class = "cart">
              <h3>Cart:</h3>
              <div>
                <ul>
                  {cart.map((obj) => {
                    return(
                      <div>
                      <li>
                        {obj.props.name}
                        <button onClick = {() => {fromCart(obj); fromTotal(obj.props.price)}}>Remove Item</button>
                        {/* {obj.props.price} */}
                      </li>
                      </div>
                  )
                })
              }
              </ul>
              {/* <p>{totalSum}</p> */}
              </div>
              <div id = "holdItems">
                <p>Total: {sum}</p>
              </div>
            </div>
          </div>

          <div id = "shopping">
            {
              items.map((item) => {
                // var purchItem
                  return(
                  <div>
                    <PurchableItem name ={item.name} image = {item.image} price = {item.price} type = {item.type}></PurchableItem>
                    <button id = "butt" onClick = {() => {itemCart(<PurchableItem name ={item.name} image = {item.image} price = {item.price} 
                    type = {item.type}></PurchableItem>); totalSum(sum + item.price)}}>Add to Cart</button>
                  </div>
                  )
              })
            }
          </div>
      </div>
      {console.log(cart)}
    </div>
  );
}
export default App;


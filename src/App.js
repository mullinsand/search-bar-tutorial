import './App.css';
import Data from "./mock-data.json"
import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("")
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0.00)
  useEffect(() => {
    setCartTotal(calculateCartTotal());
  }, [cart]);


  function updateCart(postId, postPrice) {
    setCart(addProductToCart(postId, postPrice));
  }

  function addProductToCart(postId, postPrice) {
    let cartItem = {'id': postId, 'price': parseFloat(postPrice.slice(1))}
    let newCart = [...cart, cartItem]
    return newCart
  }
 
  function calculateCartTotal() {
    return cart.reduce((total, product, index) => {
      return total + product.price;
    }, 0)
  }

  return (
    <div className="App">
      <input placeholder="Enter Item Name" onChange={event => setQuery(event.target.value) }/>
      <div className="Cart">Number of Items: {cart.length} | Total: ${cartTotal.toFixed(2)}</div>
      {
        Data.filter(post => {
          if (query === '') {
            return post;
          } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={index}>
            <p>{post.name}</p>
            <img src={post.image} alt={post.name}/>
            <p>{post.category}</p>
            <p>{post.price}</p>
            <button onClick={() => updateCart(post.id, post.price)} >Add To Cart</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;

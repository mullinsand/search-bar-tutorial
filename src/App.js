import './App.css';
import Data from "./mock-data.json"
import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("")
  return (
    <div className="App">
      <input placeholder="Enter Item Name" onChange={event => setQuery(event.target.value) }/>
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
            <img src={post.image} alt={post.name} width="80" height="80"/>
            <p>{post.category}</p>
            <p>{post.price}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;

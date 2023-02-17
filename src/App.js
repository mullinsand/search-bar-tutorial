import './App.css';
import Data from "./mock-data.json"

function App() {
  return (
    <div className="App">
      <input placeholder="Enter Post Title"/>
      {
        Data.map((post) => (
          <div className="box" key={post.id}>
            <p>{post.name}</p>
            <p>{post.category}</p>
            <p>{post.price}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;

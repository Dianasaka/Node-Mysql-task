import { useEffect, useState } from 'react';
import { Search } from "./components/Filter";
import "./App.css";

import { PostProduct } from "./components/PostProduct";
import { PostProductAxios } from "./components/PostProduct-axios";
import { Products } from './components/Products'


function App() {
  const [product, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  const fetchProducts = () => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500)
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Barbora</h1>
      </header>

      <Products
        products={product}
        isLoading={isLoading}
        fetchProducts={fetchProducts}
        setProducts={setProducts}
        filtered={setFiltered}
      />

      <PostProduct />

      <p>Axios POST with useState as object:</p>
      <PostProductAxios fetchProducts={fetchProducts} />

      {/* <Search /> */}
    </div>
  );
}

export default App;

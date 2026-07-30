import { useEffect } from "react";
import { fetchProducts } from "./api";

export default function App() {
  useEffect(() => {
    fetchProducts()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>
    {fetchProducts}
  </div>;
};

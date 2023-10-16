import axios from "axios";

export const ApiExample = async () => {
   const api = await axios.get("https://dummyjson.com/products");
   const Products = await api.data.products;
   return Products

};


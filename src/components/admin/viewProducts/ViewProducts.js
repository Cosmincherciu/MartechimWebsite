import React, { useState } from "react";
import styles from "./ViewProducts.module.scss";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <h1>View Products</h1>
    </div>
  );
};

export default ViewProducts;

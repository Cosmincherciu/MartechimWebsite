import { useState } from "react";
import Card from "../../card/Card";
import styles from "./AddProducts.module.scss";

const categories = [
  { id: 1, name: "Vopsea Interior" },
  { id: 2, name: "Vopsea Exterior" },
  { id: 3, name: "Vopsea Auto" },
  { id: 4, name: "Vopsea Lemn" },
];

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: null,
    category: "",
    brand: "",
    desc: "",
  });

  const handleInputChange = (e) => {};
  const handleImageChange = (e) => {};

  return (
    <div className={styles.product}>
      <h2>Add New Product</h2>
      <Card cardClass={styles.card}>
        <form>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Product Image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "50%" }}>
                Uploading 50%
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              placeholder="Product Image"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />
            <input
              type="text"
              required
              name="imageURL"
              value={product.imageURL}
              disabled
            ></input>
          </Card>
          <label>Product Price:</label>
          <input
            type="number"
            placeholder="Product Price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Product Category:</label>
          <select
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              -- Choose Product Category --
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
          <label>Product Brand:</label>
          <input
            type="text"
            placeholder="Product Brand"
            required
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Product Description</label>
          <textarea
            name="desc"
            value={product.desc}
            onChange={(e) => handleInputChange(e)}
            required
            cols="30"
            rows="10"
          ></textarea>
          <button className="--btn --btn-primary">Save Product</button>
        </form>
      </Card>
    </div>
  );
};

export default AddProducts;

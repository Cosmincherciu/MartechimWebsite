import React from "react";
import { Link } from "react-router-dom";
import Card from "../../card/Card";
import styles from "./ProductItem.module.scss";

const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
      <div className={styles.img}>
        <Link to={`/product-details/${id}`}>
          <img src={imageURL} alt={name}></img>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`${price} Lei`}</p>
          <h4>{shortenText(name, 23)}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}
        <button className="--btn --btn-primary">Add To Cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;

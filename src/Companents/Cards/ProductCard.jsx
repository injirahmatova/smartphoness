import React from "react";
import styles from "./ProductCard.module.css";
const ProductCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <button>Sebete ekle</button>
      </div>
     </div>
  );
};

export default ProductCard;

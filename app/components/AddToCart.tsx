"use client";
import React from "react";
import styles from "./ProductCard.module.css";

const AddToCart = () => {
  return (
    <>
      <div className="flex flex-col col gap-4">
        <button className={styles.card} onClick={() => console.log("Click")}>
          Add to Cart
        </button>

        <button
          className="btn btn-primary"
          onClick={() => console.log("Click")}
        >
          Add to Cart
        </button>
      </div>{" "}
    </>
  );
};

export default AddToCart;

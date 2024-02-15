import React from "react";
import ProductCard from "../../Components/Card";
import { useSelector } from "react-redux";

const YourProducts = () => {
  const selector = useSelector((state) => state.CardSlice);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "60px",
      }}
    >
      {selector.length > 0 ? (
        selector.map((item, index) => {
          return (
            <ProductCard
              key={index}
              imgsrc={item.image}
              title={item.title}
              id={item.id}
            />
          );
        })
      ) : (
        <div style={{position:'absolute',top:'45%',left:'45%'}}>You don't Add to Cart any Item</div>
      )}
    </div>
  );
};

export default YourProducts;

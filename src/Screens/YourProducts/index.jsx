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
        <div style={{ display: "flex", fontSize: "25px", marginTop: "40vh" }}>
          No Item Found
        </div>
      )}
    </div>
  );
};

export default YourProducts;

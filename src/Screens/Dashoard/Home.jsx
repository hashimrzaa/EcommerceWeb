import React from "react";
import ProductCard from "../../Components/Card";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px",
      }}
    >
      <ProductCard
        w={true}
        desc={
          "A developer is a technology professional who works on, builds and creates software, websites, applications and other systems."
        }
        detail={true}
        title={"Hashim Raza"}
        imgsrc={
          "https://e0.pxfuel.com/wallpapers/461/943/desktop-wallpaper-coding-background-dark-coding.jpg"
        }
      />
    </div>
  );
};

export default Home;

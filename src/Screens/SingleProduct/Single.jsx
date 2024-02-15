import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Card";
import Loader from "../../Components/Loader";

const Single = () => {
  const [data, setdata] = useState([]);
  const param = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <div
      style={{ display: "flex", marginTop: "50px", justifyContent: "center" }}
    >
      {data?.image ? (
        <ProductCard
          imgsrc={data.image}
          title={data.title}
          detail={true}
          desc={data.description}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Single;

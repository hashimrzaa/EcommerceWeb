import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Loader from "../../Components/Loader";
import { useSelector } from "react-redux";

const index = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          mt: 10,
        }}
      >
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Card
                key={index}
                imgsrc={item.image}
                title={item.title}
                btn={true}
                id={item.id}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </Box>
    </>
  );
};

export default index;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcard, removecard } from "../../Redux/Slices";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function ProductCard({
  index,  
  imgsrc,
  title,
  w = false,
  btn = false,
  id,
  detail = false,
  desc,
  del = false,
}) {
  const dispatch = useDispatch();
  const addCard1 = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          addcard({
            item: data,
          })
        );
      });
  };

  const removeCard = (id) => {
    dispatch(
      removecard({
        index: id,
      })
    );
  };
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        m: 3,
        maxWidth: w ? "auto" : 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: w ? 400 : 300 }}
        image={imgsrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {detail ? (
          <Typography gutterBottom variant="body2" component="div">
            {desc}
          </Typography>
        ) : null}

        <CardActions>
          {btn ? (
            <div>
              <Button
                size="small"
                onClick={() => {
                  navigate(`/products/single/${id}`);
                }}
              >
                Detail
              </Button>
              <Button
                size="small"
                onClick={() => {
                  addCard1(id);
                }}
              >
                Add To cart
              </Button>
            </div>
          ) : null}
          {del ? (
            <Button variant="outlined" size="small" onClick={() => {removeCard(index)}}>
              <DeleteOutlineIcon />
            </Button>
          ) : null}
        </CardActions>
      </CardContent>
    </Card>
  );
}

import React from "react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

type ProductDetailSizeStockProps = {
  stockImg: string;
  color: string;
  size: string;
  stock: string;
};

export const ProductDetailSizeStock: React.FC<ProductDetailSizeStockProps> = (
  props
) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "400px",
        height: "85px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          width: "100%",
          height: "100%",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        {" "}
        {props.stockImg === "" ? null : (
          <StockImage stockImg={props.stockImg} color={props.color} />
        )}
        <StockSize size={props.size} stock={props.stock} />
        <CartButton />
        <FavoriteButton></FavoriteButton>
      </Box>
    </Box>
  );
};

type StockImageProps = {
  stockImg: string;
  color: string;
};

const StockImage: React.FC<StockImageProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={props.stockImg}
        alt=""
        style={{ height: "36px", width: "36px", borderRadius: "50%" }}
      />
      <Typography sx={{ fontSize: "10px" }}>{props.color}</Typography>
    </Box>
  );
};

type StockSizeProps = {
  size: string;
  stock: string;
};

const StockSize: React.FC<StockSizeProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "80px",
      }}
    >
      <Typography sx={{ fontSize: "12px", alignItems: "center" }}>
        {props.size}/{props.stock}
      </Typography>
    </Box>
  );
};

const CartButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "157px",
        height: "40px",
        backgroundColor: "#23abdd",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        alert("カートに入れました");
      }}
    >
      <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
        カートに入れる
      </Typography>
    </Box>
  );
};

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Box sx={{ justifyContent: "right", alignItems: "center" }}>
      <img
        src={isFavorite ? "/icon/FavoriteIcon.png" : "/icon/UnFavoriteIcon.png"}
        alt=""
        onClick={handleClick}
        style={{ width: "26px", height: "30px" }}
      />
    </Box>
  );
};

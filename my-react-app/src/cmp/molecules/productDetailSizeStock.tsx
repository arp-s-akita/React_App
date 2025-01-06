import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

export const ProductDetailSizeStock = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        height: "100%",
        marginTop: "80px",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StockImage
          stockImg="/demoStockImage/DemoStockImage.jpg"
          color="ブラック"
        />
        <StockSize size="S" stock="在庫あり" />
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
    <Box sx={{ marginRight: "20px" }}>
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
    <Typography sx={{ fontSize: "12px", marginRight: "20px" }}>
      {props.size}/{props.stock}
    </Typography>
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
    <Box sx={{ justifyContent: "center", alignItems: "center" }}>
      <img
        src={isFavorite ? "/icon/FavoriteIcon.png" : "/icon/UnFavoriteIcon.png"}
        alt=""
        onClick={handleClick}
        style={{ width: "26px", height: "30px" }}
      />
    </Box>
  );
};

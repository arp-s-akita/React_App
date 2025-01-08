import { ProductDisplay } from "./formatProductDisplay";
import { Box, Typography } from "@mui/material";
import React from "react";
import { products, discountProducts } from "../../../productData/productData";

interface ProductCardListProps {
  ListName: string;
}

export const ProductCardList: React.FC<ProductCardListProps> = ({
  ListName,
}) => {
  return (
    <Box sx={{ overflow: "hidden", position: "relative" }}>
      <Typography
        sx={{
          fontSize: "24px", // フォントサイズ
          fontFamily: "Roboto, sans-serif", // フォントファミリー
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        {ListName}
      </Typography>
      <ProductDisplay products={discountProducts}></ProductDisplay>
    </Box>
  );
};

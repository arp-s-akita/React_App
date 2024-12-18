import React from "react";
import { Box } from "@mui/material";

interface ProductImageProps {
  ProductImage: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ ProductImage }) => {
  return (
    <Box sx={{ width: "170px", height: "204px" }}>
      <img src={ProductImage} alt="商品画像" />
    </Box>
  );
};

import { ProductDisplay } from "./formatProductDisplay";
import { Box, Typography } from "@mui/material";
import React from "react";

interface ProductCardListProps {
  ListName: string;
}

export const ProductCardList: React.FC<ProductCardListProps> = ({
  ListName,
}) => {
  return (
    <Box sx={{ gap: 0, margin: 0 }}>
      <Typography>{ListName}</Typography>
      <ProductDisplay></ProductDisplay>
    </Box>
  );
};

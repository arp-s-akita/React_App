import { ProductCard } from "../molecules/ProductCard";
import { Box, Typography } from "@mui/material";
import React from "react";

interface ProductCardListProps {
  ListName: string;
  ProductsItem: string[];
}

export const ProductCardList: React.FC<ProductCardListProps> = ({
  ListName,
}) => {
  return (
    <Box>
      <Typography>{ListName}</Typography>
    </Box>
  );
};

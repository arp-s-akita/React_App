import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { Box, Typography } from "@mui/material";

export const ProductCard = () => {
  return (
    <Box>
      <ProductImage></ProductImage>
      <ProductDescription></ProductDescription>
    </Box>
  );
};

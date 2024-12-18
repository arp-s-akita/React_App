import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { Box } from "@mui/material";

interface ProductCardProps {
  ProductImages: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ ProductImages }) => {
  return (
    <Box>
      <ProductImage ProductImage={ProductImages}></ProductImage>
      <ProductDescription></ProductDescription>
    </Box>
  );
};

import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { Box } from "@mui/material";

interface ProductCardProps {
  ProductImages: string;
  brandName: string;
  productCategory: string;
  productValue: string;
  productColor: string;
  leftRadius: boolean;
  rightRadius: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  ProductImages,
  brandName,
  productCategory,
  productValue,
  productColor,
  leftRadius,
  rightRadius,
}) => {
  return (
    <Box
      sx={{
        width: "170px",
        height: "auto",
      }}
    >
      <ProductImage
        ProductImage={ProductImages}
        ImageTopRightRadius={rightRadius ? true : false}
        ImageTopLeftRadius={leftRadius ? true : false}
      ></ProductImage>
      <ProductDescription
        brandName={brandName}
        productCategory={productCategory}
        productValue={productValue}
        productColor={productColor}
        rightRadius={rightRadius ? true : false}
        leftRadius={leftRadius ? true : false}
      ></ProductDescription>
    </Box>
  );
};

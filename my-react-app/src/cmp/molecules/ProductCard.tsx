import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { Box } from "@mui/material";
import { ProductBadge } from "../atoms/ProductBadge";

interface ProductCardProps {
  ProductImages: string;
  brandName: string;
  productCategory: string;
  productValue: string;
  productColor: string;
  leftRadius: boolean;
  rightRadius: boolean;
  discountValue: string;
  percentDiscount: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  ProductImages,
  brandName,
  productCategory,
  productValue,
  productColor,
  leftRadius,
  rightRadius,
  discountValue,
  percentDiscount,
}) => {
  return (
    <Box
      sx={{
        width: "auto",
        height: "360px",
      }}
    >
      <ProductBadge
        discountValue={discountValue}
        percentDiscount={percentDiscount}
      ></ProductBadge>

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

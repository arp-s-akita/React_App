import React from "react";
import { Box } from "@mui/material";

interface ProductImageProps {
  ProductImage: string;
  ImageTopRightRadius: boolean;
  ImageTopLeftRadius: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  ProductImage,
  ImageTopRightRadius,
  ImageTopLeftRadius,
}) => {
  return (
    <Box
      sx={{ width: "170px", height: "204px", margin: 0, padding: 0, gap: 0 }}
    >
      <img
        src={ProductImage}
        alt="商品画像"
        style={{
          width: "100%",
          height: "204px",
          borderTopRightRadius: ImageTopRightRadius ? "10px" : "0px",
          borderTopLeftRadius: ImageTopLeftRadius ? "10px" : "0px",
        }}
      />
    </Box>
  );
};

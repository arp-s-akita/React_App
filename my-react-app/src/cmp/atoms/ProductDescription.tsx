import { Box, Typography } from "@mui/material";

interface ProductDescriptionProps {
  brandName: string;
  productCategory: string;
  productValue: string;
  productColor: string;
  leftRadius: boolean;
  rightRadius: boolean;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  brandName,
  productCategory,
  productValue,
  productColor,
  leftRadius,
  rightRadius,
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "130px",
          backgroundColor: "white",
          borderBottomLeftRadius: leftRadius ? "10px" : "0px",
          borderBottomRightRadius: rightRadius ? "10px" : "0px",
          margin: 0,
          padding: 0,
          gap: 0,
        }}
      >
        <Typography sx={{ fontWeight: "bold", m: 0, p: 0 }}>
          {brandName}
        </Typography>
        <Typography sx={{ m: 0, p: 0 }}>{productCategory}</Typography>
        <Typography sx={{ color: "red", m: 0, p: 0 }}>
          {productValue}
        </Typography>
        <Typography sx={{ m: 0, p: 0 }}>{productColor}</Typography>
      </Box>
    </>
  );
};

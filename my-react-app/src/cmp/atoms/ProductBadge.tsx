import { Box, Typography } from "@mui/material";
import React from "react";

type ProductCardProps = {
  discountValue: string;
  percentDiscount: string;
};

export const ProductBadge: React.FC<ProductCardProps> = ({
  discountValue,
  percentDiscount,
}) => {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#ed293e",
          width: "57px",
          height: "20px",
          top: "184px",
          display: percentDiscount ? "flex" : "none", // フレックスボックスを使用
          alignItems: "center", // 垂直方向の中央揃え
          justifyContent: "center", // 水平方向の中央揃え
        }}
      >
        <Typography
          sx={{
            fontSize: "10px", // フォントサイズ
            fontFamily: "Roboto, sans-serif", // フォントファミリー
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          {percentDiscount}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#66bc27",
          width: "90px",
          height: "20px",
          top: percentDiscount ? "164px" : "184px",
          display: discountValue ? "flex" : "none", // フレックスボックスを使用
          alignItems: "center", // 垂直方向の中央揃え
          justifyContent: "center", // 水平方向の中央揃え
        }}
      >
        <Typography
          sx={{
            fontSize: "10px", // フォントサイズ
            fontFamily: "Roboto, sans-serif", // フォントファミリー
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          {discountValue}
        </Typography>
      </Box>
    </Box>
  );
};

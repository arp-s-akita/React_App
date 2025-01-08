import { Box, Button } from "@mui/material";
import { productsImage } from "../../../productData/productImageData";
import React, { useState } from "react";

type productsImageProps = {
  AmoutID: number;
  productID: string;
};

export const ProductDetailMainImageSlide: React.FC<productsImageProps> = (
  props
) => {
  const [shiftAmount, setShiftAmount] = useState(0); // スライド量を管理

  const handleRight = () => {
    if (shiftAmount === productsImage[0].images.length - 1) {
      setShiftAmount(0);
    } else {
      setShiftAmount(shiftAmount + 1); // スライドを右に
      console.log("right", shiftAmount);
    }
  };

  const handleLeft = () => {
    if (shiftAmount === 0) {
      setShiftAmount(productsImage[props.AmoutID].images.length - 1);
    } else {
      setShiftAmount(shiftAmount - 1); // スライドを左に
      console.log("right", shiftAmount);
    }
  };

  const product = productsImage.find(
    (product) => product.id === props.productID
  );
  console.log(product);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Box sx={{ position: "relative", width: "500px", height: "600px" }}>
      <img
        src={product.images[shiftAmount]}
        alt=""
        style={{ width: "500px", height: "600px" }}
      />
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "45%",
          left: "10px",
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: "50%", // 完全な円形に
          width: "40px",
          height: "40px",
          minWidth: "unset", // デフォルトのminWidthをリセット
          fontWeight: "bold",
          border: "1px solid #fff",
        }}
        onClick={handleLeft}
      >
        ＜
      </Button>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "45%",
          right: "10px",
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: "50%", // 完全な円形に
          width: "40px",
          height: "40px",
          minWidth: "unset", // デフォルトのminWidthをリセット
          fontWeight: "bold",
          border: "1px solid #fff",
        }}
        onClick={handleRight}
      >
        ＞
      </Button>
    </Box>
  );
};

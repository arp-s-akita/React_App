import { ProductCard } from "../molecules/ProductCard";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { products } from "./productData";

export const ProductDisplay = () => {
  const [rightShift, moveShift] = useState(false);

  const handleRight = () => {
    moveShift(!rightShift); // スライドの状態を反転
  };

  return (
    <Box sx={{ width: "auto", overflow: "hidden", position: "relative" }}>
      {/* 商品カードを囲む親要素 */}
      <Box
        sx={{
          display: "flex", // 横並びに配置
          gap: 0, // 各アイテム間の隙間
          transition: "transform 0.5s ease", // スライドアニメーション
          position: "relative", // 位置を相対的に設定
          transform: rightShift ? "translateX(-200px)" : "translateX(0)", // スライド効果
          zIndex: 1,
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            ProductImages={product.imageUrl}
            productCategory={product.productCategory}
            productColor={product.colors[0]}
            productValue={product.productPrice}
            brandName={product.brandName}
            leftRadius={false}
            rightRadius={false}
          />
        ))}
      </Box>

      {/* ボタンを中央に配置 */}
      <Button
        onClick={handleRight}
        variant="contained"
        sx={{
          position: "absolute", // 画像や商品カードに重ならないように絶対配置
          top: "50%", // 画像の中央に配置
          right: "20%",
          transform: "translate(-50%, -50%)", // ボタンを中央に持ってくる
          zIndex: 10, // ボタンを最前面に表示
          backgroundColor: "transparent",
        }}
      >
        ＞
      </Button>
    </Box>
  );
};

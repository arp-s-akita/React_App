import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { ProductCard } from "../../molecules/Homepage/ProductCard";
//import { products } from "./productData";

type Product = {
  id: number;
  brandName: string;
  productName: string;
  productPrice: string;
  currency: string;
  availableColors: number;
  colors: string[];
  productCategory: string;
  imageUrl: string;
  discountCoupon: string;
  percentDiscount: string;
};

type ProductCardProps = {
  products: Product[];
};

export const ProductDisplay: React.FC<ProductCardProps> = ({ products }) => {
  const [shiftAmount, setShiftAmount] = useState(0); // スライド量を管理
  const cardWidth = 170; // 各カードの幅
  const visibleWidth = 170 * 4.3; // 表示される範囲の幅
  const maxShift = -(products.length * cardWidth - visibleWidth); // 最大スライド量

  const handleRight = () => {
    setShiftAmount((prev) => Math.max(prev - cardWidth, maxShift)); // スライドを右に
  };

  const handleLeft = () => {
    setShiftAmount((prev) => Math.min(prev + cardWidth, 0)); // スライドを左に
  };

  return (
    <Box
      sx={{
        width: `${visibleWidth}px`, // 表示領域を400pxに設定
        overflow: "hidden", // 表示領域外を隠す
        position: "relative",
      }}
    >
      {/* 商品カードを囲む親要素 */}
      <Box
        sx={{
          display: "flex", // 横並びに配置
          gap: 0, // 各アイテム間の隙間
          transition: "transform 0.5s ease", // スライドアニメーション
          transform: `translateX(${shiftAmount}px)`, // スライド効果
          width: "900px",
        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            ProductImages={product.imageUrl}
            productCategory={product.productCategory}
            productColor={product.colors[0]}
            productValue={product.productPrice}
            brandName={product.brandName}
            leftRadius={index === 0}
            rightRadius={index === products.length - 1}
            percentDiscount={product.percentDiscount}
            discountValue={product.discountCoupon}
          />
        ))}
      </Box>

      {/* 左矢印ボタン */}
      <Button
        onClick={handleLeft}
        variant="contained"
        sx={{
          position: "absolute",
          top: "45%",
          left: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "50%", // 完全な円形に
          width: "50px",
          height: "50px",
          minWidth: "unset", // デフォルトのminWidthをリセット
        }}
        disabled={shiftAmount === 0} // 左端ではボタン無効化
      >
        ＜
      </Button>

      {/* 右矢印ボタン */}
      <Button
        onClick={handleRight}
        variant="contained"
        sx={{
          position: "absolute",
          top: "45%",
          right: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "50%", // 完全な円形に
          width: "50px",
          height: "50px",
          minWidth: "unset", // デフォルトのminWidthをリセット
        }}
        disabled={shiftAmount === maxShift} // 右端ではボタン無効化
      >
        ＞
      </Button>
    </Box>
  );
};

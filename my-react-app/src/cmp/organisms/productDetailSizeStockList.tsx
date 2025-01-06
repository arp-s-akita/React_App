import { ProductDetailSizeStock } from "../molecules/productDetailSizeStock";
import { Box } from "@mui/material";

const products = [
  {
    id: "0", // 商品ごとのユニークID
    name: "商品A", // 商品名
    variations: [
      {
        color: "黒", // カラー
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: true }, // サイズSの在庫あり
          { size: "M", stock: true }, // サイズMの在庫あり
          { size: "L", stock: false }, // サイズLの在庫なし
        ],
      },
      {
        color: "白",
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: false },
          { size: "M", stock: true },
          { size: "L", stock: true },
        ],
      },
    ],
  },
  {
    id: "1", // 商品ごとのユニークID
    name: "商品B", // 商品名
    variations: [
      {
        color: "黒", // カラー
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: true }, // サイズSの在庫あり
          { size: "M", stock: true }, // サイズMの在庫あり
          { size: "L", stock: false }, // サイズLの在庫なし
        ],
      },
      {
        color: "白",
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: false },
          { size: "M", stock: true },
          { size: "L", stock: true },
        ],
      },
    ],
  },
];

const productDetailSizeStockList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        height: "100%",
        marginTop: "80px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProductDetailSizeStock />
      <ProductDetailSizeStock />
      <ProductDetailSizeStock />
    </Box>
  );
};

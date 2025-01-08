import { ProductDetailSizeStock } from "../../molecules/productDetails/productDetailSizeStock";
import { Box } from "@mui/material";
import { productsImage } from "../../../productData/productImageData";

const products = [
  {
    id: "0", // 商品ごとのユニークID
    name: "商品A", // 商品名
    variations: [
      {
        color: "黒", // カラー
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: "あり" }, // サイズSの在庫あり
          { size: "M", stock: "残り2点" }, // サイズMの在庫あり
          { size: "L", stock: "なし" }, // サイズLの在庫なし
        ],
      },
      {
        color: "白",
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: "あり" },
          { size: "M", stock: "あり" },
          { size: "L", stock: "残り1点" },
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
          { size: "S", stock: "あり" },
          { size: "M", stock: "あり" },
          { size: "L", stock: "残り1点" },
        ],
      },
      {
        color: "白",
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: "あり" },
          { size: "M", stock: "あり" },
          { size: "L", stock: "残り1点" },
        ],
      },
    ],
  },
];

type Product = {
  productID: string;
};

export const ProductDetailSizeStockList: React.FC<Product> = (props) => {
  //IDを指定

  //IDに一致する商品を取得
  const product = products.find((product) => product.id === props.productID);

  if (!product) {
    return <div>商品が見つかりません</div>;
  }

  const variations = product.variations.map((variation) => {
    return {
      color: variation.color,
      image: variation.image,
      sizes: variation.sizes.map((size) => ({
        size: size.size,
        stock: size.stock,
      })),
    };
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        height: "auto",
        marginTop: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {variations.map((product, productIndex) => (
        <Box key={productIndex} sx={{ marginBottom: "10px" }}>
          {product.sizes.map((size, sizeIndex) => (
            <ProductDetailSizeStock
              key={sizeIndex}
              stockImg={product.image}
              color={product.color}
              size={size.size}
              stock={size.stock}
            ></ProductDetailSizeStock>
          ))}
        </Box>
      ))}
    </Box>
  );
};

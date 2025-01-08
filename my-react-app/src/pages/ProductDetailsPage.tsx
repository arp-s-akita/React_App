import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { ProductDetailSizeStockList } from "../cmp/organisms/productDetails/productDetailSizeStockList";
import { ItemDescription } from "../cmp/molecules/productDetails/ItemDescription";
import { ProductDetailImageSlide } from "../cmp/molecules/productDetails/productDetailImageSlide";
import { ProductDetailMainImageSlide } from "../cmp/molecules/productDetails/productDetailMainSlide";
import { useLocation } from "react-router-dom";
import { productsStockRE } from "../productData/productStockData";

export const ProductDetailsPage = () => {
  const location = useLocation();
  const id = location.state as string;

  console.log("値", id);

  const stockID = location.state;

  const product = productsStockRE.find((product) => product.id === stockID);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        width: "100%",
        height: "auto",
        marginTop: "80px",
        display: "flex",
        flexDirection: "row", // 横並びに設定
        gap: 10, // 要素間の隙間（px単位やthemeベースの単位）
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <ProductDetailMainImageSlide
          AmoutID={0}
          productID={stockID}
        ></ProductDetailMainImageSlide>
        <ProductDetailImageSlide ProducutId={stockID}></ProductDetailImageSlide>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <BrandLabel brandName={product.brandname} img="/icon/brandIcon.png" />
        <BrandLabel brandName={product.brandname} img="/icon/couponIcon.png" />

        <Typography
          variant="h1"
          sx={{
            fontFamily: `"Noto Sans JP", sans-serif`,
            fontSize: "18px",
            fontWeight: 900,
            textAlign: "left",
            lineHeight: "28px",
            height: "58px",
            width: "400px",
          }}
        >
          {product.name}
        </Typography>

        <Typography
          sx={{
            fontFamily: `"Noto Sans JP", sans-serif`,
            fontSize: "11px",
            fontWeight: 500,
            textAlign: "left",
            color: "#a0a0a0",
            height: "14px",
          }}
        >
          お気に入りアイテム登録者数:{product.favorite}人
        </Typography>
        {/* <Box
          sx={{
            backgroundColor: "#ed293e",
            width: "90px",
            height: "30px",
            borderRadius: "5px",
            display: "flex", // フレックスボックスを有効にする
            justifyContent: "center", // 水平方向の中央揃え
            alignItems: "center", // 垂直方向の中央揃え
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
            }}
          >
            30%OFF
          </Typography>
        </Box> */}
        <Value value={product.value}></Value>
        <Box
          sx={{
            height: "50px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: "10px",
          }}
        >
          <InformationLabel
            iconImg="/icon/pointIcon.png"
            information="ZOZOCARDなら5%還元"
            redLineText="490pt"
            otherText=""
            detail="詳細"
          ></InformationLabel>
          <InformationLabel
            iconImg="/icon/trackIcon.png"
            information="即日配送なら"
            redLineText="最短明日の午前中"
            otherText="にお届けします。"
            detail=""
          ></InformationLabel>
        </Box>

        <ProductDetailSizeStockList
          productID={stockID}
        ></ProductDetailSizeStockList>
        <ItemDescription></ItemDescription>
      </Box>
    </Box>
  );
};

type brandLabelProps = {
  brandName: string;
  img: string;
};
const BrandLabel: React.FC<brandLabelProps> = ({ brandName, img }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        gap: 1,
      }}
    >
      <img src={img} alt="" style={{ width: "28px", height: "32px" }} />
      <Button
        sx={{
          fontFamily: `"Noto Sans JP", sans-serif`,
          fontSize: "13px",
          fontWeight: 900,
          textAlign: "left",
          letterSpacing: "normal",
          color: "#23abdd",
          lineHeight: "23px",
        }}
      >
        {brandName}
      </Button>
    </Box>
  );
};

type ValueProps = {
  value: string;
};

const Value: React.FC<ValueProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: 1,

        marginTop: "25px",
      }}
    >
      <Typography
        sx={{
          fontFamily: `"Noto Sans JP", sans-serif`,
          fontSize: "25px",
          fontWeight: 900,
          textAlign: "left",
          letterSpacing: "normal",
          color: "#ed293e",
          alignSelf: "flex-end",
          lineHeight: "25px",
        }}
      >
        {props.value}
      </Typography>
      <Typography
        sx={{
          fontFamily: `"Noto Sans JP", sans-serif`,
          fontSize: "11px",
          fontWeight: 900,
          textAlign: "left",
          letterSpacing: "normal",
          color: "#ed293e",
          alignSelf: "flex-end",
        }}
      >
        (税込)
      </Typography>
    </Box>
  );
};

type informationLabelProps = {
  iconImg: string;
  information: string;
  redLineText: string;
  otherText: string;
  detail: string;
};

const InformationLabel: React.FC<informationLabelProps> = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <img
        src={props.iconImg}
        alt=""
        style={{ width: "18px", height: "18px" }}
      />
      <Typography
        sx={{
          fontFamily: `"Noto Sans JP", sans-serif`,
          fontSize: "11px",
          fontWeight: 900,
          textAlign: "left",
          letterSpacing: "normal",
          color: "#2d2d2d",
          lineHeight: "14px",
          marginLeft: "5px",
        }}
      >
        {props.information}
      </Typography>
      <Typography
        sx={{
          fontFamily: `"Noto Sans JP", sans-serif`,
          fontSize: "11px",
          fontWeight: 900,
          textAlign: "left",
          letterSpacing: "normal",
          color: "#ed293e",
          lineHeight: "14px",
        }}
      >
        {props.redLineText}
      </Typography>
      <Typography
        sx={{
          fontFamily: `"Noto Sans JP", sans-serif`,
          fontSize: "11px",
          fontWeight: 900,
          textAlign: "left",
          letterSpacing: "normal",
          color: "#2d2d2d",
          lineHeight: "14px",
        }}
      >
        {props.otherText}
      </Typography>
      <Typography
        sx={{
          fontFamily: `"Noto Sans JP", sans-serif`,
          fontSize: "11px",
          fontWeight: 900,
          textAlign: "left",
          letterSpacing: "normal",
          color: "#23abdd",
          lineHeight: "14px",
          marginLeft: "10px",
        }}
      >
        {props.detail}
      </Typography>
    </Box>
  );
};

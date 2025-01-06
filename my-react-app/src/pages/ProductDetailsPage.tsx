import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { ProductDetailSizeStock } from "../cmp/molecules/productDetailSizeStock";

export const ProductDetailsPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
        marginTop: "80px",
        display: "flex",
        flexDirection: "row", // 横並びに設定
        justifyContent: "center", // 水平方向の中央寄せ
        alignItems: "center", // 垂直方向の中央寄せ
        gap: 10, // 要素間の隙間（px単位やthemeベースの単位）
      }}
    >
      <img
        src="/public/demoStockImage/DemoMainImage.jpg"
        alt=""
        style={{ width: "500", height: "600px" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <BrandLabel brandName="moment+" img="/icon/brandIcon.png" />
        <BrandLabel brandName="moment+" img="/icon/couponIcon.png" />

        <Typography
          variant="h1"
          sx={{
            fontFamily: `"Noto Sans JP", sans-serif`,
            fontSize: "18px",
            fontWeight: 900,
            textAlign: "left",
            lineHeight: "28px",
          }}
        >
          ヴィンテージライクマットフェイクレザーブルゾン
        </Typography>
        <Typography
          sx={{
            fontFamily: `"Noto Sans JP", sans-serif`,
            fontSize: "11px",
            fontWeight: 500,
            textAlign: "left",
            color: "#a0a0a0",
          }}
        >
          お気に入りアイテム登録者数:{100}人
        </Typography>
        <Box
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
        </Box>
        <Value></Value>
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

        <ProductDetailSizeStock></ProductDetailSizeStock>
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

const Value = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        gap: 1,
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
        ¥ 10000
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

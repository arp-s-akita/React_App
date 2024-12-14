import { useState } from "react";
import { Header } from "./cmp/atoms/header";
import { GenderSelect } from "./cmp/molecules/genderSelect";
import { Box, Button } from "@mui/material";
import { Slideshow } from "./cmp/molecules/slideshow";
import { CssBaseline } from "@mui/material";
import { SectionList } from "./cmp/organisms/SectionList";
import { ProductCard } from "./cmp/molecules/ProductCard";

function App() {
  return (
    <div>
      <CssBaseline>
        <Header></Header>
        <Box
          sx={{
            display: "flex", // 横並び
            justifyContent: "center", // 水平方向の中央寄せ
            alignItems: "center", // 垂直方向の中央寄せ
            gap: 40, // 要素間の隙間（px単位やthemeベースの単位）
            marginTop: "160px",
            marginBottom: "20px",
          }}
        >
          <GenderSelect></GenderSelect>
          <Button>ゾゾタウンからのお知らせ</Button>
        </Box>

        <Slideshow></Slideshow>

        <Box
          sx={{
            backgroundColor: "#fffafa",
            width: "100%",
            height: "500px",
            marginTop: "80px",
            display: "flex",
            flexDirection: "row", // 横並びに設定
          }}
        >
          <SectionList></SectionList>
          <ProductCard></ProductCard>
        </Box>
      </CssBaseline>
    </div>
  );
}

export default App;

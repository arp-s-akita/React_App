import { useState } from "react";
import "./App.css";
import { Header } from "./cmp/header";
import { GenderSelect } from "./cmp/genderSelect";
import { Box, Button } from "@mui/material";
import { Slideshow } from "./cmp/slideshow";

function App() {
  return (
    <div>
      <Header></Header>
      <Box
        sx={{
          marginTop: "64px", // AppBarの高さ分のマージンを設定
          display: "flex", // 横並び
          gap: 2, // 要素間の間隔
        }}
      >
        <GenderSelect></GenderSelect>
        <Button>ゾゾタウンからのお知らせ</Button>
      </Box>
      <Slideshow></Slideshow>
    </div>
  );
}

export default App;

import { Header } from "./cmp/header";
import { Box } from "@mui/material";
import { Card } from "./cmp/atomsNOUE/Card";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "white", // 背景色を白に設定
        margin: 0, // 余白をゼロに設定
        padding: 0, // パディングをゼロに設定
        minHeight: "100vh", // 画面全体の高さを最低でも100%に
        width: "100%", // 横幅も100%に設定
        display: "flex", // フレックスボックスを使用
        flexDirection: "column", // 要素を縦に並べる
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex", // フレックスボックスを使用
          justifyContent: "center", // 子要素（Card）を横方向に中央揃え
          alignItems: "center", // 子要素（Card）を縦方向にも中央揃え
          height: "100%", // 親要素（Box）の高さを100%に
        }}
      >
        <Card />
      </Box>
      <p>aaaaaaaa</p>
    </Box>
  );
}

export default App;

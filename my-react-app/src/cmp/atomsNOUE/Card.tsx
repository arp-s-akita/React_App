import React from "react";
import { Box } from "@mui/material";

export const Card = () => {
  return (
    <Box>
      {/* 1つ目の画像：中央揃え */}
      <Box
        sx={{
          width: "100%",
          display: "flex", // 親要素をflexコンテナに
          justifyContent: "center", // 子要素を中央揃え
          marginTop: "50px",
          padding: 0,
        }}
      >
        <img
          src="/Group17.png"
          alt="Logo"
          style={{ width: "80%" }} // 高さと幅を調整して、中央に表示
        />
      </Box>

      {/* 2つ目の画像：左に配置 */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img
          src="/Group13.png"
          alt="Logo"
          style={{ width: "80%" }} // 幅を調整して表示
        />
      </Box>

      {/* 3つ目のBox: 背景色と高さを指定 */}
      <Box sx={{ width: "100%", height: "300px", backgroundColor: "#D9D9D9" }}>
        {/* 画像がない場合、代わりに何か別の内容を表示する */}
        <img
          src="/path/to/another-image.png" // 適切な画像URLを指定
          alt="なし"
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // 画像がBoxに合わせて縮小されます
        />
      </Box>
    </Box>
  );
};

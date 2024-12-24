import React from "react";
import { Box } from "@mui/material";

const images = [
  "/slideImage/slide1.png",
  "/slideImage/slide2.png",
  "/slideImage/slide3.png",
  "/slideImage/slide4.png",
];

export const Slideshow = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: "slide 20s linear infinite", // スライドアニメーション
          gap: "10px", // 画像間のギャップ
        }}
      >
        {images.concat(images).map((image, index) => (
          <Box
            key={index}
            sx={{
              width: "450px", // 画像の幅
              flexShrink: 0,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Box>
      <style>
        {`
          @keyframes slide {
  0% {
    transform: translateX(0); /* 最初の位置 */
  }
  10% {
    transform: translateX(0); /* 1枚目で停止 */
  }
  20% {
    transform: translateX(-460px); /* 1枚目→2枚目 */
  }
  30% {
    transform: translateX(-460px); /* 2枚目で停止 */
  }
  40% {
    transform: translateX(-920px); /* 2枚目→3枚目 */
  }
  50% {
    transform: translateX(-920px); /* 3枚目で停止 */
  }
  60% {
    transform: translateX(-1380px); /* 3枚目→4枚目 */
  }
  70% {
    transform: translateX(-1380px); /* 4枚目で停止 */
  }
  80% {
    transform: translateX(-1840px); /* 4枚目→1枚目に戻る */
  }
  90% {
    transform: translateX(-1840px); /* 最後の位置で停止 */
  }
  100% {
    transform: translateX(-1840px); /* 1枚目の位置に戻る */
  }
}
        `}
      </style>
    </Box>
  );
};

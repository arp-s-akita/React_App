import React from "react";
import { Button, Box } from "@mui/material";

export const GenderSelect = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button sx={{ color: "black" }}>全て</Button>
      <Button sx={{ color: "#1e90ff" }}>メンズ</Button>
      <Button sx={{ color: "#ff69b4" }}>レディース</Button>
      <Button sx={{ color: "#ffd700" }}>キッズ</Button>
    </Box>
  );
};

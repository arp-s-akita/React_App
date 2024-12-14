import React from "react";
import { Button } from "@mui/material";

interface FilterButtonsProps {
  name: string;
}

export const FilterButton: React.FC<FilterButtonsProps> = ({ name }) => {
  return (
    <Button
      sx={{
        color: "black",
        backgroundColor: "transparent",
        borderRadius: 0,
        fontSize: "0.8rem",
        lineHeight: 1,
        paddingBottom: 0,
        width: "auto", // 文字の幅に合わせる
        display: "inline-flex", // コンテンツの幅に合わせる
        "&:hover": {
          borderBottom: "1px solid black",
          backgroundColor: "transparent",
        },
      }}
    >
      {name}
    </Button>
  );
};

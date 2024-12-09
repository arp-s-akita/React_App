import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  colors,
} from "@mui/material";

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "none", backgroundColor: "#f5f5f5", color: "black" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: 10,
            gap: 5,
          }}
        >
          <Typography variant="h6">ZOZOTOWN</Typography>
          <TextField
            label="すべてのアイテムから探す"
            variant="outlined"
            size="small"
            sx={{
              width: 300,
              backgroundColor: "#ffffff",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 0, marginRight: 20 }}>
          <Button color="inherit" disableFocusRipple>
            ログイン
          </Button>
          <Button color="inherit" disableFocusRipple>
            🔔
          </Button>
          <Button color="inherit" disableFocusRipple>
            ♡
          </Button>
          <Button color="inherit" disableFocusRipple>
            🛒
          </Button>
          <Button color="inherit" disableFocusRipple>
            三
          </Button>
        </Box>
      </Toolbar>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Button
            color="inherit"
            disableRipple
            sx={{
              fontSize: "1.5rem",
              color: "#d3d3d3",
              backgroundColor: "transparent", // 背景色を完全に透明に
              borderBottom: "2px solid transparent", // 通常時はアンダーバーを透明に
              borderRadius: 0, // 丸みをなくす
              "&:hover": {
                color: "black", // ホバー時のフォントカラー
                borderBottom: "2px solid black", // ホバー時のアンダーバー
                backgroundColor: "transparent", // ホバー時も背景色を無効化
              },
              "&:active": {
                borderBottom: "2px solid blue", // クリック時にアンダーバーを青に変更
                backgroundColor: "transparent", // クリック時も背景色を無効化
              },
              "&:focus": {
                outline: "none", // フォーカスリングを無効化
                boxShadow: "none", // ボックスシャドウを無効化
              },
            }}
          >
            全てのアイテム
          </Button>
          <Button
            color="inherit"
            disableRipple
            sx={{
              fontSize: "1.5rem",
              color: "#d3d3d3",
              backgroundColor: "transparent", // 背景色を完全に透明に
              borderBottom: "2px solid transparent", // 通常時はアンダーバーを透明に
              borderRadius: 0, // 丸みをなくす
              "&:hover": {
                color: "black", // ホバー時のフォントカラー
                borderBottom: "2px solid black", // ホバー時のアンダーバー
                backgroundColor: "transparent", // ホバー時も背景色を無効化
              },
              "&:active": {
                borderBottom: "2px solid blue", // クリック時にアンダーバーを青に変更
                backgroundColor: "transparent", // クリック時も背景色を無効化
              },
              "&:focus": {
                outline: "none", // フォーカスリングを無効化
                boxShadow: "none", // ボックスシャドウを無効化
              },
            }}
          >
            コスメアイテム
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

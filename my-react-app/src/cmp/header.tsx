import React from "react";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";

export const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "black", width: "100%", top: 0 }}
    >
      <Toolbar>
        <Box
          sx={{
            marginLeft: isMobile ? " 15%" : "40%",
          }}
        >
          <img src="/Group13.png" alt="Logo" style={{ height: 40 }} />
        </Box>
        {/* ナビゲーションボタン */}
      </Toolbar>
    </AppBar>
  );
};

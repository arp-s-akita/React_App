import { Box, Typography } from "@mui/material";

export const ProductDescription = () => {
  return (
    <>
      <Box
        sx={{
          width: "170px",
          height: "130px",
          backgroundColor: "white",
          marginTop: "50px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>ブランド名</Typography>
        <Typography>商品category</Typography>
        <Typography sx={{ color: "red" }}>ブランド名</Typography>
        <Typography>ブランド名</Typography>
      </Box>
    </>
  );
};

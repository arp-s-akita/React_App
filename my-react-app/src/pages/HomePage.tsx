import { Header } from "../cmp/atoms/HomePage/header";
import { GenderSelect } from "../cmp/molecules/Homepage/genderSelect";
import { Box, Button } from "@mui/material";
import { Slideshow } from "../cmp/molecules/Homepage/slideshow";
import { CssBaseline } from "@mui/material";
import { SectionList } from "../cmp/organisms/HomePage/SectionList";
import { ProductCardList } from "../cmp/organisms/HomePage/ProductList";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const HomePage = () => {
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
            backgroundColor: "#f8f8f8",
            width: "100%",
            height: "100%",
            marginTop: "80px",
            display: "flex",
            flexDirection: "row", // 横並びに設定
          }}
        >
          <SectionList></SectionList>
          <Box sx={{ marginLeft: "50px", marginTop: "15px" }}>
            <ProductCardList ListName="おすすめ"></ProductCardList>

            <Link
              to="/ProductDetailsPage"
              state="1"
              style={{ textDecoration: "none", color: "black" }}
            >
              飛ぶ
            </Link>
          </Box>
        </Box>
      </CssBaseline>
    </div>
  );
};

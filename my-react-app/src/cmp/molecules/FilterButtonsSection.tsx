import { FilterButton } from "../atoms/FilterButtons";
import { Box, Typography } from "@mui/material";

interface FilterButtonsSectionProps {
  sectionName: string;
  category: string[];
}

const sectionItem = [
  "ブランドから探す",
  "公式ショップから探す",
  "ランキングから探す",
  "セール対象から探す",
  "クーポン対象から探す",
];

export const FilterButtonsSection: React.FC<FilterButtonsSectionProps> = ({
  sectionName,
  category,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          marginLeft: "400px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{sectionName}</Typography>
          {category.map((item) => (
            <FilterButton key={item} name={item}></FilterButton>
          ))}
        </Box>
      </Box>
    </>
  );
};

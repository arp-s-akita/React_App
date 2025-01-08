import { Box } from "@mui/material";
import { productsImage } from "../../../productData/productImageData";

// 配列を指定したサイズごとに分割する関数
const chunkArray = (array: string[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

type productsImageProps = {
  ProducutId: string;
};

export const ProductDetailImageSlide: React.FC<productsImageProps> = (
  props
) => {
  //IDを指定
  const productsPhotp = productsImage.find(
    (product) => product.id === props.ProducutId
  );

  if (!productsPhotp) {
    return null;
  }

  const chunkedProducts = chunkArray(productsPhotp.images, 10);

  return (
    <div>
      {chunkedProducts.map((chunk, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2, width: "400px" }}>
          {chunk.map((product, idx) => (
            <SlideImages key={idx} img={product} />
          ))}
        </Box>
      ))}
    </div>
  );
};

type slideImagesProps = {
  img: string;
};

const SlideImages: React.FC<slideImagesProps> = (props) => {
  return (
    <Box>
      <img src={props.img} alt="" style={{ width: "35px", height: "42px" }} />
    </Box>
  );
};

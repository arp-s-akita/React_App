import { Box } from "@mui/material";

const productsPhotp = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
  "image12.jpg",
  "image13.jpg",
  "image14.jpg",
  "image15.jpg",
  "image16.jpg",
  "image17.jpg",
  "image18.jpg",
  "image19.jpg",
  "image20.jpg",
  "image21.jpg",
  "image22.jpg",
  "image23.jpg",
  "image24.jpg",
  "image25.jpg",
  "image26.jpg",
  "image27.jpg",
  "image28.jpg",
  "image29.jpg",
  "image30.jpg",
  "image31.jpg",
  "image32.jpg",
  "image33.jpg",
  "image34.jpg",
  "image35.jpg",
  "image36.jpg",
  "image37.jpg",
  "image38.jpg",
  "image39.jpg",
  "image40.jpg",
];

// 配列を指定したサイズごとに分割する関数
const chunkArray = (array: string[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

export const ProductDetailMainImageSlide = () => {
  const chunkedProducts = chunkArray(productsPhotp, 10);

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

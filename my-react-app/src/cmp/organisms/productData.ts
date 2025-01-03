export const products = [
  {
    id: 1,
    brandName: "adidas",
    productName: "スニーカー",
    productPrice: "15400円",
    currency: "¥",
    availableColors: 2,
    colors: ["ブラック", "ホワイト"],
    productCategory: "シューズ",
    imageUrl: "/testSectionProductImage/adidasShoes.jpg", // 商品画像URL（例）
  },
  {
    id: 2,
    brandName: "MONO-MART",
    productName: "デニムパンツ",
    productPrice: "3960円",
    currency: "¥",
    availableColors: 7,
    colors: [
      "ブラック",
      "インディゴ",
      "ホワイト",
      "ライトブルー",
      "ダークブルー",
      "ネイビー",
      "グレー",
    ],
    productCategory: "パンツ",
    imageUrl: "/testSectionProductImage/Mono-Mart-Pants.jpg", // 商品画像URL（例）
  },
  {
    id: 3,
    brandName: "Alfred Alex",
    productName: "ニット/セーター",
    productPrice: "2970円",
    currency: "¥",
    availableColors: 10,
    colors: [
      "ホワイト",
      "ブラック",
      "グレー",
      "ネイビー",
      "ベージュ",
      "ブラウン",
      "レッド",
      "ブルー",
      "ピンク",
      "オレンジ",
    ],
    productCategory: "トップス",
    imageUrl: "/testSectionProductImage/Alfred-Sater.jpg", // 商品画像URL（例）
  },
  {
    id: 4,
    brandName: "MONO-MART",
    productName: "ダウンジャケット/コート",
    productPrice: "2970円",
    currency: "¥",
    availableColors: 5,
    colors: ["ブラック", "ダークグレー", "ネイビー", "カーキ", "ベージュ"],
    productCategory: "アウター",
    imageUrl: "/testSectionProductImage/MonoMart-Dawn.jpg", // 商品画像URL（例）
  },
  {
    id: 5,
    brandName: "MONO-MART",
    productName: "ニット/セーター",
    productPrice: "5940円",
    currency: "¥",
    availableColors: 4,
    colors: ["ホワイト", "ブラック", "グレー", "ネイビー"],
    productCategory: "トップス",
    imageUrl: "/testSectionProductImage/Mono-Mart-Nitto.jpg", // 商品画像URL（例）
  },
  {
    id: 6,
    brandName: "ReFa",
    productName: "ヘアオイル/ヘアミルク",
    productPrice: "2800円",
    currency: "¥",
    availableColors: 2,
    colors: ["無香料", "ローズ"],
    productCategory: "ヘアケア",
    imageUrl: "/testSectionProductImage/ReFa-HairOil.jpg", // 商品画像URL（例）
  },
];

export const discountProducts = [
  {
    id: 1,
    brandName: "adidas",
    productName: "スニーカー",
    productPrice: "15400円",
    currency: "¥",
    availableColors: 2,
    colors: ["ブラック", "ホワイト"],
    productCategory: "シューズ",
    imageUrl: "/testSectionProductImage/adidasShoes.jpg", // 商品画像URL（例）
    discountCoupon: "¥500クーポン", // 割引クーポン
    percentDiscount: "", // パーセント割引
  },
  {
    id: 2,
    brandName: "MONO-MART",
    productName: "デニムパンツ",
    productPrice: "3960円",
    currency: "¥",
    availableColors: 7,
    colors: [
      "ブラック",
      "インディゴ",
      "ホワイト",
      "ライトブルー",
      "ダークブルー",
      "ネイビー",
      "グレー",
    ],
    productCategory: "パンツ",
    imageUrl: "/testSectionProductImage/Mono-Mart-Pants.jpg", // 商品画像URL（例）
    discountCoupon: "¥500クーポン", // 割引クーポン
    percentDiscount: "5%OFF", // パーセント割引
  },
  {
    id: 3,
    brandName: "Alfred Alex",
    productName: "ニット/セーター",
    productPrice: "2970円",
    currency: "¥",
    availableColors: 10,
    colors: [
      "ホワイト",
      "ブラック",
      "グレー",
      "ネイビー",
      "ベージュ",
      "ブラウン",
      "レッド",
      "ブルー",
      "ピンク",
      "オレンジ",
    ],
    productCategory: "トップス",
    imageUrl: "/testSectionProductImage/Alfred-Sater.jpg", // 商品画像URL（例）
    discountCoupon: "¥300クーポン", // 割引クーポン
    percentDiscount: "15%OFF", // パーセント割引
  },
  {
    id: 4,
    brandName: "MONO-MART",
    productName: "ダウンジャケット/コート",
    productPrice: "2970円",
    currency: "¥",
    availableColors: 5,
    colors: ["ブラック", "ダークグレー", "ネイビー", "カーキ", "ベージュ"],
    productCategory: "アウター",
    imageUrl: "/testSectionProductImage/MonoMart-Dawn.jpg", // 商品画像URL（例）
    discountCoupon: "¥1,500クーポン", // 割引クーポン
    percentDiscount: "20%OFF", // パーセント割引
  },
  {
    id: 5,
    brandName: "MONO-MART",
    productName: "ニット/セーター",
    productPrice: "5940円",
    currency: "¥",
    availableColors: 4,
    colors: ["ホワイト", "ブラック", "グレー", "ネイビー"],
    productCategory: "トップス",
    imageUrl: "/testSectionProductImage/Mono-Mart-Nitto.jpg", // 商品画像URL（例）
    discountCoupon: "¥1,000クーポン", // 割引クーポン
    percentDiscount: "25%OFF", // パーセント割引
  },
  {
    id: 6,
    brandName: "ReFa",
    productName: "ヘアオイル/ヘアミルク",
    productPrice: "2800円",
    currency: "¥",
    availableColors: 2,
    colors: ["無香料", "ローズ"],
    productCategory: "ヘアケア",
    imageUrl: "/testSectionProductImage/ReFa-HairOil.jpg", // 商品画像URL（例）
    discountCoupon: "¥300クーポン", // 割引クーポン
    percentDiscount: "10%OFF", // パーセント割引
  },
];

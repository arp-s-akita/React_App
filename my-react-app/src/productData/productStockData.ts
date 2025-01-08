export const productsStockRE = [
  {
    id: "0", // 商品ごとのユニークID
    name: "取外し可能ファーティペット付きヴィンテージライクマットフェイクレザーブルゾン", // 商品名
    brandname: "moment+",
    value: "¥7,990",
    favorite: "128,840",
    variations: [
      {
        color: "黒", // カラー
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: "あり" }, // サイズSの在庫あり
          { size: "M", stock: "残り2点" }, // サイズMの在庫あり
          { size: "L", stock: "なし" }, // サイズLの在庫なし
        ],
      },
      {
        color: "白",
        image: "/demoStockImage/DemoStockImage.jpg",
        sizes: [
          { size: "S", stock: "あり" },
          { size: "M", stock: "あり" },
          { size: "L", stock: "残り1点" },
        ],
      },
    ],
  },
  {
    id: "1", // 商品ごとのユニークID
    name: "ミックスカラークロップド丈長袖ニットトップス", // 商品名
    brandname: "andme",
    value: "¥3,890",
    favorite: "70,757人",
    variations: [
      {
        color: "ブルー", // カラー
        image: "https://c.imgz.jp/308/77459308/77459308b_34_d_500.jpg",
        sizes: [
          { size: "M", stock: "あり" }, // サイズSの在庫あり
        ],
      },
      {
        color: "グレー",
        image: "https://c.imgz.jp/308/77459308/77459308b_18_d_500.jpg",
        sizes: [{ size: "M", stock: "あり" }],
      },
    ],
  },
];

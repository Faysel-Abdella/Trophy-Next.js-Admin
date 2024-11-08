import assets from "@/assets";

const demo = [
  {
    number: 1,
    thumbnail: assets.tableBodyImage1,
    productName: "상품 이름 텍스트 영역입니다. 상품 이름 텍스트",
    registrationDate: "YYYY-MM-DD ",
    category: "카테고리",
    situation: "진행중",
    viewDetails: "상세보기",
  },
];

const row12Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    thumbnail:
      index % 3 === 0
        ? assets.tableBodyImage1
        : index % 3 === 1
        ? assets.tableBodyImage2
        : assets.tableBodyImage3,
  })),
];

export default row12Column1;

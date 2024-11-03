import assets from "@/assets";

const demo = [
  {
    number: 1,
    thumbnail: assets.tableBodyImage1,
    productName: "육아툰 제목 영역",
    registrationDate: "날짜",
    category: "카테고리",
    situation: "답변완료",
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

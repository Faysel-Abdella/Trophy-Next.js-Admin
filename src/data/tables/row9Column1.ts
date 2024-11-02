const demo = [
  {
    number: 1,
    title: "제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트",
    creationDate: "YYYY-MM-DD",
    viewDetails: "상세보기",
  },
];

const row9Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row9Column1;

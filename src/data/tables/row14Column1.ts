const demo = [
  {
    number: 1,
    title: "문의 제목 텍스트 영역입니다.문의 제목 텍스트 영역입니다.",
    category: "유형",
    creationDate: "YYYY-MM-DD",
    author: "아름다운 여행자",
    situation: "상태",
    viewDetails: "상세보기",
  },
];

const row13Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row13Column1;

const demo = [
  {
    number: 1,
    question: "Q. 제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트 ",
    answer: "A. 제목 영역 텍스트 제목 영역 텍스트 제목 영역 텍스트",
    viewDetails: "상세보기",
  },
];

const row10Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row10Column1;

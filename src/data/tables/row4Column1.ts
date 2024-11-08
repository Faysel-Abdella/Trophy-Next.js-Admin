const demo = [
  {
    number: 1,
    category: "놀이방법",
    title: "게시글 제목 텍스트 영역입니다. 게시글 제목 텍스트 영역입니다.",
    author: "아름다운 여행자",
    createdDate: "YYYY-MM-DD",
    viewDetails: "상세보기",
  },
];

const row4Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row4Column1;

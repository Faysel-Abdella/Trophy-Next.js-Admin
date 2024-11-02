const demo = [
  {
    number: 1,
    years: "3세",
    developmentalArea: "사회성",
    question: "엄마나 아빠가 하는 간단한 일을 도우려고 시도한다",
    answer: "예",
    isAnswered: true,
    viewDetails: "상세보기",
  },
];

const row8Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    isAnswered: index % 2 === 0,
    answer: index % 2 === 0 ? "예" : "아니요",
    question:
      index % 2 === 0
        ? "엄마나 아빠가 하는 간단한 일을 도우려고 시도한다"
        : "다른 아이를 돌보거나 도와주는 행동을 한다",
  })),
];

export default row8Column1;

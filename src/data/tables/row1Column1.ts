import { view } from "framer-motion/client";

const demo = [
  {
    id: 0,
    number: 0,
    nickname: "아름다운 여행자",
    phoneNumber: "01000000000",
    logIn: "자체",
    joinDate: "YYYY-MM-DD ",
    viewDetails: "상세보기",
  },
];

const row1Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row1Column1;

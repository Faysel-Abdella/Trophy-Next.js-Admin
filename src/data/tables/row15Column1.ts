const demo = [
  {
    number: 1,
    orderNumber: "002002",
    name: "임영웅 조끼 한정판",
    amount: "25,000(3,000)",
    category: "패션",
    category2: "공동구매",
    orderer: "홍*동",
    orderDateAndTime: "2024-01-24 14:42",
    paymentDateAndTime: "2024-01-24 14:42",
  },
];

const row15Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row15Column1;

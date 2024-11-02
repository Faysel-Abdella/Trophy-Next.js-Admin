import assets from "@/assets";

const sideBarContent = [
  {
    order: "1",
    mainTitle: "회원 관리",
    icon: assets.member,
    activeIcon: assets.memberActive,
    init: "/admin/membership",
    firstRoute: "/admin/membership/membership-management",
    subTitles: [],
  },
  {
    order: "2",
    mainTitle: "결제 관리",
    icon: assets.payment,
    activeIcon: assets.paymentActive,
    init: "/admin/payment",
    firstRoute: "/admin/payment/payment-management",
    subTitles: [],
  },
  {
    order: "3",
    mainTitle: "콘텐츠 관리",
    icon: assets.content,
    activeIcon: assets.contentActive,
    init: "/admin/content",
    firstRoute: "/admin/content/content-management",
    subTitles: [
      {
        label: "콘텐츠 관리",
        route: "/admin/content/content-management",
      },
      {
        label: "카테고리 관리",
        route: "/admin/content/category-management",
      },
    ],
  },

  {
    order: "4",
    mainTitle: "커뮤니티 관리",
    icon: assets.community,
    activeIcon: assets.communityActive,
    init: "/admin/community",
    firstRoute: "/admin/community/child-care",
    subTitles: [
      {
        label: "육아 관리",
        route: "/admin/community/child-care",
      },
      {
        label: "육아용품 관리",
        route: "/admin/community/parenting-product-management",
      },
      {
        label: "전문가 관리",
        route: "/admin/community/expert-management",
      },
      {
        label: "육아툰 관리",
        route: "/admin/community/parenting-toon-management",
      },
    ],
  },
  {
    order: "5",
    mainTitle: "검사결과 관리",
    icon: assets.message,
    activeIcon: assets.messageActive,
    init: "/admin/test-result",
    firstRoute: "/admin/test-result",
    subTitles: [],
  },
  {
    order: "6",
    mainTitle: "공지사항 관리",
    icon: assets.notice,
    activeIcon: assets.noticeActive,
    init: "/admin/notices",
    firstRoute: "/admin/notices",
    subTitles: [],
  },
  {
    order: "7",
    mainTitle: "FAQ 관리",
    icon: assets.faq,
    activeIcon: assets.faqActive,
    init: "/admin/faq",

    firstRoute: "/admin/faq",
    subTitles: [],
  },
  {
    order: "8",
    mainTitle: "1:1문의 관리",
    icon: assets.oneToOne,
    activeIcon: assets.oneToOneActive,
    init: "/admin/one-to-one",
    firstRoute: "/admin/one-to-one",
    subTitles: [],
  },
];

export default sideBarContent;

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
    mainTitle: "커뮤니티 관리",
    icon: assets.community,
    activeIcon: assets.communityActive,
    init: "/admin/community",
    firstRoute: "/admin/community/community-management",
    subTitles: [
      {
        label: "게시글/댓글 관리",
        route: "/admin/community/community-management",
      },
      {
        label: "게시글 신고 관리",
        route: "/admin/community/post-report-management",
      },
      {
        label: "댓글 신고 관리",
        route: "/admin/community/manage-comment-reports",
      },
      {
        label: "자료실 관리",
        route: "/admin/community/data-room-management",
      },
      {
        label: "만보 걷기 관리",
        route: "/admin/community/step-walking-management",
      },
    ],
  },
  {
    order: "3",
    mainTitle: "공구/펀딩",
    icon: assets.tools,
    activeIcon: assets.toolsActive,
    init: "/admin/tools",
    firstRoute: "/admin/tools/tool-product-management",
    subTitles: [
      {
        label: "공구 상품 관리",
        route: "/admin/tools/tool-product-management",
      },
      {
        label: "펀딩 상품 관리",
        route: "/admin/tools/funding-product-management",
      },
      {
        label: "주문 관리",
        route: "/admin/tools/order-Management",
      },
      {
        label: "문의 관리",
        route: "/admin/tools/inquiry-Management",
      },
    ],
  },

  {
    order: "4",
    mainTitle: "설문 관리",
    icon: assets.survey,
    activeIcon: assets.surveyActive,
    init: "/admin/survey",
    firstRoute: "/admin/survey/survey-management",
    subTitles: [],
  },
  {
    order: "5",
    mainTitle: "공지사항 관리",
    icon: assets.notice,
    activeIcon: assets.noticeActive,
    init: "/admin/notice",
    firstRoute: "/admin/notice ",
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
];

export default sideBarContent;

import React from "react";

import { Button, Checkbox } from "@nextui-org/react";

const InquiryDetails2Page = () => {
  const titleStyle =
    "w-[100px] font-bold text-[16px] leading-[22px] text-mainBlack";
  const valueStyle = "font-normal text-[14px]  leading-[19px] text-mainGray";

  return (
    <section className="font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <h2 className=" font-bold text-[30px] leading-[42px] text-mainBlack">
            상품 문의 관리
          </h2>
        </div>
      </header>

      <main className={"mt-10"}>
        <div className="bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>질문자</h3>
              <p className={`${valueStyle}`}>홍길동 </p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>날짜</h3>
              <p className={`${valueStyle}`}>YYYY-MM-DD </p>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>상태</h3>
              <p className="font-normal text-[14px]  leading-[19px] text-[#7A7A7A] bg-[#F5F5F5] py-[2px] px-[6px] rounded-[4px]">
                대기중
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="flex items-center">
            <h3 className={`${titleStyle}`}>질문</h3>
            <p className={`${valueStyle}`}>질문 텍스트 영역입니다.</p>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className={`${titleStyle}`}>답변</h3>
            {/* <p className={`${valueStyle}`}>답변 텍스트 영역입니다.</p> */}
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 ">
          <Button className="bg-[#4D4D4D] py-[10px] px-[20px] text-mainWhite rounded-[5px]">
            답변하기
          </Button>
        </div>
      </main>
    </section>
  );
};

export default InquiryDetails2Page;

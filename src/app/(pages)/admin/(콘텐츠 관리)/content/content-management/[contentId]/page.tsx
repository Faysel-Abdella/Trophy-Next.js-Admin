"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabel from "@/components/InputWithLabel";
import DropDown from "@/components/DropDown";

const ContentDetails = () => {
  const options = [
    { key: "1", label: "전체" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];

  const styleForLabel = "font-bold font-mainBlack text-[16px]";

  return (
    <section className="font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-6 font-bold text-[30px] leading-[42px] text-mainBlack">
          콘텐츠 상세보기
        </h2>
      </header>

      <main>
        <div className="mt-5 bg-mainWhite p-10 rounded-[20px]">
          <div>
            <InputWithLabel
              label="제목"
              placeholder="Q. 질문 텍스트 영역입니다."
              labelStyles={`w-[90px] ${styleForLabel}`}
              inputStyles="w-[930px]"
            />
          </div>
          <div className="mt-6">
            <InputWithLabel
              label="썸네일"
              placeholder="추가"
              labelStyles={`w-[90px] ${styleForLabel}`}
            />
          </div>
          <div className="mt-6 flex items-center gap-[60px]">
            <DropDownWithLabel
              title="카테고리"
              options={options}
              defaultSelectedKeys="1"
              titleStyles={`w-[90px] ${styleForLabel}`}
              insideStyles=" w-[390px] h-[44px]"
            />

            <DropDown
              options={options}
              defaultSelectedKeys="1"
              insideStyles="w-[480px] h-[44px]"
            />
          </div>
          <div className="mt-6 flex items-center gap-[60px]">
            <DropDownWithLabel
              title="중요도"
              options={options}
              defaultSelectedKeys="1"
              titleStyles={`w-[90px] ${styleForLabel}`}
              insideStyles=" w-[390px] h-[44px]"
            />

            <DropDownWithLabel
              title="포인트"
              options={options}
              defaultSelectedKeys="1"
              titleStyles={`w-[90px] ${styleForLabel}`}
              insideStyles=" w-[390px] h-[44px]"
            />
          </div>
          <div className="mt-6 flex items-center gap-[60px]">
            <DropDownWithLabel
              title="연령"
              options={options}
              defaultSelectedKeys="1"
              titleStyles={`w-[90px] ${styleForLabel}`}
              insideStyles=" w-[390px] h-[44px]"
            />

            <DropDownWithLabel
              title="유형"
              options={options}
              defaultSelectedKeys="1"
              titleStyles={`w-[90px] ${styleForLabel}`}
              insideStyles=" w-[390px] h-[44px]"
            />
          </div>
          <div className="mt-6 flex items-center gap-[60px]">
            <DropDownWithLabel
              title="노출범위"
              options={options}
              defaultSelectedKeys="1"
              titleStyles={`w-[90px] ${styleForLabel}`}
              insideStyles=" w-[390px] h-[44px]"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Button
            aria-label="Header"
            className="bg-mainGray text-mainWhite font-normal text-base w-[28px] rounded-[5px]"
          >
            삭제
          </Button>
          <Button
            aria-label="Header"
            className="bg-mainBlack text-mainWhite font-normal text-base w-[28px] rounded-[5px]"
          >
            추가
          </Button>
        </div>
      </main>
    </section>
  );
};

export default ContentDetails;

import Image from "next/image";
import React from "react";
import assets from "@/assets";
import { Button, Checkbox } from "@nextui-org/react";

const SurveyDetailsPage = () => {
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
            설문 관리
          </h2>
        </div>
      </header>

      <main className={"mt-10"}>
        <div className="bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>작성일</h3>
              <p className={`${valueStyle}`}>YYYY-MM-DD </p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>작성자</h3>
              <p className={`${valueStyle}`}>아름다운 여행자</p>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>카테고리</h3>
              <p className={`${valueStyle}`}>패션</p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>좋아요</h3>
              <p className={`${valueStyle}`}>10 </p>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-mainWhite rounded-[20px] py-8 px-10">
          <div>
            <p className="font-normal text-base text-mainBlack">
              1. 질문영역 텍스트 입니다. 질문영역 텍스트 입니다. 질문영역 텍스트
              입니다.
            </p>
            <p className={`${titleStyle} mt-5 ml-4`}>1번 문항 답변</p>
          </div>
          <div className="mt-[60px]">
            <p className="font-normal text-base text-mainBlack">
              2. 질문영역 텍스트 입니다. 질문영역 텍스트 입니다. 질문영역 텍스트
              입니다.
            </p>
            <p className={`${titleStyle} mt-5 ml-4`}>2번 문항 답변</p>
          </div>
          <div className="mt-[60px]">
            <p className="font-normal text-base text-mainBlack">
              3. 질문영역 텍스트 입니다. 질문영역 텍스트 입니다. 질문영역 텍스트
              입니다.
            </p>
            <p className={`${titleStyle} mt-5 ml-4`}>3번 문항 답변</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SurveyDetailsPage;

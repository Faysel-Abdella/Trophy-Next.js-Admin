import Image from "next/image";
import React from "react";
import assets from "@/assets";
import { Button, Checkbox } from "@nextui-org/react";

const FaqDetailPage = () => {
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
            FAQ 상세보기
          </h2>
        </div>
      </header>

      <main className={"mt-10"}>
        <div className="bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="w-1/2 flex items-center">
            <h3 className={`${titleStyle}`}>질문</h3>
            <p className={`${valueStyle}`}>Q. 질문 텍스트 영역입니다. </p>
          </div>
          <div className="mt-8 w-1/2 flex items-center">
            <h3 className={`${titleStyle}`}>답변</h3>
            <p className={`${valueStyle}`}>A. 답변 텍스트 영역입니다..</p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 ">
          <Button className="bg-[#4D4D4D] py-[10px] px-[20px] text-mainWhite rounded-[5px]">
            수정
          </Button>
        </div>
      </main>
    </section>
  );
};

export default FaqDetailPage;

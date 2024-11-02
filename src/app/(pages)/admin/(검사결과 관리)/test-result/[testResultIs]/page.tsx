"use client";

import Image from "next/image";

import assets from "@/assets";
import { Button, Checkbox, Textarea } from "@nextui-org/react";
import InputWithLabel from "@/components/InputWithLabel";

const TestResultDetails = () => {
  const titleStyles = "font-bold text-mainBlack text-base w-[100px]";
  const fadeStyles = "font-medium text-[14px] text-mainGray w-[350px]";
  const valueStyles = "font-medium text-[14px] text-mainBlack w-[350px]";

  return (
    <section className="mt-8 font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          검사 결과 관리
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>연령</h3>
            <p className={`${fadeStyles} w-[450px]`}>2세</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>발달영역</h3>
            <p className={`${fadeStyles}`}>사회성</p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>질문</h3>
            <p className={`${fadeStyles} w-[450px]`}>
              엄마 아빠가 아닌 다른 아이에게 애정 표현을 한다(한 적이 있다)
            </p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>대답</h3>
            <p className={`${fadeStyles}`}>예 </p>
          </div>
        </div>

        <div className="bg-grayBorder h-[1px] w-full my-7"></div>

        <div className="mt-6 flex items-center gap-[60px]">
          <InputWithLabel
            label="소제목"
            defaultValue="시도하기/성공 경험"
            labelStyles="font-bold text-mainBlack text-base w-[120px]"
            inputStyles="w-[900px]"
          />
        </div>

        <div className="mt-6 ">
          <div className="flex ">
            <h3 className="font-bold text-mainBlack text-base w-[120px]">
              결과 코멘트
            </h3>
            <Textarea
              defaultValue="크고 작은 성공을 경험하게 해주세요. 아이가 다칠까봐, 혹은 실망할까봐 대신해주는 부모가 돼서는 안 됩니다. 아이가 자기 자신을 믿고 다양한 것에 도전하며 자랄 수 있게 돕는 방법은 아이에게 크고 작은 성공을 경험하게 하는 것이 좋습니다."
              className="w-[900px]"
              minRows={9}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default TestResultDetails;

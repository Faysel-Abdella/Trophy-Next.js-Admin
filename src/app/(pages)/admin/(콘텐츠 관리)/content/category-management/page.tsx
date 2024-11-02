"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import InputNoLabel from "@/components/InputNoLable";

const CategoryManagement = () => {
  const [activeButton, setActiveButton] = React.useState(1);

  const activeButtonStyle =
    "rounded-[10px] bg-[#9388FE] text-white py-[10px] px-[40px] text-[16px] font-bold";
  const inActiveButtonStyle =
    "rounded-[10px] bg-transparent text-mainGray py-[10px] px-[40px] text-[16px] font-bold";

  return (
    <section className="font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-6 font-bold text-[30px] leading-[42px] text-mainBlack">
          카테고리 관리
        </h2>
      </header>

      <main className="mt-6 bg-mainWhite py-7 px-9 rounded-[20px]">
        <div className="flex items-center">
          <div className="flex flex-col gap-4 transition-all ease-linear ">
            <Button
              className={`${
                activeButton === 1 ? activeButtonStyle : inActiveButtonStyle
              }`}
              onClick={() => setActiveButton(1)}
            >
              사회성
            </Button>
            <Button
              className={`${
                activeButton === 2 ? activeButtonStyle : inActiveButtonStyle
              }`}
              onClick={() => setActiveButton(2)}
            >
              언어
            </Button>
            <Button
              className={`${
                activeButton === 3 ? activeButtonStyle : inActiveButtonStyle
              }`}
              onClick={() => setActiveButton(3)}
            >
              근육
            </Button>
            <Button
              className={`${
                activeButton === 4 ? activeButtonStyle : inActiveButtonStyle
              }`}
              onClick={() => setActiveButton(4)}
            >
              인지
            </Button>
            <Button
              className={`${
                activeButton === 5 ? activeButtonStyle : inActiveButtonStyle
              }`}
              onClick={() => setActiveButton(5)}
            >
              정서
            </Button>
          </div>

          <div className="bg-bgGray w-[2px] h-[300px] mx-12"></div>

          <section className="flex flex-col gap-[20px]">
            <div className="flex justify-center gap-8">
              <InputNoLabel
                inputStyles="w-[570px]"
                placeholder="세부 관심사1"
              />
              <div className="flex justify-center items-center gap-[10px] w-[165px]">
                <Button className="bg-bgPurple rounded-[5px] w-[107px] h-[44px]">
                  추가
                </Button>
              </div>
            </div>
            <div className="bg-bgGray h-[2px] w-full"></div>
            <div className="flex justify-center gap-8">
              <InputNoLabel
                inputStyles="w-[570px]"
                placeholder="세부 관심사2"
              />
              <div className="flex justify-center items-center gap-[10px] w-[165px]">
                <Button className="bg-bgGray rounded-[5px] w-[52px] h-[44px]">
                  삭제
                </Button>
                <Button className="bg-bgGray rounded-[5px] w-[52px] h-[44px]">
                  수정
                </Button>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <InputNoLabel
                inputStyles="w-[570px]"
                placeholder="세부 관심사3"
              />
              <div className="flex justify-center items-center gap-[10px] w-[165px]">
                <Button className="bg-bgGray rounded-[5px] w-[52px] h-[44px]">
                  삭제
                </Button>
                <Button className="bg-bgGray rounded-[5px] w-[52px] h-[44px]">
                  수정
                </Button>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <InputNoLabel
                inputStyles="w-[570px]"
                placeholder="세부 관심사3"
              />
              <div className="flex justify-center items-center gap-[10px] w-[165px]">
                <Button className="bg-bgGray rounded-[5px] w-[52px] h-[44px]">
                  삭제
                </Button>
                <Button className="bg-bgGray rounded-[5px] w-[52px] h-[44px]">
                  수정
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default CategoryManagement;

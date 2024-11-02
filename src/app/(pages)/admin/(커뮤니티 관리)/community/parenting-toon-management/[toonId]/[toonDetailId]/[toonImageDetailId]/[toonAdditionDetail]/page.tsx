import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";
import React from "react";

const ToonAdditionDetailPage = () => {
  const titleStyles = "font-bold text-mainBlack text-base w-[100px]";
  const fadeStyles = "font-medium text-[14px] text-mainGray w-[350px]";

  return (
    <section className="mt-8 font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          육아툰 회차 상세보기
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <InputWithLabel
              label="회차 제목"
              labelStyles={titleStyles}
              defaultValue="육아툰 회차 제목 영역"
              inputStyles="w-[800px]"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>이미지</h3>
            <Button className="bg-bgPurple rounded-[5px] text-mainPurple w-[170px] h-[46px] py-3 px-[20px]">
              추가
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ToonAdditionDetailPage;

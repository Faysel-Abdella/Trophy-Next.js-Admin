import InputWithLabel from "@/components/InputWithLabel";
import { Button, Textarea } from "@nextui-org/react";
import React from "react";

const ToonDetailPage = () => {
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
          육아툰 추가하기
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <InputWithLabel
            label="제목"
            defaultValue="육아툰 제목 영역"
            labelStyles="w-[100px]"
            inputStyles="w-[400px]"
          />
          <InputWithLabel
            label="작가"
            defaultValue="홍길동"
            labelStyles="w-[100px]"
            inputStyles="w-[400px]"
          />
        </div>

        <div className="mt-6 ">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>썸네일</h3>
            <Button className="bg-bgPurple rounded-[5px] text-mainPurple w-[170px] h-[46px] py-3 px-[20px]">
              추가
            </Button>
          </div>
        </div>

        <div className="mt-6 ">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>설명</h3>
            <Textarea
              defaultValue="육아툰 설명 영역 육아툰 설명 영역 육아툰 설명 영역 육아툰 설명 영역"
              minRows={6}
              classNames={{
                inputWrapper: ["bg-white"],
              }}
            />
          </div>
        </div>
      </main>

      <div className="flex items-center justify-center">
        <Button className="mt-[40px] bg-mainBlack rounded-[5px] py-[10px] px-[40px] text-mainWhite font-normal text-base w-[108px] h-[42px]">
          등록
        </Button>
      </div>
    </section>
  );
};

export default ToonDetailPage;

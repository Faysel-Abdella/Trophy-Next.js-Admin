"use client";

import Image from "next/image";

import assets from "@/assets";
import InputWithLabel from "@/components/InputWithLabel";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
  Button,
  Textarea,
} from "@nextui-org/react";

const FaQDetail = () => {
  const titleStyles = "font-bold text-mainBlack text-base w-[100px]";
  const fadeStyles = "font-medium text-[14px] text-mainGray w-[350px]";

  const {
    isOpen: isDetailBtn,
    onOpen: onDetailBtn,
    onOpenChange: onDetailBtnChange,
  } = useDisclosure();

  return (
    <section className="mt-8 font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          공지사항 상세보기
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 ">
          <InputWithLabel
            label="질문"
            labelStyles={titleStyles}
            placeholder="Q. 질문 텍스트 영역입니다."
            inputStyles="w-[700px]"
          />
        </div>
        <div className="mt-6 flex items-center">
          <h3 className={`${titleStyles}`}>답변</h3>
          <Textarea
            defaultValue="A. 답변 텍스트 영역입니다."
            className="w-[700px]"
          />
          {/* <InputWithLabel
            label="답변"
            labelStyles={titleStyles}
            placeholder="A. 답변 텍스트 영역입니다."
            inputStyles="min-w-[700px]"
          /> */}
        </div>
      </main>

      <div className="mt-10 flex justify-center items-center gap-3">
        <Button className="bg-mainBlack rounded-[5px] text-white  w-[108px] h-[42px] py-[10px] px-[40px]">
          수정
        </Button>
        <Button className="bg-mainGray rounded-[5px] text-white  w-[108px] h-[42px] py-[10px] px-[40px]">
          삭제
        </Button>
      </div>
    </section>
  );
};

export default FaQDetail;

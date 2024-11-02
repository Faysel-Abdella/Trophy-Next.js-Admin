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
} from "@nextui-org/react";

const NoticeDetail = () => {
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
            label="작성일"
            labelStyles={titleStyles}
            placeholder="YYYY-MM-DD"
            inputStyles="w-[700px]"
          />
        </div>
        <div className="mt-6 ">
          <InputWithLabel
            label="제목"
            labelStyles={titleStyles}
            placeholder="공지사항 제목을 입력해주세요."
            inputStyles="w-[700px]"
          />
        </div>
        <div className="mt-6 ">
          <InputWithLabel
            label="내용"
            labelStyles={titleStyles}
            placeholder="공지사항 내용을 입력해주세요."
            inputStyles="w-[700px]"
          />
        </div>

        <div className="mt-8 pl-24">
          <Image
            src={assets.demoImage}
            alt="Notice detail image"
            className="size-[132px] cursor-pointer"
            onClick={onDetailBtn}
          />
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

      <Modal
        isOpen={isDetailBtn}
        placement="center"
        onOpenChange={onDetailBtnChange}
        hideCloseButton
        classNames={{
          base: ["flex justify-center items-center"],
          body: ["p-10 flex justify-center items-center"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div>
                  <Image
                    src={assets.demoImage}
                    alt="Notice detail image"
                    className="size-[450px] rounded-[5px]"
                  />
                </div>

                <div className="mt-7 flex justify-center items-center gap-[30px]">
                  <Button
                    className="w-[108px] h-[42px]  py-[12px] px-[50px] rounded-[10px] bg-mainBlack font-bold text-base text-white"
                    onClick={() => {
                      onDetailBtnChange();
                    }}
                  >
                    이전
                  </Button>
                  <Button
                    className="w-[108px] h-[42px] py-[12px] px-[50px] rounded-[10px] bg-mainBlack font-bold text-base text-white"
                    onClick={() => {
                      onDetailBtnChange();
                    }}
                  >
                    다음
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default NoticeDetail;

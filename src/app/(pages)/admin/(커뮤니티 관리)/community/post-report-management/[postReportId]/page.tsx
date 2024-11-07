"use client";

import Image from "next/image";
import React from "react";
import assets from "@/assets";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const PortReportDetails = () => {
  // Detail Modal Logic
  const {
    isOpen: isDeleteBtn,
    onOpen: onDeleteBtn,
    onOpenChange: onDeleteBtnChange,
  } = useDisclosure();

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
          <span className="text-mainGray font-normal text-base">
            커뮤니티 관리
          </span>
          <h2 className=" font-bold text-[30px] leading-[42px] text-mainBlack">
            신고 상세보기
          </h2>
        </div>
      </header>

      <main className={"mt-10"}>
        <div className="bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>신고사유</h3>
              <p className={`${valueStyle}`}>불법정보 </p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>신고자</h3>
              <p className={`${valueStyle}`}>아름다운 여행자</p>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>내용</h3>
              <p className={`${valueStyle}`}>신고 기타 내용</p>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-mainWhite rounded-[20px] py-8 px-10">
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
          <div className="mt-8  flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>카테고리</h3>
              <p className={`${valueStyle}`}>패션</p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>좋아요</h3>
              <p className={`${valueStyle}`}>10</p>
            </div>
          </div>
          <div className="mt-8  flex items-center">
            <h3 className={`${titleStyle}`}>제목</h3>
            <p className={`${valueStyle}`}>게시글 제목 영역입니다.</p>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className={`${titleStyle}`}>내용</h3>
            <p className={`${valueStyle}`}>게시글 내용 영역입니다.</p>
          </div>
        </div>

        <div className="mt-14 bg-mainWhite rounded-[20px] py-8 px-10 flex">
          <h3 className={`${titleStyle}`}>사진</h3>
          <div className="flex items-center gap-7">
            <Image src={assets.demoImage} alt="demo image" />
            <Image src={assets.demoImage} alt="demo image" />
            <Image src={assets.demoImage} alt="demo image" />
            <Image src={assets.demoImage} alt="demo image" />
            <Image src={assets.demoImage} alt="demo image" />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 ">
          <Button
            className="bg-[#4D4D4D] py-[10px] px-[20px] text-mainWhite rounded-[5px]"
            onClick={onDeleteBtn}
          >
            삭제
          </Button>
        </div>
      </main>

      <Modal
        isOpen={isDeleteBtn}
        placement="center"
        onOpenChange={onDeleteBtnChange}
        hideCloseButton
        classNames={{
          body: ["pt-[40px]"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div>
                  <h2 className="text-center font-bold text-[30px] leading-10 text-secondBlack">
                    게시글 삭제
                  </h2>
                  <p className="mt-2 text-center font-normal text-[18px] leading-[25px] text-mainGray">
                    댓글까지 모두 삭제됩니다.
                  </p>

                  <div className="mt-[40px] flex justify-center items-center gap-[10px]">
                    <Button
                      className="bg-mainGray text-mainWhite text-base w-[90px] h-[48px] rounded-[5px]"
                      onClick={onDeleteBtnChange}
                    >
                      취소
                    </Button>
                    <Button
                      className="bg-mainRed text-mainWhite text-base w-[90px] h-[48px] rounded-[5px]"
                      onClick={onDeleteBtnChange}
                    >
                      삭제
                    </Button>
                  </div>
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

export default PortReportDetails;

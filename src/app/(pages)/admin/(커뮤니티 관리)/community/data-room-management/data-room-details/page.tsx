"use client";
import React from "react";

import Image from "next/image";

import assets from "@/assets";
import { Button, Checkbox } from "@nextui-org/react";
const DataRoomDetailsPage = () => {
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
            자료실 상세보기
          </h2>
        </div>
      </header>

      <main className={"mt-10"}>
        <div className="mt-14 bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>작성일</h3>
              <p className={`${valueStyle}`}>YYYY-MM-DD </p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>좋아요</h3>
              <p className={`${valueStyle}`}>10</p>
            </div>
          </div>
          <div className="mt-8  flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>제목</h3>
              <p className={`${valueStyle}`}>게시글 제목 영역입니다.</p>
            </div>
          </div>
          <div className="mt-8  flex items-center">
            <h3 className={`${titleStyle}`}>내용</h3>
            <p className={`${valueStyle}`}>게시글 내용 영역입니다.</p>
          </div>

          <div className="mt-20 flex">
            <h3 className={`${titleStyle}`}>사진</h3>
            <div className="flex items-center gap-7">
              <Image src={assets.demoImage} alt="demo image" />
              <Image src={assets.demoImage} alt="demo image" />
              <Image src={assets.demoImage} alt="demo image" />
              <Image src={assets.demoImage} alt="demo image" />
              <Image src={assets.demoImage} alt="demo image" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 gap-[20px]">
          <Button
            aria-label="Header"
            className="bg-mainGray text-mainWhite font-normal text-base min-w-[68px] rounded-[5px]"
          >
            삭제
          </Button>
          <Button
            aria-label="Header"
            className="bg-secondBlack text-mainWhite font-normal text-base min-w-[68px] rounded-[5px]"
          >
            수정
          </Button>
        </div>

        <section className="mt-14 bg-mainWhite rounded-[20px] py-8 px-10 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 ]">
              <Checkbox></Checkbox>
              <h6 className="text-mainBlack font-bold text-base">댓글</h6>
            </div>

            <Button className="bg-mainGray w-[68px] h-[42px] rounded-[5px] text-mainWhite text-base">
              삭제
            </Button>
          </div>

          <table>
            <tbody>
              <tr className="py-4 flex items-center gap-[30px]">
                <td>
                  <Checkbox
                    className={`text-center size-[14px] rounded-[2px] mr-2`}
                  ></Checkbox>
                </td>
                <td className="text-mainBlack font-bold text-base">닉네임</td>
                <td className="font-medium text-[14px] text-mainGray">
                  YYYY-MM-DD{" "}
                </td>
                <td className="font-medium text-[14px] text-mainBlack">
                  댓글 내용 텍스트 영역 입니다.
                </td>
                <td className="text-[#F05858] text-base">
                  <button>삭제</button>
                </td>
              </tr>
              <tr className="py-4 flex items-center gap-[30px]">
                <td>
                  <Checkbox
                    className={`text-center size-[14px] rounded-[2px] mr-2`}
                  ></Checkbox>
                </td>
                <td className="text-mainBlack font-bold text-base">닉네임</td>
                <td className="font-medium text-[14px] text-mainGray">
                  YYYY-MM-DD{" "}
                </td>
                <td className="font-medium text-[14px] text-mainBlack">
                  댓글 내용 텍스트 영역 입니다.
                </td>
                <td className="text-[#F05858] text-base">
                  <button>삭제</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </section>
  );
};

export default DataRoomDetailsPage;

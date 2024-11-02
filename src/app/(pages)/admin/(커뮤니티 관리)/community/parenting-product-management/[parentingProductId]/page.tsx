"use client";

import { useState } from "react";

import Image from "next/image";

import assets from "@/assets";
import { Button, Checkbox } from "@nextui-org/react";

const ParentProductDetails = () => {
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
          육아용품 관리
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>제목</h3>
            <p className={`${valueStyles}`}>육아 게시글 제목 영역</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>카테고리</h3>
            <p className={`${fadeStyles}`}>놀이방법</p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>작성자</h3>
            <p className={`${fadeStyles}`}>닉네임</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>작성일</h3>
            <p className={`${fadeStyles}`}>YYYY-MM-DD </p>
          </div>
        </div>

        <div className="bg-grayBorder h-[1px] w-full my-7"></div>

        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>좋아요 수</h3>
            <p className={`${fadeStyles}`}>10</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>댓글 수</h3>
            <p className={`${fadeStyles}`}>10 </p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>조회수</h3>
            <p className={`${fadeStyles}`}>100</p>
          </div>
        </div>
      </main>

      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>장점</h3>
            <p className={`${fadeStyles}`}>장점 텍스트 영역</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>단점</h3>
            <p className={`${fadeStyles}`}>단점 텍스트 영역</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>구매처</h3>
            <p className={`${fadeStyles}`}>구매처 또는 링크</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>가격대</h3>
            <p className={`${fadeStyles}`}>YYYY-MM-DD </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>사용 연령</h3>
            <p className={`${fadeStyles}`}>연령</p>
          </div>
        </div>

        <div className="mt-8 flex  gap-[60px]">
          <div className="flex ">
            <h3 className={`${titleStyles}`}>이미지</h3>
            <div className="flex items-center gap-3">
              <Image
                src={assets.demoImage}
                alt="Image list"
                loading="eager"
                className="size-[132px] rounded-[4px]"
              />
              <Image
                src={assets.demoImage}
                alt="Image list"
                loading="eager"
                className="size-[132px] rounded-[4px]"
              />
              <Image
                src={assets.demoImage}
                alt="Image list"
                loading="eager"
                className="size-[132px] rounded-[4px]"
              />
              <Image
                src={assets.demoImage}
                alt="Image list"
                loading="eager"
                className="size-[132px] rounded-[4px]"
              />
              <Image
                src={assets.demoImage}
                alt="Image list"
                loading="eager"
                className="size-[132px] rounded-[4px]"
              />
              <Image
                src={assets.demoImage}
                alt="Image list"
                loading="eager"
                className="size-[132px] rounded-[4px]"
              />
            </div>
          </div>
        </div>
      </main>

      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <section>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[30px]">
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
                    className={`text-center size-[14px] rounded-[2px]`}
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
                    className={`text-center size-[14px] rounded-[2px]`}
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

      <div className="flex items-center justify-center">
        <Button className="mt-[40px] bg-mainGray rounded-[5px] py-[10px] px-[40px] text-mainWhite font-normal text-base w-[108px] h-[42px]">
          삭제
        </Button>
      </div>
    </section>
  );
};

export default ParentProductDetails;

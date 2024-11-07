"use client";

import assets from "@/assets";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import Header from "@/components/Header";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";

import Image from "next/image";

import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { Button } from "@nextui-org/react";

const FundingProductDetails = () => {
  const titleStyle = "font-bold text-base text-mainGray w-[100px]";
  const valueStyle = "text-base font-bold text-secondBlack";

  const editor = useRef(null);
  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true, // Upload images as base64 URI
      url: "your_upload_endpoint_here", // Endpoint to handle image uploads
    },
    minHeight: "500px",
  };

  const dropdownOptions = [
    {
      key: "0",
      label: "카테고리1",
    },
    {
      key: "1",
      label: "카테고리2",
    },
  ];
  const dropdownOptions2 = [
    {
      key: "0",
      label: "진행중1",
    },
    {
      key: "1",
      label: "진행중2",
    },
  ];

  return (
    <section className="font-noto">
      <div>
        <Header buttonLabel={"로그아웃"} title={"펀딩 상품 상세보기"} />
      </div>

      <div className="w-full mt-4 bg-mainWhite py-7 px-9 gap-6 flex flex-col rounded-[20px]">
        <div className="flex items-center">
          <h3 className={`${titleStyle}`}>사진</h3>
          <div className="flex items-center gap-[30px]">
            <Image
              src={assets.demoImage}
              alt="Image upload"
              className="h-[143px] w-[200px] rounded-[10px] object-cover"
            />
            <Image
              src={assets.demoImage}
              alt="Image upload"
              className="h-[143px] w-[200px] rounded-[10px] object-cover"
            />
            <Image
              src={assets.demoImage}
              alt="Image upload"
              className="h-[143px] w-[200px] rounded-[10px] object-cover"
            />
          </div>
        </div>

        <div className="flex items-center">
          <h3 className={`${titleStyle}`}>상품명</h3>
          <p className={`${valueStyle}`}>상품명 상품명</p>
        </div>
        <div className="flex items-center">
          <h3 className={`${titleStyle}`}>카테고리</h3>
          <p className={`${valueStyle}`}>카테고리</p>
        </div>
        <div className="flex items-center">
          <h3 className={`${titleStyle}`}>가격</h3>
          <p className={`${valueStyle}`}>10,000원</p>
        </div>
        <div className="flex items-center">
          <h3 className={`${titleStyle}`}>목표금액</h3>
          <p className={`${valueStyle}`}>1000,000원</p>
        </div>
        <div className="flex items-center">
          <h3 className={`${titleStyle}`}>기간</h3>
          <p className={`${valueStyle}`}>YYYY-MM-DD - YYYY-MM-DD</p>
        </div>

        <div className="mt-6">
          <JoditEditor
            ref={editor}
            config={config}
            value=""
            onChange={(newContent) => console.log(newContent)}
          />
        </div>
      </div>

      <div className="mt-7 flex justify-center items-center gap-[30px]">
        <Button className="bg-[#4D4D4D] w-[90px] h-[48px] rounded-[5px] text-mainWhite">
          수정
        </Button>
        <Button className="bg-mainGray w-[90px] h-[48px] rounded-[5px] text-mainWhite">
          삭제
        </Button>
      </div>
    </section>
  );
};

export default FundingProductDetails;

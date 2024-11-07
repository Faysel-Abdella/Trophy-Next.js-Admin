"use client";

import assets from "@/assets";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import Header from "@/components/Header";
import InputNoLabel from "@/components/InputNoLable";
import InputWithLabel from "@/components/InputWithLabel";

import Image from "next/image";

import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RegisterToolProduct = () => {
  const titleStyle = "font-bold text-base text-secondBlack w-[100px]";

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

  return (
    <section className="font-noto">
      <div>
        <Header buttonLabel={"로그아웃"} title={"공구 상품 등록하기"} />
      </div>

      <div className="w-full mt-4 bg-mainWhite py-7 px-9 gap-6 flex flex-col rounded-[20px]">
        <div className="flex items-center">
          <h3 className={`${titleStyle}`}>썸네일</h3>
          <div>
            <Image
              src={assets.uploadImage}
              alt="Image upload"
              className="cursor-pointer"
            />
          </div>
        </div>

        <InputWithLabel label="작성자" labelStyles={`${titleStyle}`} />

        <div>
          <DropDownWithLabel
            title={"카테고리"}
            options={dropdownOptions}
            defaultSelectedKeys={dropdownOptions[0].key}
            titleStyles={`${titleStyle}`}
            selectStyles="w-[310px] h-[44px]"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <InputWithLabel label="가격" labelStyles={`${titleStyle}`} />
          </div>

          <div className="flex items-center gap-[30px]">
            <InputWithLabel
              label="기간"
              type="date"
              labelStyles={`${titleStyle}`}
            />

            <span>-</span>

            <InputNoLabel type="date" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-[30px]">
          <div className="w-1/2">
            <InputWithLabel label="목표수량" labelStyles={`${titleStyle}`} />
          </div>
          <div className="w-1/2">
            <InputWithLabel label="최소구매" labelStyles={`${titleStyle}`} />
          </div>
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
    </section>
  );
};

export default RegisterToolProduct;

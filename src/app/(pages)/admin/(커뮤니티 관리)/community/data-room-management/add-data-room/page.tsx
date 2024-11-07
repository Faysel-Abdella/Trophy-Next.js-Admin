"use client";
import React, { useState } from "react";

import Image from "next/image";

import assets from "@/assets";
import { Button, Input, Textarea } from "@nextui-org/react";

const DataRoomDetailsPage2 = () => {
  const titleStyle =
    "w-[100px] font-bold text-[16px] leading-[22px] text-mainBlack";

  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > 10) {
      alert("You can only upload up to 10 images.");
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file as Blob));
    setImages([...images, ...newImages]);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

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
            자료실 추가하기
          </h2>
        </div>
      </header>

      <main className={"mt-10"}>
        <div className="w-full mt-14 bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="w-full flex items-center">
            <div className="w-full flex items-center">
              <h3 className={`${titleStyle}`}>제목</h3>
              <Input
                variant="bordered"
                placeholder="안녕하세요"
                radius="sm"
                className="focus:outline-none focus:border-none rounded-[5px]"
              />
            </div>
          </div>
          <div className="w-full mt-8  flex items-center">
            <div className="w-full flex items-center">
              <h3 className={`${titleStyle}`}>내용</h3>
              <Textarea
                variant="bordered"
                placeholder="트로피입니다."
                radius="sm"
                className="rounded-[5px] w-full"
                minRows={7}
              />
            </div>
          </div>

          <div className="mt-20 flex">
            <h3 className={`${titleStyle}`}>사진</h3>
            <label
              htmlFor="file-upload"
              className="size-[120px] bg-bgGray rounded-[10px] cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  multiple
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                <Image src={assets.camera} alt="camera" />
                <p className="mt-[6px] font-bold text-sm text-mainGray">
                  {images.length} / 10
                </p>
              </div>
            </label>
            <div className="ml-[30px] flex items-center gap-7">
              <div>
                <div className="flex items-center gap-[30px]">
                  {images.map((image, index) => (
                    <div key={index} className="relative ">
                      <Image
                        src={image}
                        alt={`Uploaded ${index + 1}`}
                        className="size-[120px] object-cover"
                        width={120}
                        height={120}
                      />
                      <Image
                        className="absolute top-0 right-0 cursor-pointer"
                        onClick={() => removeImage(index)}
                        src={assets.cancel}
                        alt="cancel"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 gap-[20px]">
          <Button
            aria-label="Header"
            className="bg-secondBlack text-mainWhite font-normal text-base min-w-[68px] rounded-[5px]"
          >
            등록
          </Button>
        </div>
      </main>
    </section>
  );
};

export default DataRoomDetailsPage2;

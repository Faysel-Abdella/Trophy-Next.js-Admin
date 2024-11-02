"use client";

import { useState } from "react";

import BasicInformation from "@/components/BasicInformation";
import PaymentHistory from "@/components/PaymentHistory";

const MembershipDetail = () => {
  const [selectedOption, setSelectedOption] = useState<
    "basicInformation" | "paymentHistory"
  >("basicInformation");
  return (
    <section className="font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            회원 상세보기
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          회원 관리
        </h2>

        <div className="mt-6 w-fit bg-mainWhite p-1 rounded-[10px] flex justify-center items-center transition-all ease-in-out">
          <button
            className={`${
              selectedOption === "basicInformation"
                ? "bg-bgPurple text-mainPurple"
                : "bg-mainWhite text-mainGray"
            } py-[10px] px-[20px] rounded-[5px] cursor-pointer font-normal text-base transition-all ease-in-out`}
            onClick={() => setSelectedOption("basicInformation")}
          >
            기본 정보
          </button>
          <button
            className={`${
              selectedOption === "paymentHistory"
                ? "bg-bgPurple text-mainPurple"
                : "bg-mainWhite text-mainGray"
            } py-[10px] px-[20px] rounded-[5px] cursor-pointer font-normal text-base transition-all ease-in-out`}
            onClick={() => setSelectedOption("paymentHistory")}
          >
            결제 내역
          </button>
        </div>
      </header>

      <main>
        {selectedOption === "basicInformation" ? (
          <BasicInformation />
        ) : (
          <PaymentHistory />
        )}
      </main>
    </section>
  );
};

export default MembershipDetail;

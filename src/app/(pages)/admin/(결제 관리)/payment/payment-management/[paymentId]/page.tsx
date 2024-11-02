import React from "react";

const PaymentDetailsPage = () => {
  return (
    <section className="mt-8 font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          결제 내역 상세보기
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className="font-bold text-mainBlack text-base w-[100px]">
              결제자
            </h3>
            <p className="w-[310px] font-medium text-[14px] text-mainGray">
              홍길동
            </p>
          </div>
          <div className="flex items-center">
            <h3 className="font-bold text-mainBlack text-base w-[100px]">
              결제 유형
            </h3>
            <p className="w-[310px] font-medium text-[14px] text-mainGray">
              인앱/포인트
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className="font-bold text-mainBlack text-base w-[100px]">
              사용 포인트
            </h3>
            <p className="w-[310px] font-medium text-[14px] text-mainGray">
              1,000원
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className="font-bold text-mainBlack text-base w-[100px]">
              결제일
            </h3>
            <p className="w-[310px] font-medium text-[14px] text-mainGray">
              2024-10-01
            </p>
          </div>
          <div className="flex items-center">
            <h3 className="font-bold text-mainBlack text-base w-[100px]">
              만료일
            </h3>
            <p className="w-[310px] font-medium text-[14px] text-mainGray">
              2024-10-31
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PaymentDetailsPage;

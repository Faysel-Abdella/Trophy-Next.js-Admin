"use client";
import React, { useState } from "react";

import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
  Input,
} from "@nextui-org/react";
import InputWithLabel from "@/components/InputWithLabel";

import assets from "@/assets";

import row15Column1 from "@/data/tables/row15Column1";
import Link from "next/link";
import Image from "next/image";
import DropDown from "@/components/DropDown";
import InputNoLabel from "@/components/InputNoLable";

const OrderDetailsPage = () => {
  const titleStyle = "font-semibold text-base text-[#26282B] w-[100px]";

  const [informationType, setInformationType] = useState<
    "order" | "processing"
  >("order");

  const options = [
    { key: "1", label: "주문 접수" },
    { key: "2", label: "결제 완료" },
    { key: "3", label: "배송 시작" },
    { key: "4", label: "반품 처리" },
  ];

  const viewOptionsDefault = options[0].key;

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt("10");

  const pages = Math.ceil(row15Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row15Column1.slice(start, end));
    return row15Column1.slice(start, end);
  }, [page, row15Column1, 10, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section className="font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          주문관리
        </h2>
      </header>

      <main className=" mt-4 bg-mainWhite py-7 px-9 rounded-[20px]">
        <div className="flex border-b border-[#26282B] transition-all ease-out">
          <button
            className={`${
              informationType == "order"
                ? "bg-[#26282B] text-mainWhite"
                : "bg-mainWhite text-[#72787F] border border-[#C9CDCE]"
            } w-[138px] h-[55px] font-medium text-[20px] `}
            onClick={() => setInformationType("order")}
          >
            주문정보
          </button>
          <button
            className={`${
              informationType == "processing"
                ? "bg-[#26282B] text-mainWhite"
                : "bg-mainWhite text-[#72787F] border border-[#C9CDCE]"
            } w-[138px] h-[55px] font-medium text-[20px] `}
            onClick={() => setInformationType("processing")}
          >
            처리이력
          </button>
        </div>
        <article className="mt-5 overflow-x-auto max-w-[1100px]">
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[77px]  text-center",
              ],
              td: ["px-6  text-center font-normal text-base text-[#363941] "],
            }}
          >
            <TableHeader>
              <TableColumn>
                <div className="flex items-center justify-center gap-2">
                  <p>주문번호</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>주문상태</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>주문자</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>수령자</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>결제금액</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>결제수단</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>주문 일시</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>결제 일시</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b-1">
                <TableCell>002002</TableCell>

                <TableCell>반품 완료</TableCell>
                <TableCell>홍*동</TableCell>
                <TableCell>홍*동</TableCell>
                <TableCell>30,022</TableCell>
                <TableCell>무통장입금</TableCell>
                <TableCell>2024-01-24 14:42</TableCell>
                <TableCell>--</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </article>

        <section className="mt-7">
          <div className="flex items-center border-t border-t-[#C9CDCE] border-b border-b-[#E8EBED]">
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>주문자 정보</p>
              </h3>
              <p className="min-w-[200px] my-auto pl-[10px] font-normal text-balance text-[#72787F]">
                홍길동
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>주문자 휴대전화</p>
              </h3>
              <p className="min-w-[200px] my-auto pl-[10px] font-normal text-balance text-[#72787F]">
                010 - 3232 - 1111
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>이메일</p>
              </h3>
              <p className="min-w-[200px] my-auto pl-[10px] font-normal text-balance text-[#72787F]">
                wkw@naver.com
              </p>
            </div>
          </div>
          <div className="flex items-center border-b border-b-[#E8EBED]">
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>배송자 정보</p>
              </h3>
              <p className="min-w-[200px] my-auto pl-[10px] font-normal text-balance text-[#72787F]">
                유재석
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>배송지요청사항</p>
              </h3>
              <p className="min-w-[200px] my-auto pl-[10px] font-normal text-balance text-[#72787F]">
                문 앞에 놔주세요.
              </p>
            </div>
          </div>
          <div className="flex items-center border-b border-b-[#E8EBED]">
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>배송지</p>
              </h3>
              <p className="min-w-[200px] my-auto pl-[10px] font-normal text-balance text-[#72787F]">
                (우 : 09022) 서울특별시 강남구 가산디지털아파트 101동 1101호
              </p>
            </div>
          </div>

          <div className="flex items-center border-t border-t-[#C9CDCE] border-b border-b-[#E8EBED]">
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>택배사</p>
              </h3>
              <div className="min-w-[200px] pl-[10px]">
                <input className="border border-mainGray focus:outline-none p-1" />
              </div>
            </div>
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>송장번호</p>
              </h3>
              <div className="min-w-[200px] pl-[10px]">
                <input className="border border-mainGray focus:outline-none p-1" />
              </div>
            </div>
            <div className="flex items-center">
              <h3 className="flex items-center bg-[#F1F1F1] w-[160px] h-[46px] py-auto pl-[20px] font-medium text-[#26282B] text-base">
                <p>주문 상태</p>
              </h3>
              <div className="flex items-center gap-1 pl-[20px]">
                <DropDown
                  options={options}
                  defaultSelectedKeys={viewOptionsDefault}
                  insideStyles="min-w-[130px] pl-[10px]"
                />
                <Link href="#" className="text-[#FF0000] font-normal text-base">
                  환불 처리
                </Link>
              </div>
            </div>
          </div>
        </section>

        <h3 className="font-bold text-[20px] text-[#26282B] mt-9 mb-6">
          주문내역
        </h3>
      </main>
    </section>
  );
};

export default OrderDetailsPage;

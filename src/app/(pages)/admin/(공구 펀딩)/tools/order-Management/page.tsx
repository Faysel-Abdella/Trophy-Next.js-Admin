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

const CheckBoxWithLabel = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center gap-[6px]">
      <Checkbox />
      <p className="font-medium text-base text-[#72787F]">{label}</p>
    </div>
  );
};

const OrderManagementPage = () => {
  const titleStyle = "font-semibold text-base text-[#26282B] w-[100px]";

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
        <div>
          <InputWithLabel
            label="검색어 포함"
            labelStyles={`${titleStyle}`}
            inputStyles="w-[326px]"
          />

          <div className="mt-6 flex items-center">
            <h3 className={`${titleStyle}`}>주문상태</h3>
            <div className="flex items-center gap-[18px]">
              <CheckBoxWithLabel label="주문접수" />
              <CheckBoxWithLabel label="결제완료" />
              <CheckBoxWithLabel label="배송시작" />
              <CheckBoxWithLabel label="배송완료" />
              <CheckBoxWithLabel label="주문취소" />
              <CheckBoxWithLabel label="반품처리" />
              <CheckBoxWithLabel label="구매확정" />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <h3 className={`${titleStyle}`}>결제유형</h3>
            <div className="flex items-center gap-[18px]">
              <CheckBoxWithLabel label="무통장입금" />
              <CheckBoxWithLabel label="신용카드" />
              <CheckBoxWithLabel label="계좌이체" />
              <CheckBoxWithLabel label="간편결제" />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <h3 className={`${titleStyle}`}>유형</h3>
            <div className="flex items-center gap-[18px]">
              <CheckBoxWithLabel label="공동구매" />
              <CheckBoxWithLabel label="펀딩" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <h3 className={`${titleStyle}`}>주문일</h3>
              <div className="flex items-center gap-[18px]">
                <Input type="date" />
                <span>~</span>
                <Input type="date" />
              </div>
            </div>

            <Button className="h-[37px] w-[76px] rounded-[5px] text-mainWhite bg-secondBlack y text-base">
              검색
            </Button>
          </div>
        </div>

        <article className="mt-5 overflow-x-auto max-w-[1100px]">
          <h3 className="font-bold text-[20px] text-[#26282B] mt-9 mb-6">
            3건의 검색 결과
          </h3>
          <Table
            aria-label="Data Table"
            shadow="none"
            classNames={{
              th: [
                "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[48px]  text-center",
              ],
              td: ["px-6  text-center font-normal text-base text-[#363941] "],
            }}
            bottomContent={
              <div className="flex w-full justify-center  mt-8">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn className="flex justify-center items-center">
                <Checkbox
                  onClick={() => {
                    if (allListCheckedPageNumbers.includes(page)) {
                      setAllListCheckedPageNumbers(
                        allListCheckedPageNumbers.filter(
                          (number) => number !== page
                        )
                      );
                      setClickedRowIds(
                        clickedRowIds.filter(
                          (id) =>
                            !currentData
                              .map((item: any) => item.number)
                              .includes(id)
                        )
                      );
                    } else {
                      setClickedRowIds([
                        ...clickedRowIds,
                        ...currentData.map((item: any) => item.number),
                      ]);
                      setAllListCheckedPageNumbers([
                        ...allListCheckedPageNumbers,
                        page,
                      ]);
                    }
                  }}
                  className={`size-[14px] rounded-[2px] bg-transparent`}
                  isSelected={allListCheckedPageNumbers.includes(page)}
                ></Checkbox>
              </TableColumn>

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
                  <p>상품명</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>결제금액 (배송비)</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>카테고리</p>
                  <Image src={assets.dropDownArrow} alt="Drop down" />
                </div>
              </TableColumn>
              <TableColumn>
                {" "}
                <div className="flex items-center justify-center gap-2">
                  <p>유형</p>
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
              {items.map((row) => (
                <TableRow key={row.id} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className={`text-center size-[14px] rounded-[2px]`}
                      onClick={() => {
                        if (clickedRowIds.includes(row.number)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== row.number)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, row.number]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(row.number)}
                    ></Checkbox>
                  </TableCell>
                  <TableCell>{row.orderNumber}</TableCell>

                  <TableCell>
                    <div>
                      <DropDown
                        options={options}
                        defaultSelectedKeys={viewOptionsDefault}
                        insideStyles="text-sm"
                        selectStyles="text-sm w-[140px]"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-[#1C7FF2] underline underline-offset-2 text-nowrap">
                      {row.name}
                    </p>
                  </TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <p className="text-nowrap">{row.category}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-nowrap">{row.category2}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-nowrap">{row.orderer}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-nowrap">{row.orderDateAndTime}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-nowrap">{row.paymentDateAndTime}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>
    </section>
  );
};

export default OrderManagementPage;

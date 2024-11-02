"use client";

import Image from "next/image";

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
} from "@nextui-org/react";
import Link from "next/link";

import HeaderDropDown from "@/components/HeaderDropDown";

import row7Column2 from "@/data/tables/row7Column2";
import row7Column2Columns from "@/data/columns/row7Column2Columns";

import assets from "@/assets";
import { useState } from "react";
import React from "react";

const ParentToonManagementDetails = () => {
  const titleStyles = "font-bold text-mainBlack text-base w-[100px]";
  const fadeStyles = "font-medium text-[14px] text-mainGray w-[350px]";

  const viewOptions = [
    {
      key: "10",
      label: "10개씩 보기",
    },
    {
      key: "20",
      label: "20개씩 보기",
    },
    {
      key: "50",
      label: "50개씩 보기",
    },
    {
      key: "100",
      label: "100개씩 보기",
    },
  ];

  const viewOptionsDefault = viewOptions[0].key;

  const [viewValue, setViewValue] = useState(viewOptionsDefault);

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = parseInt(viewValue);

  const pages = Math.ceil(row7Column2.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row7Column2.slice(start, end));
    return row7Column2.slice(start, end);
  }, [page, row7Column2, viewValue, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  return (
    <section className="mt-8 font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          육아툰 상세보기
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>제목</h3>
            <p className={`${fadeStyles}`}>육아툰 제목 영역</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>작가</h3>
            <p className={`${fadeStyles}`}>작가이름</p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>썸네일</h3>
            <div>
              <Image
                src={assets.tableBodyImage1}
                alt="Image detail"
                className="size-[70px] rounded-[5px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 ">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>설명</h3>
            <p className="font-medium text-[14px] text-mainGray">
              육아툰 설명 영역 육아툰 설명 영역 육아툰 설명 영역 육아툰 설명
              영역 육아툰 설명
            </p>
          </div>
        </div>
      </main>

      <main className="rounded-[20px] bg-white py-6 px-5 mt-6 ">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px] text-mainBlack">총 00건</p>

          <div className="flex justify-center items-center gap-3">
            <HeaderDropDown
              options={viewOptions}
              defaultSelectedKey={viewOptionsDefault}
              value={viewValue}
              setNewValue={setViewValue}
              styles="w-[139px] "
              mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
            />
            <div className="flex items-center gap-3">
              <Button
                aria-label="Header"
                className="bg-mainGray text-mainWhite font-normal text-base w-[28px] rounded-[5px]"
              >
                삭제
              </Button>
              <Button
                aria-label="Header"
                className="bg-mainBlack text-mainWhite font-normal text-base w-[28px] rounded-[5px]"
              >
                삭제
              </Button>
            </div>
          </div>
        </div>

        <article className="mt-5">
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

              <React.Fragment>
                {row7Column2Columns.map((column) => (
                  <TableColumn key={column.key}>{column.name}</TableColumn>
                ))}
              </React.Fragment>
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
                  <TableCell>{row.number}</TableCell>
                  <TableCell>
                    <div className="flex justify-center items-center">
                      <Image
                        src={row.thumbnail}
                        alt="Thumbnail"
                        className="size-[60px] rounded-[10px] object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{row.title}</TableCell>

                  <TableCell>
                    <Link
                      href="/admin/community/parenting-toon-management/1/1"
                      className="text-mainPurple underline underline-offset-2"
                    >
                      {row.viewDetails}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </article>
      </main>

      <div className="flex items-center justify-center">
        <Button className="mt-[40px] bg-mainGray rounded-[5px] py-[10px] px-[40px] text-mainWhite font-normal text-base w-[108px] h-[42px]">
          삭제
        </Button>
      </div>
    </section>
  );
};

export default ParentToonManagementDetails;

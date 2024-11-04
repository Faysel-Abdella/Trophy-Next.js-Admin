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
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import row1Column1 from "@/data/tables/row1Column1";

const MembershipDetail = () => {
  const titleStyle =
    "w-[100px] font-bold text-[16px] leading-[22px] text-mainBlack";
  const valueStyle = "font-normal text-[14px]  leading-[19px] text-mainGray";

  const modalTitleStyle = "font-normal text-[18px] text-secondBlack";
  const modalDateStyle = "font-normal text-sm text-mainGray";

  // Detail Modal Logic
  const {
    isOpen: isDetailBtn,
    onOpen: onDetailBtn,
    onOpenChange: onDetailBtnChange,
  } = useDisclosure();

  // Pagination Logic
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(row1Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row1Column1.slice(start, end));
    return row1Column1.slice(start, end);
  }, [page, row1Column1, 10, rowsPerPage]);

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
          회원 정보 상세보기
        </h2>
      </header>

      <main className="mt-10">
        <div className="bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>닉네임</h3>
              <p className={`${valueStyle}`}>아름다운 여행자</p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>휴대폰번호</h3>
              <p className={`${valueStyle}`}>01000000000</p>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>로그인 정보</h3>
              <p className={`${valueStyle}`}>자체/카카오</p>
            </div>
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>가입일</h3>
              <p className={`${valueStyle}`}>YYYY-MM-DD </p>
            </div>
          </div>

          <div className="mt-[30px] flex justify-center items-center">
            <Button className="py-3 px-8 bg-secondBlack rounded-[5px] text-mainWhite">
              수정
            </Button>
          </div>
        </div>
        <div className="mt-10 bg-mainWhite rounded-[20px] py-8 px-10">
          <div className="flex items-center">
            <div className="w-1/2 flex items-center">
              <h3 className={`${titleStyle}`}>포인트</h3>
              <p className={`${valueStyle}`}>1,000 P</p>
              <div className="flex items-center gap-3">
                <Button className="ml-8  bg-secondBlack rounded-[5px] text-mainWhite">
                  수정
                </Button>
                <Button
                  className="py-3 px-8 bg-mainGray rounded-[5px] text-mainWhite"
                  onClick={onDetailBtn}
                >
                  내역 상세보기
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-mainWhite rounded-[20px] py-8 px-10">
          <h3 className={`${titleStyle}`}>구매한 상품</h3>
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

                <TableColumn>번호</TableColumn>
                <TableColumn>상품명</TableColumn>
                <TableColumn>닉네임</TableColumn>
                <TableColumn>휴대폰번호</TableColumn>
                <TableColumn>로그인</TableColumn>
                <TableColumn>가입일</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key={1} className="border-b-1">
                  <TableCell>
                    <Checkbox
                      className={`text-center size-[14px] rounded-[2px]`}
                      onClick={() => {
                        if (clickedRowIds.includes(1)) {
                          setClickedRowIds(
                            clickedRowIds.filter((id) => id !== 1)
                          );
                        } else {
                          setClickedRowIds([...clickedRowIds, 1]);
                        }
                      }}
                      isSelected={clickedRowIds.includes(1)}
                    ></Checkbox>
                  </TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>홍길동</TableCell>
                  <TableCell>아름다운 여행자</TableCell>
                  <TableCell>01000000000</TableCell>
                  <TableCell>자체</TableCell>
                  <TableCell>YYYY-MM-DD</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </article>
        </div>
      </main>

      <Modal
        isOpen={isDetailBtn}
        placement="center"
        onOpenChange={onDetailBtnChange}
        hideCloseButton
        classNames={{
          // base: ["flex justify-center items-center"],
          body: ["p-[40px]"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="">
                  <h2 className="font-bold text-[30px] leading-10 text-secondBlack">
                    포인트 내역
                  </h2>

                  <div className="mt-10 flex items-center justify-between border-b border-borderGray pb-3">
                    <div className="flex flex-col ">
                      <h4 className={`${modalTitleStyle}`}>포인트 적립 내역</h4>
                      <p className={`mt-1 ${modalDateStyle}`}>2024.08.03</p>
                    </div>

                    <p className="text-mainBlue font-bold text-[18px] leading-[25px]">
                      + 500 P
                    </p>
                  </div>
                  <div className="mt-[10px] flex items-center justify-between border-b border-borderGray pb-3">
                    <div className="flex flex-col ">
                      <h4 className={`${modalTitleStyle}`}>상품 구매</h4>
                      <p className={`mt-1 ${modalDateStyle}`}>2024.08.02</p>
                    </div>

                    <p className="text-mainRed font-bold text-[18px] leading-[25px]">
                      - 500 P
                    </p>
                  </div>
                  <div className="mt-[10px] flex items-center justify-between  pb-3">
                    <div className="flex flex-col ">
                      <h4 className={`${modalTitleStyle}`}>회원가입</h4>
                      <p className={`mt-1 ${modalDateStyle}`}>2024.08.01</p>
                    </div>

                    <p className="text-mainBlue font-bold text-[18px] leading-[25px]">
                      + 1,000 P
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default MembershipDetail;

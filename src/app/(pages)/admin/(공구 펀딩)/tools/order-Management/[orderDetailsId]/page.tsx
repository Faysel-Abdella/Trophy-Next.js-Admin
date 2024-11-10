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
  Textarea,
} from "@nextui-org/react";
import InputWithLabel from "@/components/InputWithLabel";

import assets from "@/assets";

import row15Column1 from "@/data/tables/row15Column1";
import Link from "next/link";
import Image from "next/image";
import DropDown from "@/components/DropDown";
import InputNoLabel from "@/components/InputNoLable";

const OrderDetailsPage = () => {
  const titleStyle = "font-semibold text-base text-[#26282B] w-[120px]";

  const [informationType, setInformationType] = useState<
    "order" | "processing"
  >("order");

  // Detail Modal Logic
  const {
    isOpen: isDetailBtn,
    onOpen: onDetailBtn,
    onOpenChange: onDetailBtnChange,
  } = useDisclosure();

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
        {informationType === "order" ? (
          <div>
            {" "}
            <article className="mt-5 overflow-x-auto max-w-[1100px]">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[77px]  text-center",
                  ],
                  td: [
                    "px-6  text-center font-normal text-base text-[#363941] ",
                  ],
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
                  <div className="flex items-center gap-2 pl-[20px]">
                    <DropDown
                      options={options}
                      defaultSelectedKeys={viewOptionsDefault}
                      insideStyles="min-w-[120px]  pl-[10px]"
                      valueStyles="text-[14px] text-nowarp"
                    />
                    <button
                      onClick={onDetailBtn}
                      className="text-[#FF0000] font-normal text-base underline underline-offset-2"
                    >
                      환불 처리
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-3 flex justify-end">
              <Button className="py-0 px-3 bg-secondBlack text-mainWhite text-base font-medium rounded-[5px]">
                상태 변경 적용
              </Button>
            </div>
            <article className="mt-5 overflow-x-auto max-w-[1100px]">
              <h3 className="font-bold text-[20px] text-[#26282B] mt-9 mb-6">
                주문내역
              </h3>
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[60px]  text-center",
                  ],
                  td: [
                    "px-6  text-center font-normal text-base text-[#363941] ",
                  ],
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
                      <p>상품명</p>
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
                  {/* Group */}
                  <TableColumn>주문 접수</TableColumn>
                  <TableColumn>결제완료</TableColumn>
                  <TableColumn>배송 시작</TableColumn>
                  <TableColumn>배송 완료</TableColumn>
                  <TableColumn>취소</TableColumn>
                  <TableColumn>반품</TableColumn>
                  <TableColumn>교환</TableColumn>
                  {/*  */}
                  <TableColumn>상품단가</TableColumn>
                  <TableColumn>할인 금액</TableColumn>
                  <TableColumn>적립예정</TableColumn>
                  <TableColumn>배송비</TableColumn>
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
                      <TableCell>
                        <div className="px-3 flex items-center justify-center gap-2">
                          <Image
                            src={assets.demoImage}
                            alt="table image"
                            className="w-[58px] h-[48px]"
                          />
                          <p className="text-nowrap">이찬원 마이크</p>
                        </div>
                      </TableCell>

                      <TableCell className="text-nowrap">공동구매</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>40,000</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>0</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </article>
          </div>
        ) : (
          <div>
            <article className="mt-5 overflow-x-auto max-w-[1100px]">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[77px]  text-center",
                  ],
                  td: [
                    "px-6  text-center font-normal text-base text-[#363941] ",
                  ],
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

            <article className="mt-5 overflow-x-auto max-w-[1100px]">
              <Table
                aria-label="Data Table"
                shadow="none"
                classNames={{
                  th: [
                    "font-normal text-[16px] bg-[#EEEEEE] text-[#A1A9A3] h-[77px]  text-center",
                  ],
                  td: [
                    "px-6  text-center font-normal text-base text-[#363941] ",
                  ],
                }}
              >
                <TableHeader>
                  <TableColumn>처리일시</TableColumn>
                  <TableColumn>내용</TableColumn>
                  <TableColumn>상세</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b-1">
                    <TableCell>2023-01-24 16:12</TableCell>
                    <TableCell>취소요청</TableCell>
                    <TableCell>
                      고객이 전화로 취소요청함, 카드 취소 완료
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </article>

            <div className="mt-44 flex items-center gap-5">
              <InputWithLabel
                label="상담 내용 입력"
                labelStyles={`${titleStyle}`}
                placeholder="내용 입력"
                inputStyles="w-[147px] h-[70px]"
              />
              <InputNoLabel
                placeholder="상세 내용 입력"
                inputStyles="w-[776px] h-[70px]"
              />
            </div>
          </div>
        )}
      </main>

      <Modal
        isOpen={isDetailBtn}
        placement="center"
        onOpenChange={onDetailBtnChange}
        classNames={{
          base: ["min-w-[800px] flex justify-center items-center"],
          body: ["p-[40px] min-w-[500px]"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <InputWithLabel
                  label="환불 금액"
                  labelStyles={`${titleStyle}`}
                  defaultValue="0"
                  inputStyles="w-[200px] h-[42px]"
                />
                <div className="flex mt-[20px]">
                  <h3 className={`${titleStyle}`}>환불 사유</h3>
                  <Textarea
                    defaultValue="취소 사유를 입력합니다"
                    minRows={15}
                    className="w-[500px] h-[140px] "
                  />
                </div>

                <div className="mt-8 flex justify-center items-center gap-4">
                  <Button
                    className="bg-secondBlack text-mainWhite w-[148px] h-[42px] rounded-[5px]"
                    onClick={onClose}
                  >
                    환불
                  </Button>
                  <Button
                    className="bg-[#A3A6AB] text-mainWhite w-[148px] h-[42px] rounded-[5px]"
                    onClick={onClose}
                  >
                    취소
                  </Button>
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

export default OrderDetailsPage;

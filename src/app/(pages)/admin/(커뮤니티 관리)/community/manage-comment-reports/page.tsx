"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
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
import row4Column1 from "@/data/tables/row4Column1";
import HeaderDropDown from "@/components/HeaderDropDown";
import Link from "next/link";

const ManageCommentReportPage = () => {
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

  const pages = Math.ceil(row4Column1.length / rowsPerPage);

  const [currentData, setCurrentData] = useState<any>();

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    setCurrentData(row4Column1.slice(start, end));
    return row4Column1.slice(start, end);
  }, [page, row4Column1, viewValue, rowsPerPage]);

  // Selection Logic
  const [clickedRowIds, setClickedRowIds] = useState<number[]>([]);
  const [allListCheckedPageNumbers, setAllListCheckedPageNumbers] = useState<
    number[]
  >([]);

  // Detail Modal Logic
  const {
    isOpen: isDeleteBtn,
    onOpen: onDeleteBtn,
    onOpenChange: onDeleteBtnChange,
  } = useDisclosure();
  return (
    <section className="font-noto">
      <div>
        <Header
          buttonLabel={"로그아웃"}
          title={"댓글 신고 관리"}
          subtitle={"커뮤니티 관리"}
        />

        <main className="rounded-[20px] bg-white py-6 px-5 mt-6 ">
          <div className="flex items-center justify-between">
            <p className="font-bold text-[16px] text-mainBlack">총 00건</p>

            <div className="flex justify-center items-center gap-3">
              <HeaderDropDown
                options={[
                  {
                    key: "10",
                    label: "최신순",
                  },
                  {
                    key: "20",
                    label: "최신순",
                  },
                ]}
                defaultSelectedKey="최신순"
                value="10"
                setNewValue={() => {}}
                styles="w-[124px] "
                mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
              />
              <HeaderDropDown
                options={viewOptions}
                defaultSelectedKey={viewOptionsDefault}
                value={viewValue}
                setNewValue={setViewValue}
                styles="w-[139px] "
                mainStyles="bg-transparent border border-grayBorder rounded-[5px]"
              />

              <Button
                aria-label="Header"
                className="bg-secondBlack text-mainWhite font-normal text-base min-w-[68px] rounded-[5px]"
              >
                삭제
              </Button>
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

                <TableColumn>번호</TableColumn>
                <TableColumn>제목</TableColumn>
                <TableColumn>작성자</TableColumn>
                <TableColumn>삭제</TableColumn>
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
                    <TableCell className="max-w-[200px]  overflow-hidden text-nowrap text-ellipsis">
                      {row.title}
                    </TableCell>
                    <TableCell>{row.author}</TableCell>

                    <TableCell className="flex justify-center items-center text-mainRed font-normal text-base ">
                      <button className="w-fit" onClick={onDeleteBtn}>
                        삭제
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </article>
        </main>
      </div>

      <Modal
        isOpen={isDeleteBtn}
        placement="center"
        onOpenChange={onDeleteBtnChange}
        hideCloseButton
        classNames={{
          body: ["pt-[40px]"],
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div>
                  <h2 className="text-center font-bold text-[30px] leading-10 text-secondBlack">
                    댓글 삭제
                  </h2>
                  <p className="mt-2 text-center font-normal text-[18px] leading-[25px] text-mainGray">
                    삭제하면 되돌릴 수 없어요
                  </p>

                  <div className="mt-[40px] flex justify-center items-center gap-[10px]">
                    <Button
                      className="bg-mainGray text-mainWhite text-base w-[90px] h-[48px] rounded-[5px]"
                      onClick={onDeleteBtnChange}
                    >
                      취소
                    </Button>
                    <Button
                      className="bg-mainRed text-mainWhite text-base w-[90px] h-[48px] rounded-[5px]"
                      onClick={onDeleteBtnChange}
                    >
                      삭제
                    </Button>
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

export default ManageCommentReportPage;

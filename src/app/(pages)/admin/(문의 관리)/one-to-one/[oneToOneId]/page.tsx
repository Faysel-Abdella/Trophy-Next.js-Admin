import { Button, Checkbox, Textarea } from "@nextui-org/react";

const OneToOneDetailPage = () => {
  const titleStyles = "font-bold text-mainBlack text-base w-[100px]";
  const fadeStyles = "font-medium text-[14px] text-mainGray w-[350px]";
  const valueStyles = "font-medium text-[14px] text-mainBlack w-[350px]";

  return (
    <section className="mt-8 font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          1:1문의 상세보기
        </h2>
      </header>
      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>질문자</h3>
            <p className={`${fadeStyles}`}>닉네임</p>
          </div>
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>질문 날짜</h3>
            <p className={`${fadeStyles}`}>YYYY-MM-DD </p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-[60px]">
          <div className="flex items-center">
            <h3 className={`${titleStyles}`}>상태</h3>
            <p className="bg-[#F0F7FF] rounded-[4px] py-1 px-[6px] text-[#307FDB]">
              답변완료
            </p>
          </div>
        </div>
      </main>

      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="flex">
          <h3 className={`${titleStyles}`}>질문</h3>
          <Textarea
            value="Q. 답변 텍스트 영역입니다."
            disabled
            radius="sm"
            minRows={7}
          />
        </div>
      </main>

      <main className="mt-7 bg-mainWhite p-10 rounded-[20px]">
        <div className="flex">
          <h3 className={`${titleStyles}`}>답변</h3>
          <Textarea
            defaultValue="A. 답변 텍스트 영역입니다."
            radius="sm"
            minRows={7}
          />
        </div>
      </main>

      <div className="flex items-center justify-center">
        <Button className="mt-[40px] bg-mainBlack rounded-[5px] py-[10px] px-[40px] text-mainWhite font-normal text-base w-[108px] h-[42px]">
          등록
        </Button>
        <Button className="mt-[40px] bg-mainGray rounded-[5px] py-[10px] px-[40px] text-mainWhite font-normal text-base w-[108px] h-[42px]">
          삭제
        </Button>
      </div>
    </section>
  );
};

export default OneToOneDetailPage;

import InputWithLabel from "@/components/InputWithLabel";
import { Button } from "@nextui-org/react";

const RegisterMember = () => {
  const titleStyle =
    "w-[100px] font-bold text-[16px] leading-[22px] text-mainBlack";
  const valueStyle = "font-normal text-[14px]  leading-[19px] text-mainGray";

  return (
    <section className="font-noto">
      <header>
        <div className="flex justify-end">
          <button className=" text-mainGray font-normal text-base text-right">
            로그아웃
          </button>
        </div>
        <h2 className="mt-4 font-bold text-[30px] leading-[42px] text-mainBlack">
          회원 등록하기
        </h2>
      </header>

      <main className="mt-10">
        <div className="bg-mainWhite rounded-[20px] py-8 px-10">
          <InputWithLabel
            label="닉네임"
            labelStyles={`${titleStyle}`}
            placeholder="아름다운 여행자"
            inputStyles="w-[456px]"
          />
          <div className="mt-[20px] flex items-center gap-[60px]">
            <div className="w-1/2 flex items-center gap-[10px]">
              <InputWithLabel
                label="휴대폰 번호"
                labelStyles={`${titleStyle}`}
                inputStyles="w-[347px] h-[42px]"
              />
              <Button className="w-[99px] bg-mainGray text-mainWhite font-normal text-base rounded-[5px]">
                중복 확인
              </Button>
            </div>
            <div>
              <InputWithLabel
                label="인증번호"
                labelStyles={`${titleStyle}`}
                placeholder="000000"
                inputStyles="w-[370px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Button className="bg-secondBlack text-mainWhite font-normal text-base rounded-[5px]">
            등록
          </Button>
        </div>
      </main>
    </section>
  );
};

export default RegisterMember;

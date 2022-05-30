import React from "react";

import * as S from "../../styles/globalstyle";
import Navbar from "../../components/NavbarDark";
import BackBtn from "../../components/Btn/BackBtnDark";
import LogoNameReceivedLetter from "../../components/Txt/LogoNameReceivedLetter";
import ReceivedLetterMent from "../../components/Txt/ReceivedLetterMent";
import ReceivedLetterPoppyImg from "../../image/ReceivedLetterPoppy.png";
import KakaoPlusImg from "../../image/kakao_plus.png";

function ReceivedLetterPage() {
  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <>
      <S.DarkLongScene>
        <div className="fullbox-dark">
          <BackBtn></BackBtn>
          <Navbar></Navbar>

          <LogoNameReceivedLetter></LogoNameReceivedLetter>

          <ReceivedLetterMent></ReceivedLetterMent>

          <div className="ReceivedLetterPoppy">
            <img src={ReceivedLetterPoppyImg} alt="poppy" />
          </div>

          <div className="kakaoplus-desc">아직 추가하지 않았다면,</div>

          <a href="https://pf.kakao.com/_hxaxjUs">
            <div className="kakaoplus-received-letter-page">
              <img src={KakaoPlusImg} alt="kakao plus" />
            </div>
          </a>
        </div>
      </S.DarkLongScene>
    </>
  );
}

export default ReceivedLetterPage;

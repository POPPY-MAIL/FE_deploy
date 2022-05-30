import React from "react";
import { Link } from "react-router-dom";
import * as S from "../../styles/globalstyle";
import MetooBtn from "../../components/Btn/MetooBtn";
import GoHomeBtn from "../../components/Btn/GoHomeBtnWhite";
import LogoName from "../../components/Txt/LogoName";
// import BackBtn from "../../components/Btn/BackBtn";
import Poppyimg from "../../image/completewritemailpoppy.png";

function CompleteWriteMail() {
  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <S.NoScrollbarScene>
        <LogoName></LogoName>
        {/* <BackBtn></BackBtn> */}

        <div className="complete-write-mail-ment">
          {localStorage.getItem("nickname")}님의 우편함에<br></br>편지를
          넣었습니다!
        </div>

        <img
          src={Poppyimg}
          className="completewritemail-poppy-img"
          alt="poppy img"
        />

        <Link to="/">
          <MetooBtn></MetooBtn>
        </Link>

        <Link to="/">
          <GoHomeBtn></GoHomeBtn>
        </Link>
      </S.NoScrollbarScene>
    </>
  );
}

export default CompleteWriteMail;

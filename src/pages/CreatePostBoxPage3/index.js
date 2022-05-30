import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "../../styles/globalstyle";
// import Navbar from "../../components/Navbar";
import LogoNameCreatePostBox from "../../components/Txt/LogoNameCreatePostBox";
import BackBtn from "../../components/Btn/BackBtn";
import LinkName from "../../components/Txt/LinkName";
import AlertCopy from "../../components/Alert/AlertCopy";
import PostboxAfter from "../../components/Img/PostboxAfter";
import CompleteBtn from "../../components/Btn/CompleteBtn";
import { RefreshRequest } from "../../components/RefreshRequest";

function CreatePostBoxPage3() {
  const [_alert, setAlert] = useState(<AlertCopy></AlertCopy>);
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  // const history = useHistory();

  fetch("https://poppymail.shop/mailbox/", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + access,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      RefreshRequest(res, refresh);

      if (res[0]) {
        localStorage.setItem("1st_link_title", res[0].link_title);
        localStorage.setItem("1st_mailbox_link", res[0].mailbox_link);
        localStorage.setItem("1st_number_letter", res[0].number_of_letter);
        localStorage.setItem("1st_open_date", res[0].open_date);
      }

      if (res[1]) {
        localStorage.setItem("2nd_link_title", res[1].link_title);
        localStorage.setItem("2nd_mailbox_link", res[1].mailbox_link);
        localStorage.setItem("2nd_number_letter", res[1].number_of_letter);
        localStorage.setItem("2nd_open_date", res[1].open_date);
      }

      if (res[2]) {
        localStorage.setItem("3rd_link_title", res[2].link_title);
        localStorage.setItem("3rd_mailbox_link", res[2].mailbox_link);
        localStorage.setItem("3rd_number_letter", res[2].number_of_letter);
        localStorage.setItem("3rd_open_date", res[2].open_date);
      }

      if (res[3]) {
        localStorage.setItem("4th_link_title", res[3].link_title);
        localStorage.setItem("4th_mailbox_link", res[3].mailbox_link);
        localStorage.setItem("4th_number_letter", res[3].number_of_letter);
        localStorage.setItem("4th_open_date", res[3].open_date);
      }

      if (res[4]) {
        localStorage.setItem("5th_link_title", res[4].link_title);
        localStorage.setItem("5th_mailbox_link", res[4].mailbox_link);
        localStorage.setItem("5th_number_letter", res[4].number_of_letter);
        localStorage.setItem("5th_open_date", res[4].open_date);
      }

      if (res.detail === "User not found") {
        alert("다시 로그인해주세요!");
        localStorage.clear();
      }
    });

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <>
      <S.NoScrollbarScene>
        <BackBtn></BackBtn>
        {/* <Navbar></Navbar> */}

        <LogoNameCreatePostBox></LogoNameCreatePostBox>

        {_alert}

        <div className="create-post-box-ment">
          우체통 링크는 3일간만<br></br> 활성화되어있어요.
        </div>
        <div className="create-post-box-ment-deco1"></div>

        <PostboxAfter></PostboxAfter>

        {}

        <LinkName></LinkName>

        <Link to="/kakaoplus">
          <CompleteBtn></CompleteBtn>
        </Link>
      </S.NoScrollbarScene>
    </>
  );
}

export default CreatePostBoxPage3;

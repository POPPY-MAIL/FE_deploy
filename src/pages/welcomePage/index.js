import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "../../styles/globalstyle";

import LoginBtn from "../../components/Btn/LoginBtn";
import JoinBtn from "../../components/Btn/JoinBtn";
import LogoName from "../../components/Txt/LogoName";
import Poppy from "../../components/Img/Poppy";
import WelcomeMent from "../../components/Txt/WelcomeMent";
import { RefreshRequest } from "../../components/RefreshRequest";

function WelcomePage() {
  const is_new = !!localStorage.getItem("is_new");

  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  // const history = useHistory();

  useEffect(() => {
    GetAccess();
  });

  const GetAccess = () => {
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
        if (!res.ok) localStorage.clear();
        else {
          localStorage.setItem("check_mailbox_today", res.check_mailbox_today);
          RefreshRequest(res, refresh);
        }
      });
  };

  return (
    <>
      <S.NoScrollbarScene>
        <LogoName></LogoName>
        <Poppy></Poppy>
        <WelcomeMent></WelcomeMent>

        <Link to="/howtounlog">
          <LoginBtn></LoginBtn>
        </Link>

        {/* {is_new ? (
            <Link to="/joininfo">
              <JoinBtn></JoinBtn>
            </Link>
          ) : (
            <Link to="/howto">
              <JoinBtn></JoinBtn>
            </Link>
          )} */}
        {!access ? (
          <Link to="/join">
            <JoinBtn></JoinBtn>
          </Link>
        ) : !is_new ? (
          <Link to="/joininfo">
            <JoinBtn></JoinBtn>
          </Link>
        ) : (
          <Link to="/howto">
            <JoinBtn></JoinBtn>
          </Link>
        )}
      </S.NoScrollbarScene>
    </>
  );
}

export default WelcomePage;

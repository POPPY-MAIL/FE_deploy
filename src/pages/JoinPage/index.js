import { React } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import LogoNameJoin from "../../components/Txt/LogoNameJoin";
import BackBtn from "../../components/Btn/BackBtn";
import JoinMent from "../../components/Txt/JoinMent";
import KakaobtnImg from "../../image/kakao_login.png";
import JoinWithKakao from "../../components/Txt/JoinWithKakao";

const { Kakao } = window;

function JoinPage() {
  const history = useHistory();

  const KakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        // console.log(authObj);
        fetch("https://poppymail.shop/account/login/", {
          method: "POST",
          headers: {
            // 'Authorization' : '7dTk9-OoODnnr5g71IBC0NLqJTlQYkiNlgTupgo9dVwAAAF7jFnnrg',
            Authorization: authObj.access_token,
          },
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("access", res.access);
            localStorage.setItem("User_id", res.user_id);
            localStorage.setItem("refresh", res.refresh);
            localStorage.setItem("is_new", res.is_new);
            localStorage.setItem(
              "check_mailbox_today",
              res.check_mailbox_today
            );

            if (res.access) {
              const is_new = localStorage.getItem("is_new");
              is_new === "true"
                ? history.push("/joininfo")
                : history.push("/howto");
            }
          });
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      },
    });
  };

  return (
    <>
      <S.JoinScene>
        <BackBtn></BackBtn>
        <LogoNameJoin></LogoNameJoin>

        <JoinMent></JoinMent>
      </S.JoinScene>
      <JoinWithKakao></JoinWithKakao>

      <S.KakaoBtn onClick={KakaoLoginClickHandler}>
        <img src={KakaobtnImg} className="KakaobtnImg" alt="kakao" />
      </S.KakaoBtn>
    </>
  );
}

export default JoinPage;

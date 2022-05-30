import React, { useEffect } from "react";
// import { useHistory } from "react-router";

import * as S from "../../styles/globalstyle";
import BackBtn from "../../components/Btn/BackBtn";
import WithdrawalMent from "../../components/Txt/WithdrawalMent";
import withdrawalimg from "../../image/withdrawal.png";
import WithdrawalBtn from "../../components/Btn/WithdrawalBtn";
import { RefreshRequest } from "../../components/RefreshRequest";

function Withdrawal() {
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
        RefreshRequest(res, refresh);
        if (!res.ok) localStorage.clear();
      });
  };

  return (
    <>
      <S.NoScrollbarScene>
        <BackBtn></BackBtn>

        <img src={withdrawalimg} alt="탈퇴" className="withdrawal-img"></img>

        <WithdrawalMent></WithdrawalMent>

        <WithdrawalBtn></WithdrawalBtn>
      </S.NoScrollbarScene>
    </>
  );
}

export default Withdrawal;

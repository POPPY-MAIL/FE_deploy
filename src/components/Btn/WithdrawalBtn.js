import React from "react";
import { useHistory } from "react-router-dom";

function WithdrawalBtn() {
  const history = useHistory();

  const WithdrawalRequest = () => {
    const access = localStorage.getItem("access");
    fetch("https://poppymail.shop/account/signout/", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + access,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      //   .then(res => res.json())
      .then((res) => {
        // localStorage.setItem("Kakao_token", res.access_token);
        // const kakao_token = localStorage.getItem("Kakao_token");
        if (res.ok) {
          alert("탈퇴완료!");
          localStorage.clear();
          history.push("/");
        } else {
          localStorage.clear();
          alert("다시 로그인 후 탈퇴해주세요!");
          history.push("/");
        }
      });
  };

  return (
    <>
      <div onClick={WithdrawalRequest} className="create-post-box-btn">
        네 , 탈퇴할래요.
      </div>
    </>
  );
}

export default WithdrawalBtn;

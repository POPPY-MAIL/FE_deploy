import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "../../styles/globalstyle";
// import BackBtn from "../../components/Btn/BackBtn";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";
import CheckWriteMailMent from "../../components/Txt/CheckWriteMailMent";
import CheckLetter from "../../components/CheckLetter";

function CheckWriteMail() {
  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  const history = useHistory();

  const SendLetterRequest = () => {
    const mailbox_pk = localStorage.getItem("mailbox_pk");
    const random_strkey = localStorage.getItem("random_strkey");
    const contents = localStorage.getItem("contents");
    const sender = localStorage.getItem("sender");
    const receiver = localStorage.getItem("receiver");
    const color = localStorage.getItem("theme");
    fetch(
      "https://poppymail.shop/letter/" + mailbox_pk + "/" + random_strkey + "/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          content: contents,
          sender: sender,
          receiver: receiver,
          color: color,
        }),
      }
    )
      // .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          history.push("/completewritemail");
        } else {
          if (res.detail === "No! The requested mailbox not exists in DB") {
            alert("해당 우체통이 존재하지 않습니다!");
          } else if (
            res.detail === "No! User accesses after mailbox has been enclosed"
          ) {
            alert("3일이 지나 우체통이 닫혔어요🥺");
          }
          history.push("/");
        }
        localStorage.removeItem("contents");
        localStorage.removeItem("sender");
        localStorage.removeItem("receiver");
        localStorage.removeItem("theme");
      });
  };
  return (
    <>
      <S.NoScrollbarScene>
        <div className="small-complete-btn" onClick={SendLetterRequest}>
          완료
        </div>
        <LogoNamePoppyMail></LogoNamePoppyMail>
        <CheckWriteMailMent></CheckWriteMailMent>

        <div
          style={{
            display: "flex",
            position: "relative",
            flexFlow: "column",
          }}
        >
          <CheckLetter></CheckLetter>
          <div
            style={{
              width: "25rem",
              height: "12.412rem",
              position: "relative",
            }}
          />
        </div>

        {/* <Link to="completewritemail">
            <div className="give-letter-btn">우편함에 편지 넣기</div>
          </Link> */}
      </S.NoScrollbarScene>
    </>
  );
}

export default CheckWriteMail;

import React, { createContext, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import * as S from "../../styles/globalstyle";
import LogoNameCreatePostBox from "../../components/Txt/LogoNameCreatePostBox";
import BackBtn from "../../components/Btn/BackBtn";
import InputName from "../../components/InputName";
import { postBoxFetchRequest } from "../../components/PostboxFetchRequest";

export const CreatepostboxContext = createContext({
  setNickname: () => {},
});

function CreatePostBoxPage1() {
  const history = useHistory();

  const access = localStorage.getItem("access");

  const [nickname, setNickname] = useState("");
  const value = useMemo(() => ({ setNickname }), [setNickname]);
  const nickReg = /^.{1,10}$/;

  postBoxFetchRequest();

  const CreatepostboxRequest = () => {
    if (nickname === "") {
      alert("필수 입력 요소가 작성되지 않았습니다.");
    } else if (!nickReg.test(nickname)) {
      alert("이름 혹은 닉네임은 10글자까지 가능합니다.");
    } else {
      //   alert(nickname);
      fetch("https://poppymail.shop/mailbox/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + access,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: nickname,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            if (res[0] === "우체통 개수 초과하여 생성 불가") {
              alert(
                "현재 파피메일에서는 5개의 우체통만 만들 수 있어요. 😭 다음 업데이트 때 더 준비해볼게요! 이전 우체통을 삭제하면 새로운 우체통을 생성할 수 있어요! (삭제한 우체통의 편지는 복구가 불가능해요)"
              );
            } else {
              localStorage.setItem("mailbox_link", res.mailbox_link);
              history.push("/createpostboxsteptwo");
            }
          }
        });
      //   history.push("/createpostboxsteptwo");
    }
  };

  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <CreatepostboxContext.Provider value={value}>
      <S.NoScrollbarScene>
        <BackBtn></BackBtn>

        {/* <Navbar></Navbar> */}

        <LogoNameCreatePostBox></LogoNameCreatePostBox>

        <InputName></InputName>

        <div className="create-post-box-btn" onClick={CreatepostboxRequest}>
          완료
        </div>

        <div className="noeditnick">*닉네임은 생성 후 수정이 불가합니다.</div>

        {/* {_alert} */}
      </S.NoScrollbarScene>
    </CreatepostboxContext.Provider>
  );
}

export default CreatePostBoxPage1;

import React, { createContext, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import JoinInfoMent from "../../components/Txt/JoinInfoMent";
import LogoNameJoin from "../../components/Txt/LogoNameJoin";

import * as S from "../../styles/globalstyle";
import JoinInput from "../../components/JoinInput";

export const UserContext = createContext({
  setName: () => {},
  setBirthdate: () => {},
  setGender: () => {},
  setPhone: () => {},
});

function JoinInfoPage() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("남");
  const [phone, setPhone] = useState("");
  const value = useMemo(
    () => ({ setName, setBirthdate, setGender, setPhone }),
    [setName, setBirthdate, setGender, setPhone]
  );

  var nameReg = /^[가-힣]{1,5}$/;
  var birthReg = /^\d{8}$/;
  var phoneReg = /^\d{10,11}$/;

  const JoinRequest = () => {
    if (!nameReg.test(name)) {
      alert("이름 형식은 한글 1~5글자입니다.");
    } else if (!birthReg.test(birthdate)) {
      alert("생년월일을 올바르게 입력해주세요.");
    } else if (!phoneReg.test(phone)) {
      alert("휴대폰번호를 올바르게 입력해주세요.");
    } else if (
      name === "" ||
      birthdate === "" ||
      gender === "" ||
      phone === ""
    ) {
      alert("필수 입력 요소가 작성되지 않았습니다.");
    } else {
      const access = localStorage.getItem("access");
      const User_id = localStorage.getItem("User_id");
      localStorage.setItem("username", name);
      history.push("/joincomplete");
      fetch("https://poppymail.shop/account/" + User_id + "/userInfo/", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + access,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          gender: gender,
          // birthdate: birthdate,
          birthdate:
            birthdate.substr(0, 4) +
            "-" +
            birthdate.substr(4, 2) +
            "-" +
            birthdate.substr(6, 2),
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          // localStorage.setItem("Kakao_token", res.access_token);
          // const kakao_token = localStorage.getItem("Kakao_token");
          if (res) {
            // alert(res.user_name + "님, poppy mail에 오신 것을 환영합니다!");
            // history.push("/joininfo");
          }
        });
    }
  };

  return (
    <UserContext.Provider value={value}>
      <S.NoScrollbarScene>
        <LogoNameJoin></LogoNameJoin>
        <JoinInfoMent></JoinInfoMent>

        <JoinInput></JoinInput>

        {/* <CompleteBtn onClick={test}></CompleteBtn> */}
        <div className="join-input-complete-btn" onClick={JoinRequest}>
          완료
        </div>
      </S.NoScrollbarScene>
    </UserContext.Provider>
  );
}

export default JoinInfoPage;

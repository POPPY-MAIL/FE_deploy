import React, { useContext, useState } from "react";
import { UserContext } from "../pages/JoinInfoPage";
import { DropdownButton, Dropdown } from "react-bootstrap";
// import * as S from './styles';

function JoinInput() {
  // const [name, setName] = useState("");
  // const [birthdate, setBirthdate] = useState("");
  // const [gender, setGender] = useState("");
  // const [phone, setPhone] = useState("");
  const { setName, setBirthdate, setGender, setPhone } =
    useContext(UserContext);
  const [titlegender, setTitlegender] = useState("남");

  const processName = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  const processBirthdate = (e) => {
    // setBirthnum(e.target.value);
    // setYear(birthnum.substr(0, 4));
    // setMonth(birthnum.substr(4, 2));
    // setDate(birthnum.substr(6, 2));
    // console.log(birthnum);

    // setBirthdate(year + "-" + month + "-" + date);
    setBirthdate(e.target.value);
  };

  const setMan = (e) => {
    setGender("남");
    setTitlegender("남");
  };

  const setWoman = (e) => {
    setGender("여");
    setTitlegender("여");
  };

  const setNone = (e) => {
    setGender("선택하지 않음");
    setTitlegender("선택하지 않음");
  };

  const processPhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <div className="joininput-name">
        <div className="input-title">이름 </div>
        <input
          className="input-name"
          placeholder="김파피"
          onChange={processName}
        ></input>
      </div>

      <div className="joininput-birth">
        <div className="birth-title">생년월일 </div>
        <input
          className="input-birth"
          placeholder="yyyymmdd"
          onChange={processBirthdate}
        ></input>
      </div>

      <div className="joininput-sex">
        <div className="sex-title">성별 </div>
        <DropdownButton id="dropdown-basic-button" title={titlegender}>
          <Dropdown.Item eventKey="item1" onClick={setMan}>
            남
          </Dropdown.Item>
          <Dropdown.Item eventKey="item2" onClick={setWoman}>
            여
          </Dropdown.Item>
          <Dropdown.Item eventKey="item3" onClick={setNone}>
            선택하지 않음
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="joininput-phone">
        <div className="phone-title">핸드폰번호 </div>
        <input
          className="input-phone"
          placeholder="01000000000"
          onChange={processPhone}
        ></input>
        <div className="phone-comment">
          <p>*편지 확인을 위해 반드시 유효한 핸드폰 번호를 적어주세요!</p>
        </div>
      </div>
    </>
  );
}

export default JoinInput;

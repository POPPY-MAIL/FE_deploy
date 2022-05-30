import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import MyPageImg from "./Img/MyPageImg";
import AboutImg from "./Img/AboutImg";
import FaqImg from "./Img/FaqImg";
import LogoutImg from "./Img/LogoutImg";
import KakaoplusiconImg from "./Img/KakaoplusiconImg";

/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from "react-icons";
function Navbar() {
  const history = useHistory();

  const first_open_date = new Date(
    localStorage.getItem("1st_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const second_open_date = new Date(
    localStorage.getItem("2nd_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const third_open_date = new Date(
    localStorage.getItem("3rd_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const fourth_open_date = new Date(
    localStorage.getItem("4th_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const fifth_open_date = new Date(
    localStorage.getItem("5th_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const now = new Date();

  const LogoutRequest = () => {
    const access = localStorage.getItem("access");
    fetch("https://poppymail.shop/account/logout/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + access,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      // .then(res => res.json())
      .then((res) => {
        if (res.ok) {
          localStorage.clear();
          alert("로그아웃!");
          history.push("/");
        } else {
          localStorage.clear();
        }
      });
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* 네비게이션 토글 코드*/}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="out-red-circle" />
          <div className="post-here">우체통은 여기!</div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <div className="navbar-toggle"></div>
            {/* SidebarData를 순서대로 담기*/}
            {localStorage.getItem("check_mailbox_today") === "true" &&
            (first_open_date <= now ||
              second_open_date <= now ||
              third_open_date <= now ||
              fourth_open_date <= now ||
              fifth_open_date <= now) ? (
              <div>
                <div className="red-circle"></div>
              </div>
            ) : null}
            {/* <div>
              <div className="red-circle"></div>
            </div> */}
            <div className="nav-item-zone">
              <li className="nav-text1">
                <a>
                  <MyPageImg />
                  <span>마이 페이지</span>
                </a>
              </li>
              <li className="nav-text-small1">
                <a href="/withdrawal">
                  <span>탈퇴하기</span>
                </a>
              </li>
              {/* <li className="nav-text-small">
                <a href="/receivedletter">
                  <span>받은 편지 보기</span>
                </a>
              </li> */}
              <li className="nav-text-small3">
                <a href="/mypostbox">
                  <span>나의 우체통 열기</span>
                </a>
              </li>
              <li className="nav-text">
                <a href="https://thorn-laundry-3ff.notion.site/ABOUT-050b49e111444864ab692b1bd349e9d4">
                  <AboutImg />
                  <span>About 파피메일</span>
                </a>
              </li>
              <li className="nav-text">
                <a href="https://thorn-laundry-3ff.notion.site/FAQ-c5c39e0bcf93420289a6f7b7913035d8">
                  <FaqImg />
                  <span>자주 묻는 질문</span>
                </a>
              </li>
              <li className="nav-text1" id="logout">
                <a onClick={LogoutRequest}>
                  <LogoutImg />
                  <span>로그아웃</span>
                </a>
              </li>
              <li className="nav-text">
                <a href="/kakaoplus">
                  <KakaoplusiconImg />
                  <span>카카오친구 추가하기</span>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;

import { React, useEffect, useState } from "react";
// import { useHistory } from "react-router";

import * as S from "../../styles/globalstyle";
import BackBtn from "../../components/Btn/BackBtnDark";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import LogoNameMyCheckArrivedMail from "../../components/Txt/LogoNameCheckArrivedMail";
import PeopleImg from "../../image/people.png";

import { DropdownButton, Dropdown } from "react-bootstrap";

import MyLetter from "../../components/MyLetter";

function CheckArrivedMail() {
  const access = localStorage.getItem("access");

  const [length, setLength] = useState(null);
  const [letter, setLetter] = useState([{}]);

  const caroselRequest = (i, e) => {
    e.preventDefault();
    if (document.getElementsByClassName("swiper-wrapper")[0]) {
      document.getElementsByClassName(
        "swiper-wrapper"
      )[0].style = `transform: translate3d(${
        -25 * i
      }rem, 0px, 0px);  transition: 0.1s all ease;`;
    }
  };

  useEffect(() => {
    fetch(
      "https://poppymail.shop/mailbox/" +
        localStorage.getItem("id") +
        "/letters/",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + access,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) throw Error("401");
        }
        return res.json();
      })
      .then((res) => {
        var step;
        var newLetter = [];
        setLetter([{}]);

        for (step = 0; step < res.length; step++) {
          setLength(res.length);
          newLetter = newLetter.concat({
            receiver: res[step].receiver,
            content: res[step].content,
            sender: res[step].sender,
            color: res[step].color,
          });
        }

        setLetter(newLetter);
        console.log(letter);
      })

      .catch((err) => localStorage.clear());
  }, [access]);

  return (
    <>
      <S.DarkNoScrollbarScene>
        <BackBtn></BackBtn>
        <LogoNameMyCheckArrivedMail></LogoNameMyCheckArrivedMail>

        {!!length ? (
          <div>
            <div className="check-arrived-letter-ment">{length}개의 편지</div>
            <img className="people-img" src={PeopleImg} alt="people" />
            <DropdownButton id="dropdown-people-button" title="">
              {letter?.map((a, index) => {
                return (
                  <Dropdown.Item
                    eventKey="item1"
                    id="dropdown-people-item"
                    onClick={(e) => caroselRequest(index, e)}
                  >
                    {a.sender}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>
        ) : (
          <div className="noPostbox">빈 우체통입니다.</div>
        )}

        <span className="carosel-box">
          {letter?.map((a, index) => {
            return (
              <div
                className="carosel-text"
                onClick={(e) => caroselRequest(index, e)}
              >
                {a.sender?.substring(0, 3)}
                {a.sender?.length >= 4 ? <span>...</span> : null}
              </div>
            );
          })}
        </span>
        <div>
          <Swiper
            className="letter-flow"
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove={false}
            id="checkarrivedmailswiper"
          >
            {letter?.map((a) => {
              return (
                <SwiperSlide>
                  <MyLetter letter={a} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </S.DarkNoScrollbarScene>
    </>
  );
}

export default CheckArrivedMail;

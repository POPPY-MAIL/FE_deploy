import { React, useEffect } from "react";

import * as S from "../../styles/globalstyle";
import Navbar from "../../components/NavbarDark";
import BackBtn from "../../components/Btn/BackBtnDark";
import LogoNameMyPostbox from "../../components/Txt/LogoNameMyPostbox";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/components/pagination/pagination.scss";
import MyPostboxItem1 from "../../components/MyPostboxItem1";
import MyPostboxItem2 from "../../components/MyPostboxItem2";
import MyPostboxItem3 from "../../components/MyPostboxItem3";
import MyPostboxItem4 from "../../components/MyPostboxItem4";
import MyPostboxItem5 from "../../components/MyPostboxItem5";
import { postBoxFetchRequest } from "../../components/PostboxFetchRequest";

SwiperCore.use([Navigation, Thumbs, Pagination, Autoplay]);

function MyPostbox() {
  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;

  // res 결과가 달라진 경우..
  // var response = 0;

  // const access = localStorage.getItem("access");

  // useEffect(
  //   (response) => {
  //     setInterval(
  //       () =>
  //         fetch("https://poppymail.shop/mailbox/", {
  //           method: "GET",
  //           headers: {
  //             Authorization: "Bearer " + access,
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //           },
  //         })
  //           .then((res) => res.json())
  //           .then((res) => {
  //             if (response !== res.length) {
  //               // window.location.reload();
  //               response = res.length;
  //             }
  //           }),
  //       1000
  //     );
  //   },
  //   [access, response]
  // );

  useEffect(() => {
    setInterval(() => {
      postBoxFetchRequest();
    }, 1000);
  }, []);

  return (
    <>
      <S.DarkPercentHeightScene>
        <BackBtn></BackBtn>
        <Navbar></Navbar>

        <LogoNameMyPostbox></LogoNameMyPostbox>

        {!localStorage.getItem("1st_link_title") &&
        !localStorage.getItem("2nd_link_title") &&
        !localStorage.getItem("3rd_link_title") &&
        !localStorage.getItem("4th_link_title") &&
        !localStorage.getItem("5th_link_title") ? (
          <div className="noPostbox">우체통이 없습니다. 만들어보세요!</div>
        ) : null}

        {/* <AlertCopyWhite></AlertCopyWhite> */}

        <div>
          <Swiper
            className="service-flow"
            spaceBetween={0}
            slidesPerView={1}
            navigation
            thumbs
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            id="mypostboxswiper"
          >
            {localStorage.getItem("1st_link_title") !== null && (
              <SwiperSlide>
                <MyPostboxItem1></MyPostboxItem1>
              </SwiperSlide>
            )}

            {localStorage.getItem("2nd_link_title") !== null && (
              <SwiperSlide>
                <MyPostboxItem2></MyPostboxItem2>
              </SwiperSlide>
            )}

            {localStorage.getItem("3rd_link_title") !== null && (
              <SwiperSlide>
                <MyPostboxItem3></MyPostboxItem3>
              </SwiperSlide>
            )}
            {localStorage.getItem("4th_link_title") !== null && (
              <SwiperSlide>
                <MyPostboxItem4></MyPostboxItem4>
              </SwiperSlide>
            )}
            {localStorage.getItem("5th_link_title") !== null && (
              <SwiperSlide>
                <MyPostboxItem5></MyPostboxItem5>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </S.DarkPercentHeightScene>
    </>
  );
}

export default MyPostbox;

import { React, useState } from "react";
import { useHistory } from "react-router";
import MyPostboxImg from "../image/mypostboxitemimg.png";
// import * as S from './styles';

function MyPostboxItem1() {
  const [item1_link_title, setItemTitle1] = useState(null);
  const [item1_mailbox_link, setItemLink1] = useState(null);
  const [item1_number_letter, setItemLetter1] = useState(null);
  const history = useHistory();

  const first_open_date = new Date(
    localStorage.getItem("1st_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const now = new Date();

  const Copy = () => {
    copyToClipboard(item1_mailbox_link);

    alert("복사되었습니다!");
  };

  const copyToClipboard = (val) => {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  };

  const [_article, setArticle] = useState(null);

  const PopupDelete = () => {
    setArticle(
      <div>
        <div className="delete-postbox-box">
          <div className="delete-postbox-title">
            이 우체통을 삭제하시겠습니까?
          </div>
          <div className="delete-postbox-desc">
            한 번 삭제하신 우체통은 복구가 불가능합니다. 정말 삭제하시겠습니까?
          </div>
          <div className="delete-postbox-box-no" onClick={PopdownDelete}>
            아니요
          </div>
          <div className="delete-postbox-box-yes" onClick={deleteRequest}>
            네 삭제할래요.
          </div>
        </div>
      </div>
    );
  };

  const PopdownDelete = () => {
    setArticle(null);
  };

  const deleteRequest = () => {
    fetch(
      "https://poppymail.shop/mailbox/" + localStorage.getItem("1st_id") + "/",
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + access,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          localStorage.removeItem("1st_link_title");
          localStorage.removeItem("1st_open_date");
          alert("삭제 완료!");
          window.location.reload();
        } else {
          alert("다시 시도해주세요");
        }
      });
  };

  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  const [id, setId] = useState("");

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
      console.log(res);
      console.log(id);
      localStorage.removeItem("sender0");
      localStorage.removeItem("sender1");
      localStorage.removeItem("sender2");
      localStorage.removeItem("sender3");
      if (res.detail === "Given token not valid for any token type") {
        fetch("https://poppymail.shop/api/token/refresh/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refresh,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res) {
              console.log(res);
              if (res.detail === "Token is invalid or expired") {
                localStorage.clear();
              } else {
                localStorage.setItem("access", res.access);
              }
            }
          });
      }

      if (res[0]) {
        localStorage.setItem("1st_link_title", res[0].link_title);
        localStorage.setItem("1st_mailbox_link", res[0].mailbox_link);
        localStorage.setItem("1st_number_letter", res[0].number_of_letter);
        localStorage.setItem("1st_id", res[0].id);
        setId(res[0].id);

        setItemTitle1(localStorage.getItem("1st_link_title"));
        setItemLink1(localStorage.getItem("1st_mailbox_link"));
        setItemLetter1(localStorage.getItem("1st_number_letter"));
      }

      if (res[1]) {
        localStorage.setItem("2nd_link_title", res[1].link_title);
        localStorage.setItem("2nd_mailbox_link", res[1].mailbox_link);
        localStorage.setItem("2nd_number_letter", res[1].number_of_letter);
      }

      if (res[2]) {
        localStorage.setItem("3rd_link_title", res[2].link_title);
        localStorage.setItem("3rd_mailbox_link", res[2].mailbox_link);
        localStorage.setItem("3rd_number_letter", res[2].number_of_letter);
      }

      if (res[3]) {
        localStorage.setItem("4th_link_title", res[3].link_title);
        localStorage.setItem("4th_mailbox_link", res[3].mailbox_link);
        localStorage.setItem("4th_number_letter", res[3].number_of_letter);
      }

      if (res[4]) {
        localStorage.setItem("5th_link_title", res[4].link_title);
        localStorage.setItem("5th_mailbox_link", res[4].mailbox_link);
        localStorage.setItem("5th_number_letter", res[4].number_of_letter);
      }

      if (res.detail === "User not found") {
        alert("다시 로그인해주세요!");
        localStorage.clear();
      }
    });

  const openSpecificPostboxRequest = () => {
    history.push("/checkarrivedmail/" + id + "/letters/");

    localStorage.setItem("id", id);
    var step;
    for (step = 0; step < 30; step++) {
      localStorage.removeItem("sender" + step);
      localStorage.removeItem("length");
    }

    setTimeout(function () {
      window.location.reload();
    }, 1000);
    setTimeout(function () {
      window.location.reload();
    }, 500);
    setTimeout(function () {
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      <div className="copy-my-post-box-link-ment" onClick={Copy}>
        이 우체통 링크 복사하기
      </div>

      <div className="delete-my-post-box" onClick={PopupDelete}>
        삭제
      </div>

      <img src={MyPostboxImg} alt="postbox" className="MyPostboxImg"></img>

      <div className="my-post-box-item-ment1">&lt;{item1_link_title}&gt;</div>
      <div className="my-post-box-item-ment2">
        편지 {item1_number_letter}개 도착
      </div>
      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      {/* {first_open_date <= now ? (
        <div className="open-post-box-btn" onClick={openSpecificPostboxRequest}>
          우체통 열기
        </div>
      ) : (
        <div className="open-post-box-btn-disable">우체통 열기</div>
      )} */}
      <div className="open-post-box-btn" onClick={openSpecificPostboxRequest}>
        우체통 열기
      </div>
      {_article}
    </>
  );
}

export default MyPostboxItem1;

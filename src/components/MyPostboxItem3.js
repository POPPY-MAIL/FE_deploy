import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import MyPostboxImg from "../image/mypostboxitemimg.png";
import PoppyImg from "../image/ReceivedLetterPoppy.png";
import { Copy } from "./Copy";
// import OpenPostboxBtn from "./Btn/OpenPostboxBtn";
// import * as S from './styles';

function MyPostboxItem3() {
  const [item_link_title, setItemTitle] = useState(null);
  const [item_mailbox_link, setItemLink] = useState(null);
  const [item_number_letter, setItemLetter] = useState(null);

  const [_article, setArticle] = useState(null);

  const [opendate, setOpenDate] = useState(
    new Date(
      localStorage.getItem("3rd_open_date").replace(/-/g, "/") +
        " " +
        "00:00:00" // eslint-disable-line
    )
  );
  const [now, setNow] = useState(new Date());

  const access = localStorage.getItem("access");

  const history = useHistory();

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
      "https://poppymail.shop/mailbox/" + localStorage.getItem("3rd_id") + "/",
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
        if (res.ok) {
          localStorage.removeItem("3rd_id");
          localStorage.removeItem("3rd_link_title");
          localStorage.removeItem("3rd_open_date");
          localStorage.removeItem("3rd_mailbox_link");
          localStorage.removeItem("3rd_number_letter");
          alert("삭제 완료!");
          PostboxRequest();
          window.location.reload();
        } else {
          alert("다시 로그인해주세요");
          localStorage.clear();
        }
      });
  };

  useEffect(() => {
    PostboxRequest();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setOpenDate(
        new Date(
          localStorage.getItem("3rd_open_date").replace(/-/g, "/") +
            " " +
            "00:00:00" // eslint-disable-line
        )
      );
      setNow(new Date());
    }, 1000);
    // return () => {
    //   setOpenDate(new Date(null));
    //   setNow(null);
    // };
  }, []);

  const PostboxRequest = () => {
    setItemTitle(localStorage.getItem("3rd_link_title"));
    setItemLink(localStorage.getItem("3rd_mailbox_link"));
    setItemLetter(localStorage.getItem("3rd_number_letter"));
  };

  const openSpecificPostboxRequest = () => {
    history.push(
      "/checkarrivedmail/" + localStorage.getItem("3rd_id") + "/letters/"
    );
    localStorage.setItem("id", localStorage.getItem("3rd_id"));
    var step;
    for (step = 0; step < 30; step++) {
      localStorage.removeItem("sender" + step);
      localStorage.removeItem("length");
    }
  };

  return (
    <>
      <div
        className="copy-my-post-box-link-ment"
        onClick={(e) => Copy(item_mailbox_link, e)}
      >
        이 우체통 링크 복사하기
      </div>

      <div className="delete-my-post-box" onClick={PopupDelete}>
        삭제
      </div>

      {opendate <= now ? (
        <img src={MyPostboxImg} alt="postbox" className="MyPostboxImg"></img>
      ) : (
        <img src={PoppyImg} alt="postbox" className="PostboxPoppyImg"></img>
      )}

      <div className="my-post-box-item-ment1">&lt;{item_link_title}&gt;</div>
      {opendate <= now ? (
        <div className="my-post-box-item-ment2">
          편지 {item_number_letter}개 도착
        </div>
      ) : (
        <div className="my-post-box-item-ment2">
          편지 {item_number_letter}개 오는 중
        </div>
      )}

      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      {opendate <= now ? (
        <div className="open-post-box-btn" onClick={openSpecificPostboxRequest}>
          우체통 열기
        </div>
      ) : (
        <div className="open-post-box-btn-disable">우체통 열기</div>
      )}
      {_article}
    </>
  );
}

export default MyPostboxItem3;

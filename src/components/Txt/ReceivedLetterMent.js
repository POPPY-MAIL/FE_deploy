import React from "react";
import { postBoxFetchRequest } from "../PostboxFetchRequest";
// import { useHistory } from "react-router";
// import * as S from './styles';

function ReceivedLetterMent() {
  postBoxFetchRequest();

  return (
    <>
      <div className="received-letter-ment1">
        "걱정마! 도착하지 않은 적은 <br></br> 한번도 없거든. <br></br> 음...
        얼마나 왔는지 볼까?"
      </div>

      <div className="received-letter-ment2">
        편지{" "}
        {/* {parseInt(localStorage.getItem("1st_number_letter")) +
          parseInt(localStorage.getItem("2nd_number_letter")) +
          parseInt(localStorage.getItem("3rd_number_letter")) +
          parseInt(localStorage.getItem("4th_number_letter")) +
          parseInt(localStorage.getItem("5th_number_letter"))} */}
        {!localStorage.getItem("1st_number_letter")
          ? 0
          : !localStorage.getItem("2nd_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter"))
          : !localStorage.getItem("3rd_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter"))
          : !localStorage.getItem("4th_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter")) +
            parseInt(localStorage.getItem("3rd_number_letter"))
          : !localStorage.getItem("5th_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter")) +
            parseInt(localStorage.getItem("3rd_number_letter")) +
            parseInt(localStorage.getItem("4th_number_letter"))
          : parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter")) +
            parseInt(localStorage.getItem("3rd_number_letter")) +
            parseInt(localStorage.getItem("4th_number_letter")) +
            parseInt(localStorage.getItem("5th_number_letter"))}
        개 오는중
      </div>

      <div className="received-letter-ment3">
        편지가 도착하면, <br></br> 카카오톡 플러스 친구를 통해 알려드려요!
      </div>
    </>
  );
}

export default ReceivedLetterMent;

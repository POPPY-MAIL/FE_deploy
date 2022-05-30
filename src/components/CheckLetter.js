import React from "react";
// import * as S from './styles';
import letter_deco_1_1 from "../image/letter_deco_1_1.png";
import letter_deco_1_2 from "../image/letter_deco_1_2.png";
import letter_deco_2_1 from "../image/letter_deco_2_1.png";
import letter_deco_2_2 from "../image/letter_deco_2_2.png";
import letter_deco_3_1 from "../image/letter_deco_3_1.png";
import letter_deco_3_2 from "../image/letter_deco_3_2.png";

function CheckLetter() {
  return (
    <>
      <div
        className="check-letter-box"
        style={{ backgroundColor: localStorage.getItem("letter_color") }}
        id="check"
      >
        {localStorage.getItem("letter_color") === "#b88dcd" ? (
          <div className="letter_deco_1">
            <img className="letter_deco_1_1" src={letter_deco_1_1} alt="deco" />
            <img className="letter_deco_1_2" src={letter_deco_1_2} alt="deco" />
          </div>
        ) : localStorage.getItem("letter_color") === "#db7667" ? (
          <div className="letter_deco_2">
            <img className="letter_deco_2_1" src={letter_deco_2_1} alt="deco" />
            <img className="letter_deco_2_2" src={letter_deco_2_2} alt="deco" />
          </div>
        ) : localStorage.getItem("letter_color") === "#bdbe82" ? (
          <div className="letter_deco_3">
            <img className="letter_deco_3_1" src={letter_deco_3_1} alt="deco" />
            <img className="letter_deco_3_2" src={letter_deco_3_2} alt="deco" />
          </div>
        ) : null}
        <div className="letter-element" id="to-box">
          <div className="to-txt">To.</div>
          <div className="to-underline"></div>
          <div className="to-contents" id="div">
            {localStorage.getItem("receiver") !== "null"
              ? localStorage.getItem("receiver")
              : ""}
          </div>
        </div>
        <div className="letter-element" id="contents-box">
          <div className="contents-contents" id="check">
            {localStorage.getItem("contents") !== "null"
              ? localStorage.getItem("contents")
              : ""}
          </div>
        </div>
        <div className="letter-element" id="from-box">
          <div className="from-txt">From.</div>
          <div className="from-underline"></div>
          <div id="div" className="from-contents">
            {localStorage.getItem("sender") !== "null"
              ? localStorage.getItem("sender")
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckLetter;

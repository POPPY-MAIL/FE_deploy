import React, { useRef } from "react";
// import * as S from './styles';
import letter_deco_1_1 from "../image/letter_deco_1_1.png";
import letter_deco_1_2 from "../image/letter_deco_1_2.png";
import letter_deco_2_1 from "../image/letter_deco_2_1.png";
import letter_deco_2_2 from "../image/letter_deco_2_2.png";
import letter_deco_3_1 from "../image/letter_deco_3_1.png";
import letter_deco_3_2 from "../image/letter_deco_3_2.png";
import downloadIcon from "../image/download_negative.png";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

function MyLetter(props) {
  const letterRef = useRef();
  const onDownloadBtn = () => {
    const letter = letterRef.current;
    domtoimage.toBlob(letter).then((blob) => {
      saveAs(blob, "letter.png");
    });
  };

  return (
    <>
      <div className="download-btn" onClick={onDownloadBtn}>
        <img className="download-icon" src={downloadIcon} alt="download" />
      </div>
      <div
        className="check-letter-box"
        style={{
          backgroundColor: props.letter.color,
        }}
      >
        <div
          className="check-letter-box-inner"
          ref={letterRef}
          style={{
            backgroundColor: props.letter.color,
          }}
        >
          {props.letter.color === "#b88dcd" ? (
            <div className="letter_deco_1">
              <img
                className="letter_deco_1_1"
                src={letter_deco_1_1}
                alt="deco"
              />
              <img
                className="letter_deco_1_2"
                src={letter_deco_1_2}
                alt="deco"
              />
            </div>
          ) : props.letter.color === "#db7667" ? (
            <div className="letter_deco_2">
              <img
                className="letter_deco_2_1"
                src={letter_deco_2_1}
                alt="deco"
              />
              <img
                className="letter_deco_2_2"
                src={letter_deco_2_2}
                alt="deco"
              />
            </div>
          ) : props.letter.color === "#bdbe82" ? (
            <div className="letter_deco_3">
              <img
                className="letter_deco_3_1"
                src={letter_deco_3_1}
                alt="deco"
              />
              <img
                className="letter_deco_3_2"
                src={letter_deco_3_2}
                alt="deco"
              />
            </div>
          ) : null}
          <div className="letter-element" id="to-box">
            <div className="to-txt">To.</div>
            <div className="to-underline"></div>
            <div className="to-contents" id="div">
              {props.letter.receiver}
            </div>
          </div>
          <div className="letter-element" id="contents-box">
            <div className="contents-contents">{props.letter.content}</div>
          </div>
          <div className="letter-element" id="from-box">
            <div className="from-txt">From.</div>
            <div className="from-underline"></div>
            <div className="from-contents" id="div">
              {props.letter.sender}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyLetter;

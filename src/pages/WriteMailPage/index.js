import React, { createContext, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import BackBtn from "../../components/Btn/BackBtn";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";
import Colorbar from "../../components/Colorbar";
import Letter from "../../components/Letter";
import letter_deco_1_1 from "../../image/letter_deco_1_1.png";
import letter_deco_1_2 from "../../image/letter_deco_1_2.png";
import letter_deco_2_1 from "../../image/letter_deco_2_1.png";
import letter_deco_2_2 from "../../image/letter_deco_2_2.png";
import letter_deco_3_1 from "../../image/letter_deco_3_1.png";
import letter_deco_3_2 from "../../image/letter_deco_3_2.png";

export const LetterContext = createContext({
  setColor: () => {},
  setContents: () => {},
  setSender: () => {},
  setReceiver: () => {},
});

function WriteMail(props) {
  const history = useHistory();
  const mailbox_pk = props.match.params.mailbox_pk;
  const random_strkey = props.match.params.random_strkey;
  const [color, setColor] = useState("#DAAE40");
  const [contents, setContents] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const value = useMemo(
    () => ({ setColor, setContents, setSender, setReceiver }),
    [setColor, setContents, setSender, setReceiver]
  );

  const tenReg = /^.{1,10}$/;

  const SendLetterRequest = () => {
    if (contents === "" || sender === "" || receiver === "")
      alert("필수 입력 요소가 작성되지 않았습니다.");
    else if (!tenReg.test(sender))
      alert("보내는 이는 10글자까지 입력할 수 있습니다.");
    else if (!tenReg.test(receiver))
      alert("받는 이는 10글자까지 입력할 수 있습니다.");
    else {
      fetch(
        "https://poppymail.shop/letter/" +
          mailbox_pk +
          "/" +
          random_strkey +
          "/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            content: contents,
            sender: sender,
            receiver: receiver,
            color: color,
          }),
        }
      )
        // .then((res) => res.json())
        .then((res) => {
          if (res.ok) {
            console.log("콘솔 " + res);
            console.log("셋  " + contents + sender + color);
            history.push("/checkwritemail");
          } else {
            alert("해당 우체통이 존재하지 않습니다.");
            history.goBack();
          }
        });
    }
  };

  return (
    <>
      <LetterContext.Provider value={value}>
        <div className="fullbox">
          <BackBtn></BackBtn>
          {/* <Link to="/checkwritemail"> */}
          <div className="small-complete-btn" onClick={SendLetterRequest}>
            완료
          </div>
          {/* </Link> */}
          <LogoNamePoppyMail></LogoNamePoppyMail>
          <Colorbar></Colorbar>

          <div className="letter-box" style={{ backgroundColor: color }}>
            {color === "#b88dcd" ? (
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
            ) : color === "#db7667" ? (
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
            ) : color === "#bdbe82" ? (
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
            <Letter></Letter>
          </div>
        </div>
      </LetterContext.Provider>
    </>
  );
}

export default WriteMail;

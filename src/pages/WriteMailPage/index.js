import React, { createContext, useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "../../styles/globalstyle";

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
  localStorage.setItem("mailbox_pk", mailbox_pk);
  const random_strkey = props.match.params.random_strkey;
  localStorage.setItem("random_strkey", random_strkey);
  const [color, setColor] = useState("#DAAE40");
  const [contents, setContents] = useState(localStorage.getItem("contents"));
  const [sender, setSender] = useState(localStorage.getItem("sender"));
  const [receiver, setReceiver] = useState(localStorage.getItem("receiver"));
  const value = useMemo(
    () => ({ setColor, setContents, setSender, setReceiver }),
    [setColor, setContents, setSender, setReceiver]
  );

  const tenReg = /^.{1,10}$/;
  const twentyReg = /^.{1,20}$/;

  const SendLetterRequest = () => {
    if (contents === "" || sender === "" || receiver === "")
      alert("필수 입력 요소가 작성되지 않았습니다.");
    else if (!twentyReg.test(sender))
      alert("보내는 이는 20글자까지 입력할 수 있습니다.");
    else if (!tenReg.test(receiver))
      alert("받는 이는 10글자까지 입력할 수 있습니다.");
    else {
      localStorage.setItem("contents", contents);
      localStorage.setItem("sender", sender);
      localStorage.setItem("receiver", receiver);
      localStorage.setItem("theme", color);
      history.push("/checkwritemail");
    }
  };

  useEffect(() => {
    localStorage.removeItem("sender");
    localStorage.removeItem("contents");
    localStorage.removeItem("receiver");
    localStorage.removeItem("theme");
    setColor("#DAAE40");
    setContents(null);
    setSender(null);
    setReceiver(null);
  }, []);

  return (
    <>
      <LetterContext.Provider value={value}>
        <S.NoScrollbarScene>
          <BackBtn></BackBtn>
          <div className="small-complete-btn" onClick={SendLetterRequest}>
            완료
          </div>
          <LogoNamePoppyMail></LogoNamePoppyMail>
          <Colorbar></Colorbar>

          <div
            style={{
              display: "flex",
              position: "relative",
              flexFlow: "column",
            }}
          >
            <div
              className="letter-box"
              style={{
                backgroundColor: color,
                position: "relative",
              }}
            >
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
              <Letter />
            </div>
            <div
              style={{
                width: "25rem",
                height: "12.412rem",
                position: "relative",
              }}
            />
          </div>
        </S.NoScrollbarScene>
      </LetterContext.Provider>
    </>
  );
}

export default WriteMail;

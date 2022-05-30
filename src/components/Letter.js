import React, { useContext } from "react";
import { LetterContext } from "../pages/WriteMailPage";

// import * as S from './styles';

function Letter() {
  // const [contents, setContents] = useState("");
  // const [sender, setSender] = useState("");

  const { setReceiver, setContents, setSender } = useContext(LetterContext);

  const processReceiver = (e) => {
    setReceiver(e.target.value);
    localStorage.setItem("receiver", e.target.value);
  };

  const processContents = (e) => {
    e.target.style.height = "1px";
    e.target.style.height = 12 + e.target.scrollHeight + "px";
    setContents(e.target.value);
    localStorage.setItem("contents", e.target.value);
  };

  const processSender = (e) => {
    setSender(e.target.value);
    localStorage.setItem("sender", e.target.value);
  };

  // const resize = (obj) => {
  //   console.log(obj);
  //   obj.style.height = "1px";
  //   obj.style.height = 12 + obj.scrollHeight + "px";
  // };

  return (
    <>
      <div className="letter-element" id="to-box">
        <div className="to-txt">To.</div>
        <div className="to-underline"></div>
        <input className="to-contents" onChange={processReceiver}></input>
      </div>
      <div className="letter-element" id="contents-box">
        <textarea
          className="contents-contents"
          onChange={processContents}
        ></textarea>
      </div>
      <div className="letter-element" id="from-box">
        <div className="from-txt">From.</div>
        <div className="from-underline"></div>
        <input
          className="from-contents"
          placeholder="*친구가 알아볼 수 있도록 써주세요"
          onChange={processSender}
        ></input>
      </div>
    </>
  );
}

export default Letter;

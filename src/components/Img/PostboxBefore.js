import React from "react";
import PostboxBeforeImg from "../../image/postboxbefore.png";
import FanfareImg from "../../image/Fanfare.png";
import FingerImg from "../../image/finger.png";
// import * as S from './styles';

function PostboxBefore() {
  return (
    <>
      <div className="postboxbefore">
        <img src={PostboxBeforeImg} alt="postbox"></img>
      </div>
      <img className="fanfare" src={FanfareImg} alt="fanfare"></img>
      <div className="finger">
        <img src={FingerImg} alt="finger"></img>
      </div>
    </>
  );
}

export default PostboxBefore;

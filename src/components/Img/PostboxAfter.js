import React from "react";
import PostboxAfterImg from "../../image/postboxafter.png";
import BirdImg from "../../image/bird.png";
// import * as S from './styles';

function PostboxAfter() {
  return (
    <>
      <div className="postboxafter">
        <img src={PostboxAfterImg} alt="postbox"></img>
      </div>
      <div className="bird-txt">당장 공유해봐!</div>
      <div className="bird">
        <img src={BirdImg} alt="bird"></img>
      </div>
    </>
  );
}

export default PostboxAfter;

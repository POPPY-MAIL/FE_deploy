import styled from "styled-components";

export const SuperDiv = styled.div`
  display: flex;
  justify-content: center;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  /* background-image: url("/src/image/background.png"); */
  background-size: cover;
  overflow-x: hidden;
`;

export const BackgroundImg = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  @media only screen and (max-width: 768px) {
    width: 0;
  }
`;

export const DarkScene = styled.div`
  background-color: #424355;
  width: 25rem;
  height: 95rem;
  position: absolute;
  overflow: hidden;
  background-color: var(--dark-bg-color);
`;

export const DarkLongScene = styled.div`
  background-color: #424355;
  width: 25rem;
  height: calc(45.78177727784027rem + 0.1124859392575928rem + 60px);
  position: absolute;
`;

export const DarkPercentHeightScene = styled.div`
  background-color: #424355;
  width: 25rem;
  background-color: var(--dark-bg-color);
  height: 100%;
  overflow: hidden;
  position: absolute;
`;

export const DarkNoScrollbarScene = styled.div`
  background-color: #424355;
  width: 25rem;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: var(--dark-bg-color);
`;

export const NoScrollbarScene = styled.div`
  background-color: #fff;
  width: 25rem;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NoHiddenScene = styled.div`
  background-color: #fff;
  width: 25rem;
  height: calc(45.78177727784027rem + 0.1124859392575928rem + 60px);
  position: absolute;
`;

export const OverYHiddenScene = styled.div`
  background-color: #fff;
  width: 25rem;
  height: 100vh;
  position: absolute;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const PercentHeightScene = styled.div`
  background-color: #fff;
  width: 25rem;
  height: 100%;
  position: absolute;
  overflow: hidden;
`;

export const KakaoBtn = styled.div`
  position: absolute;
  background-image: url("../image/kakao_login.png");
  left: calc(50% - 5.6765rem);
  top: 25.18rem;
  cursor: pointer;
`;

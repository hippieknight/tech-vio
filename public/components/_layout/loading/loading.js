import styled from "@emotion/styled";

const Loading = () => {
  return (
    <LoadingWrap
      ref={(ref) => {
        if (!ref) return;
        setTimeout(() => {
          ref.style.background = "unset";
        }, 2000);
      }}
    >
      <LeftSide />
      <RightSide />
      <BouncingBallWrap
        ref={(ref) => {
          if (!ref) return;
          setTimeout(() => {
            ref.style.display = "none";
          }, 2000);
        }}
      >
        <CenterBall />
        <Ellipse />
      </BouncingBallWrap>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  background-color: var(--primary-purple);
`;

const LeftSide = styled.div`
  flex: 1;

  @keyframes slideLeft {
    0% {
      background-color: var(--primary-purple);
    }
    100% {
      transform: translateX(-100%);
      background-color: var(--primary-purple);
    }
  }
  animation: slideLeft 0.7s;
  animation-delay: 2s;
`;
const RightSide = styled.div`
  flex: 1;
  @keyframes slideRight {
    0% {
      background-color: var(--primary-purple);
    }
    100% {
      transform: translateX(100%);
      background-color: var(--primary-purple);
    }
  }
  animation: slideRight 0.7s;
  animation-delay: 2s;
`;

const BouncingBallWrap = styled.div``;

const CenterBall = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle at 100px 100px, red, #fff);
  border-radius: 50px;
  top: 260px;
  left: calc(50% - 20px);

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @keyframes bouncing {
    0% {
      top: 260px;
    }

    50% {
      top: 280px;
    }

    100% {
      top: 260px;
    }
  }

  animation: bouncing 1s infinite;
`;

const Ellipse = styled.div`
  position: absolute;
  width: 40px;
  height: 5px;
  background: linear-gradient(#fff, #c4c4c4);
  border-radius: 50%;
  top: 320px;
  left: calc(50% - 20px);

  @media (min-width: 1024px) {
    width: 80px;
    top: 360px;
  }
`;

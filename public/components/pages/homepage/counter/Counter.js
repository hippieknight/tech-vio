import styled from "@emotion/styled";
import CountUp from "react-countup";
import { IsElementInViewport } from "../../../../utils/CheckElementInViewport";
import { useEffect, useState } from "react";

function CounterContent({ name, maxCount, hasPlus, suffix }) {
  return (
    <Wrap>
      <Count>
        <CountUp end={maxCount} duration={3} />
        {`${suffix ? suffix : ""}${hasPlus ? "+" : ""}`}
      </Count>
      <Name>{name}</Name>
    </Wrap>
  );
}

const Counter = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const section = document.getElementById("counter");

    const TriggerAnimation = () => {
      if (IsElementInViewport(section)) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", TriggerAnimation);

    return () => {
      window.removeEventListener("scroll", TriggerAnimation);
    };
  }, []);

  return (
    <Wrapper>
      <CounterWrap id="counter">
        {show && (
          <>
            <CounterContent
              name="Years Helping Business"
              maxCount={27}
              hasPlus
            />
            <CounterContent name="Complete Projects" maxCount={30} suffix="M" />
            <CounterContent name="Employees" maxCount={500} hasPlus />
            <CounterContent
              name="Star Rating"
              maxCount={90}
              hasPlus
              suffix="K"
            />
          </>
        )}
      </CounterWrap>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  position: relative;
  background: url("./img/counter/banner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;
  color: var(--white);

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    background: #03030c;
  }
`;
const CounterWrap = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px;
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Count = styled.div`
  color: #fff;
  font-size: 45px;
  font-weight: 700;
  word-spacing: -10px;
`;
const Name = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

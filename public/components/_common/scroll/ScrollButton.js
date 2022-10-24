import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <Wrap onClick={scrollToTop} className={`${visible ? "visible" : "hide"}`}>
      <AiOutlineArrowUp />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 32px;
  height: 32px;
  right: 16px;
  top: 16px;
  border-radius: 50px;
  background-color: var(--primary-purple);
  z-index: 9999;

  &.visible {
    transition: transform 2s;
    transform: translateY(90vh);
  }

  &.hide {
    transition: transform 2s;
    transform: translateY(-90vh);
  }

  svg {
    color: var(--white);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    right: 32px;
  }
`;

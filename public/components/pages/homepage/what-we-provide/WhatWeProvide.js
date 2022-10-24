import { useEffect } from "react";
import styled from "@emotion/styled";
import { AiOutlineSolution } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GiMeshNetwork } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FcDataRecovery } from "react-icons/fc";
import ProvideCard from "../../../_common/card/ProvideCard";
import { IsElementInViewport } from "../../../../utils/CheckElementInViewport";

const WhatWeProvide = () => {
  useEffect(() => {
    const section = document.getElementById("what-we-provide");

    const TriggerAnimation = () => {
      if (IsElementInViewport(section)) {
        section.classList.add("animation-slideUp");
      }
    };

    const RemoveAnimation = () => {
      section.classList.remove("animation-slideUp");
    };
    window.addEventListener("scroll", TriggerAnimation);

    return () => {
      window.removeEventListener("scroll", RemoveAnimation);
    };
  }, []);

  return (
    <Wrapper>
      <SectionWrap id="what-we-provide">
        <Title>What We Provide</Title>
        <SubTitle>IT Solutions</SubTitle>
        <ContentWrap>
          {what_we_provide.map((item) => (
            <ProvideCard key={item.id} {...item} />
          ))}
        </ContentWrap>
      </SectionWrap>
    </Wrapper>
  );
};

export default WhatWeProvide;

const what_we_provide = [
  {
    id: 1,
    name: "IT Solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    icon: <AiOutlineSolution />,
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    icon: <CgWebsite />,
  },
  {
    id: 3,
    name: "Networking Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    icon: <GiMeshNetwork />,
  },
  {
    id: 4,
    name: "SEO Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    icon: <FaLaptopCode />,
  },
  {
    id: 5,
    name: "App Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    icon: <GrOptimize />,
  },
  {
    id: 6,
    name: "Data Recovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
    icon: <FcDataRecovery />,
  },
];

const Wrapper = styled.div`
  background-color: var(--white);
  color: var(--black);
`;
const SectionWrap = styled.div`
  padding: 60px 16px;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 60px 32px;
  }
  @media (min-width: 1024px) {
    padding: 80px 60px;
  }
`;

const ContentWrap = styled.div`
  display: grid;
  gap: 24px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--orange);
  text-align: center;
  margin-bottom: 8px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;
const SubTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    font-size: 52px;
    margin-bottom: 80px;
  }
`;
